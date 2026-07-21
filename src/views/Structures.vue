<script setup>
import CTAButton from '../components/CTAButton.vue'

const audiences = [
  {
    title: 'Écoles',
    text: 'Des ateliers adaptés à l’âge des enfants pour apprivoiser les émotions, se concentrer et retrouver du calme.',
  },
  {
    title: 'Centres de loisirs',
    text: 'Des séances ludiques et accessibles, pensées pour s’intégrer naturellement au rythme des activités.',
  },
  {
    title: 'Associations',
    text: 'Un format construit avec votre équipe selon votre public, vos objectifs et vos contraintes.',
  },
]

const steps = [
  'Vous partagez le contexte et le public concerné.',
  'Sandra échange avec vous sur le format le plus adapté.',
  'Le contenu, les dates et les conditions sont définis ensemble.',
]
</script>

<template>
  <main class="bg-cream-50">
    <section class="bg-gradient-to-b from-cream-200 to-cream-50 px-4 py-16 md:py-24">
      <div class="container mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p class="text-service-label text-terracotta-600">Interventions sur mesure</p>
          <h1 class="page-title mt-4">La sophrologie entre dans vos structures.</h1>
          <p class="body-copy mt-6 max-w-2xl">
            Maison Loratu imagine des ateliers simples, joyeux et adaptés aux écoles, centres de loisirs et associations.
            Le programme se construit avec vous, sans format imposé.
          </p>
          <div class="mt-8 flex flex-wrap gap-4">
            <CTAButton to="/devis-structure">Parler de mon projet</CTAButton>
            <a href="#formats" class="rounded-full px-5 py-3 font-semibold text-terracotta-700 underline decoration-terracotta-300 underline-offset-4 hover:text-terracotta-900">Voir les formats</a>
          </div>
        </div>
        <img src="/images/home-hero.png" alt="Illustration douce d’un espace Maison Loratu" class="rounded-[2rem] shadow-soft-lg" />
      </div>
    </section>

    <section id="formats" class="scroll-mt-28 px-4 py-16 md:py-24">
      <div class="container mx-auto max-w-6xl">
        <div class="max-w-2xl">
          <p class="text-service-label text-terracotta-600">Pour qui ?</p>
          <h2 class="section-title mt-3">Un atelier pour chaque cadre</h2>
        </div>
        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <article v-for="audience in audiences" :key="audience.title" class="rounded-[1.75rem] bg-white p-7 shadow-soft">
            <h3 class="text-2xl text-terracotta-800">{{ audience.title }}</h3>
            <p class="mt-4 leading-relaxed text-gray-700">{{ audience.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-sauge-100 px-4 py-16 md:py-24">
      <div class="container mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p class="text-service-label text-terracotta-600">Comment ça se passe ?</p>
          <h2 class="section-title mt-3">Un premier échange pour bien cadrer votre besoin</h2>
        </div>
        <ol class="space-y-4">
          <li v-for="(step, index) in steps" :key="step" class="flex gap-4 rounded-2xl bg-white p-5 shadow-soft">
            <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-terracotta-500 font-semibold text-white">{{ index + 1 }}</span>
            <span class="leading-relaxed text-gray-700">{{ step }}</span>
          </li>
        </ol>
      </div>
    </section>

    <section class="px-4 py-16 md:py-24">
      <div class="container mx-auto max-w-4xl rounded-[2rem] bg-terracotta-800 p-8 text-center text-white shadow-soft-lg md:p-12">
        <h2 class="text-4xl md:text-5xl">Vous avez un projet ?</h2>
        <p class="mx-auto mt-5 max-w-2xl leading-relaxed text-cream-100">Le lieu, les dates, le public et le programme seront définis avec Sandra selon votre contexte.</p>
        <div class="mt-8"><CTAButton to="/devis-structure" variant="secondary">Décrire ma structure</CTAButton></div>
      </div>
    </section>
  </main>
</template>
