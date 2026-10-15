<script setup>
import WorkshopDetail from '../components/WorkshopDetail.vue'
</script>

<template>
  <WorkshopDetail
    eyebrow="Pour les enfants et leurs proches"
    title="Mamas & enfants"
    meta="45 min · 45 € par binôme mère-fille · 4 binômes"
    intro="Un atelier joyeux pour respirer, bouger et se détendre ensemble."
    :paragraphs="[
      'À travers des jeux de respiration, des mouvements doux et des temps de partage, les enfants accompagnés de leur maman ou de leur grand-mère découvrent des outils simples pour accueillir leurs émotions et retrouver leur calme ensemble.',
      'Chaque proposition invite à s’écouter, à prendre confiance et à partager un moment de détente dans une ambiance bienveillante et ludique.',
      'Une parenthèse complice pour rire, respirer et repartir avec des exercices à refaire ensemble à la maison.',
    ]"
    :highlights="[
      'Un enfant accompagné de sa maman ou de sa grand-mère',
      'Des jeux pour apprendre à respirer, souffler et relâcher les tensions',
      'Des outils pour accueillir les émotions et retrouver le calme ensemble',
      'Un moment pour renforcer la complicité et la confiance',
    ]"
    image="/images/seniors-session.webp"
    image-alt="Mamas et enfants participant ensemble à un atelier de sophrologie" />
</template>
