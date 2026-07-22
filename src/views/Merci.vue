<script setup>
import ScrollReveal from '../components/ScrollReveal.vue'
</script>

<template>
  <div class="min-h-screen bg-cream-50 px-4 py-12">
    <ScrollReveal direction="scale" class="mx-auto flex min-h-[28rem] max-w-lg flex-col items-center justify-center rounded-[2rem] border border-terracotta-100 bg-white p-8 text-center shadow-soft-lg md:p-10">
      <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-terracotta-500">
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 class="text-3xl text-terracotta-800 md:text-4xl">Merci !</h1>
      <p class="mb-8 mt-4 text-lg leading-relaxed text-gray-600">
        Votre questionnaire a bien été envoyé. Je vous contacterai sous peu pour vous proposer un accompagnement personnalisé.
      </p>
      <div class="flex flex-wrap justify-center gap-3">
        <router-link to="/ateliers" class="inline-flex min-h-11 items-center justify-center rounded-full bg-terracotta-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2">
          Voir les ateliers
        </router-link>
        <router-link to="/" class="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-terracotta-300 px-6 py-3 font-semibold text-terracotta-700 transition-colors hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2">
          Retour à l’accueil
        </router-link>
      </div>
    </ScrollReveal>
  </div>
</template>
