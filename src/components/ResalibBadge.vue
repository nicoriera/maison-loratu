<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const badgeRoot = ref(null)
const scriptId = 'resalib-sdk'

onMounted(() => {
  if (document.getElementById(scriptId)) return

  const script = document.createElement('script')
  script.id = scriptId
  script.async = true
  script.src = 'https://www.resalib.fr/script/136767/badge.js'
  document.body.appendChild(script)
})

onBeforeUnmount(() => {
  // Le script est partagé et reste chargé pour éviter de réinitialiser le badge
  // lors des changements de route.
})
</script>

<template>
  <div
    ref="badgeRoot"
    class="resalib-badge min-h-12"
    aria-label="Avis et prise de rendez-vous Resalib">
    <div class="rlb-badge">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.resalib.fr/praticien/136767-maison-loratu-sophrologue-certifiee-sophrologue-bayonne#newrdvmodal">
        Voir les avis et prendre rendez-vous sur Resalib
      </a>
    </div>
  </div>
</template>
