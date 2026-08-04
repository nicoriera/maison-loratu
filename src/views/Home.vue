<script setup>
import CTAButton from "../components/CTAButton.vue";
import ScrollReveal from "../components/ScrollReveal.vue";
import ScrollRevealStagger from "../components/ScrollRevealStagger.vue";
import OfferingCard from "../components/OfferingCard.vue";
import { onMounted, ref } from "vue";

const audiences = [
  {
    order: 1,
    title: "Ateliers enfants — émotions, sommeil, apaisement",
    detail: "1 h 15 · 20 € par personne · 8 participants maximum",
    image: "/images/children-studio-sun-markers.webp",
    href: "/ateliers/enfants",
    cta: "Je découvre",
  },
  {
    order: 3,
    title: "Atelier Duo — sérénité, partage",
    detail: "1 h 15 · 49 € pour 2 personnes",
    image: "/images/duo-mother-daughter-back-stretch.webp",
    href: "/ateliers/duo",
    cta: "Je découvre",
  },
  {
    order: 2,
    title: "Ateliers en douceur — vitalité, relaxation, concentration",
    detail: "1 h 15 · 25 € par personne · 8 participants maximum",
    image: "/images/seniors-session.webp",
    href: "/ateliers/seniors",
    cta: "Je découvre",
  },
  {
    order: 4,
    title: "Accompagnement individuel pour enfants et femmes",
    detail: "1 h · 60 €",
    image: "/images/individual-session.webp",
    href: "/accompagnement",
    cta: "Je découvre",
  },
].sort((first, second) => first.order - second.order);

const featuredWorkshopFallback = {
  enabled: true,
  label: "En ce moment",
  title: "Atelier & sophrologie",
  summary: "",
  ctaLabel: "Voir les ateliers à venir",
  ctaHref: "/ateliers",
};
const featuredWorkshop = ref(featuredWorkshopFallback);

