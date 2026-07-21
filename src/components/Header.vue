<script setup>
import { nextTick, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { siteConfig } from '../config/site.js'

const route = useRoute()
const mobileMenuOpen = ref(false)
const mobileMenuButton = ref(null)
const firstMobileLink = ref(null)

const navigation = [
  { label: 'Accueil', to: '/' },
  { label: 'Ateliers', to: '/ateliers' },
  { label: 'Structures', to: { path: '/', hash: '#structures' } },
  { label: 'Contact', to: '/contact' },
]

const reservationTarget = siteConfig.reservationUrl || '/ateliers'

const focusMobileMenuButton = async () => {
  await nextTick()
  mobileMenuButton.value?.focus?.()
}

const focusFirstMobileLink = async () => {
  await nextTick()
  firstMobileLink.value?.$el?.focus?.()
}

const closeMobileMenu = async () => {
  if (!mobileMenuOpen.value) return

  mobileMenuOpen.value = false
  await focusMobileMenuButton()
}

const openMobileMenu = async () => {
  mobileMenuOpen.value = true
  await focusFirstMobileLink()
}

const toggleMobileMenu = async () => {
  if (mobileMenuOpen.value) {
    await closeMobileMenu()
    return
  }

  await openMobileMenu()
}

const isActive = (item) => {
  if (typeof item.to === 'string') {
    return route.path === item.to
  }

  return route.path === item.to.path && route.hash === item.to.hash
}

watch(
  () => route.fullPath,
  () => {
    if (mobileMenuOpen.value) {
      closeMobileMenu()
    }
  },
)
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-terracotta-100/70 bg-white/92 shadow-sm backdrop-blur">
    <nav class="container mx-auto px-4 py-3 md:py-4" aria-label="Navigation principale">
      <div class="flex items-center justify-between gap-4">
        <router-link
          to="/"
          class="nav-logo text-2xl font-serif text-terracotta-500 transition-colors duration-[var(--duration-nav)] ease-[var(--ease-warm-out)] hover:text-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
          @click="closeMobileMenu"
        >
          Maison Loratu
        </router-link>

        <div class="hidden items-center gap-2 lg:flex lg:gap-5">
          <router-link
            v-for="item in navigation"
            :key="item.label"
            :to="item.to"
            class="nav-link relative py-1 text-sm text-gray-700 transition duration-[var(--duration-nav)] ease-[var(--ease-warm-out)] hover:-translate-y-px hover:text-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 md:text-base"
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
            v-if="siteConfig.reservationUrl"
            :href="reservationTarget"
            target="_blank"
            rel="noreferrer"
            class="ml-2 inline-flex min-h-11 items-center justify-center rounded-full bg-terracotta-500 px-4 py-2 text-sm font-semibold text-white transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
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

        <div class="flex items-center gap-2 lg:hidden">
          <a
            v-if="siteConfig.reservationUrl"
            :href="reservationTarget"
            target="_blank"
            rel="noreferrer"
            class="hidden min-h-11 items-center justify-center rounded-full bg-terracotta-500 px-4 py-2 text-sm font-semibold text-white transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 sm:inline-flex"
          >
            Réserver
          </a>
          <router-link
            v-else
            to="/ateliers"
            class="hidden min-h-11 items-center justify-center rounded-full bg-terracotta-500 px-4 py-2 text-sm font-semibold text-white transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 sm:inline-flex"
          >
            Réserver
          </router-link>

          <button
            type="button"
            ref="mobileMenuButton"
            class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-terracotta-200 bg-white text-terracotta-700 shadow-sm transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:border-terracotta-300 hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
            :aria-expanded="mobileMenuOpen"
            aria-controls="mobile-navigation"
            :aria-label="mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
            @click="toggleMobileMenu"
            @keydown.esc.prevent="closeMobileMenu"
          >
            <span class="flex flex-col gap-1">
              <span
                class="h-0.5 w-5 rounded-full bg-current transition-transform duration-[var(--duration-ui)]"
                :class="mobileMenuOpen ? 'translate-y-1.5 rotate-45' : ''"
              />
              <span
                class="h-0.5 w-5 rounded-full bg-current transition-opacity duration-[var(--duration-ui)]"
                :class="mobileMenuOpen ? 'opacity-0' : 'opacity-100'"
              />
              <span
                class="h-0.5 w-5 rounded-full bg-current transition-transform duration-[var(--duration-ui)]"
                :class="mobileMenuOpen ? '-translate-y-1.5 -rotate-45' : ''"
              />
            </span>
          </button>
        </div>
      </div>

      <div
        v-show="mobileMenuOpen"
        id="mobile-navigation"
        class="mt-3 rounded-[1.5rem] border border-terracotta-100 bg-white p-4 shadow-soft-lg lg:hidden"
        @keydown.esc.prevent.stop="closeMobileMenu"
      >
        <div class="grid gap-2">
          <router-link
            v-for="item in navigation"
            :key="`mobile-${item.label}`"
            :to="item.to"
            :ref="item.label === navigation[0].label ? firstMobileLink : undefined"
            class="rounded-2xl px-4 py-3 text-base font-medium text-gray-800 transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-cream-100 hover:text-terracotta-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
            :class="{ 'bg-cream-100 text-terracotta-700': isActive(item) }"
            :aria-current="isActive(item) ? 'page' : undefined"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </router-link>

          <a
            v-if="siteConfig.reservationUrl"
            :href="reservationTarget"
            target="_blank"
            rel="noreferrer"
            class="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-terracotta-500 px-5 py-3 text-sm font-semibold text-white transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
            @click="closeMobileMenu"
          >
            Réserver
          </a>
          <router-link
            v-else
            to="/ateliers"
            class="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-terracotta-500 px-5 py-3 text-sm font-semibold text-white transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
            @click="closeMobileMenu"
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
