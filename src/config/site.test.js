import test from 'node:test'
import assert from 'node:assert/strict'

import {
  canAccessPrototypeRoute,
  createSiteConfig,
  isAdminPreviewEnabled,
  sanitizeReservationUrl,
  validateAdminDraft,
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
    reservationUrl: '',
    isAdminPreviewEnabled: false,
  })
})

test('isAdminPreviewEnabled activates only for explicit preview contexts', () => {
  assert.equal(isAdminPreviewEnabled({ DEV: true }), true)
  assert.equal(isAdminPreviewEnabled({ DEV: false, MODE: 'staging', VITE_ENABLE_ADMIN_PREVIEW: 'true' }), true)
  assert.equal(isAdminPreviewEnabled({ DEV: false, PROD: true, VITE_ENABLE_ADMIN_PREVIEW: 'true' }), false)
  assert.equal(isAdminPreviewEnabled({ DEV: false, VITE_ENABLE_ADMIN_PREVIEW: 'false' }), false)
})

test('validateAdminDraft trims safe public fields without raising issues', () => {
  const result = validateAdminDraft({
    location: ' Cabinet Loratu - Nantes ',
    email: ' contact@maison-loratu.fr ',
    phone: '06 12 34 56 78 ',
  })

  assert.deepEqual(result, {
    sanitizedDraft: {
      reservationUrl: '',
      location: 'Cabinet Loratu - Nantes',
      email: 'contact@maison-loratu.fr',
      phone: '06 12 34 56 78',
    },
    issues: [],
  })
})

test('validateAdminDraft flags malformed or sensitive admin draft content', () => {
  const { issues } = validateAdminDraft({
    location: 'mot de passe: 1234',
    email: 'contact-public',
    phone: 'appelez-moi sur slack',
  })

  assert.deepEqual(issues, [
    'L’email doit être une adresse de contact publique valide.',
    'Le téléphone doit rester un numéro de contact public valide.',
    'Supprimez tout secret, mot de passe ou donnée sensible du brouillon.',
  ])
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
