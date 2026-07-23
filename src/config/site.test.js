import test from 'node:test'
import assert from 'node:assert/strict'

import {
  canAccessPrototypeRoute,
  createSiteConfig,
  isAdminPreviewEnabled,
  sanitizeReservationUrl,
} from './site.js'

test('sanitizeReservationUrl accepts secure Resalib URLs only', () => {
  assert.equal(
    sanitizeReservationUrl('https://www.resalib.fr/praticien/maison-loratu'),
    'https://www.resalib.fr/praticien/maison-loratu',
  )
  assert.equal(
    sanitizeReservationUrl('https://booking.resalib.fr/widget?id=42'),
    'https://booking.resalib.fr/widget?id=42',
  )
})

test('sanitizeReservationUrl rejects non-https or non-Resalib URLs', () => {
  assert.equal(sanitizeReservationUrl('http://www.resalib.fr/praticien/maison-loratu'), '')
  assert.equal(sanitizeReservationUrl('https://example.com/reservation'), '')
  assert.equal(sanitizeReservationUrl('javascript:alert(1)'), '')
  assert.equal(sanitizeReservationUrl('https://user:pass@www.resalib.fr/secure'), '')
})

test('createSiteConfig keeps invalid reservation URLs out of runtime config', () => {
  const config = createSiteConfig({
    DEV: false,
    VITE_ENABLE_ADMIN_PREVIEW: 'false',
    VITE_RESALIB_URL: 'https://evil.example.com/redirect',
  })

  assert.deepEqual(config, {
    siteUrl: 'https://maison-loratu.fr',
    siteName: 'Maison Loratu',
    primaryCity: 'Anglet',
    serviceArea: ['Anglet', 'Bayonne', 'Biarritz'],
    reservationUrl: 'https://www.resalib.fr/',
    reservationConfigured: false,
    instagramUrl: 'https://www.instagram.com/maison__loratu/',
    isAdminPreviewEnabled: false,
  })
})

test('createSiteConfig uses the Resalib homepage until an account URL is configured', () => {
  const config = createSiteConfig({
    DEV: false,
    VITE_ENABLE_ADMIN_PREVIEW: 'false',
  })

  assert.equal(config.reservationUrl, 'https://www.resalib.fr/')
  assert.equal(config.reservationConfigured, false)
})

test('createSiteConfig uses a valid Resalib account URL when configured', () => {
  const config = createSiteConfig({
    DEV: false,
    VITE_ENABLE_ADMIN_PREVIEW: 'false',
    VITE_RESALIB_URL: 'https://www.resalib.fr/praticien/maison-loratu',
  })

  assert.equal(config.reservationUrl, 'https://www.resalib.fr/praticien/maison-loratu')
  assert.equal(config.reservationConfigured, true)
})

test('isAdminPreviewEnabled activates only for explicit preview contexts', () => {
  assert.equal(isAdminPreviewEnabled({ DEV: true }), true)
  assert.equal(isAdminPreviewEnabled({ DEV: false, MODE: 'staging', VITE_ENABLE_ADMIN_PREVIEW: 'true' }), true)
  assert.equal(isAdminPreviewEnabled({ DEV: false, PROD: true, VITE_ENABLE_ADMIN_PREVIEW: 'true' }), false)
  assert.equal(isAdminPreviewEnabled({ DEV: false, VITE_ENABLE_ADMIN_PREVIEW: 'false' }), false)
})

test('canAccessPrototypeRoute blocks prototype-only routes when preview is disabled', () => {
  assert.equal(
    canAccessPrototypeRoute({ prototypeOnly: true }, { isAdminPreviewEnabled: false }),
    false,
  )
  assert.equal(
    canAccessPrototypeRoute({ prototypeOnly: true }, { isAdminPreviewEnabled: true }),
    true,
  )
  assert.equal(
    canAccessPrototypeRoute({ transition: 'page-slide-left' }, { isAdminPreviewEnabled: false }),
    true,
  )
})
