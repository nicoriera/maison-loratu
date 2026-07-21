const RESALIB_HOSTNAME_PATTERN = /(^|\.)resalib\.fr$/i
const PUBLIC_EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PUBLIC_PHONE_PATTERN = /^[+()\d\s.-]{6,20}$/
const SENSITIVE_CONTENT_PATTERN =
  /\b(password|mot de passe|secret|token|api[- _]?key|clé api|private key|clé privée|iban|carte bancaire|cvv|crypto|seed phrase)\b/i

export const sanitizeReservationUrl = (value) => {
  if (typeof value !== 'string') {
    return ''
  }

  const trimmedValue = value.trim()

  if (!trimmedValue) {
    return ''
  }

  try {
    const parsedUrl = new URL(trimmedValue)

    if (parsedUrl.protocol !== 'https:' || !RESALIB_HOSTNAME_PATTERN.test(parsedUrl.hostname)) {
      return ''
    }

    if (parsedUrl.username || parsedUrl.password) {
      return ''
    }

    return parsedUrl.toString()
  } catch {
    return ''
  }
}

export const validateAdminDraft = (draft = {}) => {
  const sanitizedDraft = {
    reservationUrl: typeof draft.reservationUrl === 'string' ? draft.reservationUrl.trim() : '',
    location: typeof draft.location === 'string' ? draft.location.trim() : '',
    email: typeof draft.email === 'string' ? draft.email.trim() : '',
    phone: typeof draft.phone === 'string' ? draft.phone.trim() : '',
  }
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

  const fieldsToInspect = [sanitizedDraft.location, sanitizedDraft.email, sanitizedDraft.phone]

  if (fieldsToInspect.some((value) => SENSITIVE_CONTENT_PATTERN.test(value))) {
    issues.push('Supprimez tout secret, mot de passe ou donnée sensible du brouillon.')
  }

  return {
    sanitizedDraft,
    issues,
  }
}

export const isAdminPreviewEnabled = (env = import.meta.env ?? process.env) => {
  if (!env) {
    return false
  }

  const isProductionBuild =
    env.PROD === true ||
    env.PROD === 'true' ||
    env.MODE === 'production'

  if (isProductionBuild) {
    return false
  }

  return (
    env.DEV === true ||
    env.DEV === 'true' ||
    env.MODE === 'development' ||
    env.VITE_ENABLE_ADMIN_PREVIEW === 'true'
  )
}

export const canAccessPrototypeRoute = (meta = {}, config = siteConfig) => {
  return !meta?.prototypeOnly || config.isAdminPreviewEnabled
}

export const createSiteConfig = (env = import.meta.env ?? process.env) => ({
  reservationUrl: sanitizeReservationUrl(env?.VITE_RESALIB_URL ?? ''),
  isAdminPreviewEnabled: isAdminPreviewEnabled(env),
})

export const siteConfig = Object.freeze(createSiteConfig())
