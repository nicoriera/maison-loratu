# Maison Loratu — Sophrologie

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

### Variables publiques facultatives

- `VITE_FORMSPREE_ENDPOINT` : remplace le point de réception Formspree du formulaire de contact.

### Formulaire de contact

Le formulaire `/contact` transmet le prénom et nom, l’adresse e-mail et le message à Formspree. Formspree envoie ensuite chaque demande à l’adresse destinataire configurée dans son tableau de bord — actuellement `maisonloratu@gmail.com`.

Sandra peut répondre directement depuis sa messagerie. Avant la mise en ligne, vérifiez dans Formspree l’adresse destinataire, les notifications et la restriction du formulaire au domaine `maison-loratu.fr`.

### Réservation

Les boutons « M’alerter » ouvrent actuellement la page d’attente Maison Loratu. La réservation en ligne sera activée ultérieurement.

### Utiliser l’administration V1

L’administration éditoriale utilise Netlify Identity, une Function API protégée et Netlify Blobs :

1. Activez Netlify Identity sur le site et passez les inscriptions en **Invite only**.
2. Invitez Sandra, puis attribuez le rôle `admin` à son compte dans Netlify Identity.
3. Déployez le site sur Netlify.
4. Ouvrez `https://votre-domaine.fr/administration` et connectez-vous.
5. Utilisez les onglets **Paramètres publics**, **Offres**, **FAQ** et **Articles & actualités**.

Les rôles sont vérifiés dans l’interface et dans la Function `/api/admin/content`. Les contenus sont persistés dans le store Blobs `maison-loratu-content`. Les offres et la FAQ enregistrées sont chargées par les pages publiques ; l’encart « Atelier du moment » de l’accueil utilise aussi ses données administrables. L’admin ne gère ni les rendez-vous, ni le paiement. Identity ne fonctionne pas complètement avec `netlify dev` : utilisez un deploy preview Netlify pour tester le flux réel.

#### Aperçu local de l’interface admin

Pour tester uniquement les écrans et la validation sans Netlify Identity ni API :

```bash
cp .env.example .env.local
```

Puis mettez `VITE_ADMIN_LOCAL_PREVIEW=true` dans `.env.local` et lancez `npm run dev`. Ouvrez `/administration`, puis cliquez sur **Ouvrir l’aperçu local**. Ce mode est limité à `DEV`, ne sauvegarde rien et ne doit jamais être utilisé pour valider la sécurité ou la persistance.

## 🏗️ Build

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`

## ✅ Vérifications

```bash
node --test src/config/*.test.js
npm run build
```

Le projet ne définit pas de commande `npm test` : les tests de configuration sont exécutés directement avec le runner natif de Node.js.

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
│   ├── Ateliers.vue  # Index des ateliers et des formats proposés
│   ├── Accompagnement.vue # Accompagnement personnalisé
│   ├── CarteCadeau.vue # Carte cadeau
│   ├── FAQ.vue       # Questions fréquentes
│   ├── Contact.vue   # Formulaire de contact simple
│   ├── MentionsLegales.vue  # Mentions légales
│   └── PolitiqueConfidentialite.vue  # Politique de confidentialité RGPD
├── router/             # Configuration Vue Router
│   └── index.js
├── style.css           # Styles globaux avec Tailwind
└── main.js             # Point d'entrée de l'application
```

## ✨ Fonctionnalités

- **Landing page** avec sections explicatives sur la sophrologie
- **Formulaire de contact** simple, avec consentement et envoi vers Formspree
- **Réservations en ligne** : page d’attente Maison Loratu, dans l’attente de l’ouverture du service
- **Contenus administrables** pour l’atelier mis en avant, les offres et la FAQ
- **Conformité RGPD** avec mentions légales et politique de confidentialité
- **Design responsive** et moderne
- **Animations subtiles** pour une meilleure expérience utilisateur

## 📝 Notes importantes

### À compléter avant la mise en production

1. **Informations d'hébergement** dans `src/views/MentionsLegales.vue`

2. **Formulaire de contact** : vérifier l’adresse de réception, les notifications et la restriction au domaine dans Formspree avant publication.

3. **Configuration Netlify** : Vérifier Identity, l’invitation du compte administrateur, le rôle `admin`, le store Blobs et les logs des Functions avant ouverture à Sandra.

4. **Favicon** : Remplacer `/vite.svg` par un favicon personnalisé

## 🔒 Conformité RGPD

Le site applique des mesures de base pour le RGPD avec :
- Collecte minimale de données
- Consentement explicite
- Politique de confidentialité mentionnant Formspree comme sous-traitant du formulaire
- Politique de confidentialité détaillée
- Droits des utilisateurs expliqués

Les mentions légales nécessitent encore l’adresse de l’éditeur, le nom du directeur de publication et les informations d’hébergement avant publication.

## 📄 Licence

Tous droits réservés - Maison Loratu
# maison-loratu
