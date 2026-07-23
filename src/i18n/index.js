import { createI18n } from 'vue-i18n'
import frenchMessages from './locales/fr.js'
import englishMessages from './locales/en.js'
import spanishMessages from './locales/es.js'

export const DEFAULT_LOCALE = 'fr'
export const LOCALE_STORAGE_KEY = 'maison-loratu-locale'
export const SUPPORTED_LOCALES = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
]

const messages = {
  fr: frenchMessages,
  en: englishMessages,
  es: spanishMessages,
}

export const isSupportedLocale = (locale) =>
  SUPPORTED_LOCALES.some((option) => option.code === locale)

const readStoredLocale = () => {
  if (typeof window === 'undefined') return null

  try {
    return window.localStorage.getItem(LOCALE_STORAGE_KEY)
  } catch {
    return null
  }
}

const resolveInitialLocale = () => {
  const storedLocale = readStoredLocale()
  return isSupportedLocale(storedLocale) ? storedLocale : DEFAULT_LOCALE
}

export const i18n = createI18n({
  legacy: false,
  locale: resolveInitialLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages,
  missingWarn: false,
  fallbackWarn: false,
})

export const setLocale = (locale) => {
  const nextLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE
  i18n.global.locale.value = nextLocale

  if (typeof document !== 'undefined') {
    document.documentElement.lang = nextLocale
  }

  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale)
    } catch {
      // The language remains active even when storage is unavailable.
    }
  }

  return nextLocale
}

export const initializeLocale = () => setLocale(i18n.global.locale.value)
