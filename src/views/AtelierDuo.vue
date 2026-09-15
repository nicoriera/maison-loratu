<script setup>
import WorkshopDetail from '../components/WorkshopDetail.vue'
</script>

<template>
  <WorkshopDetail
    eyebrow="Pour une mama et son enfant"
    title="DUO Mama & enfant"
    meta="1 h 15 · 60 € · atelier privé · Disponible en carte cadeau"
    intro="Une parenthèse de douceur à vivre à deux."
    :paragraphs="[
      'Cet atelier privé accueille une mama et son enfant. C’est une invitation à ralentir, à partager un moment précieux et à tisser de jolis souvenirs ensemble.',
      'À travers des exercices de respiration, de relaxation, de visualisation et des mouvements tout en douceur, vous prenez le temps de vous retrouver, de rire, de vous écouter et simplement d’être ensemble.',
      'Aucun prérequis n’est nécessaire. L’atelier est également disponible en carte cadeau.',
    ]"
    :highlights="[
      'Un atelier privé pour une mama et son enfant',
      'Mobilisation douce et exercices de respiration',
      'Visualisation et relaxation',
      'Un moment doux à partager',
      'Disponible en carte cadeau',
    ]"
    image="/images/duo-mother-daughter-back-stretch.webp"
    image-alt="Une femme et un enfant partageant un atelier de sophrologie"
    gift-card-to="/carte-cadeau" />
</template>
