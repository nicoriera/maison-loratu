<script setup>
import { useRoute } from 'vue-router'
import { siteConfig } from '../config/site.js'
import UiIcon from './UiIcon.vue'

const route = useRoute()

const navigation = [
  { label: 'Accueil', to: '/', activeRoute: 'home' },
  { label: 'Ateliers', to: '/ateliers', activeRoute: 'ateliers' },
  { label: 'Accompagnement personnalisé', to: '/accompagnement', activeRoute: 'accompagnement' },
  { label: 'Carte cadeau', to: '/carte-cadeau', activeRoute: 'carte-cadeau' },
]

const reservationTarget = siteConfig.reservationUrl || '/ateliers'

const isActive = (item) => {
  return route.name === item.activeRoute && !route.hash
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-terracotta-100/70 bg-white/92 shadow-sm backdrop-blur safe-area-top">
    <nav class="container mx-auto px-4 py-3 md:py-4" aria-label="Navigation principale">
      <div class="flex items-center justify-between gap-4">
        <router-link
          to="/"
          class="nav-logo inline-flex min-h-11 items-center gap-2 text-2xl font-serif text-terracotta-500 transition-colors duration-[var(--duration-nav)] ease-[var(--ease-warm-out)] hover:text-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
        >
          <UiIcon name="house" :size="25" />
          Maison Loratu
        </router-link>

        <a
          :href="siteConfig.instagramUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="ml-auto inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-terracotta-700 transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-cream-100 hover:text-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 lg:hidden"
          aria-label="Suivre Maison Loratu sur Instagram, nouvel onglet"
        >
          <UiIcon name="instagram" :size="22" />
        </a>

        <div class="hidden items-center gap-2 lg:flex lg:gap-5">
          <router-link
            v-for="item in navigation"
            :key="item.label"
            :to="item.to"
            class="nav-link relative inline-flex min-h-11 items-center text-sm text-gray-700 transition duration-[var(--duration-nav)] ease-[var(--ease-warm-out)] hover:-translate-y-px hover:text-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 md:text-base"
            :class="{ 'font-semibold text-terracotta-700': isActive(item) }"
            :aria-current="isActive(item) ? 'page' : undefined"
          >
            {{ item.label }}
            <span
              class="nav-link-underline absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-terracotta-500 transition-transform duration-[var(--duration-nav)] ease-[var(--ease-warm-out)]"
              :class="isActive(item) ? 'scale-x-100' : 'scale-x-0'"
            />
          </router-link>

          <a
            :href="siteConfig.instagramUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="ml-2 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-terracotta-700 transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-cream-100 hover:text-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
            aria-label="Suivre Maison Loratu sur Instagram, nouvel onglet"
          >
            <UiIcon name="instagram" :size="22" />
          </a>

          <a
            v-if="siteConfig.reservationUrl"
            :href="reservationTarget"
            target="_blank"
            rel="noreferrer"
            class="ml-2 inline-flex min-h-11 items-center justify-center rounded-full bg-terracotta-500 px-4 py-2 text-sm font-semibold text-white transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
            aria-label="Réserver un atelier, nouvel onglet"
          >
            Réserver
          </a>
          <router-link
            v-else
            to="/ateliers"
            class="ml-2 inline-flex min-h-11 items-center justify-center rounded-full bg-terracotta-500 px-4 py-2 text-sm font-semibold text-white transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
          >
            Réserver
          </router-link>
        </div>

      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav-link {
  transition:
    color var(--duration-nav) var(--ease-warm-out),
    transform var(--duration-nav) var(--ease-warm-out);
}

.nav-link:hover {
  transform: translateY(-1px);
}

.nav-link:focus-visible {
  outline: 2px solid #b85a36;
  outline-offset: 2px;
}
</style>
