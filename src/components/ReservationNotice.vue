<script setup>
import { ref } from 'vue'

const DISMISSAL_KEY = 'maison-loratu-reservation-notice-dismissed'

const hasBeenDismissed = () => {
  try {
    return window.localStorage.getItem(DISMISSAL_KEY) === 'true'
  } catch {
    return false
  }
}

const isVisible = ref(!hasBeenDismissed())

const dismiss = () => {
  isVisible.value = false

  try {
    window.localStorage.setItem(DISMISSAL_KEY, 'true')
  } catch {
    // Le bandeau reste fermé pendant cette visite si le stockage est indisponible.
  }
}
</script>

<template>
  <aside
    v-if="isVisible"
    class="border-b border-terracotta-100 bg-cream-100 px-4 py-3"
    aria-label="Information sur l’ouverture des réservations"
  >
    <div class="container mx-auto flex max-w-5xl items-center justify-center gap-3 sm:gap-4">
      <p class="text-center text-sm leading-relaxed text-gray-700 sm:text-base">
        Les réservations arrivent bientôt.
        <router-link
          to="/reservation"
          class="ml-1 inline-flex min-h-11 items-center font-semibold text-terracotta-700 underline decoration-terracotta-300 underline-offset-4 transition hover:text-terracotta-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
        >
          M’alerter
        </router-link>
      </p>
      <button
        type="button"
        class="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full text-terracotta-700 transition hover:bg-terracotta-100 hover:text-terracotta-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
        aria-label="Fermer l’information sur les réservations"
        @click="dismiss"
      >
        <span class="text-2xl leading-none" aria-hidden="true">×</span>
      </button>
    </div>
  </aside>
</template>
