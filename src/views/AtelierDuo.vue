<script setup>
import WorkshopDetail from '../components/WorkshopDetail.vue'
</script>

<template>
  <WorkshopDetail
    eyebrow="Pour mamans et enfants"
    title="Grandir ensemble"
    meta="1 h 15 · 42 € pour 2"
    intro="Une parenthèse de douceur à vivre à deux."
    :paragraphs="[
      'Cet atelier accueille 4 duos de mamans et d’enfants. C’est une invitation à ralentir, à partager un moment précieux et à tisser de jolis souvenirs ensemble.',
      'À travers des exercices de respiration, de relaxation, de visualisation et des mouvements tout en douceur, vous prenez le temps de vous retrouver, de rire, de vous écouter et simplement d’être ensemble.',
      'Aucun prérequis n’est nécessaire. Les pratiques sont accessibles à tous les enfants et à toutes les femmes, quel que soit l’âge.',
    ]"
    :highlights="[
      '4 duos de mamans et d’enfants',
      'Mobilisation douce et exercices de respiration',
      'Visualisation et relaxation',
      'Un moment doux à partager',
    ]"
    image="/images/duo-mother-daughter-back-stretch.webp"
    image-alt="Une femme et un enfant partageant un atelier de sophrologie" />
</template>
