<script setup>
import ScrollReveal from '../components/ScrollReveal.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
    <ScrollReveal direction="scale" class="bg-white rounded-lg shadow-lg p-10 max-w-lg w-full text-center">
      <div class="w-16 h-16 bg-[#C16A46] rounded-full flex items-center justify-center mx-auto mb-6">
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 class="text-3xl font-serif text-[#C16A46] mb-4">Merci !</h1>
      <p class="text-gray-600 text-lg mb-8">
        Votre questionnaire a bien été envoyé. Je vous contacterai sous peu pour vous proposer un accompagnement personnalisé.
      </p>
      <router-link
        to="/"
        class="inline-block px-6 py-3 bg-[#C16A46] text-white rounded-lg hover:bg-[#B85A36] transition-colors"
      >
        Retour à l'accueil
      </router-link>
    </ScrollReveal>
  </div>
</template>
