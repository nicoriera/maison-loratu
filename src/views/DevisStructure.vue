<script setup>
import { ref } from 'vue'
import CTAButton from '../components/CTAButton.vue'

const submitted = ref(false)
const consent = ref(false)
const error = ref('')

const submit = () => {
  if (!consent.value) {
    error.value = 'Votre accord est nécessaire pour envoyer la demande.'
    return
  }
  error.value = ''
  submitted.value = true
}
</script>

<template>
  <main class="min-h-screen bg-cream-50 px-4 py-16 md:py-24">
    <section class="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 shadow-soft-lg md:p-12">
      <p class="text-service-label text-terracotta-600">Écoles · centres de loisirs · associations</p>
      <h1 class="mt-4 text-4xl text-terracotta-800 md:text-5xl">Construisons votre atelier</h1>
      <p class="mt-5 leading-relaxed text-gray-700">Décrivez simplement votre structure et votre projet. Les détails pratiques seront précisés avec Sandra.</p>
      <div v-if="submitted" class="mt-8 rounded-2xl bg-sauge-100 p-6 text-gray-800">
        Merci, votre demande est prête à être transmise. Sandra reviendra vers vous pour préciser le format, le public et les disponibilités.
      </div>
      <form v-else class="mt-8 space-y-5" @submit.prevent="submit">
        <div class="grid gap-5 md:grid-cols-2">
          <label class="form-label">Structure<input required class="form-input mt-2" name="structure" placeholder="École, association…" /></label>
          <label class="form-label">Votre email<input required type="email" class="form-input mt-2" name="email" placeholder="vous@exemple.fr" /></label>
        </div>
        <label class="form-label">Votre projet<textarea required class="form-input mt-2 min-h-32" name="project" placeholder="Public, objectif, format envisagé…"></textarea></label>
        <label class="flex items-start gap-3 text-sm text-gray-700"><input v-model="consent" type="checkbox" class="mt-1" /><span>J’accepte que ces informations soient utilisées uniquement pour répondre à ma demande. *</span></label>
        <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
        <button type="submit" class="rounded-full bg-terracotta-500 px-7 py-3 font-semibold text-white hover:bg-terracotta-600">Envoyer ma demande</button>
      </form>
      <div class="mt-8"><CTAButton to="/contact" variant="secondary">Voir les autres moyens de contact</CTAButton></div>
    </section>
  </main>
</template>
