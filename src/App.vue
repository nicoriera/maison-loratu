<script setup>
import { inject, onMounted, ref, watch } from 'vue'
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import MobileNavigation from './components/MobileNavigation.vue'
import { applyRouteSeo } from './utils/seo.js'
import { loadReservationConfig } from './config/reservation.js'

const transitionName = inject('transitionName', ref('page-fade'))
const route = useRoute()

watch(
  () => route.fullPath,
  () => applyRouteSeo(route),
  { immediate: true },
)

onMounted(loadReservationConfig)
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow pb-[calc(5rem+env(safe-area-inset-bottom))] lg:pb-0">
      <RouterView v-slot="{ Component, route }">
        <Transition
          :name="transitionName"
          mode="out-in"
        >
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>
    <Footer />
    <MobileNavigation />
  </div>
</template>
