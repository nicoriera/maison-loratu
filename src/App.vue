<script setup>
import { inject, nextTick, ref, watch } from 'vue'
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import MobileNavigation from './components/MobileNavigation.vue'
import ReservationNotice from './components/ReservationNotice.vue'
import { applyRouteSeo } from './utils/seo.js'

const transitionName = inject('transitionName', ref('page-fade'))
const route = useRoute()
const mainContent = ref(null)

watch(
  () => route.fullPath,
  () => applyRouteSeo(route),
  { immediate: true },
)

watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    mainContent.value?.focus()
  },
)
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <a href="#contenu-principal" class="sr-only z-50 rounded-b-lg bg-terracotta-700 px-4 py-3 font-semibold text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-0">
      Aller au contenu principal
    </a>
    <Header />
    <ReservationNotice v-if="route.name !== 'reservation'" />
    <main id="contenu-principal" ref="mainContent" tabindex="-1" class="flex-grow pb-[calc(5rem+env(safe-area-inset-bottom))] outline-none lg:pb-0">
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
