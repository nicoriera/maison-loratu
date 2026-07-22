<script setup>
import CTAButton from '../components/CTAButton.vue'
import ScrollReveal from '../components/ScrollReveal.vue'
import ScrollRevealStagger from '../components/ScrollRevealStagger.vue'
import UiIcon from '../components/UiIcon.vue'
import { siteConfig } from '../config/site.js'
import { computed, nextTick, onMounted, ref } from 'vue'

const audiences = [
  {
    title: 'Pour les enfants',
    text: 'Des ateliers ludiques pour apprivoiser les émotions, mieux dormir et prendre confiance.',
    image: '/images/illustration-child.png',
    href: '/ateliers',
    cta: 'Voir les ateliers enfants',
  },
  {
    title: 'Pour les femmes et les duos',
    text: 'Un temps pour souffler, se retrouver et partager une expérience douce à deux.',
    image: '/images/illustration-duo.png',
    href: '/ateliers',
    cta: 'Voir les ateliers femmes',
  },
  {
    title: 'Pour les seniors',
    text: 'Des séances adaptées pour cultiver la sérénité, la mobilité douce et le lien.',
    image: '/images/illustration-path.png',
    href: '/ateliers',
    cta: 'Voir les ateliers seniors',
  },
  {
    title: 'Accompagnement personnalisé',
    text: 'Un temps individuel pour avancer avec des outils adaptés à votre histoire et votre rythme.',
    image: '/images/illustration-individual.png',
    href: '/accompagnement',
    cta: 'Découvrir l’accompagnement',
  },
]

const workshops = [
  { title: 'Ateliers collectifs & duos', detail: '1 h 30 · 8 participantes maximum · 38 €', icon: 'workshops' },
  { title: 'Séances en plein air', detail: '45 min · 8 participantes maximum · 15 €', icon: 'outdoor' },
  { title: 'Accompagnement individuel', detail: '1 h · 60 €', icon: 'accompagnement' },
]

const momentOptions = [
  {
    id: 'child',
    label: 'Pour un enfant',
    icon: 'workshops',
    title: 'Ateliers enfants',
    text: 'Des exercices ludiques pour apprivoiser les émotions, mieux dormir et prendre confiance.',
    reason: 'Un format ludique pour apprivoiser les émotions et repartir avec des outils simples.',
    to: '/ateliers',
  },
  {
    id: 'duo',
    label: 'À deux ou en famille',
    icon: 'accompagnement',
    title: 'Ateliers collectifs & duos',
    text: 'Une parenthèse pour ralentir ensemble, respirer et créer un souvenir doux.',
    reason: 'Un format à partager pour ralentir ensemble et créer un souvenir doux.',
    to: '/ateliers',
  },
  {
    id: 'self',
    label: 'Pour moi',
    icon: 'outdoor',
    title: 'Accompagnement personnalisé',
    text: 'Un temps individuel pour avancer à votre rythme et selon ce que vous traversez.',
    reason: 'Un format individuel pour être accompagné avec douceur, à votre rythme.',
    to: '/accompagnement',
  },
  {
    id: 'gift',
    label: 'Pour offrir',
    icon: 'gift',
    title: 'Carte cadeau',
    text: 'Deux ateliers à vivre dans un délai de deux mois, seule ou à partager.',
    reason: 'Une attention simple à offrir pour laisser de la place à un moment pour soi.',
    to: '/carte-cadeau',
  },
]

const selectedMomentId = ref('')
const selectedMoment = computed(() => momentOptions.find((option) => option.id === selectedMomentId.value))
const journeyStep = computed(() => (selectedMoment.value ? 2 : 1))
const journeyOptions = ref(null)
const journeyResult = ref(null)

const selectMoment = async (optionId) => {
  selectedMomentId.value = optionId
  await nextTick()
  journeyResult.value?.focus()
}

