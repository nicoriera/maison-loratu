<script setup>
import { siteConfig } from "../config/site.js";
import UiIcon from "./UiIcon.vue";
</script>

<template>
  <footer
    class="bg-gray-50 border-t border-gray-200 mt-auto pb-[calc(5rem+env(safe-area-inset-bottom))] lg:pb-0">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <h3 class="font-serif text-lg text-terracotta-500 mb-4">
            Maison Loratu
          </h3>
          <p class="text-gray-600 text-sm">
            Cabinet de sophrologie dédié à votre bien-être
          </p>
        </div>
        <div>
          <h4 class="mb-4 font-semibold text-gray-900">Vos besoins</h4>
          <ul class="space-y-2">
            <li>
              <router-link
                to="/accompagnement"
                class="footer-link text-sm text-gray-600 hover:text-terracotta-600">
                Accompagnement personnalisé
              </router-link>
            </li>
            <li>
              <router-link
                to="/questionnaire"
                class="footer-link text-sm text-gray-600 hover:text-terracotta-600">
                Décrire mon besoin
              </router-link>
            </li>
            <li>
              <router-link
                to="/structures"
                class="footer-link text-sm text-gray-600 hover:text-terracotta-600">
                Interventions en structures
              </router-link>
            </li>
            <li>
              <router-link
                to="/carte-cadeau"
                class="footer-link text-sm text-gray-600 hover:text-terracotta-600">
                Carte cadeau
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-gray-900 mb-4">Informations légales</h4>
          <ul class="space-y-2">
            <li>
              <router-link
                to="/mentions-legales"
                class="footer-link text-gray-600 hover:text-terracotta-600 text-sm">
                Mentions légales
              </router-link>
            </li>
            <li>
              <router-link
                to="/politique-de-confidentialite"
                class="footer-link text-gray-600 hover:text-terracotta-600 text-sm">
                Politique de confidentialité
              </router-link>
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-1">
          <h4 class="font-semibold text-gray-900 mb-4">Contact</h4>
          <router-link
            to="/contact"
            class="footer-link block text-gray-600 hover:text-terracotta-600 text-sm">
            Nous contacter
          </router-link>
          <router-link
            to="/faq"
            class="footer-link mt-2 inline-block text-gray-600 hover:text-terracotta-600 text-sm">
            Questions fréquentes
          </router-link>
          <a
            :href="siteConfig.instagramUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-link mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-terracotta-700 hover:text-terracotta-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2"
            aria-label="Suivre Maison Loratu sur Instagram, nouvel onglet">
            <UiIcon name="instagram" :size="20" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
      <div
        class="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>
          &copy; {{ new Date().getFullYear() }} Maison Loratu. Tous droits
          réservés.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  position: relative;
  transition: color var(--duration-nav) var(--ease-warm-out);
}
.footer-link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--duration-nav) var(--ease-warm-out);
}
.footer-link:hover::after {
  transform: scaleX(1);
}
.footer-link:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
@media (prefers-reduced-motion: reduce) {
  .footer-link::after {
    transition-duration: 0.01ms;
  }
}
</style>
