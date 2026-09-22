<script setup>
import WorkshopDetail from '../components/WorkshopDetail.vue'
</script>

<template>
  <WorkshopDetail
    eyebrow="Pour les mamas et les enfants"
    title="Mamas & enfants"
    meta="1 h 15 · 38 € · 4 familles maximum"
    intro="Un atelier joyeux pour respirer, bouger et se détendre ensemble."
    :paragraphs="[
      'À travers le yoga en duo, des histoires, des jeux de respiration et des mouvements doux, mamas et enfants découvrent des outils simples pour accueillir leurs émotions et retrouver leur calme.',
      'Chaque proposition invite à s’écouter, à prendre confiance et à partager un moment de détente dans une ambiance bienveillante et ludique.',
      'Une parenthèse complice pour rire, respirer et repartir avec des exercices à refaire ensemble à la maison.',
    ]"
    :highlights="[
      'Yoga en duo, histoires et jeux de respiration',
      'Mouvements doux et temps de relaxation',
      'Accueillir les émotions et retrouver son calme ensemble',
      'Complicité, confiance et bien-être',
    ]"
    image="/images/seniors-session.webp"
    image-alt="Mamas et enfants participant ensemble à un atelier de sophrologie" />
</template>
