<script setup>
import CTAButton from '../components/CTAButton.vue'
import ScrollReveal from '../components/ScrollReveal.vue'
import ScrollRevealStagger from '../components/ScrollRevealStagger.vue'
import { siteConfig } from '../config/site.js'

const shortcuts = [
  { label: 'Enfants', href: '#accompagnements' },
  { label: 'Femmes & duos', href: '#accompagnements' },
  { label: 'Seniors', href: '#accompagnements' },
  { label: 'Structures', href: '#structures' },
]

const audiences = [
  {
    title: 'Pour les enfants',
    text: 'Des ateliers ludiques pour apprivoiser les émotions, mieux dormir et prendre confiance.',
    image: '/images/children.jpg',
    href: '#ateliers',
    cta: 'Voir les ateliers enfants',
  },
  {
    title: 'Pour les femmes et les duos',
    text: 'Un temps pour souffler, se retrouver et partager une expérience douce à deux.',
    image: '/images/womens.jpg',
    href: '#ateliers',
    cta: 'Voir les ateliers femmes',
  },
  {
    title: 'Pour les seniors',
    text: 'Des séances adaptées pour cultiver la sérénité, la mobilité douce et le lien.',
    image: '/images/about-lifestyle.png',
    href: '#ateliers',
    cta: 'Voir les ateliers seniors',
  },
  {
    title: 'Pour les structures',
    text: 'Des interventions sur mesure pour les écoles, centres de loisirs et associations.',
    image: '/images/home-hero.png',
    href: '#structures',
    cta: 'Parler de mon projet',
  },
]

const workshops = [
  { title: 'Ateliers enfants', detail: 'Émotions, sommeil et confiance' },
  { title: 'Ateliers femmes & duos', detail: 'Relaxation et temps pour soi' },
  { title: 'Ateliers seniors', detail: 'Sérénité, mobilité douce et lien' },
]

const steps = [
  { title: 'Je repère mon besoin', detail: 'Je choisis le public, le format et le type d’accompagnement qui me correspond.' },
  { title: 'Je prends contact', detail: 'Je passe par le questionnaire pour préciser le contexte, l’âge et les disponibilités.' },
  { title: 'On fixe la suite', detail: 'Sandra confirme si l’atelier, la séance ou l’intervention est adaptée à votre situation.' },
]
</script>

