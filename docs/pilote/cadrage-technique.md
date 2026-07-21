# Livrable — agent technique — 2026-07-21

**Auteur :** agent technique délégué  
**Version :** 0.1  
**Niveau de confiance :** moyen  
**Statut global :** `À analyser`

## Périmètre analysé

- Architecture Vue compatible Clean Architecture pour la première version.
- Limites raisonnables d'un site vitrine avec réservation externe.
- Réservation Resalib, contact, demande de devis et administration éditoriale éventuelle.
- RGPD, sécurité, stratégie TDD/tests et prévention des régressions.

## Constats

- Les documents de cadrage convergent vers une V1 de site vitrine public, orientée conversion, avec réservation prioritaire d'ateliers et demandes de devis pour les structures.
- La réservation ne doit pas devenir une seconde source de vérité sur le site : `docs/06-cahier-des-charges-fonctionnel.md` indique que les créneaux restent gérés par l'outil externe retenu, probablement Resalib.
- L'administration souhaitée est légère et proportionnée : contenus éditoriaux oui, gestion native des rendez-vous non.
- Plusieurs données bloquantes restent non validées : localisation, coordonnées officielles, règles d'annulation, lien Resalib confirmé, périmètre exact de l'administration, modalités de paiement.
- Le dépôt contient déjà une base `Vue 3 + Vite + vue-router + vee-validate`, avec une structure encore orientée pages/composants et non par couches métier.
- Le protocole impose une Clean Architecture pragmatique, des interfaces pour les services externes, une stratégie de tests par couche et l'absence de décision unilatérale.

## Recommandations

### 1. Cadrage V1 : obligatoire vs reporté

| Sujet | Recommandation de cadrage | Priorité | Statut |
|---|---|---|---|
| Site public vitrine | Pages publiques, navigation, CTA de réservation, formulaires contact/devis, pages légales | Obligatoire | `À décider` |
| Réservation atelier | Intégration externe Resalib via un port interne et un adaptateur remplaçable | Obligatoire | `À décider` |
| Contact particulier | Formulaire court + email + téléphone visibles | Obligatoire | `À décider` |
| Demande de devis structure | Formulaire dédié avec qualification minimale | Obligatoire | `À décider` |
| Administration éditoriale | Gestion simple des contenus, témoignages, FAQ, visuels et liens de réservation | Obligatoire | `À décider` |
| SEO local de base | URLs lisibles, métadonnées, contenus statiques clairs, données de contact cohérentes | Obligatoire | `À décider` |
| Paiement en ligne | À exclure de la V1 tant que les règles métier, la sécurité et le RGPD ne sont pas cadrés | Reporté | `À décider` |
| Compte client / espace membre | Hors périmètre de la V1 | Reporté | `À décider` |
| Back-office de réservation propriétaire | Hors périmètre de la V1 | Reporté | `À décider` |
| Automatisation avancée CRM / newsletter | Hors périmètre de la V1 | Reporté | `À décider` |
| Blog complexe / agenda riche | Hors périmètre initial ; un module éditorial simple suffit au lancement | Reporté | `À décider` |

### 2. Architecture cible compatible Vue et Clean Architecture

L'état actuel du dépôt permet une évolution incrémentale. La recommandation n'est pas de réécrire la base Vue, mais de séparer progressivement la présentation, les cas d'utilisation et les intégrations externes.

```text
src/
├── domain/
│   ├── entities/
│   ├── value-objects/
│   ├── services/
│   └── ports/
├── application/
│   ├── use-cases/
│   ├── dto/
│   └── mappers/
├── infrastructure/
│   ├── booking/
│   ├── contact/
│   ├── cms/
│   ├── analytics/
│   └── http/
└── presentation/
    ├── router/
    ├── pages/
    ├── components/
    ├── composables/
    └── view-models/
```

Principes de cadrage associés :

- `presentation/` porte Vue, `vue-router`, la composition des pages et les interactions utilisateur.
- `application/` porte les cas d'utilisation testables sans navigateur.
- `domain/` porte les règles métier stables : offres, demandes de contact, consentement, règles de disponibilité exprimées sans dépendre de Resalib.
- `infrastructure/` porte les adaptateurs vers Resalib, l'envoi de formulaire, un CMS éventuel et les dépendances techniques.
- Le routeur, les composants et les formulaires ne doivent pas connaître le format brut de Resalib ni les détails d'un fournisseur d'email.

