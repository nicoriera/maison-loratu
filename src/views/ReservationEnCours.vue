<script setup>
import { ref } from 'vue'

const notificationForm = ref(null)
const email = ref('')
const consent = ref(false)
const isSubmitting = ref(false)
const submitted = ref(false)
const submitError = ref('')
const contactEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mbdzazdg'

const onSubmit = async () => {
  if (!notificationForm.value?.reportValidity()) return

  isSubmitting.value = true
  submitError.value = ''

  try {
    const response = await fetch(contactEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        email: email.value,
        consent: consent.value,
        subject: 'Ouverture des réservations — Maison Loratu',
        message: 'Cette personne souhaite être prévenue de l’ouverture des réservations.',
      }),
    })

    if (!response.ok) throw new Error('Erreur lors de l’envoi')

    submitted.value = true
  } catch {
    submitError.value = 'Nous n’avons pas pu enregistrer votre adresse. Réessayez dans un instant ou écrivez-nous à maisonloratu@gmail.com.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="bg-cream-50">
    <section class="flex min-h-[calc(100vh-10rem)] items-center bg-sauge-100 px-4 py-16 md:py-24">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-service-label text-terracotta-600">Réservations bientôt disponibles</p>
        <h1 class="page-title mt-6">Maison Loratu se prépare pour vous accueillir</h1>
        <p class="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-gray-700">
          Les tapis s’étirent, les coussins prennent leur plus belle pose : les réservations arrivent bientôt.
        </p>
        <div class="mx-auto mt-10 max-w-xl rounded-[2rem] bg-white p-6 text-left shadow-soft-lg md:p-8">
          <template v-if="!submitted">
            <h2 class="text-2xl text-terracotta-800">Recevoir les dates des premiers ateliers</h2>
            <p class="mt-2 max-w-lg text-sm leading-relaxed text-gray-600">Une seule alerte par e-mail, avec les premières dates des ateliers Maison Loratu.</p>
            <form ref="notificationForm" class="mt-5" @submit.prevent="onSubmit">
              <label class="form-label" for="opening-email">Votre adresse e-mail *</label>
              <input id="opening-email" v-model.trim="email" class="form-input mt-2 w-full" type="email" autocomplete="email" required />
              <label class="mt-5 flex cursor-pointer items-start gap-3 rounded-2xl bg-cream-100 px-4 py-3 text-sm leading-relaxed text-gray-700 transition focus-within:ring-2 focus-within:ring-terracotta-500 focus-within:ring-offset-2">
                <input v-model="consent" class="mt-0.5 h-5 w-5 shrink-0 accent-terracotta-500" type="checkbox" required />
                <span>J’accepte de recevoir cette alerte par e-mail. <router-link to="/politique-de-confidentialite" class="font-semibold text-terracotta-700 underline underline-offset-2">Voir la politique de confidentialité</router-link>. *</span>
              </label>
              <p v-if="submitError" class="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-800" role="alert">
                Nous n’avons pas pu enregistrer votre adresse. Réessayez dans un instant ou <a href="mailto:maisonloratu@gmail.com" class="font-semibold underline underline-offset-2">écrivez-nous directement</a>.
              </p>
              <button class="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-terracotta-500 px-7 py-3 font-semibold text-white shadow-soft transition hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto" type="submit" :disabled="isSubmitting">{{ isSubmitting ? 'Enregistrement…' : 'Me prévenir de l’ouverture' }}</button>
            </form>
          </template>
          <div v-else class="py-3 text-center" role="status">
            <p class="text-3xl text-terracotta-500" aria-hidden="true">♥</p>
            <h2 class="mt-3 text-2xl text-terracotta-800">C’est noté</h2>
            <p class="mt-2 leading-relaxed text-gray-700">Maison Loratu a bien reçu votre demande d’être prévenue de l’ouverture.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
