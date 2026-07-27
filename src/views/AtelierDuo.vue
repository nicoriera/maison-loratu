<script setup>
import WorkshopDetail from '../components/WorkshopDetail.vue'
</script>

<template>
  <WorkshopDetail
    eyebrow="Un atelier à deux"
    title="Ateliers duo mère-fille ou grand-mère-petite-fille"
    meta="1 h 30 · 84 € pour deux personnes"
    intro="Une parenthèse de douceur à vivre à deux."
    :paragraphs="[
      'Ces ateliers sont une invitation à ralentir, à partager un moment précieux et à tisser de jolis souvenirs entre générations.',
      'À travers des exercices de respiration, de relaxation, de visualisation et des mouvements tout en douceur, vous prenez le temps de vous retrouver, de rire, de vous écouter et simplement d’être ensemble.',
      'Aucun prérequis n’est nécessaire. Les pratiques sont accessibles à toutes, quel que soit l’âge.',
    ]"
    :highlights="[
      'Deux participantes',
      'Mobilisation douce et exercices de respiration',
      'Visualisation et relaxation',
      'Un moment doux à partager',
    ]"
    image="/images/duo-session.webp"
    image-alt="Mère et fille partageant un atelier de sophrologie" />
</template>
