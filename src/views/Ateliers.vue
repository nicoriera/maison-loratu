<script setup>
import CTAButton from "../components/CTAButton.vue";
import OfferingCard from "../components/OfferingCard.vue";
import { computed } from "vue";
import { useReservationConfig } from "../config/reservation.js";

const { reservationUrl } = useReservationConfig();

const offerings = computed(() => [
  {
    order: 1,
    title: "Ateliers enfants",
    audience: "1 h 15 · 38 €",
    image: "/images/children-session.webp",
    description:
      "Des ateliers joyeux pour aider les petits cœurs à grandir sereinement.",
    bullets: [
      "8 participants maximum",
      "Yoga kids, histoires et jeux de respiration",
      "Mouvements doux et temps de relaxation",
      "Accueillir les émotions et retrouver son calme",
      "Prendre confiance et mieux dormir",
    ],
    to: "/ateliers/enfants",
    action: "Je découvre",
  },
  {
    order: 3,
    title: "Ateliers duo mère-fille ou grand-mère",
    audience: "1 h 15 · 110 € pour 2 personnes",
    image: "/images/duo-session.webp",
    description:
      "Une parenthèse de douceur à vivre à deux, une invitation à ralentir, à partager un moment précieux et à tisser de jolis souvenirs entre générations.",
    bullets: [
      "2 personnes",
      "Respiration et relaxation",
      "Visualisation et mouvements doux",
      "Une pratique accessible à tous les âges",
    ],
    to: "/ateliers/duo",
    action: "Je découvre",
  },
  {
    order: 2,
    title: "Ateliers en douceur",
    audience: "1 h 15 · 38 €",
    image: "/images/seniors-session.webp",
    description:
      "Des séances pensées pour les seniors qui souhaitent entretenir leur concentration, leur vitalité et leur mobilité tout en douceur.",
    bullets: [
      "8 participants maximum",
      "Respiration et relaxation",
      "Mouvements adaptés et mobilisation douce",
      "Concentration, équilibre et mémoire",
      "Un moment convivial à partager",
    ],
    to: "/ateliers/seniors",
    action: "Je découvre",
  },
  {
    order: 4,
    title: "Accompagnement individuel pour enfants et femmes",
    audience: "1 h · 60 €",
    image: "/images/individual-session.webp",
    description:
      "Un temps rien que pour vous, pour souffler, vous recentrer et avancer à votre rythme.",
    bullets: [
      "Stress, anxiété et troubles du sommeil",
      "Confiance en soi et émotions",
      "Préparation aux examens, à la grossesse ou à un événement",
      "Concentration et étapes de vie",
    ],
    to: reservationUrl.value,
    action: "Je réserve",
  },
].sort((first, second) => first.order - second.order));
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
            <CTAButton to="/ateliers#formats">Voir les ateliers et tarifs</CTAButton>
            <a
              href="/contact"
              class="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-terracotta-300 px-7 py-3 text-center font-semibold text-terracotta-700 transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2">
              Être recontacté
            </a>
          </div>
        </div>
        <div class="overflow-hidden rounded-[2rem] shadow-soft-lg">
          <img
            src="/images/duo-session.webp"
            width="1200"
            height="900"
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
          <p class="mt-4 leading-relaxed text-cream-100">
            Pour une demande particulière, vous pouvez aussi contacter Maison Loratu directement.
          </p>
          <div class="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CTAButton to="/contact" variant="secondary">Contacter Maison Loratu</CTAButton>
            <router-link
              to="/faq"
              class="inline-flex min-h-11 items-center justify-center font-semibold text-cream-100 underline decoration-cream-300 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-100 focus-visible:ring-offset-2 focus-visible:ring-offset-terracotta-800">
              Questions fréquentes
            </router-link>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
