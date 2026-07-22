const RESALIB_HOSTNAME_PATTERN = /(^|\.)resalib\.fr$/i

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
  instagramUrl: 'https://www.instagram.com/maison__loratu/',
  isAdminPreviewEnabled: isAdminPreviewEnabled(env),
})

export const siteConfig = Object.freeze(createSiteConfig())
