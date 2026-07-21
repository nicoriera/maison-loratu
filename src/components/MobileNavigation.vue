<script setup>
import { useRoute } from 'vue-router'
import { siteConfig } from '../config/site.js'

const route = useRoute()
const navigation = [
  { label: 'Accueil', shortLabel: 'Accueil', to: '/', activeRoute: 'home' },
  { label: 'Ateliers', shortLabel: 'Ateliers', to: '/ateliers', activeRoute: 'ateliers' },
  { label: 'Accompagnement', shortLabel: 'Accomp.', to: '/accompagnement', activeRoute: 'accompagnement' },
  { label: 'Contact', shortLabel: 'Contact', to: '/contact', activeRoute: 'contact' },
]

const reservationTarget = siteConfig.reservationUrl || '/ateliers'

const isActive = (item) => route.name === item.activeRoute && !route.hash
</script>

<template>
  <nav class="mobile-navigation fixed inset-x-0 bottom-0 z-50 border-t border-terracotta-100 bg-white/95 px-2 pt-2 shadow-[0_-8px_24px_rgba(74,44,33,0.08)] backdrop-blur lg:hidden" aria-label="Navigation mobile">
    <div class="mx-auto grid max-w-lg grid-cols-5 gap-1 pb-[env(safe-area-inset-bottom)]">
      <router-link
        v-for="item in navigation"
        :key="item.label"
        :to="item.to"
        class="flex min-h-14 flex-col items-center justify-center rounded-xl px-1 py-2 text-center text-[0.68rem] font-semibold leading-tight text-gray-600 transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-cream-100 hover:text-terracotta-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
        :class="{ 'bg-cream-100 text-terracotta-700': isActive(item) }"
        :aria-current="isActive(item) ? 'page' : undefined"
      >
        <span class="mb-1 text-base leading-none" aria-hidden="true">
          {{ item.activeRoute === 'home' ? '⌂' : item.activeRoute === 'ateliers' ? '✦' : item.activeRoute === 'accompagnement' ? '◌' : '↗' }}
        </span>
        <span :aria-label="item.label">{{ item.shortLabel }}</span>
      </router-link>

      <a
        v-if="siteConfig.reservationUrl"
        :href="reservationTarget"
        target="_blank"
        rel="noreferrer"
        class="flex min-h-14 flex-col items-center justify-center rounded-xl bg-terracotta-500 px-1 py-2 text-center text-[0.68rem] font-semibold leading-tight text-white transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
      >
        <span class="mb-1 text-base leading-none" aria-hidden="true">♡</span>
        <span>Réserver</span>
      </a>
      <router-link
        v-else
        to="/ateliers"
        class="flex min-h-14 flex-col items-center justify-center rounded-xl bg-terracotta-500 px-1 py-2 text-center text-[0.68rem] font-semibold leading-tight text-white transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
      >
        <span class="mb-1 text-base leading-none" aria-hidden="true">♡</span>
        <span>Réserver</span>
      </router-link>
    </div>
  </nav>
</template>
