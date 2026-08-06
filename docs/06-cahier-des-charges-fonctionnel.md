# Maison Loratu — Cahier des charges fonctionnel

**Version :** 06/08/2026

## Périmètre V1

- Site public responsive construit avec Vue 3 et Vite.
- Présentation des ateliers, de l’accompagnement et de la carte cadeau.
- Page d’attente pour les réservations, avec inscription e-mail pour recevoir les premières dates.
- Formulaire de contact pour les demandes particulières.
- FAQ, mentions légales et politique de confidentialité.
- Administration éditoriale légère protégée par Netlify Identity.

## Exigences

### Navigation

- Afficher Ateliers, Accompagnement personnalisé, Carte cadeau et Contact sur ordinateur.
- Conserver une navigation mobile courte avec un accès direct à la réservation.
- Rediriger les anciennes URL retirées vers le contact général.

### Offres

- Afficher le public, la durée, le tarif et la capacité lorsqu’ils sont validés.
- Fournir une page détaillée distincte pour les ateliers enfants, duo et ateliers en douceur.
- Présenter sur l’accompagnement le déroulé en cinq temps et les quatre fondements sous la forme d’une maison.
- Ne pas publier une information commerciale non confirmée.
- Conserver un lien cohérent entre les cartes d’accueil et les pages détaillées.

### Réservation

- Rediriger les actions « Réserver » vers la page d’attente Maison Loratu.
- Ne pas publier de disponibilité avant l’ouverture du service.
- Afficher dans le footer le téléphone, l’email et un lien vers l’inscription aux premières dates.

### Formulaires

- Collecter uniquement les informations utiles.
- Afficher consentement, finalité et messages d’erreur explicites.
- Éviter toute collecte de données médicales ou sensibles.

### Administration

- Gérer les contenus publics, offres, FAQ et actualités.
- Vérifier le rôle administrateur côté interface et côté serveur.
- Ne pas gérer les rendez-vous ni le paiement.

### Accessibilité

- Zones tactiles d’au moins 44 × 44 px.
- Focus clavier visible.
- Contrastes lisibles.
- Textes et boutons compréhensibles sans contexte implicite.
- Respect de `prefers-reduced-motion`.

## Hors périmètre

- Agenda propriétaire.
- Paiement propriétaire.
- Parcours institutionnel ou formulaire professionnel.
- Témoignages, lieux ou disponibilités non validés.

## Critères d’acceptation

- Build de production réussi sous Node 22.
- Tests automatisés réussis.
- Aucun lien public vers un parcours retiré.
- Sitemap cohérent avec les routes publiques.
- Aucun contenu contradictoire avec `docs/registre-des-decisions.md`.
