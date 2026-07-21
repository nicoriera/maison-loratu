<script setup>
import CTAButton from '../components/CTAButton.vue'
import { siteConfig } from '../config/site.js'

const offerings = [
  {
    title: 'Ateliers enfants',
    audience: 'Enfants',
    description: 'Des exercices ludiques autour des émotions, du sommeil et de la confiance.',
    bullets: ['Apprendre à respirer', 'S’apaiser', 'Renforcer la confiance'],
    to: '/questionnaire',
    action: 'Préparer mon atelier',
  },
  {
    title: 'Ateliers femmes & duos',
    audience: 'Femmes & duos',
    description: 'Un temps de relaxation pour souffler, se retrouver et partager.',
    bullets: ['Retrouver du calme', 'Partager à deux', 'Faire une vraie pause'],
    to: '/questionnaire',
    action: 'Parler de mon besoin',
  },
  {
    title: 'Ateliers seniors',
    audience: 'Seniors',
    description: 'Une pratique douce autour de la sérénité, de la mobilité et du lien.',
    bullets: ['Bouger en douceur', 'Respirer', 'Créer du lien'],
    to: '/questionnaire',
    action: 'Demander un rendez-vous',
  },
  {
    title: 'Interventions structures',
    audience: 'Structures',
    description: 'Des formats sur mesure pour les écoles, centres de loisirs et associations.',
    bullets: ['Programme ajusté', 'Cadre sur mesure', 'Format de groupe'],
    to: '/devis-structure',
    action: 'Parler de mon projet',
  },
]
</script>

<template>
  <div class="bg-cream-50">
    <section class="bg-gradient-to-b from-cream-200 to-cream-50 px-4 py-16 md:py-24">
      <div class="container mx-auto max-w-4xl text-center">
        <p class="text-service-label text-terracotta-600">Les ateliers</p>
        <h1 class="mt-4 text-5xl text-terracotta-800 md:text-6xl">Des parenthèses pour respirer</h1>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-700">
          Les parcours sont pensés pour les enfants, les femmes, les seniors et les structures. Les dates, lieux et disponibilités seront affichés dès que le compte Resalib sera créé.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <CTAButton to="/ateliers#formats">
            Découvrir les disponibilités
          </CTAButton>
          <a
            href="#formats"
            class="rounded-full border-2 border-terracotta-300 px-7 py-3 font-semibold text-terracotta-700 transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
          >
            Voir les formats
          </a>
        </div>
      </div>
    </section>

    <section id="formats" class="scroll-mt-28 px-4 py-16 md:py-24">
      <div class="container mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="offer in offerings"
          :key="offer.title"
          class="rounded-[1.75rem] bg-white p-7 shadow-soft"
        >
          <p class="text-sm font-semibold uppercase tracking-[0.16em] text-terracotta-600">{{ offer.audience }}</p>
          <h2 class="mt-3 text-2xl text-terracotta-800">{{ offer.title }}</h2>
          <p class="mt-3 leading-relaxed text-gray-700">{{ offer.description }}</p>
          <ul class="mt-5 space-y-2 text-sm text-gray-600">
            <li v-for="bullet in offer.bullets" :key="bullet" class="flex items-start gap-2">
              <span class="mt-1 h-2.5 w-2.5 rounded-full bg-terracotta-300" aria-hidden="true" />
              <span>{{ bullet }}</span>
            </li>
          </ul>
          <div class="mt-7">
            <CTAButton :to="offer.to">{{ offer.action }}</CTAButton>
          </div>
        </article>
      </div>
    </section>

    <section class="bg-sauge-100 px-4 py-16 md:py-24">
      <div class="container mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_0.9fr]">
        <article class="rounded-[2rem] bg-white p-8 shadow-soft-lg">
          <p class="text-service-label text-terracotta-600">Réservation</p>
          <h2 class="mt-4 text-3xl text-terracotta-800 md:text-4xl">Le calendrier arrive bientôt</h2>
          <p class="mt-4 max-w-2xl leading-relaxed text-gray-700">
            Sandra ajoutera le lien de réservation Resalib dès que son compte sera prêt. En attendant, le contact reste la bonne porte d’entrée pour les demandes enfants, femmes, seniors et structures.
          </p>
          <div class="mt-7 flex flex-wrap gap-4">
            <a
              v-if="siteConfig.reservationUrl"
              :href="siteConfig.reservationUrl"
              target="_blank"
              rel="noreferrer"
              class="inline-flex min-h-11 items-center justify-center rounded-full bg-terracotta-500 px-7 py-3 font-semibold text-white transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
            >
              Réserver un atelier
            </a>
            <CTAButton v-else to="/contact">Être recontacté</CTAButton>
          </div>
        </article>

        <article class="rounded-[2rem] bg-terracotta-800 p-8 text-white shadow-soft-lg">
          <p class="text-service-label text-cream-200">Pour les structures</p>
          <h2 class="mt-4 text-3xl md:text-4xl">Une intervention construite ensemble</h2>
          <p class="mt-4 leading-relaxed text-cream-100">
            Le lieu, les dates, l’âge du groupe et le format se définissent avec la structure.
            Cette version V1 reste volontairement simple, lisible et sans promesse d’agenda fictif.
          </p>
          <div class="mt-7">
            <CTAButton to="/devis-structure" variant="secondary">Parler de mon projet</CTAButton>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
