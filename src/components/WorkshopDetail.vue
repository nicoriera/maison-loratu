<script setup>
import CTAButton from './CTAButton.vue'
import { useReservationConfig } from '../config/reservation.js'

defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  meta: { type: String, required: true },
  intro: { type: String, required: true },
  paragraphs: { type: Array, default: () => [] },
  highlights: { type: Array, default: () => [] },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
})

const { reservationUrl } = useReservationConfig()
</script>

<template>
  <div class="bg-cream-50">
    <section class="bg-cream-200 px-4 py-16 md:py-24">
      <div class="container mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.92fr_1.08fr]">
        <div class="max-w-xl">
          <p class="text-service-label text-terracotta-600">{{ eyebrow }}</p>
          <h1 class="page-title mt-4">{{ title }}</h1>
          <p class="mt-5 text-xl text-terracotta-800">{{ meta }}</p>
          <p class="body-copy mt-6">{{ intro }}</p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton :to="reservationUrl">Je réserve</CTAButton>
            <CTAButton to="/ateliers" variant="secondary">Tous les ateliers</CTAButton>
          </div>
        </div>
        <img
          :src="image"
          width="1200"
          height="900"
          :alt="imageAlt"
          class="block aspect-[4/3] h-auto w-full rounded-[2rem] object-cover shadow-soft-lg"
          loading="eager"
          fetchpriority="high" />
      </div>
    </section>

    <section class="px-4 py-16 md:py-24">
      <div class="container mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div class="space-y-5 text-lg leading-relaxed text-gray-700">
          <p v-for="paragraph in paragraphs" :key="paragraph">{{ paragraph }}</p>
        </div>
        <aside class="rounded-[2rem] bg-sauge-100 p-8">
          <h2 class="text-3xl text-terracotta-800">Au programme</h2>
          <ul class="mt-6 space-y-4">
            <li v-for="highlight in highlights" :key="highlight" class="flex gap-3 text-gray-700">
              <span class="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-terracotta-400" aria-hidden="true" />
              <span>{{ highlight }}</span>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  </div>
</template>
