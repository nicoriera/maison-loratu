import { computed, ref } from 'vue'
import { RESALIB_PLACEHOLDER_URL, sanitizeReservationUrl, siteConfig } from './site.js'

const runtimeReservationUrl = ref(siteConfig.reservationUrl)
const runtimeReservationConfigured = ref(siteConfig.reservationConfigured)
let contentLoadPromise

export const useReservationConfig = () => ({
  reservationUrl: computed(() => runtimeReservationUrl.value),
  reservationConfigured: computed(() => runtimeReservationConfigured.value),
})

export const loadReservationConfig = async () => {
  if (contentLoadPromise) return contentLoadPromise

  if (import.meta.env.DEV && import.meta.env.VITE_ENABLE_PUBLIC_CONTENT !== 'true') {
    return
  }

  contentLoadPromise = fetch('/api/content', {
    headers: { Accept: 'application/json' },
  })
    .then(async (response) => {
      if (!response.ok) return

      const content = await response.json()
      const adminReservationUrl = sanitizeReservationUrl(content.public?.reservationUrl)

      if (adminReservationUrl) {
        runtimeReservationUrl.value = adminReservationUrl
        runtimeReservationConfigured.value = true
        return
      }

      if (!siteConfig.reservationConfigured) {
        runtimeReservationUrl.value = RESALIB_PLACEHOLDER_URL
        runtimeReservationConfigured.value = false
      }
    })
    .catch(() => undefined)

  return contentLoadPromise
}
