<script setup>
import CTAButton from '../components/CTAButton.vue'
import { siteConfig } from '../config/site.js'
import UiIcon from '../components/UiIcon.vue'
</script>

<template>
  <div class="bg-cream-50">
    <section class="bg-gradient-to-b from-cream-200 to-cream-50 px-4 py-16 md:py-24">
      <div class="container mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1fr_0.8fr]">
        <div class="max-w-3xl text-center md:text-left">
        <p class="text-service-label text-terracotta-600">Être recontacté</p>
        <h1 class="page-title mt-4">Parlons de votre besoin</h1>
        <p class="body-copy mx-auto mt-6 max-w-2xl">
          Vous hésitez entre plusieurs formats ou souhaitez un accompagnement personnalisé ?
          Répondez à quelques questions pour aider Sandra à comprendre votre situation.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <CTAButton to="/questionnaire">Commencer le questionnaire</CTAButton>
          <router-link
            to="/faq"
            class="rounded-full border-2 border-terracotta-300 px-7 py-3 font-semibold text-terracotta-700 transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
          >
            Questions fréquentes
          </router-link>
          <a
            :href="siteConfig.instagramUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold text-terracotta-700 underline decoration-terracotta-300 underline-offset-4 transition duration-[var(--duration-ui)] ease-[var(--ease-warm-out)] hover:text-terracotta-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
            aria-label="Suivre Maison Loratu sur Instagram, nouvel onglet"
          >
            <UiIcon name="instagram" :size="19" />
            Instagram
          </a>
        </div>
        </div>
        <div class="mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] shadow-soft-lg">
          <img src="/images/sandra-portrait.webp" width="900" height="1352" alt="Sandra, sophrologue et fondatrice de Maison Loratu" class="block aspect-[4/5] w-full object-cover" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>

    <section id="repères" class="scroll-mt-28 px-4 py-16 md:py-24">
      <div class="container mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article class="rounded-[2rem] bg-white p-8 shadow-soft-lg">
          <p class="text-service-label text-terracotta-600">Votre demande</p>
          <h2 class="mt-4 text-3xl text-terracotta-800 md:text-4xl">Décrire votre besoin</h2>
          <p class="mt-4 leading-relaxed text-gray-700">
            Le questionnaire précise le public concerné, votre objectif et le format souhaité. Il ne réserve pas de séance automatiquement.
          </p>
          <div class="mt-7">
            <CTAButton to="/questionnaire">Commencer le questionnaire</CTAButton>
          </div>
        </article>

        <article class="rounded-[2rem] bg-terracotta-800 p-8 text-white shadow-soft-lg">
          <p class="text-service-label text-cream-200">Une question ?</p>
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
          <p class="text-sm font-semibold uppercase tracking-[0.16em] text-terracotta-600">1 · Pour qui ?</p>
          <h2 class="mt-3 text-2xl text-terracotta-800">Le public concerné</h2>
          <p class="mt-2 text-gray-600">Enfant, adolescente, femme, duo, maman ou grand-mère.</p>
        </div>
        <div class="rounded-[1.75rem] bg-white p-6 shadow-soft">
          <p class="text-sm font-semibold uppercase tracking-[0.16em] text-terracotta-600">2 · Pourquoi ?</p>
          <h2 class="mt-3 text-2xl text-terracotta-800">Votre besoin</h2>
          <p class="mt-2 text-gray-600">Calme, confiance, sommeil, émotions ou moment de partage.</p>
        </div>
        <div class="rounded-[1.75rem] bg-white p-6 shadow-soft">
          <p class="text-sm font-semibold uppercase tracking-[0.16em] text-terracotta-600">3 · Et ensuite ?</p>
          <h2 class="mt-3 text-2xl text-terracotta-800">Un échange avec Sandra</h2>
          <p class="mt-2 text-gray-600">Sandra revient vers vous pour préciser le format le plus adapté.</p>
        </div>
      </div>
    </section>
  </div>
</template>