<template>
  <div class="overflow-hidden">
    <section class="relative bg-cream-200">
      <div class="container mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-[1.05fr_0.95fr] md:py-20">
        <div class="hero-fade-in max-w-xl space-y-6">
          <p class="text-service-label text-terracotta-600">Sophrologie & ateliers</p>
          <h1 class="text-5xl leading-[0.98] text-terracotta-800 md:text-7xl">
            Un espace pour <span class="italic">souffler</span>, grandir et revenir à soi.
          </h1>
          <p class="max-w-lg text-lg leading-relaxed text-gray-700 md:text-xl">
            Maison Loratu accompagne les femmes, les enfants, les seniors et les structures avec des séances
            simples, joyeuses et adaptées à chacun.
          </p>
          <div class="flex flex-wrap items-center gap-4">
            <CTAButton to="/ateliers">
              Découvrir les ateliers
            </CTAButton>
            <a
              href="#accompagnements"
              class="rounded-full px-5 py-3 font-semibold text-terracotta-700 underline decoration-terracotta-300 underline-offset-4 transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:text-terracotta-900"
            >
              Choisir mon accompagnement
            </a>
          </div>
          <ul class="grid gap-3 sm:grid-cols-2">
            <li v-for="shortcut in shortcuts" :key="shortcut.label">
              <a
                :href="shortcut.href"
                class="flex h-full items-center justify-between rounded-2xl border border-terracotta-100 bg-white/80 px-4 py-3 text-sm font-semibold text-terracotta-700 shadow-soft transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:-translate-y-0.5 hover:border-terracotta-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
              >
                <span>{{ shortcut.label }}</span>
                <span aria-hidden="true">→</span>
              </a>
            </li>
          </ul>
          <p class="text-sm text-gray-600">
            En studio, en plein air et dans les structures - lieu à venir.
          </p>
        </div>

        <div class="hero-img-slide relative">
          <div class="absolute -inset-3 -rotate-2 rounded-[2rem] bg-terracotta-200/70" aria-hidden="true" />
          <img
            src="/images/home-hero.png"
            alt="Illustration chaleureuse d'un moment partagé autour du bien-être"
            class="relative w-full rounded-[2rem] object-cover shadow-soft-lg"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>

    <section id="accompagnements" class="scroll-mt-28 bg-white px-4 py-16 md:py-24">
      <div class="container mx-auto max-w-6xl">
        <ScrollReveal tag="div" class="mx-auto mb-12 max-w-2xl text-center">
          <p class="mb-3 text-service-label text-terracotta-600">À chacun son chemin</p>
          <h2 class="text-4xl text-terracotta-800 md:text-5xl">Des propositions qui s’adaptent à la vie</h2>
          <p class="mt-4 text-lg leading-relaxed text-gray-600">
            Une approche humaine pour créer un espace de calme, de confiance et de lien, sans imposer un rythme unique.
          </p>
        </ScrollReveal>

        <ScrollRevealStagger class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="audience in audiences"
            :key="audience.title"
            class="group overflow-hidden rounded-[1.5rem] bg-cream-100 shadow-soft transition-transform duration-300 hover:-translate-y-1"
          >
            <img
              :src="audience.image"
              :alt="audience.title"
              class="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div class="space-y-3 p-6">
              <h3 class="text-2xl text-terracotta-800">{{ audience.title }}</h3>
              <p class="leading-relaxed text-gray-700">{{ audience.text }}</p>
              <a
                :href="audience.href"
                class="inline-flex font-semibold text-terracotta-700 underline decoration-terracotta-300 underline-offset-4 transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:text-terracotta-900"
              >
                {{ audience.cta }}
              </a>
            </div>
          </article>
        </ScrollRevealStagger>
      </div>
    </section>

    <section id="ateliers" class="scroll-mt-28 bg-sauge-100 px-4 py-16 md:py-24">
      <div class="container mx-auto max-w-6xl">
        <div class="grid items-start gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <ScrollReveal direction="left" tag="div" class="max-w-md">
            <p class="mb-3 text-service-label text-terracotta-600">Les ateliers Maison Loratu</p>
            <h2 class="text-4xl text-terracotta-800 md:text-5xl">Réserver un moment pour soi</h2>
            <p class="mt-5 text-lg leading-relaxed text-gray-700">
              Des formats collectifs pour expérimenter la sophrologie dans une atmosphère douce,
              accessible et vivante.
            </p>
            <p class="mt-4 text-gray-700">
              Le calendrier sera mis en ligne dès que Resalib sera prêt. En attendant, les parcours restent accessibles par public.
            </p>
            <div class="mt-7">
              <CTAButton to="/ateliers">Voir les ateliers</CTAButton>
            </div>
            <p v-if="!siteConfig.reservationUrl" class="mt-4 text-sm text-gray-600">
              Le calendrier de réservation sera ajouté dès que le compte Resalib sera créé.
            </p>
          </ScrollReveal>

          <ScrollRevealStagger class="grid gap-4">
            <article
              v-for="workshop in workshops"
              :key="workshop.title"
              class="flex items-center justify-between gap-5 rounded-2xl bg-white p-5 shadow-soft"
            >
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.16em] text-terracotta-600">Atelier</p>
                <h3 class="mt-1 text-2xl text-terracotta-800">{{ workshop.title }}</h3>
                <p class="mt-1 text-gray-600">{{ workshop.detail }}</p>
              </div>
              <span class="hidden h-14 w-14 shrink-0 rounded-full bg-cream-200 md:block" aria-hidden="true" />
            </article>
          </ScrollRevealStagger>
        </div>
      </div>
    </section>

    <section id="structures" class="scroll-mt-28 bg-terracotta-800 px-4 py-16 text-white md:py-24">
      <div class="container mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
        <ScrollReveal direction="left" tag="div">
          <p class="mb-3 text-service-label text-cream-200">Écoles · centres de loisirs · associations</p>
          <h2 class="text-4xl md:text-5xl">Des ateliers pensés pour les groupes</h2>
          <p class="mt-5 max-w-xl text-lg leading-relaxed text-cream-100">
            Sandra imagine des interventions adaptées au public, à l’âge et au cadre de votre structure.
            Parlons de votre projet.
          </p>
          <div class="mt-7">
            <CTAButton to="/structures" variant="secondary">Découvrir les interventions</CTAButton>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right" tag="div" class="rounded-[2rem] bg-cream-100 p-8 text-terracotta-800 shadow-soft-lg">
          <p class="text-5xl" aria-hidden="true">✦</p>
          <h3 class="mt-5 text-2xl">Un format à construire ensemble</h3>
          <p class="mt-3 leading-relaxed text-gray-700">
            Le lieu, les dates et le programme seront définis avec chaque structure.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section id="deroulement" class="scroll-mt-28 bg-white px-4 py-16 md:py-24">
      <div class="container mx-auto max-w-6xl">
        <ScrollReveal tag="div" class="mx-auto mb-12 max-w-2xl text-center">
          <p class="mb-3 text-service-label text-terracotta-600">Comment ça se passe ?</p>
          <h2 class="text-4xl text-terracotta-800 md:text-5xl">Un parcours simple et rassurant</h2>
          <p class="mt-4 text-lg leading-relaxed text-gray-600">
            Chaque public suit le même principe : un premier échange clair, un format adapté, puis une séance ou intervention pensée pour le contexte réel.
          </p>
        </ScrollReveal>

        <ScrollRevealStagger class="grid gap-5 md:grid-cols-3">
          <article
            v-for="step in steps"
            :key="step.title"
            class="rounded-[1.5rem] bg-cream-100 p-6 shadow-soft"
          >
            <p class="text-sm font-semibold uppercase tracking-[0.16em] text-terracotta-600">Étape</p>
            <h3 class="mt-3 text-2xl text-terracotta-800">{{ step.title }}</h3>
            <p class="mt-3 leading-relaxed text-gray-700">{{ step.detail }}</p>
          </article>
        </ScrollRevealStagger>
      </div>
    </section>

    <section id="maison" class="scroll-mt-28 bg-cream-100 px-4 py-16 md:py-24">
      <div class="container mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <ScrollReveal variant="image" tag="div" class="order-last overflow-hidden rounded-[2rem] shadow-soft-lg md:order-first">
          <img src="/images/about-lifestyle.png" alt="Ambiance douce et naturelle de Maison Loratu" class="w-full object-cover" loading="lazy" />
        </ScrollReveal>
        <ScrollReveal direction="right" tag="div" class="max-w-xl">
          <p class="mb-3 text-service-label text-terracotta-600">La maison</p>
          <h2 class="text-4xl text-terracotta-800 md:text-5xl">Fleurir à son rythme</h2>
          <p class="mt-5 text-lg leading-relaxed text-gray-700">
            Loratu signifie « fleurir » en basque. C’est l’image d’un accompagnement qui laisse
            de la place à chacun, à chaque âge et à chaque histoire.
          </p>
          <p class="mt-4 text-lg leading-relaxed text-gray-700">
            Équilibre, féminité et écoute sont les valeurs qui guident Sandra dans ses séances.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section id="contact" class="scroll-mt-28 bg-white px-4 py-16 text-center md:py-20">
      <div class="container mx-auto max-w-2xl">
        <ScrollRevealStagger>
          <p class="mb-3 text-service-label text-terracotta-600">Prendre contact</p>
          <h2 class="text-4xl text-terracotta-800 md:text-5xl">On commence par un échange ?</h2>
          <p class="mt-5 text-lg leading-relaxed text-gray-600">
            Les coordonnées et le lien de réservation seront ajoutés prochainement. En attendant,
            découvrez le projet et partagez votre besoin.
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-4">
              <CTAButton to="/structures">Découvrir les interventions</CTAButton>
            <a
              href="#accompagnements"
              class="rounded-full border-2 border-terracotta-500 px-7 py-3 font-semibold text-terracotta-700 transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
            >
              Revoir les accompagnements
            </a>
          </div>
        </ScrollRevealStagger>
      </div>
    </section>
  </div>
</template>
