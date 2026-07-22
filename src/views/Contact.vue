<script setup>
import CTAButton from '../components/CTAButton.vue'
import UiIcon from '../components/UiIcon.vue'
</script>

<template>
  <div class="bg-cream-50">
    <section class="bg-gradient-to-b from-cream-200 to-cream-50 px-4 py-16 md:py-24">
      <div class="container mx-auto max-w-3xl text-center">
        <p class="text-service-label text-terracotta-600">Prendre contact</p>
        <h1 class="page-title mt-4">Parlons de votre besoin</h1>
        <p class="body-copy mx-auto mt-6 max-w-2xl">
          Les coordonnées de Sandra seront ajoutées dès qu’elles seront confirmées. En attendant,
          le questionnaire permet de mieux comprendre votre besoin, votre public et le format souhaité.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <CTAButton to="/questionnaire">Partager mon besoin</CTAButton>
          <a
            href="#repères"
            class="rounded-full border-2 border-terracotta-300 px-7 py-3 font-semibold text-terracotta-700 transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
          >
            Voir les repères
          </a>
        </div>
      </div>
    </section>

    <section id="repères" class="scroll-mt-28 px-4 py-16 md:py-24">
      <div class="container mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article class="rounded-[2rem] bg-white p-8 shadow-soft-lg">
          <div class="flex items-center gap-3">
            <span class="flex h-11 w-11 items-center justify-center rounded-full bg-cream-200 text-terracotta-600" aria-hidden="true">
              <UiIcon name="accompagnement" :size="24" />
            </span>
            <p class="text-service-label text-terracotta-600">Pour les particuliers</p>
          </div>
          <h2 class="mt-4 text-3xl text-terracotta-800 md:text-4xl">Atelier, séance ou premier échange</h2>
          <p class="mt-4 leading-relaxed text-gray-700">
            Si vous cherchez un accompagnement pour un enfant, une femme, un duo ou un senior, commencez par le questionnaire. Il aide à cadrer le public, l’objectif et le format le plus pertinent.
          </p>
          <div class="mt-7">
            <CTAButton to="/questionnaire">Décrire mon besoin</CTAButton>
          </div>
        </article>

        <article class="rounded-[2rem] bg-terracotta-800 p-8 text-white shadow-soft-lg">
          <div class="flex items-center gap-3">
            <span class="flex h-11 w-11 items-center justify-center rounded-full bg-cream-100/15 text-cream-100" aria-hidden="true">
              <UiIcon name="question" :size="24" />
            </span>
            <p class="text-service-label text-cream-200">Une question ?</p>
          </div>
          <h2 class="mt-4 text-3xl md:text-4xl">Consulter les réponses</h2>
          <p class="mt-4 leading-relaxed text-cream-100">
            Retrouvez les informations essentielles sur les séances, les ateliers, les enfants et les différents formats proposés.
          </p>
          <div class="mt-7">
            <CTAButton to="/faq" variant="secondary">Voir la FAQ</CTAButton>
          </div>
        </article>
      </div>
    </section>

    <section class="px-4 pb-16 md:pb-24">
      <div class="container mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        <div class="rounded-[1.75rem] bg-white p-6 shadow-soft">
          <UiIcon name="accompagnement" :size="26" class="text-terracotta-600" />
          <p class="text-sm font-semibold uppercase tracking-[0.16em] text-terracotta-600">Ce qu’il faut préciser</p>
          <h2 class="mt-3 text-2xl text-terracotta-800">Le public et l’âge</h2>
          <p class="mt-2 text-gray-600">Enfants, adolescentes, femmes, duos, mamans ou grand-mères.</p>
        </div>
        <div class="rounded-[1.75rem] bg-white p-6 shadow-soft">
          <UiIcon name="outdoor" :size="26" class="text-terracotta-600" />
          <p class="text-sm font-semibold uppercase tracking-[0.16em] text-terracotta-600">Le contexte</p>
          <h2 class="mt-3 text-2xl text-terracotta-800">Le lieu et le format</h2>
          <p class="mt-2 text-gray-600">Atelier collectif, séance en plein air ou accompagnement individuel.</p>
        </div>
        <div class="rounded-[1.75rem] bg-white p-6 shadow-soft">
          <UiIcon name="contact" :size="26" class="text-terracotta-600" />
          <p class="text-sm font-semibold uppercase tracking-[0.16em] text-terracotta-600">Coordonnées</p>
          <h2 class="mt-3 text-2xl text-terracotta-800">À venir</h2>
          <p class="mt-2 text-gray-600">Les moyens de contact directs seront publiés quand ils seront confirmés.</p>
        </div>
      </div>
    </section>
  </div>
</template>
