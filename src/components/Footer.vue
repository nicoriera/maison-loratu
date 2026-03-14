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
                class="text-gray-600 hover:text-terracotta-600 text-sm transition-colors"
              >
                Mentions légales
              </router-link>
            </li>
            <li>
              <router-link
                to="/politique-de-confidentialite"
                class="text-gray-600 hover:text-terracotta-600 text-sm transition-colors"
              >
                Politique de confidentialité
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-gray-900 mb-4">Contact</h4>
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
