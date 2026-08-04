<script setup>
import { ref } from 'vue'

const giftForm = ref(null)
const isSubmitting = ref(false)
const submitError = ref('')
const submitted = ref(false)
const contactEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mbdzazdg'
const gift = ref({
  format: 'numeric',
  buyerName: '',
  buyerEmail: '',
  recipientName: '',
  message: '',
  consent: false,
})

const giftOptions = {
  numeric: {
    label: 'Carte cadeau numérique',
    detail: '49 € · envoi numérique offert par e-mail après confirmation',
    price: '49 €',
  },
  signature: {
    label: 'Carte cadeau Signature',
    detail: '54 € · envoyée par courrier dans une belle enveloppe avec un mot personnalisé',
    price: '54 €',
  },
}

const onSubmit = async () => {
  if (!giftForm.value?.reportValidity()) return

  isSubmitting.value = true
  submitError.value = ''

  try {
    const option = giftOptions[gift.value.format]
    const response = await fetch(contactEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        buyerName: gift.value.buyerName,
        email: gift.value.buyerEmail,
        recipientName: gift.value.recipientName,
        personalisedMessage: gift.value.message,
        giftFormat: option.label,
        price: option.price,
        consent: gift.value.consent,
        subject: 'Demande de carte cadeau — Maison Loratu',
      }),
    })

    if (!response.ok) throw new Error('Erreur lors de l’envoi')

    submitted.value = true
  } catch {
    submitError.value = 'Une erreur est survenue. Veuillez réessayer un peu plus tard.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="bg-cream-50">
    <section class="bg-sauge-100 px-4 py-16 md:py-24">
      <div class="container mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <p class="text-service-label text-terracotta-600">Carte cadeau</p>
          <h1 class="page-title mt-4">Une idée cadeau pleine de douceur</h1>
          <p class="body-copy mt-6 max-w-xl">
            Offrez un moment de douceur à partager entre un enfant, fille ou garçon, et une femme de son entourage. Une parenthèse pour ralentir et respirer.
          </p>
        </div>
        <div class="overflow-hidden rounded-[2rem] bg-terracotta-800 text-center text-white shadow-soft-lg">
          <img src="/images/gift-envelope-heart.webp" width="1200" height="675" alt="Enveloppe ivoire ornée d’un cœur terracotta" class="block aspect-[16/9] h-auto w-full object-cover" loading="lazy" decoding="async" />
          <div class="p-8 md:p-12">
            <p class="text-service-label text-cream-200">Carte cadeau</p>
            <h2 class="mt-4 text-3xl text-cream-100 sm:text-4xl">Atelier Duo</h2>
            <p class="mt-5 text-lg text-cream-100">1 h 15 · 49 € · valable 2 mois à partir de la date d’achat</p>
          </div>
        </div>
      </div>
    </section>
    <section class="px-4 py-16 text-center md:py-24">
      <div class="container mx-auto max-w-2xl">
        <h2 class="text-3xl text-terracotta-800 sm:text-4xl">Un cadeau qui laisse de la place</h2>
        <p class="mt-5 text-lg leading-relaxed text-gray-700">
          Une parenthèse de douceur à vivre à deux, pour ralentir, apaiser les tensions et se retrouver. Un moment précieux à partager entre un enfant et une femme de son entourage, pour tisser de jolis souvenirs.
        </p>
      </div>
    </section>

    <section class="bg-cream-100 px-4 py-16 md:py-24">
      <div class="container mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p class="text-service-label text-terracotta-600">Choisir votre format</p>
          <h2 class="mt-4 text-3xl text-terracotta-800 sm:text-4xl">Offrir une carte cadeau</h2>
          <p class="mt-5 leading-relaxed text-gray-700">Choisissez une carte numérique ou une attention Signature à recevoir par courrier.</p>
        </div>

        <form v-if="!submitted" ref="giftForm" class="rounded-[2rem] bg-white p-6 shadow-soft-lg md:p-8" @submit.prevent="onSubmit">
          <fieldset>
            <legend class="form-label">Format de la carte cadeau *</legend>
            <div class="mt-3 grid gap-3 sm:grid-cols-2">
              <label v-for="(option, key) in giftOptions" :key="key" class="cursor-pointer rounded-2xl border-2 p-4 transition" :class="gift.format === key ? 'border-terracotta-500 bg-terracotta-50' : 'border-cream-300 hover:border-terracotta-300'">
                <input v-model="gift.format" class="sr-only" type="radio" name="gift-format" :value="key" />
                <span class="block font-semibold text-terracotta-800">{{ option.label }}</span>
                <span class="mt-2 block text-sm leading-relaxed text-gray-700">{{ option.detail }}</span>
              </label>
            </div>
          </fieldset>

          <div class="mt-6 grid gap-5 sm:grid-cols-2">
            <label class="form-label" for="gift-buyer-name">Votre prénom et nom *<input id="gift-buyer-name" v-model.trim="gift.buyerName" class="form-input mt-2" type="text" autocomplete="name" required /></label>
            <label class="form-label" for="gift-buyer-email">Votre adresse e-mail *<input id="gift-buyer-email" v-model.trim="gift.buyerEmail" class="form-input mt-2" type="email" autocomplete="email" required /></label>
          </div>
          <div class="mt-5 space-y-5">
            <label class="form-label" for="gift-recipient-name">Prénom de la personne qui reçoit la carte *<input id="gift-recipient-name" v-model.trim="gift.recipientName" class="form-input mt-2" type="text" required /></label>
            <label class="form-label" for="gift-message">Message personnalisé <textarea id="gift-message" v-model.trim="gift.message" class="form-input mt-2 min-h-28" maxlength="500" placeholder="Quelques mots à glisser avec la carte…"></textarea></label>
            <label class="flex items-start gap-3 text-sm leading-relaxed text-gray-700"><input v-model="gift.consent" class="mt-1 h-4 w-4 accent-terracotta-500" type="checkbox" required /><span>J’accepte que Maison Loratu utilise ces informations uniquement pour préparer ma carte cadeau. *</span></label>
          </div>
          <p v-if="submitError" class="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">{{ submitError }}</p>
          <button class="mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-terracotta-500 px-8 py-3 font-semibold text-white shadow-soft transition hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto" type="submit" :disabled="isSubmitting">{{ isSubmitting ? 'Envoi en cours…' : `Préparer ma carte à ${giftOptions[gift.format].price}` }}</button>
        </form>

        <div v-else class="rounded-[2rem] bg-white p-8 text-center shadow-soft-lg md:p-10" role="status">
          <h2 class="text-3xl text-terracotta-800">Votre demande est bien envoyée</h2>
          <p class="mt-4 leading-relaxed text-gray-700">Maison Loratu reviendra vers vous pour finaliser votre carte cadeau.</p>
        </div>
      </div>
    </section>
  </div>
</template>
