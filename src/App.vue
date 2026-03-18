<script setup>
import { inject, ref } from 'vue'
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const transitionName = inject('transitionName', ref('page-fade'))
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
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
  </div>
</template>
