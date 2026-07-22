<script setup>
import CTAButton from '../components/CTAButton.vue'
import UiIcon from '../components/UiIcon.vue'
</script>

<template>
  <div class="bg-cream-50">
    <section class="bg-sauge-100 px-4 py-16 md:py-24">
      <div class="container mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <p class="text-service-label text-terracotta-600">Carte cadeau</p>
          <h1 class="page-title mt-4">Une idée cadeau pleine de douceur</h1>
          <p class="body-copy mt-6 max-w-xl">
            Offrez une parenthèse pour respirer, se retrouver et prendre soin de soi.
          </p>
          <div class="mt-8"><CTAButton to="/contact">Demander une carte cadeau</CTAButton></div>
        </div>
        <div class="overflow-hidden rounded-[2rem] bg-terracotta-800 text-center text-white shadow-soft-lg">
          <img src="/images/illustration-gift.png" alt="Illustration d’une enveloppe fleurie" class="block aspect-[16/9] h-auto w-full object-cover" />
          <div class="p-8 md:p-12">
            <div class="flex items-center justify-center gap-3">
              <UiIcon name="gift" :size="26" class="text-cream-200" />
              <p class="text-service-label text-cream-200">À offrir</p>
            </div>
            <p class="mt-5 text-6xl text-cream-100">114 €</p>
            <p class="mt-4 text-lg text-cream-100">2 ateliers à utiliser dans les 2 mois</p>
          </div>
        </div>
      </div>
    </section>
    <section class="px-4 py-16 text-center md:py-24">
      <div class="container mx-auto max-w-2xl">
        <h2 class="text-3xl text-terracotta-800 sm:text-4xl">Un cadeau qui laisse de la place</h2>
        <p class="mt-5 text-lg leading-relaxed text-gray-700">
          La carte peut être offerte à une petite fille, une femme, une maman ou une grand-mère.
          Sandra précisera les modalités de remise lors de votre échange.
        </p>
      </div>
    </section>
  </div>
</template>
