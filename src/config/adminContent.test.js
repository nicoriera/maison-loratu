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
  validateArticleDraft,
  validateAdminContent,
  validateFaqItemsDraft,
  validateOffersDraft,
  validatePublicContentDraft,
} from './adminContent.js'

test('create admin draft factories returns lightweight local defaults', () => {
  assert.deepEqual(createInitialPublicDraft(), {
    reservationUrl: '',
    location: '',
    email: '',
    phone: '',
    atelierDuMoment: {
      enabled: true,
      label: 'En ce moment',
      title: 'Ateliers collectifs & duos',
      summary: '1 h 30 · 8 participantes maximum · 38 € — Une bulle de douceur pour ralentir, respirer et repartir avec des outils simples.',
      ctaLabel: 'Voir les ateliers',
      ctaHref: '/ateliers',
    },
  })
  assert.equal(createInitialOffersDraft().length, 3)
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
    reservationUrl: ' https://www.resalib.fr/praticien/maison-loratu ',
    location: ' Cabinet Loratu - Nantes ',
    email: ' contact@maison-loratu.fr ',
    phone: '06 12 34 56 78 ',
  })

  assert.deepEqual(result, {
    sanitizedDraft: {
      reservationUrl: 'https://www.resalib.fr/praticien/maison-loratu',
      location: 'Cabinet Loratu - Nantes',
      email: 'contact@maison-loratu.fr',
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
    sanitizedReservationUrl: 'https://www.resalib.fr/praticien/maison-loratu',
    issues: [],
  })
})

test('validatePublicContentDraft flags malformed or sensitive public content', () => {
  const { issues, sanitizedReservationUrl } = validatePublicContentDraft({
    reservationUrl: 'https://evil.example.com',
    location: 'mot de passe: 1234',
    email: 'contact-public',
    phone: 'appelez-moi sur slack',
  })

  assert.equal(sanitizedReservationUrl, '')
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
