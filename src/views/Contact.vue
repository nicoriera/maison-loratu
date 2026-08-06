<script setup>
import { ref } from 'vue'

const contactForm = ref(null)
const isSubmitting = ref(false)
const submitError = ref('')
const submitted = ref(false)
const form = ref({ inquiryType: 'contact', name: '', email: '', message: '', consent: false })
const contactEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mbdzazdg'

const onSubmit = async () => {
  if (!contactForm.value?.reportValidity()) return

  isSubmitting.value = true
  submitError.value = ''

  try {
    const response = await fetch(contactEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
        consent: form.value.consent,
        inquiryType: form.value.inquiryType,
        subject: form.value.inquiryType === 'suggestion'
          ? 'Amélioration ou suggestion — Maison Loratu'
          : 'Demande de contact — Maison Loratu',
      }),
    })

    if (!response.ok) throw new Error('Erreur lors de l’envoi')

    submitted.value = true
    form.value = { inquiryType: 'contact', name: '', email: '', message: '', consent: false }
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
            <fieldset>
              <legend class="form-label">Votre message concerne *</legend>
              <div class="mt-2 grid gap-2 sm:grid-cols-2" role="radiogroup">
                <label class="cursor-pointer rounded-2xl border-2 px-4 py-3 text-sm font-semibold transition focus-within:ring-2 focus-within:ring-terracotta-500 focus-within:ring-offset-2" :class="form.inquiryType === 'contact' ? 'border-terracotta-500 bg-terracotta-50 text-terracotta-800' : 'border-cream-300 text-gray-700 hover:border-terracotta-300'">
                  <input v-model="form.inquiryType" class="sr-only" type="radio" name="inquiry-type" value="contact" />
                  Une demande de contact
                </label>
                <label class="cursor-pointer rounded-2xl border-2 px-4 py-3 text-sm font-semibold transition focus-within:ring-2 focus-within:ring-terracotta-500 focus-within:ring-offset-2" :class="form.inquiryType === 'suggestion' ? 'border-terracotta-500 bg-terracotta-50 text-terracotta-800' : 'border-cream-300 text-gray-700 hover:border-terracotta-300'">
                  <input v-model="form.inquiryType" class="sr-only" type="radio" name="inquiry-type" value="suggestion" />
                  Amélioration / suggestion
                </label>
              </div>
            </fieldset>

            <label class="form-label" for="contact-name">Prénom et nom *</label>
            <input id="contact-name" v-model.trim="form.name" class="form-input" type="text" autocomplete="name" required />

            <label class="form-label" for="contact-email">Adresse email *</label>
            <input id="contact-email" v-model.trim="form.email" class="form-input" type="email" autocomplete="email" required />

            <label class="form-label" for="contact-message">{{ form.inquiryType === 'suggestion' ? 'Votre amélioration ou suggestion *' : 'Votre message *' }}</label>
            <textarea id="contact-message" v-model.trim="form.message" class="form-input min-h-36" maxlength="1000" required :placeholder="form.inquiryType === 'suggestion' ? 'Partagez une idée pour améliorer Maison Loratu.' : 'Expliquez simplement votre demande, sans information médicale détaillée.'"></textarea>

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

        <div v-else class="flex min-h-80 items-center justify-center rounded-[2rem] bg-white p-8 text-center shadow-soft-lg md:col-span-2 md:min-h-[30rem] md:p-12" role="status">
          <div class="max-w-xl">
            <p class="contact-success-heart text-5xl text-terracotta-500" aria-hidden="true">♥</p>
            <h2 class="mt-5 text-4xl text-terracotta-800 md:text-5xl">Merci pour votre message</h2>
            <p class="mt-5 text-xl leading-relaxed text-gray-700">Maison Loratu vous répondra dans la journée.</p>
          </div>
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

<style scoped>
@keyframes contact-success-heartbeat {
  0%, 100% {
    transform: scale(1) rotate(0deg);
  }

  20% {
    transform: scale(1.18) rotate(-4deg);
  }

  40% {
    transform: scale(1.04) rotate(3deg);
  }

  60% {
    transform: scale(1.14) rotate(-2deg);
  }
}

.contact-success-heart {
  animation: contact-success-heartbeat 1s cubic-bezier(0.16, 1, 0.3, 1) 5;
}

@media (prefers-reduced-motion: reduce) {
  .contact-success-heart {
    animation: none;
  }
}
</style>