### 3. Cas d'utilisation plausibles de la première version

Les cas d'utilisation ci-dessous sont des candidats de cadrage, pas des décisions validées :

| Cas d'utilisation | But | Couche cible | Statut |
|---|---|---|---|
| Consulter les offres | Afficher une offre avec public, bénéfice, durée, prix, lieu et CTA | `application` + `presentation` | `À analyser` |
| Accéder à la réservation atelier | Résoudre le lien ou le mode d'accès Resalib approprié | `application` + `infrastructure` | `À analyser` |
| Envoyer une demande de contact | Valider les champs minimaux et transmettre la demande | `application` + `infrastructure` | `À analyser` |
| Envoyer une demande de devis structure | Valider les champs métier propres aux structures | `application` + `infrastructure` | `À analyser` |
| Consulter les informations légales | Rendre les pages légales accessibles et cohérentes avec les formulaires | `presentation` | `À analyser` |
| Mettre à jour un contenu éditorial | Publier ou modifier un contenu sans toucher à la réservation | `application` + `infrastructure` | `À analyser` |

### 4. Interfaces et adaptateurs à prévoir

Les noms ci-dessous sont proposés pour raisonner sur la séparation des responsabilités. Ils ne valent pas décision de nommage définitive.

| Interface / port interne | Responsabilité | Adaptateur(s) possible(s) en V1 | Remarques |
|---|---|---|---|
| `BookingGateway` | Fournir un accès de réservation sans exposer Resalib au domaine | lien profond Resalib, bouton externe, widget si accessibilité acceptable | Garder remplaçable le fournisseur |
| `ContactRequestGateway` | Transmettre une demande de contact | email transactionnel, API serveur, service de formulaire | Aucun choix fournisseur à figer ici |
| `QuoteRequestGateway` | Transmettre une demande de devis structure | même famille que le contact, avec schéma distinct | Séparer la qualification métier |
| `ContentRepository` | Lire/écrire contenus éditoriaux administrables | fichiers de contenu, CMS headless, panneau admin léger | À arbitrer selon autonomie attendue |
| `LegalContentRepository` | Exposer politique de confidentialité, mentions et consentements | contenu statique versionné ou CMS | Doit rester cohérent avec les formulaires |
| `AnalyticsGateway` | Publier des événements de mesure non sensibles | script analytique sobre et conforme | Optionnel au lancement |

Principes d'adaptation :

- Un adaptateur externe traduit les erreurs techniques en erreurs métier compréhensibles.
- Les données d'entrée d'un formulaire sont validées avant l'appel au fournisseur externe.
- Les formats externes sont mappés vers des DTO internes avant d'atteindre les cas d'utilisation.
- Aucune clé, URL sensible ou configuration fournisseur ne doit remonter dans `domain/` ou `presentation/`.

### 5. Réservation Resalib : limites raisonnables de V1

Recommandations de cadrage :

- Le site ne doit pas reconstruire un agenda local, ni synchroniser des créneaux tant que la stratégie Resalib n'est pas validée.
- La V1 peut rester sur un mode d'accès simple à la réservation si l'expérience mobile, l'accessibilité et la lisibilité sont suffisantes.
- Le site doit prévoir un comportement de repli si Resalib est indisponible : affichage d'un message clair et alternative par téléphone ou email.
- Le retour depuis Resalib vers le site peut être limité à une page d'information générique tant que les capacités réelles d'intégration ne sont pas confirmées.

Questions spécifiques à garder ouvertes :

- lien externe simple, widget embarqué ou autre mécanisme ;
- données réellement échangées entre le site et Resalib ;
- responsabilité respective Maison Loratu / Resalib dans les traitements et notifications ;
- gestion métier des annulations, reports et indisponibilités.

### 6. Contact, devis et administration éventuelle

Recommandations de cadrage :

- Les formulaires doivent être pensés comme deux flux distincts : particulier et structure.
- L'administration éventuelle doit rester éditoriale au lancement : contenus, FAQ, témoignages, visuels, liens, coordonnées.
- Les règles de réservation, de rappel, d'annulation et de paiement ne doivent pas être recopiées dans un back-office maison.
- Si une administration est retenue, elle doit permettre de limiter les droits au strict nécessaire et de conserver une traçabilité minimale des modifications.

