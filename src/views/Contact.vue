<script setup>
import { ref } from 'vue'

const contactForm = ref(null)
const isSubmitting = ref(false)
const submitError = ref('')
const submitted = ref(false)
const form = ref({ name: '', email: '', message: '', consent: false })

const onSubmit = async () => {
  if (!contactForm.value?.reportValidity()) return

  isSubmitting.value = true
  submitError.value = ''

  try {
    const response = await fetch('https://formspree.io/f/mbdzazdg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
        consent: form.value.consent,
        subject: 'Demande de contact — Maison Loratu',
      }),
    })

    if (!response.ok) throw new Error('Erreur lors de l’envoi')

    submitted.value = true
    form.value = { name: '', email: '', message: '', consent: false }
  } catch {
    submitError.value = 'Une erreur est survenue. Veuillez réessayer un peu plus tard.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="bg-cream-50">
    <section class="bg-gradient-to-b from-cream-200 to-cream-50 px-4 py-16 md:py-24">
      <div class="container mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div class="max-w-xl text-center md:pt-8 md:text-left">
          <p class="text-service-label text-terracotta-600">Nous contacter</p>
          <h1 class="page-title mt-4">Parlons de votre besoin</h1>
          <div class="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <router-link
              to="/faq"
              class="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-terracotta-300 px-7 py-3 font-semibold text-terracotta-700 transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2">
              Questions fréquentes
            </router-link>
          </div>
        </div>

        <form
          v-if="!submitted"
          ref="contactForm"
          class="rounded-[2rem] bg-white p-6 shadow-soft-lg md:p-8"
          @submit.prevent="onSubmit">
          <div class="mb-6">
            <h2 class="text-2xl text-terracotta-800">Écrivez à Maison Loratu</h2>
            <p class="mt-2 text-gray-700">Les champs marqués d’un astérisque sont obligatoires.</p>
          </div>
          <div class="space-y-5">
            <label class="form-label" for="contact-name">Prénom et nom *</label>
            <input id="contact-name" v-model.trim="form.name" class="form-input" type="text" autocomplete="name" required />

            <label class="form-label" for="contact-email">Adresse email *</label>
            <input id="contact-email" v-model.trim="form.email" class="form-input" type="email" autocomplete="email" required />

            <label class="form-label" for="contact-message">Votre message *</label>
            <textarea id="contact-message" v-model.trim="form.message" class="form-input min-h-36" maxlength="1000" required placeholder="Expliquez simplement votre demande, sans information médicale détaillée."></textarea>

            <label class="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
              <input v-model="form.consent" class="mt-1 h-4 w-4 accent-terracotta-500" type="checkbox" required />
              <span>J’accepte que Maison Loratu utilise ces informations uniquement pour répondre à ma demande. *</span>
            </label>
          </div>
          <p v-if="submitError" class="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">{{ submitError }}</p>
          <button class="mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-terracotta-500 px-8 py-3 font-semibold text-white shadow-soft transition hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto" type="submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Envoi en cours…' : 'Envoyer ma demande' }}
          </button>
        </form>

        <div v-else class="rounded-[2rem] bg-white p-8 text-center shadow-soft-lg md:p-10" role="status">
          <h2 class="text-3xl text-terracotta-800">Merci pour votre message</h2>
          <p class="mt-4 leading-relaxed text-gray-700">Maison Loratu vous répondra dès que possible pour échanger sur votre besoin.</p>
        </div>
      </div>
    </section>

    <section class="px-4 py-16 md:py-24">
      <div class="container mx-auto max-w-3xl">
        <article class="rounded-[2rem] bg-terracotta-800 p-8 text-white shadow-soft-lg">
          <p class="text-service-label text-cream-200">Une question ?</p>
          <h2 class="mt-4 text-3xl md:text-4xl">Consulter les réponses</h2>
          <p class="mt-4 leading-relaxed text-cream-100">Retrouvez les informations essentielles sur les séances, les ateliers, les enfants et les différents formats proposés.</p>
          <div class="mt-7"><router-link to="/faq" class="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-terracotta-300 bg-white px-8 py-3 font-semibold text-terracotta-700 transition hover:border-terracotta-400 hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-100 focus-visible:ring-offset-2 focus-visible:ring-offset-terracotta-800">Voir la FAQ</router-link></div>
        </article>
      </div>
    </section>
  </div>
</template>
