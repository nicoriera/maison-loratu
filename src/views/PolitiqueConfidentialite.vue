<script setup>
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="container mx-auto max-w-4xl">
      <div class="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h1 class="text-3xl md:text-4xl font-serif text-primary-700 mb-8">
          Politique de confidentialité
        </h1>

        <div class="prose prose-lg max-w-none space-y-8">
          <section>
            <p class="text-gray-700">
              La présente politique de confidentialité décrit la manière dont Maison Loratu
              collecte, utilise et protège les informations que vous nous fournissez lorsque
              vous utilisez notre site web.
            </p>
            <p class="text-gray-700">
              <strong>Dernière mise à jour :</strong> {{ new Date().toLocaleDateString('fr-FR') }}
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">1. Collecte des données</h2>
            <p class="text-gray-700 mb-4">
              Nous collectons les données suivantes lorsque vous remplissez notre questionnaire :
            </p>
            <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Type d'accompagnement recherché</li>
              <li>Situation personnelle (si applicable)</li>
              <li>Besoins identifiés</li>
              <li>Préférences de fréquence</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Message optionnel</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">2. Utilisation des données</h2>
            <p class="text-gray-700 mb-4">
              Les données collectées sont utilisées exclusivement pour :
            </p>
            <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Vous proposer un accompagnement personnalisé en sophrologie</li>
              <li>Vous contacter pour discuter de vos besoins</li>
              <li>Vous envoyer des informations relatives à nos services (avec votre consentement)</li>
            </ul>
            <p class="text-gray-700 mt-4">
              Vos données ne seront jamais vendues, louées ou partagées avec des tiers à des fins
              commerciales.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">3. Base légale du traitement</h2>
            <p class="text-gray-700">
              Le traitement de vos données personnelles est basé sur votre consentement explicite
              lorsque vous remplissez le questionnaire. Vous pouvez retirer votre consentement à
              tout moment en nous contactant.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">4. Conservation des données</h2>
            <p class="text-gray-700">
              Vos données personnelles sont conservées pendant une durée maximale de 3 ans à compter
              de leur collecte, sauf si vous demandez leur suppression avant cette date. Passé ce délai,
              les données sont supprimées de manière sécurisée.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">5. Vos droits</h2>
            <p class="text-gray-700 mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
              des droits suivants :
            </p>
            <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Droit d'accès :</strong> Vous pouvez demander à accéder à vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de vos données</li>
              <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données</li>
              <li><strong>Droit à la portabilité :</strong> Vous pouvez demander à recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données</li>
              <li><strong>Droit de limitation :</strong> Vous pouvez demander la limitation du traitement</li>
            </ul>
            <p class="text-gray-700 mt-4">
              Pour exercer ces droits, contactez-nous à l'adresse suivante :
              <!-- À compléter avec l'email de contact -->
              <a href="mailto:[À compléter]" class="text-primary-600 underline">[À compléter]</a>
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">6. Sécurité des données</h2>
            <p class="text-gray-700">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
              protéger vos données personnelles contre tout accès non autorisé, perte, destruction
              ou altération.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">7. Cookies</h2>
            <p class="text-gray-700">
              Ce site n'utilise actuellement pas de cookies de suivi ou d'analyse. Si cela venait
              à changer, nous vous en informerions et solliciterions votre consentement préalable.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">8. Réclamation</h2>
            <p class="text-gray-700">
              Si vous estimez que le traitement de vos données personnelles constitue une violation
              du RGPD, vous avez le droit d'introduire une réclamation auprès de la Commission
              Nationale de l'Informatique et des Libertés (CNIL) :
            </p>
            <p class="text-gray-700">
              CNIL<br>
              3 Place de Fontenoy - TSA 80715<br>
              75334 PARIS CEDEX 07<br>
              Téléphone : 01 53 73 22 22<br>
              Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" class="text-primary-600 underline">www.cnil.fr</a>
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">9. Contact</h2>
            <p class="text-gray-700">
              Pour toute question concernant cette politique de confidentialité ou le traitement
              de vos données personnelles, vous pouvez nous contacter à :
            </p>
            <p class="text-gray-700">
              <!-- À compléter avec les informations de contact -->
              Email : [À compléter]<br>
              Téléphone : [À compléter]
            </p>
          </section>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-200">
          <router-link
            to="/"
            class="text-primary-600 hover:text-primary-700 underline"
          >
            ← Retour à l'accueil
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
