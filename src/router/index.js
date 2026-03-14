import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Questionnaire from '../views/Questionnaire.vue'
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
    },
    {
      path: '/mentions-legales',
      name: 'mentions-legales',
      component: MentionsLegales,
    },
    {
      path: '/politique-de-confidentialite',
      name: 'politique-confidentialite',
      component: PolitiqueConfidentialite,
    },
  ],
})

export default router
