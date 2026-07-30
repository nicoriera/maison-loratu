<script setup>
import WorkshopDetail from '../components/WorkshopDetail.vue'
</script>

<template>
  <WorkshopDetail
    eyebrow="Atelier en petit groupe"
    title="Ateliers en douceur"
    meta="1 h 15 · 38 € · 8 participants maximum"
    intro="Des ateliers pensés pour les seniors, afin de respirer, bouger en douceur et partager un moment convivial."
    :paragraphs="[
      'Chacun évolue à son rythme dans une ambiance bienveillante et chaleureuse.',
      'Au programme : des exercices de respiration, de relaxation, de mobilisation douce et des activités favorisant la concentration, l’équilibre et la stabilité.',
      'Un rendez-vous pour prendre soin de soi, entretenir ses capacités, retrouver de la vitalité et cultiver le plaisir d’être ensemble.',
    ]"
    :highlights="[
      'Respiration et relaxation',
      'Mobilisation douce',
      'Concentration, équilibre et stabilité',
      'Mémoire, vitalité et convivialité',
    ]"
    image="/images/seniors-session.webp"
    image-alt="Seniors participant à un atelier de sophrologie" />
</template>
