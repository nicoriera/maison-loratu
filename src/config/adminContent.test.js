import test from 'node:test'
import assert from 'node:assert/strict'

import {
  buildArticlePreview,
  createEmptyArticleDraft,
  createInitialFaqDraft,
  createInitialAdminContent,
  createInitialOffersDraft,
  createInitialPublicDraft,
  formatArticleDate,
  migrateLegacyContent,
  validateArticleDraft,
  validateAdminContent,
  validateFaqItemsDraft,
  validateOffersDraft,
  validatePublicContentDraft,
} from './adminContent.js'

test('create admin draft factories returns lightweight local defaults', () => {
  assert.deepEqual(createInitialPublicDraft(), {
    location: '',
    email: '',
    phone: '',
    atelierDuMoment: {
      enabled: true,
      label: 'En ce moment',
      title: 'Atelier & sophrologie',
      summary: '45 min · 30 € par personne · groupe de 4 enfants maximum.',
      ctaLabel: 'Voir les ateliers',
      ctaHref: '/ateliers',
    },
  })
  assert.equal(createInitialOffersDraft().length, 4)
  assert.equal(createInitialFaqDraft().length, 3)
  assert.deepEqual(createEmptyArticleDraft(), {
    title: '',
    category: 'Actualité',
    excerpt: '',
    body: '',
    publishedAt: '',
    status: 'draft',
  })
})

test('validatePublicContentDraft trims safe public fields without raising issues', () => {
  const result = validatePublicContentDraft({
    location: ' Cabinet Loratu - Nantes ',
    email: ' contact@maisonloratu.com ',
    phone: '06 12 34 56 78 ',
  })

  assert.deepEqual(result, {
    sanitizedDraft: {
      location: 'Cabinet Loratu - Nantes',
      email: 'contact@maisonloratu.com',
      phone: '06 12 34 56 78',
      atelierDuMoment: {
        enabled: false,
        label: '',
        title: '',
        summary: '',
        ctaLabel: '',
        ctaHref: '',
      },
    },
    issues: [],
  })
})

test('validatePublicContentDraft flags malformed or sensitive public content', () => {
  const { issues } = validatePublicContentDraft({
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

test('validateOffersDraft and validateFaqItemsDraft keep editorial content public', () => {
  assert.equal(validateOffersDraft(createInitialOffersDraft()).issues.length, 0)
  assert.equal(validateFaqItemsDraft(createInitialFaqDraft()).issues.length, 0)

  assert.deepEqual(
    validateOffersDraft([{ id: 'x', title: 'Offre', audience: '', summary: 'secret token' }]).issues,
    [
      'Offre 1 : complétez le titre, le public et le résumé.',
      'Offre 1 : retirez toute information sensible ou interne.',
    ],
  )

  assert.deepEqual(
    validateFaqItemsDraft([{ id: 'x', question: 'Mot de passe ?', answer: '1234' }]).issues,
    ['FAQ 1 : retirez toute information sensible ou confidentielle.'],
  )
})

test('migrateLegacyContent updates only known legacy workshop and FAQ copy', () => {
  const migrated = migrateLegacyContent({
    offers: [
      {
        id: 'offer-duo',
        title: 'Atelier Duo — sérénité, partage',
        audience: '1 h 15 · 49 € pour 2 personnes',
        summary: 'Ancien résumé',
      },
      { id: 'custom-offer', title: 'Offre personnalisée', audience: 'Sur mesure', summary: 'À conserver' },
    ],
    faq: [
      { id: 'duo', question: 'Avec qui peut-on participer à l’Atelier Duo ?', answer: 'Ancienne réponse' },
      { id: 'custom', question: 'Question personnalisée', answer: 'Réponse personnalisée' },
    ],
  })

  assert.deepEqual(migrated.offers[0], {
    id: 'offer-duo',
    title: 'DUO Mama & enfant',
    audience: 'Atelier privé · 1 h 15 · 60 € · Disponible en carte cadeau',
    summary: 'Un atelier privé pour une mama et son enfant, pour partager un moment à deux.',
  })
  assert.deepEqual(migrated.offers[1], { id: 'custom-offer', title: 'Offre personnalisée', audience: 'Sur mesure', summary: 'À conserver' })
  assert.deepEqual(migrated.faq[0], {
    id: 'duo',
    question: 'Avec qui peut-on participer au DUO Mama & enfant ?',
    answer: 'Le DUO Mama & enfant est un atelier privé pour une mama et son enfant. Il invite à ralentir ensemble, partager un moment privilégié et créer des souvenirs dans une ambiance ludique et relaxante.',
  })
  assert.deepEqual(migrated.faq[1], { id: 'custom', question: 'Question personnalisée', answer: 'Réponse personnalisée' })
})

test('validateArticleDraft accepts a safe article draft', () => {
  const result = validateArticleDraft({
    title: 'Atelier parents-enfants de rentrée',
    category: 'Actualité',
    excerpt: 'Un rendez-vous doux pour découvrir les ateliers du trimestre.',
    body: 'Nous ouvrons un nouveau cycle d’ateliers collectifs pour les familles.\n\nChaque séance propose un temps simple pour respirer, bouger et se recentrer ensemble.',
    publishedAt: '2026-09-15',
    status: 'review',
  })

  assert.equal(result.issues.length, 0)
  assert.equal(result.sanitizedDraft.status, 'review')
})

test('validateArticleDraft rejects manifestly sensitive article content', () => {
  const { issues } = validateArticleDraft({
    title: 'Confidentiel patient',
    category: 'Actualité',
    excerpt: 'Note interne',
    body: 'Dossier patient, date de naissance et numéro de sécurité sociale à compléter.',
    publishedAt: '2026-09-31',
    status: 'published',
  })

  assert.deepEqual(issues, [
    'Ajoutez un chapô court pour résumer l’article.',
    'Le contenu doit contenir au moins 80 caractères lisibles.',
    'La date de publication doit être une date valide.',
    'Le brouillon contient une information manifestement sensible ou confidentielle.',
  ])
})

test('buildArticlePreview exposes a readable local preview', () => {
  const preview = buildArticlePreview({
    title: 'Portes ouvertes de septembre',
    excerpt: 'Rencontrer Maison Loratu en format découverte.',
    body: 'Premier paragraphe.\n\nSecond paragraphe.',
    publishedAt: '2026-09-10',
    status: 'published',
  })

  assert.deepEqual(preview.paragraphs, ['Premier paragraphe.', 'Second paragraphe.'])
  assert.equal(preview.publishedLabel, '10 septembre 2026')
  assert.equal(preview.statusLabel, 'Publié')
})

test('formatArticleDate falls back for invalid dates', () => {
  assert.equal(formatArticleDate(''), 'Date à confirmer')
  assert.equal(formatArticleDate('2026-02-30'), 'Date à confirmer')
})

test('validateAdminContent returns a server-safe content bundle', () => {
  const result = validateAdminContent(createInitialAdminContent())
  assert.equal(result.issues.length, 0)
  assert.deepEqual(Object.keys(result.sanitizedContent), ['public', 'offers', 'faq', 'articles'])
})
