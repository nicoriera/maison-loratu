<script setup>
</script>

<template>
  <footer class="bg-gray-50 border-t border-gray-200 mt-auto">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="font-serif text-lg text-terracotta-500 mb-4">Maison Loratu</h3>
          <p class="text-gray-600 text-sm">
            Cabinet de sophrologie dédié à votre bien-être
          </p>
        </div>
        <div>
          <h4 class="font-semibold text-gray-900 mb-4">Informations légales</h4>
          <ul class="space-y-2">
            <li>
              <router-link
                to="/mentions-legales"
                class="footer-link text-gray-600 hover:text-terracotta-600 text-sm"
              >
                Mentions légales
              </router-link>
            </li>
            <li>
              <router-link
                to="/politique-de-confidentialite"
                class="footer-link text-gray-600 hover:text-terracotta-600 text-sm"
              >
                Politique de confidentialité
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-gray-900 mb-4">Contact</h4>
          <router-link
            to="/faq"
            class="footer-link text-gray-600 hover:text-terracotta-600 text-sm"
          >
            Questions fréquentes
          </router-link>
          <p class="text-gray-600 text-sm">
            <!-- À compléter avec les informations de contact -->
          </p>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>&copy; {{ new Date().getFullYear() }} Maison Loratu. Tous droits réservés.</p>
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
  content: '';
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
  outline: 2px solid #B85A36;
  outline-offset: 2px;
}
@media (prefers-reduced-motion: reduce) {
  .footer-link::after {
    transition-duration: 0.01ms;
  }
}
</style>
