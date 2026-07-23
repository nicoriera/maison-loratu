<script setup>
import { computed, ref } from 'vue'
import CTAButton from '../components/CTAButton.vue'

const consent = ref(false)
const error = ref('')
const requestPrepared = ref(false)
const isSubmitting = ref(false)
const form = ref({
  structure: '',
  email: '',
  project: '',
})

const projectSummary = computed(() =>
  form.value.project
    .trim()
    .replace(/\s+/g, ' ')
    .slice(0, 220),
)

const submit = async () => {
  if (!form.value.structure.trim() || !form.value.email.trim() || !form.value.project.trim()) {
    error.value = 'Merci de compléter les champs requis avant de préparer votre demande.'
    requestPrepared.value = false
    return
  }

  if (!consent.value) {
    error.value = 'Votre accord est nécessaire pour préparer la demande de contact.'
    requestPrepared.value = false
    return
  }

  error.value = ''
  isSubmitting.value = true

  try {
    const response = await fetch('https://formspree.io/f/mbdzazdg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        type: 'demande-structure',
        structure: form.value.structure,
        email: form.value.email,
        project: form.value.project,
        consent: consent.value,
      }),
    })

    if (!response.ok) throw new Error('Erreur lors de l’envoi')
    requestPrepared.value = true
  } catch {
    error.value = 'Une erreur est survenue. Veuillez réessayer ou utiliser la page contact.'
    requestPrepared.value = false
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <main class="min-h-screen overflow-x-hidden bg-cream-50 px-4 py-12 md:py-24">
    <section class="mx-auto max-w-3xl rounded-[2rem] bg-white p-6 shadow-soft-lg md:p-12">
      <p class="text-service-label text-terracotta-600">Écoles · centres de loisirs · associations</p>
      <h1 class="mt-4 text-3xl text-terracotta-800 sm:text-4xl md:text-5xl">Construisons votre atelier</h1>
      <p class="mt-5 leading-relaxed text-gray-700">Décrivez simplement votre structure et votre projet. Les détails pratiques seront précisés avec Sandra.</p>
      <div class="mt-6 rounded-2xl bg-cream-50 p-5 text-sm leading-relaxed text-gray-700">
        Votre demande est transmise de façon sécurisée à Sandra. Merci de ne pas y inclure de données de santé ni
        d’informations nominatives sur des mineurs.
      </div>
      <div v-if="requestPrepared" class="mt-8 rounded-2xl bg-sauge-100 p-6 text-gray-800">
        Votre demande a bien été envoyée à Sandra&nbsp;: <strong>{{ form.structure }}</strong>,
        <strong>{{ form.email }}</strong>, projet&nbsp;: <strong>{{ projectSummary }}</strong>.
      </div>
      <form class="mt-8 space-y-5" @submit.prevent="submit">
        <div class="grid gap-5 md:grid-cols-2">
        <label class="form-label">Structure<input v-model.trim="form.structure" required class="form-input mt-2 focus-visible:ring-2 focus-visible:ring-terracotta-400 focus-visible:ring-offset-2" name="structure" autocomplete="organization" placeholder="École, association…" /></label>
        <label class="form-label">Votre email<input v-model.trim="form.email" required type="email" class="form-input mt-2 focus-visible:ring-2 focus-visible:ring-terracotta-400 focus-visible:ring-offset-2" name="email" autocomplete="email" placeholder="vous@exemple.fr" /></label>
        </div>
        <label class="form-label">Votre projet<textarea v-model.trim="form.project" required class="form-input mt-2 min-h-32 focus-visible:ring-2 focus-visible:ring-terracotta-400 focus-visible:ring-offset-2" name="project" placeholder="Public, objectif, format envisagé…" maxlength="1200"></textarea></label>
        <p class="text-sm text-gray-600">Partagez seulement les éléments utiles au devis&nbsp;: structure, public, objectifs, format souhaité. Évitez toute donnée sensible ou médicale.</p>
        <label class="flex items-start gap-3 rounded-2xl p-2 -m-2 text-sm text-gray-700 focus-within:ring-2 focus-within:ring-terracotta-400 focus-within:ring-offset-2"><input v-model="consent" type="checkbox" class="mt-1 h-5 w-5 shrink-0 focus-visible:outline-none focus-visible:ring-0" /><span>J’accepte que Maison Loratu utilise ces informations uniquement pour me recontacter au sujet de cette demande, sans autre usage. *</span></label>
        <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
        <button type="submit" :disabled="isSubmitting" class="inline-flex min-h-11 items-center justify-center rounded-full bg-terracotta-500 px-7 py-3 font-semibold text-white hover:bg-terracotta-600 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400 focus-visible:ring-offset-2">{{ isSubmitting ? 'Envoi en cours…' : 'Envoyer ma demande' }}</button>
      </form>
      <div class="mt-8"><CTAButton to="/contact" variant="secondary">Voir les autres moyens de contact</CTAButton></div>
    </section>
  </main>
</template>
