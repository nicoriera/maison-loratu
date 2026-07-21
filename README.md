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

### Utiliser l’administration V1

L’administration éditoriale utilise Netlify Identity, une Function API protégée et Netlify Blobs :

1. Activez Netlify Identity sur le site et passez les inscriptions en **Invite only**.
2. Invitez Sandra, puis attribuez le rôle `admin` à son compte dans Netlify Identity.
3. Déployez le site sur Netlify.
4. Ouvrez `https://votre-domaine.fr/administration` et connectez-vous.
5. Utilisez les onglets **Paramètres publics**, **Offres**, **FAQ** et **Articles & actualités**.

Les rôles sont vérifiés dans l’interface et dans la Function `/api/admin/content`. Les contenus sont persistés dans le store Blobs `maison-loratu-content`. L’admin ne gère ni les rendez-vous, ni le paiement. Identity ne fonctionne pas complètement avec `netlify dev` : utilisez un deploy preview Netlify pour tester le flux réel.

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
│   ├── Administration.vue # Prototype d’administration éditoriale
│   ├── Structures.vue  # Présentation des interventions structures
│   ├── DevisStructure.vue # Demande de devis structure
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

3. **Backend pour les formulaires** : Le questionnaire particulier utilise actuellement un service de formulaire externe et la demande structure reste un préparateur local. Avant la mise en production, il faudra :
   - Créer un endpoint API pour recevoir les données
   - Remplacer les envois/prototypes dans `src/views/Questionnaire.vue` et `src/views/DevisStructure.vue`
   - Ajouter la gestion d'erreurs

4. **Configuration Netlify** : Vérifier Identity, l’invitation du compte administrateur, le rôle `admin`, le store Blobs et les logs des Functions avant ouverture à Sandra.

5. **Favicon** : Remplacer `/vite.svg` par un favicon personnalisé

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
