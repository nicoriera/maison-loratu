<script setup>
import CTAButton from '../components/CTAButton.vue'
import ScrollReveal from '../components/ScrollReveal.vue'
import ScrollRevealStagger from '../components/ScrollRevealStagger.vue'
import { siteConfig } from '../config/site.js'
import { computed, onMounted, ref } from 'vue'

const audiences = [
  {
    title: 'Ateliers enfants',
    text: 'Des ateliers ludiques pour apprivoiser les émotions, mieux dormir et prendre confiance.',
    detail: '1 h 30 · 38 € · 8 participants maximum',
    image: '/images/children-session.png',
    href: '/ateliers',
    cta: 'Je découvre',
  },
  {
    title: 'Ateliers duo mère-fille ou grand-mère',
    text: 'Un temps pour souffler, se retrouver et partager une expérience douce à deux.',
    detail: '1 h 30 · 84 € pour 2 personnes',
    image: '/images/duo-session.png',
    href: '/ateliers',
    cta: 'Je découvre',
  },
  {
    title: 'Ateliers seniors',
    text: 'Des séances adaptées pour cultiver la sérénité, la mobilité douce et le lien.',
    detail: '1 h 30 · 38 € · 8 participants maximum',
    image: '/images/seniors-session.png',
    href: '/ateliers',
    cta: 'Je découvre',
  },
  {
    title: 'Accompagnement individuel',
    text: 'Un temps individuel pour avancer avec des outils adaptés à votre histoire et votre rythme.',
    detail: '1 h · 60 €',
    image: '/images/individual-session.png',
    href: '/accompagnement',
    cta: 'Je découvre',
  },
]

const reservationLabel = computed(() => (siteConfig.reservationUrl ? 'Réserver et payer en ligne' : 'Être recontacté'))

const featuredWorkshopFallback = {
  enabled: true,
  label: 'En ce moment',
  title: 'Ateliers collectifs & duos',
  summary: '1 h 30 · 8 participantes maximum · 38 € — Une bulle de douceur pour ralentir, respirer et repartir avec des outils simples.',
  ctaLabel: 'Voir les ateliers',
  ctaHref: '/ateliers',
}
const featuredWorkshop = ref(featuredWorkshopFallback)

const loadPublicContent = async () => {
  try {
    const response = await fetch('/api/content', { headers: { Accept: 'application/json' } })
    if (!response.ok) return
    const content = await response.json()
    if (content.public?.atelierDuMoment?.enabled && content.public.atelierDuMoment.title && content.public.atelierDuMoment.summary) {
      featuredWorkshop.value = content.public.atelierDuMoment
    }
  } catch {
    featuredWorkshop.value = featuredWorkshopFallback
  }
}

onMounted(loadPublicContent)
</script>

