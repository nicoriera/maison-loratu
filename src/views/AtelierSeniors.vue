<script setup>
import WorkshopDetail from '../components/WorkshopDetail.vue'
</script>

<template>
  <WorkshopDetail
    eyebrow="Atelier en petit groupe"
    title="Ateliers en douceur — vitalité, relaxation, concentration"
    meta="1 h 15 · 25 € par personne · 8 participants maximum"
    intro="Des ateliers pensés pour respirer, bouger en douceur et partager un moment convivial."
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
    image-alt="Personnes participant à un atelier de sophrologie en douceur" />
</template>
