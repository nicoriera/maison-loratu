<script setup>
const questions = [
  { question: 'Qu’est-ce que la sophrologie ?', answer: 'C’est une méthode douce qui associe respiration, relaxation et visualisation positive. Elle aide à mieux gérer le stress, apaiser les émotions et retrouver un équilibre entre le corps et l’esprit, avec des outils simples au quotidien.' },
  { question: 'Combien de séances sont nécessaires ?', answer: 'Certaines personnes ressentent une détente dès la première séance. Pour un objectif précis, quelques séances peuvent aider à installer des changements. Chaque accompagnement est personnalisé et évolue à votre rythme.' },
  { question: 'La sophrologie accompagne-t-elle un parcours PMA ?', answer: 'Oui, comme soutien complémentaire et sans se substituer au suivi médical. Elle peut aider à accueillir les émotions, diminuer le stress et retrouver un espace de calme pendant un parcours FIV, IAC ou stimulation.' },
  { question: 'La sophrologie est-elle utile pendant la ménopause ?', answer: 'Elle peut accompagner cette étape de vie en aidant à relâcher les tensions, soutenir le sommeil et retrouver davantage de sérénité et de vitalité. Elle ne remplace pas un avis médical.' },
  { question: 'À partir de quel âge un enfant peut-il pratiquer ?', answer: 'Sandra accueille les enfants dès 5 ans. Les séances prennent la forme de jeux, d’histoires, de mouvements et d’exercices de respiration pour apprendre en s’amusant.' },
  { question: 'La sophrologie peut-elle aider un enfant avec ses émotions ?', answer: 'Les exercices ludiques aident les enfants à identifier leurs émotions, retrouver leur calme et développer leur confiance. Ils repartent avec des outils simples à réutiliser à la maison ou à l’école.' },
  { question: 'La sophrologie peut-elle aider la concentration ?', answer: 'Les exercices de respiration, de relaxation et de visualisation aident les enfants à développer leur attention et à mieux canaliser leur énergie, notamment pendant les apprentissages ou les examens.' },
  { question: 'Comment accompagner un enfant anxieux ?', answer: 'La sophrologie offre un espace bienveillant pour comprendre ses émotions, apaiser ses peurs et développer ses ressources intérieures. Elle ne remplace pas l’accompagnement d’un professionnel de santé lorsque celui-ci est nécessaire.' },
  { question: 'La sophrologie est-elle bénéfique pour les seniors ?', answer: 'Oui. Elle peut soutenir le bien-être physique et émotionnel, le sommeil et la sérénité, dans le respect des capacités et du rythme de chacun.' },
  { question: 'Peut-elle soutenir la concentration et la vitalité des seniors ?', answer: 'Les exercices d’attention, de respiration et de visualisation peuvent favoriser la clarté mentale, la récupération et une sensation de vitalité. Ils s’inscrivent dans une démarche de bien-être.' },
  { question: 'Comment se déroulent les ateliers collectifs ?', answer: 'Ils se déroulent en petits groupes pendant 1 h 30, sans prérequis. Sandra guide des exercices de respiration, relaxation et visualisation, pour repartir détendue et avec des outils simples à utiliser au quotidien.' },
  { question: 'Peut-on participer avec sa fille ou sa petite-fille ?', answer: 'Oui. Les formats mère-fille et grand-mère-petite-fille invitent à ralentir ensemble, partager un moment privilégié et créer des souvenirs dans une ambiance ludique et relaxante.' },
  { question: 'Peut-on venir entre sœurs, amies ou en famille ?', answer: 'Absolument. Les ateliers sont ouverts à celles qui souhaitent prendre soin d’elles et des liens qui les unissent, entre sœurs, amies ou membres d’une même famille.' },
  { question: 'Puis-je offrir un atelier ?', answer: 'Oui. La Carte Cadeau Maison Loratu permet d’offrir une parenthèse de sérénité, seule ou à partager. Elle comprend deux ateliers à vivre dans un délai de deux mois.' },
]
</script>

<template>
  <div class="bg-cream-50 px-4 py-16 md:py-24">
    <div class="container mx-auto max-w-4xl">
      <div class="max-w-2xl">
        <p class="text-service-label text-terracotta-600">Questions fréquentes</p>
        <h1 class="page-title mt-4">Tout savoir avant de commencer</h1>
      </div>
      <div class="mt-12 grid gap-4">
        <details v-for="item in questions" :key="item.question" class="group rounded-[1.5rem] bg-white p-6 shadow-soft">
          <summary class="cursor-pointer list-none pr-8 text-xl text-terracotta-800 marker:hidden">{{ item.question }}</summary>
          <p class="mt-4 max-w-3xl leading-relaxed text-gray-700">{{ item.answer }}</p>
        </details>
      </div>
    </div>
  </div>
</template>
