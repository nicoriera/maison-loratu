<script setup>
import { siteConfig } from '../config/site.js'
</script>

<template>
  <div class="bg-cream-50">
    <section class="flex min-h-[calc(100vh-10rem)] items-center bg-sauge-100 px-4 py-16 md:py-24">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-service-label text-terracotta-600">Réserver avec Maison Loratu</p>
        <h1 class="page-title mt-6">Choisissez votre séance ou votre atelier</h1>
        <p class="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-gray-700">
          Toutes les réservations se font directement sur Resalib : séances individuelles et ateliers.
        </p>
        <div class="mx-auto mt-10 max-w-xl rounded-[2rem] bg-white p-8 text-center shadow-soft-lg">
          <h2 class="text-2xl text-terracotta-800">Prendre rendez-vous</h2>
          <p class="mt-2 leading-relaxed text-gray-600">Sélectionnez ensuite le motif et le créneau qui vous conviennent.</p>
          <a :href="siteConfig.resalibUrl" target="_blank" rel="noopener noreferrer" class="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-terracotta-500 px-7 py-3 font-semibold text-white shadow-soft transition hover:bg-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2">Réserver sur Resalib</a>
        </div>
      </div>
    </section>
  </div>
</template>
