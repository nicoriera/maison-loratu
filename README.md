# Maison Loratu - Landing Page

Landing page pour le cabinet de sophrologie Maison Loratu.

## 🚀 Technologies utilisées

- **Vue 3** avec Composition API (`<script setup>`)
- **Vite** pour le build et le développement
- **Vue Router** pour la navigation
- **Tailwind CSS** pour le styling
- **vee-validate** + **yup** pour la validation des formulaires

## 📦 Installation

Prérequis : **Node.js 20.19+** ou **22.12+** (Vite 7). Avec nvm :

```bash
nvm use   # lit .nvmrc → Node 22
npm install
```

## 🛠️ Développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## 🏗️ Build

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header.vue      # En-tête avec navigation
│   ├── Footer.vue      # Pied de page
│   ├── Hero.vue        # Section hero de la landing page
│   ├── Section.vue     # Composant de section réutilisable
│   └── CTAButton.vue   # Bouton d'appel à l'action
├── views/              # Pages principales
│   ├── Home.vue        # Landing page
│   ├── Questionnaire.vue  # Page de questionnaire
│   ├── MentionsLegales.vue  # Mentions légales
│   └── PolitiqueConfidentialite.vue  # Politique de confidentialité RGPD
├── router/             # Configuration Vue Router
│   └── index.js
├── style.css           # Styles globaux avec Tailwind
└── main.js             # Point d'entrée de l'application
```

## ✨ Fonctionnalités

- **Landing page** avec sections explicatives sur la sophrologie
- **Questionnaire interactif** en plusieurs étapes avec validation
- **Conformité RGPD** avec mentions légales et politique de confidentialité
- **Design responsive** et moderne
- **Animations subtiles** pour une meilleure expérience utilisateur

## 📝 Notes importantes

### À compléter avant la mise en production

1. **Informations de contact** dans :
   - `src/components/Footer.vue`
   - `src/views/MentionsLegales.vue`
   - `src/views/PolitiqueConfidentialite.vue`

2. **Informations d'hébergement** dans `src/views/MentionsLegales.vue`

3. **Backend pour le questionnaire** : Actuellement, le formulaire affiche une alerte. Il faudra :
   - Créer un endpoint API pour recevoir les données
   - Modifier la fonction `onSubmit` dans `src/views/Questionnaire.vue`
   - Ajouter la gestion d'erreurs

4. **Favicon** : Remplacer `/vite.svg` par un favicon personnalisé

## 🔒 Conformité RGPD

Le site respecte le RGPD avec :
- Collecte minimale de données
- Consentement explicite
- Mentions légales complètes
- Politique de confidentialité détaillée
- Droits des utilisateurs expliqués

## 📄 Licence

Tous droits réservés - Maison Loratu
# maison-loratu
