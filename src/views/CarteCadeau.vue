<script setup>
import CTAButton from '../components/CTAButton.vue'
</script>

<template>
  <div class="bg-cream-50">
    <section class="bg-sauge-100 px-4 py-16 md:py-24">
      <div class="container mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <p class="text-service-label text-terracotta-600">Carte cadeau</p>
          <h1 class="page-title mt-4">Une idée cadeau pleine de douceur</h1>
          <p class="body-copy mt-6 max-w-xl">
            Offrez un moment de douceur à partager entre femmes : mères, filles, sœurs, amies ou grand-mères. Une parenthèse pour ralentir et respirer.
          </p>
          <div class="mt-8"><CTAButton to="/contact">Offrir une carte cadeau</CTAButton></div>
        </div>
        <div class="overflow-hidden rounded-[2rem] bg-terracotta-800 text-center text-white shadow-soft-lg">
          <img src="/images/gift-envelope-heart.webp" width="1200" height="675" alt="Enveloppe ivoire ornée d’un cœur terracotta" class="block aspect-[16/9] h-auto w-full object-cover" loading="lazy" decoding="async" />
          <div class="p-8 md:p-12">
            <p class="text-service-label text-cream-200">Carte cadeau</p>
            <h2 class="mt-4 text-3xl text-cream-100 sm:text-4xl">Atelier Duo</h2>
            <p class="mt-5 text-lg text-cream-100">1 h 15 · valable 2 mois à partir de la date d’achat</p>
          </div>
        </div>
      </div>
    </section>
    <section class="px-4 py-16 text-center md:py-24">
      <div class="container mx-auto max-w-2xl">
        <h2 class="text-3xl text-terracotta-800 sm:text-4xl">Un cadeau qui laisse de la place</h2>
        <p class="mt-5 text-lg leading-relaxed text-gray-700">
          Une parenthèse de douceur à vivre à deux, pour ralentir, apaiser les tensions et se retrouver. Un moment précieux à partager entre femmes, pour nourrir la connexion et tisser de jolis souvenirs entre générations.
        </p>
      </div>
    </section>
  </div>
</template>
