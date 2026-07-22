<script setup>
import CTAButton from '../components/CTAButton.vue'
import UiIcon from '../components/UiIcon.vue'
import { siteConfig } from '../config/site.js'

const offerings = [
  {
    title: 'Ateliers collectifs & duos',
    audience: '1 h 30 · 38 €',
    icon: 'workshops',
    description: 'Des ateliers en petit groupe pour respirer, se détendre et partager un moment convivial.',
    bullets: ['8 participantes maximum', 'Respiration et relaxation', 'Visualisation positive', 'Sommeil plus serein', 'Concentration et outils simples'],
    to: '/questionnaire',
    action: 'Préparer mon atelier',
  },
  {
    title: 'Séances en plein air',
    audience: '45 min · 15 €',
    icon: 'outdoor',
    description: 'Une parenthèse dehors pour respirer, marcher, ressentir et revenir à l’essentiel.',
    bullets: ['8 participantes maximum', 'Respirer au contact de la nature', 'Marcher, sentir, être'],
    to: '/questionnaire',
    action: 'Parler de mon besoin',
  },
  {
    title: 'Accompagnement individuel',
    audience: '1 h · 60 €',
    icon: 'accompagnement',
    description: 'Un accompagnement personnalisé pour avancer à votre rythme et selon votre besoin.',
    bullets: ['Confiance et émotions', 'Stress, anxiété et sommeil', 'Grossesse et parentalité', 'Examens et changement professionnel'],
    to: '/questionnaire',
    action: 'Préparer mon échange',
  },
]
</script>

<template>
  <div class="bg-cream-50">
    <section class="bg-gradient-to-b from-cream-200 to-cream-50 px-4 py-16 md:py-24">
      <div class="container mx-auto max-w-4xl text-center">
        <p class="text-service-label text-terracotta-600">Les ateliers</p>
        <h1 class="page-title mt-4">Des parenthèses pour respirer</h1>
        <p class="body-copy mx-auto mt-6 max-w-2xl">
          Les ateliers s’adressent aux enfants, aux adolescentes, aux femmes et aux grand-mères. Découvrez les formats et préparez votre demande ; les dates seront ajoutées dès que le compte Resalib sera créé.
        </p>
        <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <CTAButton to="/ateliers#formats">Voir les formats</CTAButton>
          <a
            href="/contact"
            class="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-terracotta-300 px-7 py-3 text-center font-semibold text-terracotta-700 transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
          >
            Être recontacté
          </a>
        </div>
      </div>
    </section>

    <section id="formats" class="scroll-mt-28 px-4 py-16 md:py-24">
      <div class="container mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <article
          v-for="offer in offerings"
          :key="offer.title"
          class="rounded-[1.75rem] bg-white p-7 shadow-soft"
        >
          <div class="flex items-start justify-between gap-4">
            <p class="text-sm font-semibold uppercase tracking-[0.16em] text-terracotta-600">{{ offer.audience }}</p>
            <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream-200 text-terracotta-600" aria-hidden="true">
              <UiIcon :name="offer.icon" :size="26" />
            </span>
          </div>
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

    <section class="bg-white px-4 py-16 md:py-24">
      <div class="container mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <img src="/images/outdoor-session.jpg" alt="Groupe en séance de respiration en plein air au bord de l’océan" class="block aspect-[4/3] h-auto w-full rounded-[2rem] object-cover object-center shadow-soft-lg" loading="lazy" />
        <div>
          <p class="text-service-label text-terracotta-600">Au fil des saisons</p>
          <h2 class="mt-4 text-3xl text-terracotta-800 md:text-4xl">Des parenthèses dehors</h2>
          <p class="mt-4 leading-relaxed text-gray-700">
            La nature devient un allié pour apaiser le mental, libérer les tensions et retrouver une énergie plus légère.
            Une invitation à marcher, respirer, ressentir… et simplement être.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-sauge-100 px-4 py-16 md:py-24">
      <div class="container mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_0.9fr]">
        <article class="rounded-[2rem] bg-white p-8 shadow-soft-lg">
          <p class="text-service-label text-terracotta-600">Réservation</p>
          <h2 class="mt-4 text-3xl text-terracotta-800 md:text-4xl">Le calendrier arrive bientôt</h2>
          <p class="mt-4 max-w-2xl leading-relaxed text-gray-700">
            Sandra ajoutera le lien de réservation Resalib dès que son compte sera prêt. En attendant, le contact reste la bonne porte d’entrée pour préciser votre besoin.
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
          <p class="text-service-label text-cream-200">Une question ?</p>
          <h2 class="mt-4 text-3xl md:text-4xl">Besoin d’en savoir plus ?</h2>
          <p class="mt-4 leading-relaxed text-cream-100">
            Retrouvez les réponses aux questions les plus fréquentes sur la sophrologie, les enfants,
            les seniors et le fonctionnement des ateliers.
          </p>
          <div class="mt-7">
            <CTAButton to="/faq" variant="secondary">Consulter la FAQ</CTAButton>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