const loadPublicContent = async () => {
  if (
    import.meta.env.DEV &&
    import.meta.env.VITE_ENABLE_PUBLIC_CONTENT !== "true"
  )
    return;

  try {
    const response = await fetch("/api/content", {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) return;
    const content = await response.json();
    if (
      content.public?.atelierDuMoment?.enabled &&
      content.public.atelierDuMoment.title &&
      content.public.atelierDuMoment.title
    ) {
      featuredWorkshop.value = content.public.atelierDuMoment;
    }
  } catch {
    featuredWorkshop.value = featuredWorkshopFallback;
  }
};

onMounted(loadPublicContent);
</script>

<template>
  <div class="overflow-hidden">
    <section class="relative bg-cream-200">
      <div
        class="container mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-20">
        <div class="hero-fade-in max-w-xl space-y-6">
          <h1
            class="text-4xl leading-[0.98] text-terracotta-800 sm:text-5xl md:text-7xl">
            Un moment pour <span class="italic">souffler</span>, ensemble.
          </h1>
          <p class="max-w-lg text-lg leading-relaxed text-gray-700 md:text-xl">
            Des ateliers de sophrologie conçus pour toutes les générations, des
            enfants aux grand-mères.
          </p>
          <div
            class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <CTAButton to="/ateliers"> Découvrir les ateliers </CTAButton>
            <router-link
              to="/accompagnement"
              class="inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-center font-semibold text-terracotta-700 underline decoration-terracotta-300 underline-offset-4 transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:text-terracotta-900">
              Accompagnement individuel
            </router-link>
          </div>
        </div>

        <div class="hero-img-slide relative">
          <div
            class="absolute -inset-3 -rotate-2 rounded-[2rem] bg-terracotta-200/70"
            aria-hidden="true" />
          <img
            src="/images/women-trio.webp"
            width="1200"
            height="1500"
            alt="Trois femmes réunies dans un moment calme, les visages rapprochés"
            class="relative block aspect-[4/3] w-full rounded-[2rem] object-cover object-center shadow-soft-lg"
            fetchpriority="high" />
        </div>
      </div>
    </section>

    <section class="bg-cream-100 px-4 py-16 md:py-24">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl text-terracotta-800 sm:text-4xl md:text-5xl">
          Qu’est-ce que la sophrologie ?
        </h2>
        <p class="mt-6 text-lg leading-relaxed text-gray-700">
          C’est une méthode douce qui associe respiration, relaxation et visualisation positive. Elle aide à mieux gérer le stress, apaiser les émotions et retrouver un équilibre entre le corps et l’esprit, avec des outils simples au quotidien. La sophrologie améliore le sommeil des petits et des grands.
        </p>
        <p class="mt-4 text-lg leading-relaxed text-gray-700">
          Elle accompagne aussi la préparation des grands moments de la vie des femmes, comme l’adolescence, la grossesse et l’accouchement, ou encore la ménopause. Les exercices peuvent se refaire chez soi, avec son enfant ou dans son cocon familial.
        </p>
      </div>
    </section>

    <section
      id="ateliers"
      class="scroll-mt-28 bg-sauge-100 px-4 py-16 md:py-24">
      <div id="accompagnements" class="container mx-auto max-w-6xl">
        <ScrollReveal tag="div" class="mx-auto mb-12 max-w-3xl text-center">
          <p class="mb-3 text-service-label text-terracotta-600">
            Les ateliers de sophrologie
          </p>
          <h2 class="text-3xl text-terracotta-800 sm:text-4xl md:text-5xl">
            Des parenthèses pour respirer
          </h2>
          <p class="mt-5 text-lg leading-relaxed text-gray-700">
            Les ateliers s’adressent aux enfants, aux adolescentes, aux femmes et aux grand-mères. Découvrez les formats et choisissez celui qui vous correspond.
          </p>
        </ScrollReveal>

        <ScrollRevealStagger
          class="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
          <OfferingCard
            v-for="audience in audiences"
            :key="audience.title"
            :offering="{ ...audience, to: audience.href }"
            variant="compact"
            :cta-label="audience.cta" />
        </ScrollRevealStagger>

      </div>
    </section>

    <section class="bg-terracotta-800 px-4 py-16 text-white md:py-20">
      <div
        class="container mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[0.92fr_1.08fr]">
        <div class="order-2 md:order-1">
          <p class="text-service-label text-cream-200">
            {{ featuredWorkshop.label }}
          </p>
          <h2 class="mt-3 text-3xl sm:text-4xl">
            {{ featuredWorkshop.title }}
          </h2>
          <div class="mt-5">
            <CTAButton :to="featuredWorkshop.ctaHref" variant="secondary">{{
              featuredWorkshop.ctaLabel
            }}</CTAButton>
          </div>
        </div>
        <div
          class="order-1 overflow-hidden rounded-[2rem] shadow-soft-lg md:order-2">
          <img
            src="/images/paddle-beach.jpg"
            width="1920"
            height="1280"
            alt="Une femme sur un paddle au large, face aux montagnes"
            class="block aspect-[4/3] w-full object-cover object-center"
            loading="lazy"
            decoding="async" />
        </div>
      </div>
    </section>

    <section id="maison" class="scroll-mt-28 bg-cream-100 px-4 py-16 md:py-24">
      <div
        class="container mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <ScrollReveal
          variant="image"
          tag="div"
          class="order-last mx-auto max-w-[17rem] overflow-hidden rounded-[2rem] shadow-soft-lg md:order-first md:mx-0 md:max-w-[18rem]">
          <img
            src="/images/sandra-portrait.webp"
            width="900"
            height="1352"
            alt="Sandra, sophrologue et fondatrice de Maison Loratu"
            class="aspect-[4/5] w-full object-cover"
            loading="lazy" />
        </ScrollReveal>
        <ScrollReveal direction="right" tag="div" class="max-w-xl">
          <p class="mb-3 text-service-label text-terracotta-600">La maison</p>
          <h2 class="text-3xl text-terracotta-800 sm:text-4xl md:text-5xl">
            Fleurir à son rythme
          </h2>
          <p class="mt-5 text-lg leading-relaxed text-gray-700">
            Je m’appelle Sandra. J’ai 38 ans et je suis maman de deux enfants.
            J’ai découvert la sophrologie pendant ma première grossesse, puis je
            me suis formée pour devenir sophrologue certifiée et me spécialiser
            en relaxation ludique pour les enfants.
          </p>
          <p class="mt-4 text-lg leading-relaxed text-gray-700">
            Loratu signifie « fleurir » en basque. Maison Loratu est un lieu
            simple, authentique et joyeux, inspiré par mes racines basques et
            espagnoles et par des valeurs de partage, de chaleur et de
            simplicité.
          </p>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>
