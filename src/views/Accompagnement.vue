<script setup>
import CTAButton from '../components/CTAButton.vue'

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
          <div class="mt-8"><CTAButton to="/reservation">M’alerter</CTAButton></div>
        </div>
        <img src="/images/individual-session.webp" width="1200" height="900" alt="Petit bureau calme pour un accompagnement individuel" class="block aspect-[4/3] h-auto w-full rounded-[2rem] object-cover shadow-soft-lg" fetchpriority="high" decoding="async" />
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
              vous développez des ressources concrètes pour retrouver davantage d’équilibre au quotidien.
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

        <div class="foundation-house mx-auto mt-8 max-w-4xl sm:mt-12">
          <div class="foundation-roof">
            <div class="foundation-roof-content">
              <p>Un équilibre qui se construit,<br />une ressource après l’autre</p>
            </div>
          </div>
          <div class="foundation-rooms grid sm:grid-cols-2">
            <article
              v-for="foundation in foundations"
              :key="foundation.title"
              class="foundation-room">
              <div class="foundation-room-heading">
                <h3>{{ foundation.title }}</h3>
              </div>
              <p>{{ foundation.text }}</p>
            </article>
          </div>
          <div class="foundation-base">
            Des outils simples à réutiliser au quotidien
          </div>
        </div>

        <div class="mx-auto mt-10 flex max-w-2xl flex-col items-center text-center">
          <p class="text-lg leading-relaxed text-gray-700">
            Une séance individuelle de 1 h, adaptée à votre rythme et à vos besoins.
          </p>
          <div class="mt-6">
            <CTAButton to="/reservation">M’alerter</CTAButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.foundation-house {
  position: relative;
  filter: drop-shadow(0 8px 30px rgba(0, 0, 0, 0.08)) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.05));
}

.foundation-roof {
  position: relative;
  display: grid;
  min-height: clamp(8.5rem, 17vw, 11.5rem);
  place-items: end center;
  overflow: visible;
  background: #b85a36;
  clip-path: polygon(50% 0, 100% 78%, 96% 100%, 4% 100%, 0 78%);
  color: white;
}

.foundation-roof-content {
  z-index: 1;
  padding-bottom: 1.5rem;
  text-align: center;
}

.foundation-roof-content p {
  max-width: 24rem;
  font-family: Georgia, serif;
  font-size: 1.5rem;
  line-height: 1.08;
}

.foundation-rooms {
  gap: 2px;
  padding: 2px;
  background: rgba(93, 42, 28, 0.18);
}

.foundation-room {
  min-height: 14rem;
  padding: clamp(1.5rem, 4vw, 2.25rem);
  background: #fefcf9;
}

.foundation-room:nth-child(2),
.foundation-room:nth-child(3) {
  background: #fdf9f3;
}

.foundation-room-heading {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.foundation-room h3 {
  color: #5d2a1c;
  font-family: Georgia, serif;
  font-size: 1.5rem;
  line-height: 1.08;
}

.foundation-room p {
  @apply text-gray-800;
  margin-top: 1.15rem;
  line-height: 1.7;
}

.foundation-base {
  background: #5d2a1c;
  color: #fff;
  padding: 1.1rem 1.5rem;
  font-weight: 600;
  border-radius: 0 0 1.75rem 1.75rem;
  text-align: center;
}

@media (max-width: 639px) {
  .foundation-roof {
    display: block;
    min-height: 0;
    padding-top: 4.5rem;
    overflow: visible;
    background: transparent;
    clip-path: none;
  }

  .foundation-roof::before {
    position: absolute;
    inset: 0 0 auto;
    height: 4.5rem;
    background: #b85a36;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    content: "";
  }

  .foundation-roof-content {
    position: relative;
    width: 100%;
    padding: 0.85rem 1.25rem 1rem;
    background: #b85a36;
  }

  .foundation-roof-content p {
    max-width: 18rem;
    margin: 0 auto;
    font-size: 1.25rem;
    line-height: 1.15;
  }

  .foundation-room {
    min-height: auto;
    padding: 1.25rem 1.5rem;
  }

  .foundation-room p {
    margin-top: 0.6rem;
    line-height: 1.55;
  }

}
</style>
