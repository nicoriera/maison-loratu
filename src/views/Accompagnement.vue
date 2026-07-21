<script setup>
import CTAButton from '../components/CTAButton.vue'

const subjects = [
  'Confiance en soi et émotions',
  'Stress, anxiété et sommeil',
  'Grossesse, parentalité et parcours de vie',
  'Examens, changements professionnels et transitions',
]
</script>

<template>
  <div class="bg-cream-50">
    <section class="bg-cream-200 px-4 py-16 md:py-24">
      <div class="container mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p class="text-service-label text-terracotta-600">Accompagnement personnalisé</p>
          <h1 class="page-title mt-4">Un temps rien que pour vous</h1>
          <p class="body-copy mt-6 max-w-xl">
            Un accompagnement individuel, adapté à votre rythme et à ce que vous traversez aujourd’hui.
            La sophrologie propose des outils simples pour retrouver un peu de calme et d’espace intérieur.
          </p>
          <div class="mt-8"><CTAButton to="/contact">Échanger avec Sandra</CTAButton></div>
        </div>
        <img src="/images/individual-space.jpg" alt="Espace calme dédié à un accompagnement individuel" class="w-full rounded-[2rem] object-cover shadow-soft-lg" />
      </div>
    </section>

    <section class="px-4 py-16 md:py-24">
      <div class="container mx-auto max-w-5xl">
        <div class="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p class="text-service-label text-terracotta-600">Une séance</p>
            <p class="mt-3 text-5xl text-terracotta-800">1 h · 60 €</p>
            <p class="mt-3 text-gray-600">Un format individuel, sur rendez-vous.</p>
          </div>
          <div class="rounded-[2rem] bg-white p-8 shadow-soft-lg">
            <h2 class="text-3xl text-terracotta-800">Pour avancer avec douceur</h2>
            <p class="mt-4 leading-relaxed text-gray-700">
              La séance associe respiration, détente et visualisation positive. Elle peut accompagner une période de stress,
              une difficulté de sommeil ou une transition, sans se substituer à un suivi médical ou psychologique.
            </p>
            <ul class="mt-6 grid gap-3 sm:grid-cols-2">
              <li v-for="subject in subjects" :key="subject" class="rounded-2xl bg-cream-100 px-4 py-3 text-gray-700">{{ subject }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
