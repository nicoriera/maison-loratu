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
          class="text-2xl font-serif text-terracotta-500 hover:text-terracotta-600 transition-colors"
        >
          Maison Loratu
        </button>
        <div class="flex gap-4 md:gap-6">
          <router-link
            to="/"
            class="text-gray-700 hover:text-terracotta-600 transition-colors relative text-sm md:text-base"
            :class="{ 'text-terracotta-600 font-semibold': isActive('/') }"
          >
            Accueil
            <span
              v-if="isActive('/')"
              class="absolute -bottom-1 left-0 right-0 h-0.5 bg-terracotta-500"
            ></span>
          </router-link>
          <router-link
            to="/questionnaire"
            class="text-gray-700 hover:text-terracotta-600 transition-colors relative text-sm md:text-base"
            :class="{ 'text-terracotta-600 font-semibold': isActive('/questionnaire') }"
          >
            Questionnaire
            <span
              v-if="isActive('/questionnaire')"
              class="absolute -bottom-1 left-0 right-0 h-0.5 bg-terracotta-500"
            ></span>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>
