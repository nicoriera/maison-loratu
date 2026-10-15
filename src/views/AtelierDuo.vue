<script setup>
import WorkshopDetail from '../components/WorkshopDetail.vue'
</script>

<template>
  <WorkshopDetail
    eyebrow="Pour un parent et son enfant"
    title="Parent-hèses à deux"
    meta="1 h 15 · 80 € · atelier privé · Disponible en carte cadeau"
    intro="Une parenthèse de douceur à vivre à deux."
    :paragraphs="[
      'Cet atelier privé se décline pour un papa et son enfant ou pour une maman et son enfant. C’est une invitation à ralentir, à partager un moment précieux et à tisser de jolis souvenirs ensemble.',
      'À travers des exercices de respiration, de relaxation, de visualisation et des mouvements tout en douceur, vous prenez le temps de vous retrouver, de rire, de vous écouter et simplement d’être ensemble.',
      'Aucun prérequis n’est nécessaire. L’atelier est également disponible en carte cadeau.',
    ]"
    :highlights="[
      'Un papa et son enfant ou une maman et son enfant',
      'Des exercices simples de respiration et de relaxation à deux',
      'Des rituels doux pour les temps calmes et le sommeil',
      'Des outils pour accueillir les émotions ensemble',
      'Disponible en carte cadeau à offrir',
    ]"
    image="/images/duo-mama-enfant-confettis.jpg"
    image-alt="Un parent et son enfant partagent un moment joyeux avec des confettis"
    gift-card-to="/carte-cadeau" />
</template>
