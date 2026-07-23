<script setup>
</script>

<template>
  <div class="min-h-screen bg-cream-50 px-4 py-12">
    <div class="container mx-auto max-w-4xl">
      <div class="rounded-[1.75rem] bg-white p-8 shadow-soft-lg md:p-12">
        <h1 class="mb-8 font-serif text-3xl text-terracotta-800 md:text-4xl">
          Mentions légales
        </h1>

        <div class="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">1. Éditeur du site</h2>
            <p class="text-gray-700">
              Le site <strong>maison-loratu.fr</strong> est édité par :
            </p>
            <p class="text-gray-700">
              Maison Loratu<br>
              <!-- À compléter avec les informations réelles -->
              Adresse : [À compléter]<br>
              Téléphone : [À compléter]<br>
              Email : [À compléter]
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">2. Directeur de publication</h2>
            <p class="text-gray-700">
              <!-- À compléter avec le nom du directeur de publication -->
              [Nom du directeur de publication]
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">3. Hébergement</h2>
            <p class="text-gray-700">
              Le site est hébergé par :
            </p>
            <p class="text-gray-700">
              <!-- À compléter avec les informations d'hébergement -->
              [Nom de l'hébergeur]<br>
              [Adresse de l'hébergeur]
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">4. Propriété intellectuelle</h2>
            <p class="text-gray-700">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est la propriété
              exclusive de Maison Loratu, sauf mention contraire. Toute reproduction, même partielle,
              est interdite sans autorisation préalable.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">5. Responsabilité</h2>
            <p class="text-gray-700">
              Maison Loratu s'efforce d'assurer l'exactitude et la mise à jour des informations
              diffusées sur ce site. Cependant, Maison Loratu ne peut garantir l'exactitude,
              la précision ou l'exhaustivité des informations mises à disposition sur ce site.
            </p>
            <p class="text-gray-700">
              En conséquence, Maison Loratu décline toute responsabilité pour toute imprécision,
              inexactitude ou omission concernant les informations disponibles sur ce site.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">6. Liens hypertextes</h2>
            <p class="text-gray-700">
              Le site peut contenir des liens hypertextes vers d'autres sites présents sur le réseau
              Internet. Les liens vers ces autres ressources vous font quitter le site Maison Loratu.
            </p>
            <p class="text-gray-700">
              Il est possible de créer un lien vers la page d'accueil de ce site sans autorisation
              expresse de Maison Loratu. Aucune autorisation ni demande d'information préalable
              n'est nécessaire pour établir un lien vers le site.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">7. Droit applicable</h2>
            <p class="text-gray-700">
              Les présentes mentions légales sont régies par le droit français. En cas de litige,
              les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">8. Contact</h2>
            <p class="text-gray-700">
              Pour toute question concernant les présentes mentions légales, vous pouvez nous
              contacter à l'adresse suivante :
            </p>
            <p class="text-gray-700">
              <!-- À compléter avec les informations de contact -->
              Email : [À compléter]
            </p>
          </section>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-200">
          <router-link
            to="/"
            class="text-terracotta-700 underline hover:text-terracotta-800"
          >
            ← Retour à l'accueil
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
