<script setup>
import { onMounted, ref } from 'vue'

const rating = ref(null)
const reviewCount = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('/api/resalib-reviews', { headers: { Accept: 'application/json' } })
    if (!response.ok) throw new Error('Resalib indisponible')
    const data = await response.json()
    rating.value = data.rating
    reviewCount.value = data.reviewCount
  } catch {
    // Le lien Resalib reste utilisable si le compteur distant est indisponible.
  }
})
</script>

<template>
  <div
    v-if="reviewCount !== null"
    class="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-soft"
    :aria-label="rating ? `Note Resalib : ${rating} sur 5, ${reviewCount} avis` : `${reviewCount} avis sur Resalib`">
    <span class="flex h-9 w-9 items-center justify-center rounded-full bg-sauge-100 text-sauge-700" aria-hidden="true">★</span>
    <span class="text-sm leading-snug text-gray-700">
      <template v-if="rating">
        <strong class="font-semibold text-terracotta-800">{{ rating.toLocaleString('fr-FR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) }} / 5</strong>
        <span class="mx-1 text-gray-400" aria-hidden="true">·</span>
      </template>
      <a
        target="_blank"
        rel="noopener noreferrer"
        class="font-semibold text-terracotta-700 underline decoration-terracotta-300 underline-offset-2 transition hover:text-terracotta-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
        href="https://www.resalib.fr/praticien/136767-maison-loratu-sophrologue-certifiee-sophrologue-bayonne#reviews">
        {{ reviewCount }} avis sur Resalib
      </a>
    </span>
    <span class="sr-only">Avis clients vérifiés</span>
  </div>
</template>
