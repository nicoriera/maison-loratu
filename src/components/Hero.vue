<script setup>
</script>

<template>
  <section class="bg-terracotta-400 text-white">
    <div class="container mx-auto px-4 py-12 md:py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <!-- Colonne gauche : Texte -->
        <div class="hero-fade-in space-y-4 md:space-y-6">
          <p class="text-sm md:text-base uppercase tracking-wider font-sans text-white/90">
            SOPHROLOGIE & ATELIERS
          </p>
          <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white leading-tight">
            Maison Loratu
          </h1>
        </div>
        
        <!-- Colonne droite : Image (translation seule, pas d’opacité → évite le flash) -->
        <div class="order-first md:order-last rounded-lg shadow-soft-lg overflow-hidden">
          <img
            src="/images/womens.webp"
            width="1200"
            height="1500"
            alt="Femmes réunies dans un moment de bien-être et de partage"
            class="w-full h-auto object-cover hero-img-slide"
            loading="eager"
            fetchpriority="high"
            fetchpriority="high"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </section>
</template>