Points à arbitrer :

- contenu versionné dans le dépôt vs CMS léger ;
- besoin réel d'un écran d'administration dès la V1 ;
- rôle de Sandra dans les mises à jour sans assistance technique ;
- besoin ou non de modération sur les témoignages.

### 7. RGPD et sécurité

Recommandations de cadrage :

- Limiter les formulaires aux données strictement nécessaires à la prise de contact ou à la qualification d'une demande.
- Éviter les données de santé, les détails sensibles sur les enfants ou toute information qui excède le besoin commercial initial.
- Prévoir une information claire sur la finalité, la durée de conservation, le destinataire et le droit de retrait du consentement.
- Distinguer les traitements opérés par le site de ceux opérés par Resalib.
- Prévoir dès le cadrage la journalisation minimale des erreurs, sans donnée personnelle en clair.
- Assumer que tout contenu externe ou contenu administré peut être invalide ou malveillant, et cadrer une neutralisation systématique à l'affichage.

Sujets à faire valider avant implémentation :

- base légale et contenu exact du consentement de chaque formulaire ;
- durée de conservation des demandes de contact et devis ;
- emplacement et mode de stockage des demandes ;
- besoin réel de cookies non essentiels ;
- politique de gestion des accès administrateurs ;
- niveau d'information à afficher en cas d'erreur d'envoi.

### 8. Stratégie TDD, tests et prévention des régressions

La stratégie doit rester proportionnée à un site vitrine avec intégrations externes, tout en couvrant les zones à risque.

| Couche | Tests recommandés | Objectif | Statut |
|---|---|---|---|
| `domain/` | tests unitaires | règles métier, objets de valeur, normalisation, consentement | `À décider` |
| `application/` | tests unitaires orientés comportement | cas d'utilisation contact, devis, réservation, erreurs et replis | `À décider` |
| `infrastructure/` | tests d'intégration / contrats | mappage Resalib, transport de formulaires, gestion des erreurs fournisseur | `À décider` |
| `presentation/` | tests de composants ciblés | validation visible, messages d'erreur, CTA, accessibilité des formulaires | `À décider` |
| Parcours critiques | E2E limités | réservation, contact, devis, pages légales, navigation mobile | `À décider` |

Garde-fous proposés :

- un test unitaire par règle métier ou règle de validation non triviale ;
- un test de contrat par adaptateur critique ;
- un parcours E2E minimum pour vérifier l'accès à la réservation dès que le mode d'intégration est choisi ;
- contrôle continu avant fusion : lint, typecheck, build, tests, analyse de dépendances, détection de secrets ;
- ajout systématique d'un test de non-régression pour toute anomalie critique constatée.

### 9. Limites de conception à ne pas dépasser en V1

- Pas de microservices, pas de BFF dédié, pas de base de données spécifique si le besoin n'est que vitrine + formulaires + réservation externe.
- Pas de domaine artificiellement fragmenté : quelques cas d'utilisation clairs valent mieux qu'une taxonomie exhaustive.
- Pas d'abstractions génériques créées "au cas où" ; seules les intégrations réellement remplaçables justifient un port dédié.
- Pas de duplication des règles de disponibilité, d'annulation ou de paiement si elles vivent ailleurs.
- Pas de dépendance métier cachée dans les composants Vue ou dans les schémas de formulaire.

## Décisions proposées

Les propositions ci-dessous sont formulées pour arbitrage. Aucune ne doit être considérée comme validée sans décision explicite.

| Identifiant proposé | Sujet | Proposition de travail | Statut |
|---|---|---|---|
| `DEC-TECH-001` | Périmètre V1 | Limiter la V1 à un site vitrine, formulaires, pages légales, CTA de réservation et administration éditoriale légère | `À décider` |
| `DEC-TECH-002` | Réservation | Encapsuler l'accès à Resalib derrière un port interne pour éviter un couplage direct au fournisseur | `À décider` |
| `DEC-TECH-003` | Administration | Séparer l'administration éditoriale de toute logique de réservation et de paiement | `À décider` |
| `DEC-TECH-004` | Architecture | Faire évoluer la base Vue actuelle vers une organisation par couches compatible Clean Architecture, sans refonte totale immédiate | `À décider` |
| `DEC-TECH-005` | Qualité | Exiger au minimum tests unitaires des cas d'utilisation, tests d'intégration des adaptateurs et un parcours E2E critique | `À décider` |

