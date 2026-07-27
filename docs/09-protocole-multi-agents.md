# Protocole de travail des agents

**Version :** 27/07/2026
**Statut :** actif

## Source de vérité

Les agents consultent les sources dans cet ordre :

1. `docs/registre-des-decisions.md`
2. `docs/02-synthese-des-decisions-sandra.md`
3. `PRODUCT.md`
4. `DESIGN.md`
5. `docs/01-note-de-cadrage-strategique.md`
6. `docs/03-personas-et-parcours.md`
7. `docs/04-catalogue-des-offres.md`
8. `docs/05-arborescence-fonctionnelle.md`
9. `docs/06-cahier-des-charges-fonctionnel.md`
10. `docs/07-direction-artistique.md`
11. `docs/08-contenus-page-par-page.md`

Une décision validée et datée remplace toute hypothèse antérieure incompatible.

## Périmètre obligatoire

- Publics : enfants, adolescentes, femmes, seniors et duos intergénérationnels.
- Navigation : Ateliers, Accompagnement personnalisé, Carte cadeau, Contact.
- Réservation : Resalib lorsqu’un lien sécurisé est configuré.
- Les anciennes URL retirées restent uniquement comme redirections techniques.
- Aucun agent ne doit recréer une offre, une page, un formulaire ou un CTA destiné à une organisation professionnelle.

## Rôles

### Produit

Vérifie la cohérence entre mission, publics, offres et objectifs de réservation.

### UX

Vérifie les parcours des parents, enfants, femmes, seniors, duos et personnes qui offrent une carte cadeau.

### Contenu

Rédige dans un langage simple, chaleureux, non médicalisant et conforme aux informations validées.

### Design

Applique `DESIGN.md`, privilégie les photos authentiques et protège la lisibilité mobile.

### Technique

Maintient les routes, formulaires, intégrations, données, sécurité, SEO et performances sans élargir le périmètre métier.

### Qualité

Contrôle accessibilité, responsive, contenu, liens, tests, build, sécurité et cohérence documentaire.

### Coordinateur

Répartit les tâches, évite les conflits, consolide les résultats et met à jour le registre des décisions.

## Règles de modification

- Lire l’état Git avant toute modification et préserver les changements utilisateur.
- Ne jamais inventer un tarif, une disponibilité, un lieu, une coordonnée, un diplôme ou un témoignage.
- Reporter tout nouvel arbitrage validé dans `docs/registre-des-decisions.md`.
- Mettre à jour dans la même intervention le code, le SEO, le sitemap, les tests et les documents affectés.
- Supprimer les fichiers devenus sans objet au lieu de conserver plusieurs références contradictoires.
- Conserver les redirections nécessaires lorsque la suppression d’une page casserait une ancienne URL publique.
- Vérifier les changements avec Node 22, le build de production, les tests et `git diff --check`.

## Critères de remise

Un travail est terminé lorsque :

- le comportement demandé est implémenté ;
- aucune référence active ne contredit le registre des décisions ;
- la navigation, les routes, le SEO et le sitemap sont cohérents ;
- les tests et le build réussissent ;
- les suppressions et limites restantes sont signalées clairement.
