import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Questionnaire from '../views/Questionnaire.vue'
import Merci from '../views/Merci.vue'
import MentionsLegales from '../views/MentionsLegales.vue'
import PolitiqueConfidentialite from '../views/PolitiqueConfidentialite.vue'
import Ateliers from '../views/Ateliers.vue'
import Contact from '../views/Contact.vue'
import DevisStructure from '../views/DevisStructure.vue'
import Structures from '../views/Structures.vue'
import Administration from '../views/Administration.vue'
import { canAccessPrototypeRoute, siteConfig } from '../config/site.js'

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
      path: '/ateliers',
      name: 'ateliers',
      component: Ateliers,
      meta: { transition: 'page-slide-left' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: { transition: 'page-slide-left' },
    },
    {
      path: '/devis-structure',
      name: 'devis-structure',
      component: DevisStructure,
      meta: { transition: 'page-slide-left' },
    },
    {
      path: '/structures',
      name: 'structures',
      component: Structures,
      meta: { transition: 'page-slide-left' },
    },
    {
      path: '/administration',
      name: 'administration',
      component: Administration,
      meta: { transition: 'page-slide-left', prototypeOnly: true },
      beforeEnter: (to) => {
        if (canAccessPrototypeRoute(to.meta, siteConfig)) {
          return true
        }

        return { name: 'home', replace: true }
      },
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
