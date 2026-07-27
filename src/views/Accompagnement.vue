<script setup>
import CTAButton from '../components/CTAButton.vue'
import { useReservationConfig } from '../config/reservation.js'

const { reservationUrl } = useReservationConfig()

const subjects = [
  'Stress, anxiété et troubles du sommeil',
  'Confiance en soi et émotions',
  'Préparation aux examens, à la grossesse ou à un événement',
  'Concentration et étapes de vie',
]

const sessionSteps = [
  'Temps d’échange',
  'Exercices de relaxation',
  'Visualisation',
  'Temps de partage',
  'Clôture avec des techniques simples à réutiliser',
]

const foundations = [
  {
    title: 'Respiration',
    text: 'Apprivoiser sa respiration et développer sa capacité respiratoire pour favoriser l’oxygénation du corps.',
  },
  {
    title: 'Relâchement musculaire',
    text: 'Favoriser la détente des muscles pour apaiser le mental.',
  },
  {
    title: 'Visualisation',
    text: 'Mobiliser l’imagination et la conscience pour préparer un état plus serein.',
  },
  {
    title: 'Pensée positive',
    text: 'Entraîner le cerveau à faire aussi de la place aux ressources, aux réussites et au positif.',
  },
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
            Un temps rien que pour vous, pour souffler, vous recentrer et avancer à votre rythme.
            Chaque accompagnement est personnalisé selon vos besoins du moment.
          </p>
          <div class="mt-8"><CTAButton :to="reservationUrl">Je réserve</CTAButton></div>
        </div>
        <img src="/images/individual-session.webp" width="1200" height="900" alt="Petit bureau calme pour un accompagnement individuel" class="block aspect-[4/3] h-auto w-full rounded-[2rem] object-cover shadow-soft-lg" loading="lazy" decoding="async" />
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
            <h2 class="text-3xl text-terracotta-800">Des ressources concrètes pour avancer</h2>
            <p class="mt-4 leading-relaxed text-gray-700">
              Grâce à des exercices de respiration, de relaxation, de visualisation et de mouvement doux,
              vous développez des ressources concrètes pour retrouver un équilibre durable.
              La sophrologie ne se substitue pas à un suivi médical ou psychologique.
            </p>
            <ul class="mt-6 grid gap-3 sm:grid-cols-2">
              <li v-for="subject in subjects" :key="subject" class="flex items-center gap-3 rounded-2xl bg-cream-100 px-4 py-3 text-gray-700">
                <span class="h-2.5 w-2.5 shrink-0 rounded-full bg-terracotta-300" aria-hidden="true" />
                <span>{{ subject }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-sauge-100 px-4 py-16 md:py-24">
      <div class="container mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p class="text-service-label text-terracotta-600">Comment se déroule une séance ?</p>
          <h2 class="section-title mt-4">Cinq temps, à votre rythme</h2>
          <p class="mt-5 max-w-md leading-relaxed text-gray-700">
            Chaque séance laisse une place à l’échange, à la pratique et à l’intégration d’outils simples pour le quotidien.
          </p>
        </div>
        <ol class="grid gap-4">
          <li
            v-for="(step, index) in sessionSteps"
            :key="step"
            class="flex items-center gap-5 rounded-2xl bg-white px-5 py-4 shadow-soft">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta-500 font-semibold text-white">
              {{ index + 1 }}
            </span>
            <span class="text-lg text-gray-800">{{ step }}</span>
          </li>
        </ol>
      </div>
    </section>

    <section class="px-4 py-16 md:py-24">
      <div class="container mx-auto max-w-6xl">
        <div class="mx-auto max-w-3xl text-center">
          <p class="text-service-label text-terracotta-600">La Maison Loratu</p>
          <h2 class="section-title mt-4">Les quatre fondements de la sophrologie</h2>
          <p class="mt-5 text-lg leading-relaxed text-gray-700">
            Une maison symbolique pour comprendre les ressources mobilisées pendant les séances.
          </p>
        </div>

        <div class="foundation-house mx-auto mt-12 max-w-4xl">
          <div class="foundation-roof" aria-hidden="true" />
          <div class="grid gap-4 bg-terracotta-100 p-5 sm:grid-cols-2 md:p-8">
            <article
              v-for="(foundation, index) in foundations"
              :key="foundation.title"
              class="rounded-2xl bg-white p-6 shadow-soft">
              <p class="text-sm font-semibold text-terracotta-600">{{ index + 1 }}</p>
              <h3 class="mt-2 text-2xl text-terracotta-800">{{ foundation.title }}</h3>
              <p class="mt-3 leading-relaxed text-gray-700">{{ foundation.text }}</p>
            </article>
          </div>
          <div class="foundation-base">Maison Loratu · respirer, relâcher, visualiser, cultiver le positif</div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.foundation-house {
  filter: drop-shadow(0 14px 24px rgba(93, 42, 28, 0.12));
}

.foundation-roof {
  height: clamp(5rem, 14vw, 9rem);
  background: #b85a36;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

.foundation-base {
  background: #5d2a1c;
  color: #fff;
  padding: 1rem 1.5rem;
  text-align: center;
  font-weight: 600;
  border-radius: 0 0 1.5rem 1.5rem;
}
</style>
