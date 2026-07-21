# Décisions provisoires pour la première implémentation

**Projet :** Maison Loratu  
**Version :** 0.1  
**Statut :** `Proposition V1 — validation de Sandra avec les écrans`

Ces choix permettent de réaliser une première version testable. Ils ne remplacent pas la validation finale de Sandra ni la vérification juridique des informations publiées.

## 1. Accueil

L’accueil est construit autour de la promesse principale : accompagner les femmes et les enfants vers plus de sérénité grâce à la sophrologie.

### Ordre proposé

1. **Hero** : promesse courte, illustration chaleureuse, CTA `Découvrir les ateliers`.
2. **Choisir son accompagnement** : enfants, femmes et duos, seniors, structures.
3. **Ateliers à venir** : aperçu des formats et CTA vers la réservation.
4. **Pourquoi Maison Loratu** : approche, valeurs et présentation de Sandra.
5. **Interventions pour les structures** : écoles, centres de loisirs et associations.
6. **Réassurance** : déroulement, FAQ, informations pratiques et témoignages lorsqu’ils seront autorisés.
7. **Contact** : email, téléphone et lien de réservation dès qu’ils seront disponibles.

Les enfants et les femmes restent les publics éditorialement prioritaires. Les seniors et les structures sont visibles dès l’accueil sans prendre le dessus sur la promesse principale.

## 2. Administration

Une interface d’administration est prévue dans la cible V1 pour permettre à Sandra de gérer progressivement :

- ateliers et descriptions ;
- tarifs et formats ;
- FAQ ;
- témoignages ;
- visuels ;
- lien de réservation ;
- articles ou actualités simples.

La réservation reste externalisée. L’administration ne gère pas les créneaux ni les paiements dans la première version.

## 3. Réservation Resalib

Un emplacement de configuration est prévu pour le lien Resalib. Tant que Sandra n’a pas créé son compte, l’interface affiche un état temporaire non public ou un CTA de contact, sans lien inventé.

Le lien final sera ajouté par configuration, sans modifier le parcours ni le code métier.

## 4. Localisation

La localisation reste à définir pendant la phase de prospection de Sandra.

La première version ne publie donc pas d’adresse inventée. Elle prévoit des emplacements pour :

- zone ou commune ;
- studio ;
- séances en plein air ;
- interventions dans les structures.

Les textes restent génériques jusqu’à validation des lieux.

## 5. Annulation — règle provisoire

Pour permettre la première implémentation, la règle de référence proposée est :

- annulation gratuite jusqu’à 48 heures avant la séance ;
- au-delà de ce délai ou en cas d’absence, séance due, sauf accord exceptionnel de Sandra ;
- si Sandra annule, proposition de report ou remboursement selon le mode de paiement ;
- en plein air, météo défavorable : report prioritaire, puis avoir ou remboursement si aucun report n’est possible.

Cette règle est un choix UX provisoire inspiré des pratiques courantes. Elle doit être validée par Sandra et vérifiée juridiquement avant publication dans les conditions de réservation.

## 6. Coordonnées

Les coordonnées restent à venir. L’interface prévoit les emplacements sans afficher de données fictives.

## 7. Paiement

Le paiement sur place est retenu pour la première version. Le paiement en ligne est reporté jusqu’à validation de la sécurité, du RGPD, des conditions de vente et du prestataire.

## 8. Validation avec les écrans

Sandra valide ces choix en parcourant les écrans de la première version. Toute modification importante est ensuite reportée dans `docs/registre-des-decisions.md` avec un identifiant `DEC-*`.
