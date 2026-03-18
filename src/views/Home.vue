<script setup>
import Hero from '../components/Hero.vue'
import Section from '../components/Section.vue'
import CTAButton from '../components/CTAButton.vue'
import ScrollReveal from '../components/ScrollReveal.vue'
import ScrollRevealStagger from '../components/ScrollRevealStagger.vue'
</script>

<template>
  <div>
    <Hero />

    <Section
      title="Qu'est-ce que la sophrologie ?"
      subtitle="Une méthode douce et efficace pour retrouver votre équilibre"
    >
      <ScrollRevealStagger class="space-y-6 text-gray-700">
        <p class="text-lg leading-relaxed">
          La sophrologie est une méthode de relaxation et de développement personnel qui allie
          des techniques de respiration, de relaxation musculaire et de visualisation positive.
          Elle vous aide à mieux gérer le stress, à retrouver votre sérénité et à développer
          vos ressources personnelles.
        </p>
        <p class="text-lg leading-relaxed">
          Cette approche douce et respectueuse de votre rythme s'adresse à tous, quel que soit
          votre âge ou votre situation. Elle ne nécessite aucune tenue particulière ni matériel
          spécifique, et peut être pratiquée debout, assis ou allongé selon votre confort.
        </p>
      </ScrollRevealStagger>
    </Section>

    <!-- Section Sophrologie Enfants -->
    <section class="bg-cream-500 py-16 md:py-24 px-4 overflow-hidden">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <ScrollReveal direction="left" tag="div">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-serif text-terracotta-500 mb-6">
              Sophrologie
            </h2>
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              Aide à gérer les émotions, améliorer la concentration, réduire l'anxiété et
              développer la confiance en soi de manière ludique et adaptée aux enfants.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              Des séances spécialement conçues pour les plus jeunes, avec des exercices
              adaptés à leur âge et à leur développement.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="image" tag="div" :delay="160" class="shadow-soft rounded-lg">
            <img
              src="/images/children.jpg"
              alt="Enfants dans un cadre apaisant, activités adaptées au bien-être"
              class="w-full h-auto object-cover"
              loading="eager"
              decoding="async"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Section Femmes Enceintes -->
    <section class="bg-cream-500 py-16 md:py-24 px-4 overflow-hidden">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <ScrollReveal variant="image" tag="div" class="order-last md:order-first shadow-soft rounded-lg">
            <img
              src="/images/pregnant.jpg"
              alt="Femme enceinte, moment de douceur et de lien avec le bébé"
              class="w-full h-auto object-cover"
              loading="eager"
              decoding="async"
            />
          </ScrollReveal>
          <ScrollReveal direction="right" tag="div" :delay="140">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-serif text-terracotta-500 mb-6">
              Accompagnement Grossesse
            </h2>
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              Accompagnement pendant la grossesse pour gérer les émotions, préparer l'accouchement
              et favoriser le lien avec votre bébé.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              Des techniques douces et adaptées pour vivre sereinement cette période unique
              de votre vie.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Section Mieux-être -->
    <section class="bg-cream-500 py-16 md:py-24 px-4">
      <div class="container mx-auto max-w-4xl text-center">
        <ScrollReveal direction="scale" tag="div">
          <h2 class="text-4xl md:text-5xl font-serif text-terracotta-500 mb-6">
            Mieux-être
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            Pour toute personne souhaitant améliorer son quotidien, gérer le stress,
            retrouver un sommeil de qualité ou développer son potentiel.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            Un accompagnement personnalisé adapté à vos besoins et à votre rythme.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <Section
      title="Les bénéfices de la sophrologie"
      subtitle="Découvrez ce que cette méthode peut vous apporter"
    >
      <ScrollRevealStagger class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-terracotta-100 rounded-full flex items-center justify-center">
            <span class="text-terracotta-600">✓</span>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">Réduction du stress et de l'anxiété</h3>
            <p class="text-gray-600">
              Apprenez des techniques simples et efficaces pour retrouver votre calme au quotidien.
            </p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-terracotta-100 rounded-full flex items-center justify-center">
            <span class="text-terracotta-600">✓</span>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">Amélioration du sommeil</h3>
            <p class="text-gray-600">
              Retrouvez un sommeil réparateur grâce à des exercices de relaxation adaptés.
            </p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-terracotta-100 rounded-full flex items-center justify-center">
            <span class="text-terracotta-600">✓</span>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">Développement de la confiance en soi</h3>
            <p class="text-gray-600">
              Renforcez votre estime de vous et développez vos ressources personnelles.
            </p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-terracotta-100 rounded-full flex items-center justify-center">
            <span class="text-terracotta-600">✓</span>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">Gestion des émotions</h3>
            <p class="text-gray-600">
              Apprenez à mieux comprendre et réguler vos émotions pour un quotidien plus serein.
            </p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-terracotta-100 rounded-full flex items-center justify-center">
            <span class="text-terracotta-600">✓</span>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">Préparation aux événements importants</h3>
            <p class="text-gray-600">
              Accouchement, examens, entretiens... préparez-vous sereinement aux défis à venir.
            </p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-8 h-8 bg-terracotta-100 rounded-full flex items-center justify-center">
            <span class="text-terracotta-600">✓</span>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">Meilleure concentration</h3>
            <p class="text-gray-600">
              Améliorez votre capacité à vous concentrer et à rester présent dans l'instant.
            </p>
          </div>
        </div>
      </ScrollRevealStagger>
    </Section>

    <section class="bg-cream-500 py-16 md:py-24 px-4 overflow-hidden">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <ScrollReveal direction="left" tag="div" class="space-y-6">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif text-terracotta-500">
              Maison Loratu
            </h2>
            <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Après 12 ans en relation client, j'ai décidé d'écouter mon intuition (et mon envie de sens).
              </p>
              <p>
                Aujourd'hui, je me forme à la sophrologie pour accompagner les femmes et les enfants, avec douceur, joie et authenticité.
              </p>
              <p>
                J'ai besoin de vous pour faire évoluer ce projet : prenez quelques minutes pour répondre à ce questionnaire, sans filtre, avec le cœur.
              </p>
            </div>
            <div class="pt-4">
              <CTAButton>
                Répondre au questionnaire
              </CTAButton>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="image" tag="div" :delay="200" class="order-first md:order-last shadow-soft rounded-lg">
            <img
              src="/images/writing.jpg"
              alt="Écriture dans un carnet, moment de réflexion et d'authenticité"
              class="w-full h-auto object-cover"
              loading="eager"
              decoding="async"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>

    <section class="py-16 px-4 bg-white">
      <div class="container mx-auto max-w-2xl text-center">
        <ScrollRevealStagger>
          <h2 class="text-3xl md:text-4xl font-serif text-terracotta-500 mb-6">
            Prêt à commencer ?
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Répondez à quelques questions pour découvrir l'accompagnement qui vous correspond le mieux
          </p>
          <div class="flex justify-center">
            <CTAButton>
              Accéder au questionnaire
            </CTAButton>
          </div>
        </ScrollRevealStagger>
      </div>
    </section>
  </div>
</template>
