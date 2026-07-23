<script setup>
import CTAButton from "../components/CTAButton.vue";
import { siteConfig } from "../config/site.js";
import OfferingCard from "../components/OfferingCard.vue";

const offerings = [
  {
    title: "Ateliers enfants",
    audience: "1 h 30 · 38 €",
    image: "/images/children-session.png",
    description:
      "Des ateliers en petit groupe pour respirer, se détendre et partager un moment convivial.",
    bullets: [
      "8 participants maximum",
      "Respiration et relaxation",
      "Visualisation positive",
      "Sommeil plus serein",
      "Concentration et outils simples",
    ],
    to: siteConfig.reservationUrl || "/questionnaire",
    action: "Je participe",
  },
  {
    title: "Ateliers duo mère-fille ou grand-mère",
    audience: "1 h 30 · 84 € pour 2 personnes",
    image: "/images/duo-session.png",
    description:
      "Un temps pour souffler, se retrouver et partager une expérience douce à deux.",
    bullets: [
      "Pour 2 personnes",
      "Respiration et relaxation",
      "Exercices complices",
      "Un moment privilégié à partager",
    ],
    to: siteConfig.reservationUrl || "/questionnaire",
    action: "Je participe",
  },
  {
    title: "Ateliers seniors",
    audience: "1 h 30 · 38 €",
    image: "/images/seniors-session.png",
    description:
      "Des séances adaptées pour cultiver la sérénité, la mobilité douce et le lien.",
    bullets: [
      "8 participants maximum",
      "Respiration et relaxation",
      "Mobilité douce",
      "Sérénité et lien social",
    ],
    to: siteConfig.reservationUrl || "/questionnaire",
    action: "Je participe",
  },
  {
    title: "Accompagnement individuel",
    audience: "1 h · 60 €",
    image: "/images/individual-session.png",
    description:
      "Un accompagnement personnalisé pour avancer à votre rythme et selon votre besoin.",
    bullets: [
      "Confiance et émotions",
      "Stress, anxiété et sommeil",
      "Grossesse et parentalité",
      "Examens et changement professionnel",
    ],
    to: siteConfig.reservationUrl || "/questionnaire",
    action: "Préparer mon échange",
  },
];
</script>

<template>
  <div class="bg-cream-50">
    <section
      class="bg-gradient-to-b from-cream-200 to-cream-50 px-4 py-16 md:py-24">
      <div
        class="container mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.95fr_1.05fr]">
        <div class="max-w-2xl text-center md:text-left">
          <p class="text-service-label text-terracotta-600">Les ateliers</p>
          <h1 class="page-title mt-4">Des parenthèses pour respirer</h1>
          <p class="body-copy mx-auto mt-6 max-w-2xl">
            Les ateliers s’adressent aux enfants, aux adolescentes, aux femmes
            et aux grand-mères. Découvrez les formats et choisissez celui qui
            vous correspond.
          </p>
          <div
            class="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap md:justify-start">
            <CTAButton to="/ateliers#formats">Voir les formats</CTAButton>
            <a
              href="/contact"
              class="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-terracotta-300 px-7 py-3 text-center font-semibold text-terracotta-700 transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2">
              Être recontacté
            </a>
          </div>
        </div>
        <div class="overflow-hidden rounded-[2rem] shadow-soft-lg">
          <img
            src="/images/duo-session.png"
            alt="Mère et enfant partageant un atelier de sophrologie"
            class="block aspect-[4/3] w-full object-cover"
            loading="eager"
            fetchpriority="high" />
        </div>
      </div>
    </section>

    <section id="formats" class="scroll-mt-28 px-4 py-16 md:py-24">
      <div
        class="container mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-4">
        <OfferingCard
          v-for="offer in offerings"
          :key="offer.title"
          :offering="offer"
          variant="detailed" />
      </div>
    </section>

    <section class="bg-sauge-100 px-4 py-16 md:py-24">
      <div class="container mx-auto max-w-3xl">
        <article
          class="rounded-[2rem] bg-terracotta-800 p-8 text-white shadow-soft-lg">
          <p class="text-service-label text-cream-200">Une question ?</p>
          <h2 class="mt-4 text-3xl md:text-4xl">Besoin d’en savoir plus ?</h2>
          <p class="mt-4 leading-relaxed text-cream-100">
            Retrouvez les réponses aux questions les plus fréquentes sur la
            sophrologie, les enfants, les seniors et le fonctionnement des
            ateliers.
          </p>
          <div class="mt-7">
            <CTAButton to="/faq" variant="secondary"
              >Questions fréquentes</CTAButton
            >
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
