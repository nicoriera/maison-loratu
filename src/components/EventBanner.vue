<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isVisible = ref(true)
const isScrolled = ref(false)
const eventExpiresAt = new Date('2026-10-29T00:00:00+02:00')

const openEventPopup = () => {
  window.dispatchEvent(new CustomEvent('open-event-popup'))
}

const dismissBanner = () => {
  isVisible.value = false
}

const event = {
  label: 'Événement à venir',
  title: 'Atelier relaxation ludique · 5–8 ans',
  details: '26 et 28 octobre 2026 · 15 h–16 h 30 · 30 € · goûter inclus',
  location: 'Parc du Maharin, Anglet',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Parc+du+Maharin+64600+Anglet',
  illustration: '/images/pop-up.png',
}

const updateScrollState = () => { isScrolled.value = window.scrollY > 24 }

onMounted(() => {
  isVisible.value = new Date() < eventExpiresAt
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
})

onBeforeUnmount(() => window.removeEventListener('scroll', updateScrollState))

</script>

<template>
  <aside v-if="isVisible" class="border-b border-terracotta-200 bg-terracotta-50 px-4 py-3 transition-[padding] duration-[var(--duration-ui)] ease-[var(--ease-warm-out)]" :class="{ 'lg:py-1': isScrolled }" aria-label="Événement à venir">
    <div class="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6" :class="{ 'lg:gap-4': isScrolled }">
      <div class="flex min-w-0 items-start gap-3 sm:gap-4">
        <div
          class="mt-0.5 h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-cream-100 transition-[width,height] duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] sm:h-20 sm:w-20"
          :class="{ 'lg:h-10 lg:w-10 lg:rounded-xl': isScrolled }">
          <img
            :src="event.illustration"
            alt="Deux enfants déguisés pour l’atelier"
            class="h-full w-full scale-[2.1] object-cover object-[center_37%]" />
        </div>
        <div class="min-w-0">
          <p class="text-service-label text-terracotta-600" :class="{ 'lg:hidden': isScrolled }">{{ event.label }}</p>
          <p class="mt-1 text-sm leading-relaxed text-terracotta-900 sm:text-base" :class="{ 'lg:mt-0 lg:leading-snug': isScrolled }">
            <strong>{{ event.title }}</strong>
            <span class="hidden sm:inline" :class="{ 'lg:hidden': isScrolled }"> · </span>
            <span class="block sm:inline" :class="{ 'lg:hidden': isScrolled }">{{ event.details }} · </span>
            <a :href="event.mapsUrl" target="_blank" rel="noopener noreferrer" class="font-semibold underline decoration-terracotta-300 underline-offset-2 hover:text-terracotta-700" :class="{ 'lg:hidden': isScrolled }">{{ event.location }}</a>
            <span class="hidden text-terracotta-700 lg:inline" :class="{ '!hidden': !isScrolled }"> · 26 &amp; 28 oct.</span>
          </p>
        </div>
      </div>
      <div class="flex shrink-0 items-center gap-2">
        <button
          type="button"
          class="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-terracotta-300 bg-transparent px-5 py-2.5 text-center text-sm font-semibold text-terracotta-700 transition hover:bg-cream-50 hover:text-terracotta-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 sm:text-base"
          :class="{ 'lg:px-4 lg:py-2 lg:text-sm': isScrolled }"
          @click="openEventPopup"
        >
          {{ isScrolled ? 'Infos' : 'Plus d’infos' }}
        </button>
        <button
          type="button"
          class="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-2xl leading-none text-terracotta-800 transition hover:bg-terracotta-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
          aria-label="Fermer le bandeau événement"
          @click="dismissBanner"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
    </div>
  </aside>
</template>
