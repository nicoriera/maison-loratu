<script setup>
import { ref } from 'vue'
import { sanitizeReservationUrl } from '../config/site.js'

const initialContent = {
  reservationUrl: '',
  location: '',
  email: '',
  phone: '',
}

const message = ref({ type: '', text: '' })
const content = ref({
  ...initialContent,
})

const save = () => {
  const sanitizedReservationUrl = sanitizeReservationUrl(content.value.reservationUrl)

  if (content.value.reservationUrl && !sanitizedReservationUrl) {
    message.value = {
      type: 'error',
      text: 'Le lien de reservation doit utiliser https:// et pointer vers un domaine Resalib.',
    }
    return
  }

  content.value = {
    ...content.value,
    reservationUrl: sanitizedReservationUrl,
  }
  message.value = {
    type: 'success',
    text: 'Aucune donnee n est enregistree ni envoyee. Ce brouillon reste uniquement en memoire le temps de la session.',
  }
}

const resetDraft = () => {
  content.value = { ...initialContent }
  message.value = {
    type: 'success',
    text: 'Le brouillon local en memoire a ete efface.',
  }
}
</script>

<template>
  <div class="min-h-screen bg-cream-50 px-4 py-12">
    <div class="mx-auto max-w-3xl">
      <div class="mb-8 rounded-3xl border border-terracotta-200 bg-cream-100 p-6">
        <p class="text-service-label text-terracotta-600">Prototype d’administration</p>
        <h1 class="mt-2 text-4xl text-terracotta-800">Préparer les informations du site</h1>
        <p class="mt-3 leading-relaxed text-gray-700">
          Cette interface est une maquette fonctionnelle locale. Elle n’est pas encore protégée par authentification
          et ne doit pas être utilisée en production.
        </p>
        <p class="mt-3 text-sm leading-relaxed text-terracotta-700">
          N’ajoutez ni mot de passe, ni donnée de santé, ni information confidentielle. Seules des coordonnées
          publiques et un lien Resalib validé doivent être préparés ici.
        </p>
      </div>

      <form class="space-y-6 rounded-3xl bg-white p-6 shadow-soft md:p-8" autocomplete="off" @submit.prevent="save">
        <div>
          <label for="reservationUrl" class="form-label">Lien Resalib</label>
          <input
            id="reservationUrl"
            v-model.trim="content.reservationUrl"
            class="form-input"
            type="url"
            inputmode="url"
            placeholder="https://www.resalib.fr/..."
            spellcheck="false"
          />
          <p class="mt-2 text-sm text-gray-600">Le lien n’est accepté que s’il utilise `https://` sur un domaine `resalib.fr`.</p>
        </div>
        <div>
          <label for="location" class="form-label">Localisation</label>
          <input id="location" v-model.trim="content.location" class="form-input" type="text" placeholder="Coordonnee publique uniquement" />
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <div>
            <label for="email" class="form-label">Email</label>
            <input id="email" v-model.trim="content.email" class="form-input" type="email" placeholder="Contact public" />
          </div>
          <div>
            <label for="phone" class="form-label">Téléphone</label>
            <input id="phone" v-model.trim="content.phone" class="form-input" type="tel" placeholder="Numero public" />
          </div>
        </div>
        <div class="flex items-center justify-between gap-4">
          <p
            v-if="message.text"
            class="text-sm"
            :class="message.type === 'error' ? 'text-red-700' : 'text-terracotta-700'"
            role="status"
          >
            {{ message.text }}
          </p>
          <div class="ml-auto flex flex-wrap justify-end gap-3">
            <button
              type="button"
              class="rounded-full border border-terracotta-300 px-6 py-3 font-semibold text-terracotta-700 hover:bg-cream-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta-500"
              @click="resetDraft"
            >
              Effacer
            </button>
            <button type="submit" class="rounded-full bg-terracotta-500 px-7 py-3 font-semibold text-white hover:bg-terracotta-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta-500">Verifier le brouillon</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