const resetJourney = async () => {
  selectedMomentId.value = ''
  await nextTick()
  journeyOptions.value?.querySelector('button')?.focus()
}
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
            Maison Loratu propose des séances et des ateliers simples, joyeux et accessibles aux petites filles,
            aux adolescentes, aux femmes, aux mamans et aux grand-mères.
          </p>
          <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <CTAButton to="/ateliers">
              Découvrir les ateliers
            </CTAButton>
            <a href="#parcours" class="inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-center font-semibold text-terracotta-700 underline decoration-terracotta-300 underline-offset-4 transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:text-terracotta-900">
              Trouver mon parcours
            </a>
          </div>
          <p class="text-sm text-gray-600">
            En studio et en plein air — lieu à venir.
          </p>
        </div>

        <div class="hero-img-slide relative">
          <div class="absolute -inset-3 -rotate-2 rounded-[2rem] bg-terracotta-200/70" aria-hidden="true" />
          <img
            src="/images/illustration-hero.png"
            alt="Une femme, une enfant et une grand-mère partagent un moment calme dans un jardin près d’une maison"
            class="relative block aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft-lg"
            fetchpriority="high"
          />
        </div>
      </div>
    </section>

    <section id="parcours" class="scroll-mt-28 bg-white px-4 py-16 md:py-24">
      <div class="container mx-auto max-w-6xl">
        <div class="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <ScrollReveal direction="left" tag="div" class="max-w-md">
            <p class="mb-3 text-service-label text-terracotta-600">Un premier repère</p>
            <h2 class="text-3xl text-terracotta-800 sm:text-4xl md:text-5xl">Qu’est-ce qui vous ferait du bien aujourd’hui ?</h2>
            <p class="mt-5 text-lg leading-relaxed text-gray-600">
              Choisissez une porte d’entrée et découvrez le format qui correspond le mieux à votre envie du moment.
            </p>
          </ScrollReveal>

          <div>
            <div class="mb-5 flex items-center gap-3 text-sm font-semibold text-terracotta-700" aria-label="Progression du parcours">
              <span class="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta-500 text-white" :aria-current="journeyStep === 1 ? 'step' : undefined">{{ journeyStep === 1 ? '1' : '✓' }}</span>
              <span class="h-px flex-1 bg-terracotta-200" aria-hidden="true" />
              <span class="flex h-9 w-9 items-center justify-center rounded-full" :class="journeyStep === 2 ? 'bg-terracotta-500 text-white' : 'border-2 border-terracotta-200 text-terracotta-500'" :aria-current="journeyStep === 2 ? 'step' : undefined">2</span>
              <span class="sr-only">Étape {{ journeyStep }} sur 2</span>
            </div>

            <div v-if="!selectedMoment" ref="journeyOptions" class="grid gap-3 sm:grid-cols-2" role="group" aria-label="Choisir une intention">
              <button
                v-for="option in momentOptions"
                :key="option.id"
                type="button"
                class="flex min-h-16 items-center gap-3 rounded-2xl border-2 border-transparent bg-cream-50 px-5 py-4 text-left font-semibold text-terracotta-800 shadow-soft transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:-translate-y-0.5 hover:border-terracotta-300 hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
                @click="selectMoment(option.id)"
              >
                <UiIcon :name="option.icon" :size="24" class="shrink-0 text-terracotta-600" />
                <span>{{ option.label }}</span>
              </button>
            </div>

            <div v-if="selectedMoment" ref="journeyResult" tabindex="-1" class="mt-5 rounded-[1.5rem] bg-terracotta-800 p-6 text-white shadow-soft-lg outline-none focus-visible:ring-2 focus-visible:ring-terracotta-200 focus-visible:ring-offset-4 focus-visible:ring-offset-white" aria-live="polite" aria-labelledby="journey-result-title">
              <div class="flex items-center justify-between gap-4">
                <p class="text-service-label text-cream-200">Étape 2 · Votre piste</p>
                <button type="button" class="min-h-11 rounded-full px-3 text-sm font-semibold text-cream-100 underline underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-100" @click="resetJourney">
                  Changer
                </button>
              </div>
              <h3 id="journey-result-title" class="mt-3 text-2xl">{{ selectedMoment.title }}</h3>
              <p class="mt-3 font-semibold text-cream-100">Pourquoi ce parcours ?</p>
              <p class="mt-1 leading-relaxed text-cream-100">{{ selectedMoment.reason }}</p>
              <p class="mt-3 leading-relaxed text-cream-100">{{ selectedMoment.text }}</p>
              <div class="mt-5"><CTAButton :to="selectedMoment.to" variant="secondary">Découvrir ce parcours</CTAButton></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="accompagnements" class="scroll-mt-28 bg-white px-4 py-16 md:py-24">
      <div class="container mx-auto max-w-6xl">
        <ScrollReveal tag="div" class="mx-auto mb-12 max-w-2xl text-center">
          <p class="mb-3 text-service-label text-terracotta-600">À chacun son chemin</p>
          <h2 class="text-3xl text-terracotta-800 sm:text-4xl md:text-5xl">Des moments pensés pour les enfants et les femmes, de la petite fille à la grand-mère.</h2>
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
              class="block aspect-[4/3] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div class="space-y-3 p-6">
              <h3 class="text-2xl text-terracotta-800">{{ audience.title }}</h3>
              <p class="leading-relaxed text-gray-700">{{ audience.text }}</p>
              <a
                :href="audience.href"
                class="inline-flex min-h-11 items-center font-semibold text-terracotta-700 underline decoration-terracotta-300 underline-offset-4 transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:text-terracotta-900"
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
              Le calendrier sera mis en ligne dès que Resalib sera prêt. En attendant, Sandra répond à vos questions par contact.
            </p>
            <div class="mt-7">
              <CTAButton to="/ateliers">Voir les ateliers</CTAButton>
            </div>
            <p v-if="!siteConfig.reservationUrl" class="mt-4 text-sm text-gray-600">
              Le calendrier de réservation sera ajouté dès que le compte Resalib sera créé.
            </p>
            <img
              src="/images/paddle-beach.jpg"
              alt="Silhouette sur une planche dans l’eau, au large d’une plage"
              class="mt-8 h-48 w-full rounded-[1.5rem] object-cover shadow-soft"
              loading="lazy"
            />
          </ScrollReveal>

          <ScrollRevealStagger class="grid gap-4">
            <article
              v-for="workshop in workshops"
              :key="workshop.title"
              class="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.16em] text-terracotta-600">Atelier</p>
                <h3 class="mt-1 text-2xl text-terracotta-800">{{ workshop.title }}</h3>
                <p class="mt-1 text-gray-600">{{ workshop.detail }}</p>
              </div>
              <span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cream-200 text-terracotta-600" aria-hidden="true">
                <UiIcon :name="workshop.icon" :size="30" />
              </span>
            </article>
          </ScrollRevealStagger>
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
        <ScrollReveal variant="image" tag="div" class="order-last overflow-hidden rounded-[2rem] shadow-soft-lg md:order-first">
          <img src="/images/about-lifestyle.png" alt="Ambiance douce et naturelle de Maison Loratu" class="w-full object-cover" loading="lazy" />
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

    <section id="contact" class="scroll-mt-28 bg-white px-4 py-16 text-center md:py-20">
      <div class="container mx-auto max-w-2xl">
        <ScrollRevealStagger>
          <p class="mb-3 text-service-label text-terracotta-600">Prendre contact</p>
          <h2 class="text-3xl text-terracotta-800 sm:text-4xl md:text-5xl">On commence par un échange ?</h2>
          <p class="mt-5 text-lg leading-relaxed text-gray-600">
            Tout au long de l’année, retrouvez des ateliers, des séances, des accompagnements et des moments de partage
            pour ralentir, respirer, vous reconnecter à vous-même et cultiver la sérénité.
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <CTAButton to="/contact">Prendre contact</CTAButton>
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
