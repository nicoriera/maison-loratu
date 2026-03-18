import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Questionnaire from '../views/Questionnaire.vue'
import Merci from '../views/Merci.vue'
import MentionsLegales from '../views/MentionsLegales.vue'
import PolitiqueConfidentialite from '../views/PolitiqueConfidentialite.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/questionnaire',
      name: 'questionnaire',
      component: Questionnaire,
      meta: { transition: 'page-slide-left' },
    },
    {
      path: '/merci',
      name: 'merci',
      component: Merci,
      meta: { transition: 'page-slide-left' },
    },
    {
      path: '/mentions-legales',
      name: 'mentions-legales',
      component: MentionsLegales,
      meta: { transition: 'page-slide-left' },
    },
    {
      path: '/politique-de-confidentialite',
      name: 'politique-confidentialite',
      component: PolitiqueConfidentialite,
      meta: { transition: 'page-slide-left' },
    },
  ],
})

export default router