## Questions à valider par Sandra

- Le site doit-il seulement rediriger vers Resalib, ou intégrer une expérience de réservation plus embarquée si la solution le permet ?
- Sandra a-t-elle besoin d'une autonomie immédiate sur les contenus, ou une mise à jour ponctuelle par un tiers suffit-elle au lancement ?
- Les formulaires doivent-ils stocker les demandes dans un outil interne, ou seulement les transmettre vers une messagerie / un prestataire ?
- Les règles d'annulation, de report et de paiement doivent-elles être visibles dès la V1, même si leur détail n'est pas encore figé ?
- Les structures doivent-elles recevoir un accusé de réception distinct avec délai de réponse affiché ?
- Le site doit-il mesurer des conversions dès la V1, et si oui avec quel niveau minimal de traçage compatible RGPD ?

## Risques et dépendances

| Risque / dépendance | Effet possible | Niveau | Action de cadrage recommandée | Statut |
|---|---|---|---|---|
| Intégration Resalib non confirmée | Blocage sur le parcours principal de réservation | Élevé | confirmer le mode d'intégration réel avant la conception détaillée | `Bloqué` |
| Règles d'annulation et paiement absentes | contenu incomplet, incohérences juridiques et UX | Élevé | fixer au moins une règle de lancement documentée | `Bloqué` |
| Périmètre d'administration flou | sur-architecture ou dette d'édition | Moyen | arbitrer autonomie éditoriale réelle de Sandra | `À décider` |
| Site purement CSR non qualifié côté SEO | visibilité locale insuffisante ou métadonnées limitées | Moyen | vérifier si une stratégie de pré-rendu ou rendu statique est nécessaire | `À décider` |
| Formulaires trop riches en données | risque RGPD inutile | Élevé | réduire les champs à l'essentiel et valider les finalités | `À décider` |
| Dépendance forte à un fournisseur externe | panne ou changement de service difficile à absorber | Moyen | imposer des ports/adaptateurs et un mode de repli | `À analyser` |
| Contenus, photos et coordonnées manquants | impossibilité de finaliser recette et mise en ligne | Élevé | lister les livrables attendus côté métier avant design final | `Bloqué` |

## Critères d'acceptation

Le cadrage technique de première version pourra être considéré comme exploitable lorsque les points suivants seront vérifiés :

- le périmètre obligatoire de V1 et le périmètre reporté sont explicitement séparés ;
- la responsabilité de Resalib et celle du site sont distinguées pour réservation, annulation, paiement et données ;
- les ports internes nécessaires à la réservation, au contact, au devis et aux contenus sont identifiés ;
- la correspondance entre base Vue actuelle et couches Clean Architecture est comprise ;
- les formulaires prévus respectent un principe de minimisation des données ;
- les risques bloquants ont un propriétaire et une question de validation associée ;
- la stratégie minimale de tests et de non-régression est définie ;
- aucune décision présentée ici n'est traitée comme validée tant qu'elle n'est pas inscrite et arbitrée dans le registre des décisions.

## Documents impactés

- `docs/06-cahier-des-charges-fonctionnel.md`
  Le périmètre V1, la séparation Resalib/site, l'administration légère et les critères de recette devront y être clarifiés.
- `docs/05-arborescence-fonctionnelle.md`
  Les pages de retour, d'erreur et les alternatives en cas d'indisponibilité de la réservation pourront être précisées.
- `docs/08-contenus-page-par-page.md`
  Les mentions d'annulation, paiement, consentement, confirmations et informations légales devront être ajoutées ou précisées.
- `docs/registre-des-decisions.md`
  Les arbitrages techniques validés devront y être reportés avant d'être considérés comme exploitables.
- `docs/09-protocole-multi-agents.md`
  Aucune modification proposée à ce stade ; utilisé comme contrainte de remise et de validation.

## Auto-revue effectuée

- [x] Périmètre respecté
- [x] Hypothèses identifiées
- [x] Sources vérifiées
- [x] Contradictions recherchées
- [x] Risques et impacts évalués
- [x] Critères de réussite contrôlés
- [x] Sécurité et données sensibles vérifiées
- [x] Livrable relu et compréhensible
