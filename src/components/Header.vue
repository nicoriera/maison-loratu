<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const goToHome = () => {
  router.push('/')
}

const isActive = (path) => {
  return route.path === path
}
</script>

<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <button
          @click="goToHome"
          class="nav-logo text-2xl font-serif text-terracotta-500 hover:text-terracotta-600 transition-colors duration-[var(--duration-nav)] ease-[var(--ease-warm-out)]"
        >
          Maison Loratu
        </button>
        <div class="flex gap-4 md:gap-6">
          <router-link
            to="/"
            class="nav-link text-gray-700 hover:text-terracotta-600 relative text-sm md:text-base py-1"
            :class="{ 'text-terracotta-600 font-semibold': isActive('/') }"
          >
            Accueil
            <span
              class="nav-link-underline absolute bottom-0 left-0 right-0 h-0.5 bg-terracotta-500 origin-left transition-transform duration-[var(--duration-nav)] ease-[var(--ease-warm-out)]"
              :class="isActive('/') ? 'scale-x-100' : 'scale-x-0'"
            />
          </router-link>
          <router-link
            to="/questionnaire"
            class="nav-link text-gray-700 hover:text-terracotta-600 relative text-sm md:text-base py-1"
            :class="{ 'text-terracotta-600 font-semibold': isActive('/questionnaire') }"
          >
            Questionnaire
            <span
              class="nav-link-underline absolute bottom-0 left-0 right-0 h-0.5 bg-terracotta-500 origin-left transition-transform duration-[var(--duration-nav)] ease-[var(--ease-warm-out)]"
              :class="isActive('/questionnaire') ? 'scale-x-100' : 'scale-x-0'"
            />
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav-link {
  transition: color var(--duration-nav) var(--ease-warm-out),
    transform var(--duration-nav) var(--ease-warm-out);
}
.nav-link:hover {
  transform: translateY(-1px);
}
.nav-link:focus-visible {
  outline: 2px solid #B85A36;
  outline-offset: 2px;
}
</style>
