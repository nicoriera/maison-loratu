<script setup>
import { useRoute } from 'vue-router'
import { siteConfig } from '../config/site.js'
import UiIcon from './UiIcon.vue'

const route = useRoute()
const navigation = [
  { label: 'Accueil', shortLabel: 'Accueil', to: '/', activeRoute: 'home', icon: 'home' },
  { label: 'Ateliers', shortLabel: 'Ateliers', to: '/ateliers', activeRoute: 'ateliers', icon: 'workshops' },
  { label: 'Accompagnement individuel', shortLabel: 'Individuel', to: '/accompagnement', activeRoute: 'accompagnement', icon: 'accompagnement' },
]

const reservationTarget = siteConfig.reservationUrl || '/ateliers'

const isActive = (item) => route.name === item.activeRoute && !route.hash
</script>

<template>
  <nav class="mobile-navigation fixed inset-x-0 bottom-0 z-50 border-t border-terracotta-100 bg-white/95 px-2 pt-2 shadow-[0_-8px_24px_rgba(74,44,33,0.08)] backdrop-blur lg:hidden" aria-label="Navigation mobile">
    <div class="mx-auto grid max-w-xl grid-cols-4 gap-1">
      <router-link
        v-for="item in navigation"
        :key="item.label"
        :to="item.to"
        :aria-label="item.label"
        class="flex min-h-12 flex-col items-center justify-center rounded-xl px-1 py-2 text-center text-xs font-semibold leading-tight text-gray-700 transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-cream-100 hover:text-terracotta-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
        :class="{ 'bg-cream-100 text-terracotta-700': isActive(item) }"
        :aria-current="isActive(item) ? 'page' : undefined"
      >
        <span class="mb-1 leading-none" aria-hidden="true">
          <UiIcon :name="item.icon" :size="22" />
        </span>
        <span :aria-label="item.label">{{ item.shortLabel }}</span>
      </router-link>

      <a
        v-if="siteConfig.reservationUrl"
        :href="reservationTarget"
        target="_blank"
        rel="noopener noreferrer"
        class="flex min-h-12 flex-col items-center justify-center rounded-xl bg-terracotta-500 px-1 py-2 text-center text-xs font-semibold leading-tight text-white transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
        aria-label="Réserver un atelier, nouvel onglet"
      >
        <span class="mb-1 leading-none" aria-hidden="true"><UiIcon name="reserve" :size="22" /></span>
        <span>Réserver</span>
      </a>
      <router-link
        v-else
        to="/ateliers"
        class="flex min-h-12 flex-col items-center justify-center rounded-xl bg-terracotta-500 px-1 py-2 text-center text-xs font-semibold leading-tight text-white transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
      >
        <span class="mb-1 leading-none" aria-hidden="true"><UiIcon name="reserve" :size="22" /></span>
        <span>Réserver</span>
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
.mobile-navigation {
  padding-bottom: max(0.5rem, env(safe-area-inset-bottom));
}
</style>
