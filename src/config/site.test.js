import test from 'node:test'
import assert from 'node:assert/strict'

import { canAccessPrototypeRoute, isAdminPreviewEnabled } from './site.js'

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