<template>
  <div class="overflow-hidden">
    <section class="relative bg-cream-200">
      <div class="container mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-20">
        <div class="hero-fade-in max-w-xl space-y-6">
          <p class="text-service-label text-terracotta-600">Sophrologie & ateliers</p>
          <h1 class="text-4xl leading-[0.98] text-terracotta-800 sm:text-5xl md:text-7xl">
            Un moment pour <span class="italic">souffler</span>, ensemble.
          </h1>
          <p class="max-w-lg text-lg leading-relaxed text-gray-700 md:text-xl">
            Des ateliers de sophrologie conçus pour toutes les générations, des enfants aux grand-mères.
          </p>
          <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <CTAButton to="/ateliers">
              Découvrir les ateliers
            </CTAButton>
            <router-link to="/accompagnement" class="inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-center font-semibold text-terracotta-700 underline decoration-terracotta-300 underline-offset-4 transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:text-terracotta-900">
              Accompagnement individuel
            </router-link>
          </div>
        </div>

        <div class="hero-img-slide relative">
          <div class="absolute -inset-3 -rotate-2 rounded-[2rem] bg-terracotta-200/70" aria-hidden="true" />
          <img
            src="/images/women-trio.jpg"
            alt="Trois femmes réunies dans un moment calme, les visages rapprochés"
            class="relative block aspect-[4/3] w-full rounded-[2rem] object-cover object-center shadow-soft-lg"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>

    <section id="ateliers" class="scroll-mt-28 bg-sauge-100 px-4 py-16 md:py-24">
      <div id="accompagnements" class="container mx-auto max-w-6xl">
        <ScrollReveal tag="div" class="mx-auto mb-12 max-w-3xl text-center">
          <p class="mb-3 text-service-label text-terracotta-600">À chacun son moment</p>
          <h2 class="text-3xl text-terracotta-800 sm:text-4xl md:text-5xl">Des moments pensés pour les enfants et les femmes, de la petite fille à la grand-mère.</h2>
          <p class="mt-5 text-lg leading-relaxed text-gray-700">
            Voir les disponibilités et réserver directement sur Resalib.
          </p>
        </ScrollReveal>

        <ScrollRevealStagger class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="audience in audiences"
            :key="audience.title"
            class="group flex flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-soft transition-transform duration-300 hover:-translate-y-1"
          >
            <img
              :src="audience.image"
              :alt="audience.title"
              class="block aspect-[4/3] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div class="flex flex-1 flex-col space-y-3 p-6">
              <h3 class="text-2xl text-terracotta-800">{{ audience.title }}</h3>
              <p class="font-semibold text-terracotta-600">{{ audience.detail }}</p>
              <p class="leading-relaxed text-gray-700">{{ audience.text }}</p>
              <div class="mt-auto pt-3">
                <CTAButton :to="siteConfig.reservationUrl || audience.href">
                  {{ siteConfig.reservationUrl ? 'Réserver et payer en ligne' : audience.cta }}
                </CTAButton>
              </div>
            </div>
          </article>
        </ScrollRevealStagger>

        <div class="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-terracotta-200 bg-cream-50 p-5 text-center sm:flex-row sm:text-left">
          <p class="text-sm leading-relaxed text-gray-700">
            {{ siteConfig.reservationUrl ? 'Réservation et paiement sécurisés via Resalib.' : 'Le lien Resalib sera activé dès que le compte de réservation sera créé.' }}
          </p>
          <CTAButton :to="siteConfig.reservationUrl || '/contact'" variant="secondary">{{ reservationLabel }}</CTAButton>
        </div>
      </div>
    </section>

    <section class="bg-terracotta-800 px-4 py-16 text-white md:py-20">
      <div class="container mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <p class="text-service-label text-cream-200">{{ featuredWorkshop.label }}</p>
          <h2 class="mt-3 text-3xl sm:text-4xl">{{ featuredWorkshop.title }}</h2>
          <p class="mt-3 max-w-2xl text-lg leading-relaxed text-cream-100">{{ featuredWorkshop.summary }}</p>
        </div>
        <CTAButton :to="featuredWorkshop.ctaHref" variant="secondary">{{ featuredWorkshop.ctaLabel }}</CTAButton>
      </div>
    </section>

    <section id="maison" class="scroll-mt-28 bg-cream-100 px-4 py-16 md:py-24">
      <div class="container mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <ScrollReveal variant="image" tag="div" class="order-last mx-auto max-w-sm overflow-hidden rounded-[2rem] shadow-soft-lg md:order-first md:mx-0">
          <img src="/images/sandra-portrait.png" alt="Sandra, sophrologue et fondatrice de Maison Loratu" class="aspect-[4/5] w-full object-cover" loading="lazy" />
        </ScrollReveal>
        <ScrollReveal direction="right" tag="div" class="max-w-xl">
          <p class="mb-3 text-service-label text-terracotta-600">La maison</p>
          <h2 class="text-3xl text-terracotta-800 sm:text-4xl md:text-5xl">Fleurir à son rythme</h2>
          <p class="mt-5 text-lg leading-relaxed text-gray-700">
            Je m’appelle Sandra. J’ai 38 ans et je suis maman de deux enfants. J’ai découvert la sophrologie
            pendant ma première grossesse, puis je me suis formée pour devenir sophrologue certifiée et me spécialiser
            en relaxation ludique pour les enfants.
          </p>
          <p class="mt-4 text-lg leading-relaxed text-gray-700">
            Loratu signifie « fleurir » en basque. Maison Loratu est un lieu simple, authentique et joyeux,
            inspiré par mes racines basques et espagnoles et par des valeurs de partage, de chaleur et de simplicité.
          </p>
        </ScrollReveal>
      </div>
    </section>

  </div>
</template>
