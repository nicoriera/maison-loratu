import test from 'node:test'
import assert from 'node:assert/strict'

import { buildRouteHead, createFaqSchema, createLocalBusinessSchema } from './seo.js'

const findMeta = (head, key) => head.meta.find((meta) => meta.name === key || meta.property === key)?.content

test('buildRouteHead renders absolute canonical and social image for indexable routes', () => {
  const head = buildRouteHead({ name: 'ateliers', path: '/ateliers' })

  assert.equal(head.title, 'Ateliers de sophrologie à Anglet | Maison Loratu')
  assert.equal(head.link[0].href, 'https://maisonloratu.com/ateliers')
  assert.equal(findMeta(head, 'robots'), 'index, follow')
  assert.equal(findMeta(head, 'og:image'), 'https://maisonloratu.com/images/og-maison-loratu.jpg')
  assert.equal(head.script.length, 1)
})

test('buildRouteHead hides noindex routes and drops the business schema', () => {
  const head = buildRouteHead({ name: 'administration', path: '/administration' })

  assert.equal(findMeta(head, 'robots'), 'noindex, nofollow')
  assert.deepEqual(head.script, [])
})

test('createLocalBusinessSchema exposes contact details and priced offers', () => {
  const schema = createLocalBusinessSchema()

  assert.equal(schema.telephone, '+33666883302')
  assert.equal(schema.address.postalCode, '64100')
  assert.ok(schema.makesOffer.every((offer) => offer.priceCurrency === 'EUR' && Number(offer.price) > 0))
})

test('createFaqSchema maps visible questions to FAQPage entries', () => {
  const schema = createFaqSchema([{ question: 'Q ?', answer: 'R.' }])

  assert.equal(schema['@type'], 'FAQPage')
  assert.deepEqual(schema.mainEntity[0], {
    '@type': 'Question',
    name: 'Q ?',
    acceptedAnswer: { '@type': 'Answer', text: 'R.' },
  })
})
