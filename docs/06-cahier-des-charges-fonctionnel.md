# Maison Loratu — Cahier des charges fonctionnel

**Version :** 0.1  
**Statut :** base de validation avant conception et développement

## 1. Objet

Concevoir un site public pour Maison Loratu afin de présenter ses accompagnements, promouvoir ses ateliers et recevoir des réservations ou demandes de devis.

Le site doit être chaleureux, illustré, familial, accessible aux seniors et simple à administrer.

## 2. Objectifs métier

- Remplir les ateliers.
- Faciliter la réservation en ligne.
- Recevoir des demandes qualifiées de particuliers.
- Recevoir des demandes de devis de structures.
- Présenter Sandra et son approche.
- Développer la visibilité locale.

## 3. Périmètre du lancement

### Inclus

- Site vitrine responsive.
- Pages des ateliers.
- Page d'accompagnement individuel.
- Page structures.
- Formulaire de contact.
- Formulaire de demande de devis.
- Lien ou bouton de réservation Resalib.
- Présentation de Sandra.
- Mentions légales et confidentialité.
- Administration légère des contenus.

### Hors périmètre initial

- Gestionnaire de réservation propriétaire.
- Espace client.
- Paiement en ligne développé sur mesure.
- Newsletter avancée.
- Blog complexe.
- Gestion automatisée des factures.

## 4. Exigences fonctionnelles

### F01 — Navigation

Le visiteur doit pouvoir accéder aux ateliers, aux séances individuelles, aux interventions structures, à la présentation et au contact depuis chaque page importante.

### F02 — Réservation atelier

Le site doit présenter un bouton « Réserver un atelier » visible et renvoyer vers l'outil de réservation retenu, probablement Resalib.

Le lien doit être disponible :

- dans le menu ;
- dans le hero de l'accueil ;
- sur chaque offre ;
- en bas de page ;
- sur mobile.

### F03 — Calendrier

Le calendrier et les créneaux doivent être gérés dans l'outil de réservation externe. Le site ne doit pas maintenir une seconde source de vérité.

### F04 — Contact

Le visiteur doit pouvoir contacter Sandra par email ou téléphone sans réserver immédiatement.

Le formulaire doit demander au minimum :

- nom ;
- email ou téléphone ;
- motif ;
- message ;
- consentement relatif aux données.

### F05 — Demande de devis

Le formulaire structures doit demander :

- nom de la structure ;
- type de structure ;
- nom du contact ;
- email et téléphone ;
- public et tranche d'âge ;
- nombre de participants ;
- objectif de l'intervention ;
- format souhaité ;
- période ou date souhaitée ;
- lieu ;
- message complémentaire.

### F06 — Présentation d'une offre

Chaque offre doit afficher :

- public ;
- bénéfice principal ;
- contenu ;
- durée ;
- capacité ;
- prix ou mention « sur devis » ;
- lieu ;
- conditions particulières ;
- action suivante.

### F07 — Administration éditoriale

Un espace administrateur léger doit permettre de modifier sans développeur :

- textes de pages ;
- ateliers et descriptions ;
- prix ;
- photos ;
- témoignages ;
- FAQ ;
- articles et actualités ;
- liens de réservation ;
- coordonnées.

Les réservations, créneaux, rappels et éventuels paiements restent gérés par Resalib ou un outil spécialisé.

### F08 — Confirmation

Après un formulaire, le visiteur doit voir une confirmation claire indiquant que la demande a été envoyée et le délai de réponse attendu, à définir.

### F09 — Erreurs

Le site doit afficher des messages compréhensibles si :

- un champ obligatoire est vide ;
- l'email est invalide ;
- l'envoi échoue ;
- le lien de réservation est indisponible.

## 5. Exigences de contenu

- Textes en français.
- Ton humain, naturel et non médicalisant.
- Explications accessibles à un enfant, un parent ou un senior.
- Photos de personnes réelles et diversifiées.
- Illustrations présentes mais non envahissantes.
- Prix et informations pratiques facilement repérables.
- Contenus et coordonnées fournis par Sandra avant la mise en ligne.

## 6. Exigences d'accessibilité

- Contrastes suffisants.
- Taille de texte confortable.
- Navigation clavier.
- Titres structurés.
- Alternatives textuelles pour les images.
- Boutons explicites.
- Formulaires avec labels visibles.
- Téléphone affiché de manière lisible.
- Animations discrètes et non indispensables à la compréhension.

## 7. Exigences RGPD et sécurité

- Collecter uniquement les données nécessaires.
- Informer clairement sur l'utilisation des données.
- Prévoir une politique de confidentialité cohérente avec les formulaires.
- Ne pas collecter de données sensibles inutiles dans le questionnaire.
- Sécuriser les formulaires et limiter les accès administrateurs.
- Étudier séparément le paiement en ligne avant son activation.
- Vérifier les rôles de Maison Loratu et de Resalib dans les traitements de données.

## 8. SEO et visibilité locale

- Une page par grande offre.
- Titres et descriptions propres à chaque page.
- Pages ciblant la zone géographique dès qu'elle sera connue.
- Données de contact cohérentes partout.
- Fiche Google Business Profile à prévoir.
- URLs lisibles.
- Images optimisées et textes alternatifs.

## 9. Critères de recette

Le site sera considéré comme fonctionnel lorsque :

- le visiteur comprend les offres depuis l'accueil ;
- chaque atelier possède un prix, une durée et un public ou une mention claire « à définir » ;
- le bouton de réservation fonctionne depuis desktop et mobile ;
- les formulaires valident les champs et affichent une confirmation ;
- une demande de structure peut être distinguée d'un contact particulier ;
- Sandra peut modifier les contenus administrables ;
- les pages légales sont accessibles depuis le footer ;
- les textes sont lisibles sur mobile ;
- aucune information provisoire n'est visible en production.

## 10. Décisions bloquantes avant développement

- Localisation exacte.
- Coordonnées officielles.
- Contenus et photos.
- Outil Resalib confirmé et lien de réservation.
- Règles d'annulation.
- Durée exacte de l'accompagnement individuel.
- Règles de paiement sur place.
- Fonctionnalités précises de l'administration.
- Solution technique de gestion éditoriale.

