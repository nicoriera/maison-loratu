import { sanitizeReservationUrl } from './site.js'

const PUBLIC_EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PUBLIC_PHONE_PATTERN = /^[+()\d\s.-]{6,20}$/
const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/
const SENSITIVE_CONTENT_PATTERN =
  /\b(password|mot de passe|secret|token|api[- _]?key|clé api|private key|clé privée|iban|bic|carte bancaire|cb|cvv|cryptogramme|seed phrase|phrase de récupération|numéro de sécurité sociale|numéro de secu|n° de sécu|date de naissance|dossier patient|code d'accès|interphone|confidentiel)\b/i
const CARD_NUMBER_PATTERN = /\b(?:\d[ -]*?){13,19}\b/

export const ADMIN_TABS = Object.freeze([
  { id: 'public', label: 'Paramètres publics' },
  { id: 'offers', label: 'Offres' },
  { id: 'faq', label: 'FAQ' },
  { id: 'articles', label: 'Articles & actualités' },
])

export const ARTICLE_STATUS_OPTIONS = Object.freeze([
  { value: 'draft', label: 'Brouillon' },
  { value: 'review', label: 'Prêt à relire' },
  { value: 'published', label: 'Publié' },
])

const trimText = (value) => (typeof value === 'string' ? value.trim() : '')

const sanitizeInternalOrReservationUrl = (value) => {
  const href = trimText(value)
  if (href.startsWith('/')) return href
  return sanitizeReservationUrl(href)
}

const normalizeMultilineText = (value) => {
  if (typeof value !== 'string') {
    return ''
  }

  return value
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

const collectSensitiveContentIssues = (values, message) => {
  const hasSensitiveText = values.some((value) => SENSITIVE_CONTENT_PATTERN.test(value) || CARD_NUMBER_PATTERN.test(value))
  return hasSensitiveText ? [message] : []
}

const isValidIsoDate = (value) => {
  if (!ISO_DATE_PATTERN.test(value)) {
    return false
  }

  const [year, month, day] = value.split('-').map(Number)
  const date = new Date(Date.UTC(year, month - 1, day))

  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  )
}

export const createInitialPublicDraft = () => ({
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

export const createInitialOffersDraft = () => ([
  {
    id: 'offer-collective',
    title: 'Ateliers collectifs & duos',
    audience: '1 h 30 · 8 participantes · 38 €',
    summary: 'Respiration, relaxation et visualisation positive dans une ambiance conviviale.',
  },
  {
    id: 'offer-outdoor',
    title: 'Séances en plein air',
    audience: '45 min · 8 participantes · 15 €',
    summary: 'Marcher, respirer, ressentir et se reconnecter à l’instant présent.',
  },
  {
    id: 'offer-individual',
    title: 'Accompagnement individuel',
    audience: '1 h · 60 €',
    summary: 'Un accompagnement adapté au rythme, aux besoins et au parcours de chacun.',
  },
])

export const createInitialFaqDraft = () => ([
  {
    id: 'faq-reservation',
    question: 'Comment préparer une demande de réservation ?',
    answer: 'Indiquez le public concerné, le format souhaité et vos disponibilités générales.',
  },
  {
    id: 'faq-place',
    question: 'Les lieux sont-ils déjà confirmés ?',
    answer: 'Le lieu précis est confirmé au cas par cas. N’ajoutez pas de codes d’accès ni d’informations internes.',
  },
  {
    id: 'faq-workshops',
    question: 'Comment se déroulent les ateliers ?',
    answer: 'Les ateliers durent 1 h 30, en petit groupe et sans prérequis. Sandra guide des exercices de respiration, relaxation et visualisation.',
  },
])

export const createEmptyArticleDraft = () => ({
  title: '',
  category: 'Actualité',
  excerpt: '',
  body: '',
  publishedAt: '',
  status: 'draft',
})

export const sanitizePublicContentDraft = (draft = {}) => ({
  reservationUrl: trimText(draft.reservationUrl),
  location: trimText(draft.location),
  email: trimText(draft.email),
  phone: trimText(draft.phone),
  atelierDuMoment: {
    enabled: draft.atelierDuMoment?.enabled === true,
    label: trimText(draft.atelierDuMoment?.label),
    title: trimText(draft.atelierDuMoment?.title),
    summary: trimText(draft.atelierDuMoment?.summary),
    ctaLabel: trimText(draft.atelierDuMoment?.ctaLabel),
    ctaHref: sanitizeInternalOrReservationUrl(draft.atelierDuMoment?.ctaHref),
  },
})

export const validatePublicContentDraft = (draft = {}) => {
  const sanitizedDraft = sanitizePublicContentDraft(draft)
  const issues = []

  if (sanitizedDraft.location.length > 120) {
    issues.push('La localisation doit rester courte et limitée à une information publique.')
  }

  if (sanitizedDraft.email && !PUBLIC_EMAIL_PATTERN.test(sanitizedDraft.email)) {
    issues.push('L’email doit être une adresse de contact publique valide.')
  }

  if (sanitizedDraft.phone && !PUBLIC_PHONE_PATTERN.test(sanitizedDraft.phone)) {
    issues.push('Le téléphone doit rester un numéro de contact public valide.')
  }

  const featuredWorkshop = sanitizedDraft.atelierDuMoment
  if (featuredWorkshop.enabled) {
    if (!featuredWorkshop.label || !featuredWorkshop.title || !featuredWorkshop.summary || !featuredWorkshop.ctaLabel || !featuredWorkshop.ctaHref) {
      issues.push('L’atelier du moment doit comporter un libellé, un titre, un résumé et un lien valides.')
    }
    if (featuredWorkshop.label.length > 40 || featuredWorkshop.title.length > 80 || featuredWorkshop.summary.length > 220 || featuredWorkshop.ctaLabel.length > 30) {
      issues.push('L’atelier du moment doit rester court et lisible.')
    }
  }

  issues.push(
    ...collectSensitiveContentIssues(
      [sanitizedDraft.location, sanitizedDraft.email, sanitizedDraft.phone],
      'Supprimez tout secret, mot de passe ou donnée sensible du brouillon.',
    ),
    ...collectSensitiveContentIssues(
      Object.values(featuredWorkshop),
      'Supprimez toute information sensible ou confidentielle de l’atelier du moment.',
    ),
  )

  return {
    sanitizedDraft,
    sanitizedReservationUrl: sanitizeReservationUrl(sanitizedDraft.reservationUrl),
    issues,
  }
}

export const sanitizeOfferDraft = (offer = {}) => ({
  id: trimText(offer.id),
  title: trimText(offer.title),
  audience: trimText(offer.audience),
  summary: trimText(offer.summary),
})

export const validateOffersDraft = (offers = []) => {
  const sanitizedDraft = Array.isArray(offers) ? offers.map(sanitizeOfferDraft) : []
  const issues = []

  sanitizedDraft.forEach((offer, index) => {
    const prefix = `Offre ${index + 1}`

    if (!offer.title || !offer.audience || !offer.summary) {
      issues.push(`${prefix} : complétez le titre, le public et le résumé.`)
    }

    if (offer.title.length > 80 || offer.audience.length > 60 || offer.summary.length > 180) {
      issues.push(`${prefix} : gardez un format éditorial court et lisible.`)
    }

    issues.push(
      ...collectSensitiveContentIssues(
        [offer.title, offer.audience, offer.summary],
        `${prefix} : retirez toute information sensible ou interne.`,
      ),
    )
  })

  return { sanitizedDraft, issues }
}

export const sanitizeFaqItemDraft = (item = {}) => ({
  id: trimText(item.id),
  question: trimText(item.question),
  answer: trimText(item.answer),
})

export const validateFaqItemsDraft = (items = []) => {
  const sanitizedDraft = Array.isArray(items) ? items.map(sanitizeFaqItemDraft) : []
  const issues = []

  sanitizedDraft.forEach((item, index) => {
    const prefix = `FAQ ${index + 1}`

    if (!item.question || !item.answer) {
      issues.push(`${prefix} : renseignez une question et une réponse.`)
    }

    if (item.question.length > 120 || item.answer.length > 320) {
      issues.push(`${prefix} : gardez une formulation courte et publique.`)
    }

    issues.push(
      ...collectSensitiveContentIssues(
        [item.question, item.answer],
        `${prefix} : retirez toute information sensible ou confidentielle.`,
      ),
    )
  })

  return { sanitizedDraft, issues }
}

export const sanitizeArticleDraft = (draft = {}) => ({
  title: trimText(draft.title),
  category: trimText(draft.category) || 'Actualité',
  excerpt: trimText(draft.excerpt),
  body: normalizeMultilineText(draft.body),
  publishedAt: trimText(draft.publishedAt),
  status: ARTICLE_STATUS_OPTIONS.some((option) => option.value === draft.status) ? draft.status : 'draft',
})

export const validateArticleDraft = (draft = {}) => {
  const sanitizedDraft = sanitizeArticleDraft(draft)
  const issues = []

  if (sanitizedDraft.title.length < 8) {
    issues.push('Le titre doit comporter au moins 8 caractères.')
  }

  if (sanitizedDraft.title.length > 110) {
    issues.push('Le titre doit rester inférieur à 110 caractères.')
  }

  if (sanitizedDraft.category.length > 40) {
    issues.push('La rubrique doit rester courte.')
  }

  if (sanitizedDraft.excerpt.length < 16) {
    issues.push('Ajoutez un chapô court pour résumer l’article.')
  }

  if (sanitizedDraft.excerpt.length > 220) {
    issues.push('Le chapô doit rester inférieur à 220 caractères.')
  }

  if (sanitizedDraft.body.length < 80) {
    issues.push('Le contenu doit contenir au moins 80 caractères lisibles.')
  }

  if (sanitizedDraft.publishedAt && !isValidIsoDate(sanitizedDraft.publishedAt)) {
    issues.push('La date de publication doit être une date valide.')
  }

  if (sanitizedDraft.status === 'published' && !sanitizedDraft.publishedAt) {
    issues.push('Ajoutez une date avant de marquer un article comme publié.')
  }

  issues.push(
    ...collectSensitiveContentIssues(
      [sanitizedDraft.title, sanitizedDraft.category, sanitizedDraft.excerpt, sanitizedDraft.body],
      'Le brouillon contient une information manifestement sensible ou confidentielle.',
    ),
  )

  return { sanitizedDraft, issues }
}

export const formatArticleDate = (value) => {
  if (!value || !isValidIsoDate(value)) {
    return 'Date à confirmer'
  }

  const [year, month, day] = value.split('-').map(Number)
  const date = new Date(Date.UTC(year, month - 1, day))

  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date)
}

export const buildArticlePreview = (draft = {}) => {
  const sanitizedDraft = sanitizeArticleDraft(draft)
  const fallbackParagraph = 'Le brouillon apparaîtra ici dès que vous commencerez à rédiger.'
  const paragraphs = sanitizedDraft.body
    ? sanitizedDraft.body.split(/\n{2,}/).map((paragraph) => paragraph.trim()).filter(Boolean)
    : [fallbackParagraph]

  return {
    ...sanitizedDraft,
    title: sanitizedDraft.title || 'Titre de prévisualisation',
    category: sanitizedDraft.category || 'Actualité',
    excerpt: sanitizedDraft.excerpt || 'Ajoutez un chapô clair pour guider la relecture locale.',
    publishedLabel: formatArticleDate(sanitizedDraft.publishedAt),
    statusLabel:
      ARTICLE_STATUS_OPTIONS.find((option) => option.value === sanitizedDraft.status)?.label ?? 'Brouillon',
    paragraphs,
  }
}

export const createInitialAdminContent = () => ({
  public: createInitialPublicDraft(),
  offers: createInitialOffersDraft(),
  faq: createInitialFaqDraft(),
  articles: [],
})

export const validateAdminContent = (content = {}) => {
  const publicResult = validatePublicContentDraft(content.public)
  const offersResult = validateOffersDraft(content.offers)
  const faqResult = validateFaqItemsDraft(content.faq)
  const articleResults = Array.isArray(content.articles)
    ? content.articles.map((article) => validateArticleDraft(article))
    : [{ sanitizedDraft: {}, issues: ['Les articles doivent être une liste valide.'] }]
  const issues = [
    ...publicResult.issues,
    ...(publicResult.sanitizedDraft.reservationUrl && !publicResult.sanitizedReservationUrl
      ? ['Le lien de réservation doit utiliser https:// et pointer vers un domaine Resalib.']
      : []),
    ...offersResult.issues,
    ...faqResult.issues,
    ...articleResults.flatMap((result) => result.issues),
  ]

  return {
    sanitizedContent: {
      public: { ...publicResult.sanitizedDraft, reservationUrl: publicResult.sanitizedReservationUrl },
      offers: offersResult.sanitizedDraft,
      faq: faqResult.sanitizedDraft,
      articles: articleResults.map((result, index) => ({
        ...result.sanitizedDraft,
        id: typeof content.articles?.[index]?.id === 'string' ? content.articles[index].id : `article-${index + 1}`,
        updatedAt: typeof content.articles?.[index]?.updatedAt === 'string' ? content.articles[index].updatedAt : new Date().toISOString(),
      })),
    },
    issues,
  }
}
