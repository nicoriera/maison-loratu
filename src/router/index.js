import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Questionnaire from '../views/Questionnaire.vue'
import Merci from '../views/Merci.vue'
import MentionsLegales from '../views/MentionsLegales.vue'
import PolitiqueConfidentialite from '../views/PolitiqueConfidentialite.vue'
import Ateliers from '../views/Ateliers.vue'
import Contact from '../views/Contact.vue'
import Accompagnement from '../views/Accompagnement.vue'
import CarteCadeau from '../views/CarteCadeau.vue'
import FAQ from '../views/FAQ.vue'
import DevisStructure from '../views/DevisStructure.vue'
import Structures from '../views/Structures.vue'
import Administration from '../views/Administration.vue'
import { getUser } from '@netlify/identity'

const isLocalAdminPreview = import.meta.env.DEV && import.meta.env.VITE_ADMIN_LOCAL_PREVIEW === 'true'

const hasAdminRole = (user) => {
  const metadata = user?.appMetadata ?? user?.app_metadata
  return Array.isArray(metadata?.roles) && metadata.roles.includes('admin')
}

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 112 }
    }

    return { top: 0 }
  },
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
      path: '/accompagnement',
      name: 'accompagnement',
      component: Accompagnement,
      meta: { transition: 'page-slide-left' },
    },
    {
      path: '/carte-cadeau',
      name: 'carte-cadeau',
      component: CarteCadeau,
      meta: { transition: 'page-slide-left' },
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQ,
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
      meta: { transition: 'page-slide-left', adminOnly: true },
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

router.beforeEach(async (to) => {
  if (!to.meta.adminOnly || isLocalAdminPreview) return true

  const user = await getUser()
  if (user && !hasAdminRole(user)) return { name: 'home' }

  return true
})

export default router
