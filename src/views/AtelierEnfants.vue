<script setup>
import WorkshopDetail from '../components/WorkshopDetail.vue'
</script>

<template>
  <WorkshopDetail
    eyebrow="Atelier en petit groupe"
    title="Ateliers enfants"
    meta="1 h 30 · 38 € · 8 participants maximum"
    intro="Des ateliers joyeux pour aider les petits cœurs à grandir sereinement."
    :paragraphs="[
      'À travers le yoga kids, des histoires, des jeux de respiration, des mouvements et des temps de relaxation, les enfants apprennent à accueillir leurs émotions, à retrouver leur calme, à prendre confiance et à mieux dormir.',
      'Chaque atelier est imaginé autour d’une thématique différente, pour répondre à leurs envies de bouger, de rêver, de respirer et de s’épanouir en douceur.',
      'Un moment pour rire, explorer, se détendre et repartir avec des outils à emporter partout avec soi.',
    ]"
    :highlights="[
      'Mouvements doux et respiration ludique',
      'Jeux de visualisation',
      'Thématiques : animaux de la savane, mission dans l’espace, petit koala et sa maman',
    ]"
    image="/images/children-session.webp"
    image-alt="Enfants réunis pour un atelier de sophrologie" />
</template>
