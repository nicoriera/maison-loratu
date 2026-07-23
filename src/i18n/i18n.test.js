import test from 'node:test'
import assert from 'node:assert/strict'
import {
  DEFAULT_LOCALE,
  i18n,
  isSupportedLocale,
  setLocale,
  SUPPORTED_LOCALES,
} from './index.js'

test('exposes the supported Maison Loratu locales', () => {
  assert.deepEqual(
    SUPPORTED_LOCALES.map((locale) => locale.code),
    ['fr', 'en', 'es'],
  )
  assert.equal(DEFAULT_LOCALE, 'fr')
  assert.equal(isSupportedLocale('fr'), true)
  assert.equal(isSupportedLocale('de'), false)
})

test('switches locale and falls back to French for unsupported values', () => {
  assert.equal(setLocale('en'), 'en')
  assert.equal(i18n.global.locale.value, 'en')

  assert.equal(setLocale('de'), 'fr')
  assert.equal(i18n.global.locale.value, 'fr')
})
