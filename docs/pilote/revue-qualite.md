# Livrable — agent qualité — 2026-07-21

**Auteur :** agent qualité délégué  
**Version :** 0.1  
**Niveau de confiance :** élevé  
**Statut global :** `À relire`

## Périmètre analysé

- Relecture croisée de `docs/pilote/ux-parcours.md`, `docs/pilote/plan-contenu.md` et `docs/pilote/cadrage-technique.md` produits dans les worktrees délégués.
- Vérification contre les sources de vérité du dépôt : `docs/02-synthese-des-decisions-sandra.md`, `docs/03-personas-et-parcours.md`, `docs/05-arborescence-fonctionnelle.md`, `docs/06-cahier-des-charges-fonctionnel.md`, `docs/08-contenus-page-par-page.md` et `docs/09-protocole-multi-agents.md`.
- Contrôle spécifique sur les contradictions, hypothèses non balisées, UX, accessibilité, sécurité, RGPD, non-régression, Clean Architecture, surconsommation de contexte et respect du protocole.

## Constats

- Les trois livrables convergent sur le cap général : V1 vitrine, ateliers prioritaires, réservation externe probable via Resalib, demande de devis distincte pour les structures.
- Le livrable technique est le plus rigoureux sur les sujets RGPD, sécurité et non-régression, mais il anticipe parfois des choix d’architecture plus fins que le niveau de décision réellement stabilisé.
- Les livrables UX et contenu sont exploitables comme matière de cadrage, mais pas encore consolidables tels quels à cause d’écarts de hiérarchie, de formalisme et de cadrage conformité.
- Aucun P0 bloquant n’a été relevé, mais plusieurs P1 empêchent une consolidation fiable sans reprise.

## Recommandations

- Corriger d’abord les P1 ci-dessous avant toute synthèse pour Sandra.
- Ne pas fusionner les trois livrables en l’état dans un document maître : ils portent encore des priorités et des exigences contradictoires.
- Dédupliquer les questions ouvertes dans un backlog unique, puis présenter à Sandra uniquement les arbitrages encore nécessaires.
- Réserver les décisions de structure technique détaillée au moment où les arbitrages métier bloquants auront été actés.

## Décisions proposées

- `QA-DEC-001` : refuser la consolidation finale tant que la hiérarchie des offres et des CTA n’est pas alignée entre UX, contenu et sources de vérité.
- `QA-DEC-002` : demander une reprise de forme des livrables UX et contenu pour respecter le format obligatoire du protocole.
- `QA-DEC-003` : exiger un cadrage explicite RGPD sur les formulaires et les contenus impliquant mineurs, témoignages et droit à l’image avant toute validation de la porte expérience.

## Questions à valider par Sandra

- Quel ordre business doit être retenu sur l’accueil et dans les priorités de contenu entre `ateliers seniors`, `cours en plein air`, `accompagnement individuel` et `structures` ?
- L’autonomie éditoriale de Sandra impose-t-elle réellement un CMS dès la V1, ou une gestion versionnée des contenus suffit-elle au lancement ?
- Quel est le minimum d’informations à collecter avant un premier échange, notamment pour les demandes liées aux enfants et aux structures ?
- Quels témoignages, photos et visuels sont déjà autorisés à publication, et lesquels doivent être exclus au lancement faute d’autorisation explicite ?
- Le périmètre `duos / familles` doit-il rester limité aux binômes déjà cités, ou être élargi dès la V1 ?

## Risques et dépendances

### P0

- Aucun constat P0 à ce stade.

### P1 — Hiérarchie des offres et des parcours contradictoire

Constat :
La priorisation des offres diverge entre les livrables et n’est plus alignée avec la référence Sandra.

Preuves :
- `docs/02-synthese-des-decisions-sandra.md:145-159` place `Ateliers seniors` avant `Cours en plein air` et `Accompagnement individuel`.
- `docs/03-personas-et-parcours.md:217-226` place `Cours en plein air` avant `Accompagnement individuel`, puis `Ateliers seniors`.
- `docs/pilote/ux-parcours.md:30-49` place `Ateliers seniors` en troisième parcours, `Structures` en quatrième, `Cours en plein air` en cinquième.
- `docs/pilote/plan-contenu.md:43-49` et `docs/pilote/plan-contenu.md:76-87` placent `Cours en plein air` puis `Accompagnement individuel` avant `Ateliers seniors`.

Impact :
Le coordinateur ne peut pas dériver une IA, une homepage et des CTA cohérents sans réinterpréter lui-même la priorité business, ce que le protocole interdit.

Correction recommandée :
Aligner les trois livrables sur un seul ordre de priorité, ou transformer explicitement ce point en arbitrage Sandra au lieu de produire trois hiérarchies concurrentes.

Arbitrage :
Sandra.

### P1 — L’administration légère est transformée en exigence quasi acquise

Constat :
Le livrable technique traite l’administration éditoriale comme un bloc `Obligatoire`, alors que la source de vérité la formule comme recommandée et encore à cadrer.

Preuves :
- `docs/02-synthese-des-decisions-sandra.md:100-100` qualifie l’administration de `Recommandé`.
- `docs/02-synthese-des-decisions-sandra.md:161-184` parle d’une administration simple et proportionnée.
- `docs/06-cahier-des-charges-fonctionnel.md:109-123` décrit un espace administrateur léger, mais `docs/06-cahier-des-charges-fonctionnel.md:194-204` maintient ses fonctionnalités exactes comme décision bloquante.
- `docs/pilote/cadrage-technique.md:30-35` classe `Administration éditoriale` en `Obligatoire`.

Impact :
Le risque est de verrouiller un CMS ou une interface d’admin trop tôt, avant validation du besoin réel et de la capacité de Sandra à l’utiliser seule.

Correction recommandée :
Requalifier l’administration comme `À décider` avec deux scénarios bornés : contenu versionné au lancement ou CMS léger si autonomie immédiate réellement nécessaire.

Arbitrage :
Sandra.

### P1 — Minimisation RGPD incomplète sur les formulaires, surtout côté mineurs

Constat :
Les livrables n’alignent pas encore les recommandations RGPD avec le contenu concret des formulaires. Le risque de surcollecte est élevé, surtout via les champs libres sur des demandes liées aux enfants.

Preuves :
- `docs/06-cahier-des-charges-fonctionnel.md:71-77` impose pour le formulaire particulier `motif` et `message`.
- `docs/06-cahier-des-charges-fonctionnel.md:81-93` impose un formulaire structure très riche.
- `docs/08-contenus-page-par-page.md:164-184` reprend cette structure sans hiérarchie de champs ni garde-fou de saisie.
- `docs/pilote/cadrage-technique.md:148-162` signale au contraire qu’il faut éviter les données de santé et les détails sensibles sur les enfants.
- `docs/pilote/ux-parcours.md:79-81` note que le formulaire structure peut devenir trop long, sans proposer de réduction concrète.

Impact :
Le site risque de collecter des données excessives, sensibles ou inutiles avant même d’avoir défini finalité, durée de conservation et rôle exact de Resalib.

Correction recommandée :
Définir un jeu minimal de champs obligatoires, rendre le reste optionnel ou basculer en qualification secondaire, et afficher une consigne explicite de ne pas saisir de données de santé ni d’informations intimes sur un enfant.

Arbitrage :
Sandra.

### P1 — Droit à l’image et témoignages insuffisamment sécurisés pour la V1

Constat :
Les trois livrables recommandent fortement photos réelles et témoignages, mais sans transformer l’absence d’autorisation en règle de blocage éditoriale, notamment pour les contenus impliquant des mineurs.

Preuves :
- `docs/02-synthese-des-decisions-sandra.md:117-124` demande photos et témoignages, mais précise que les témoignages sont encore à recueillir.
- `docs/02-synthese-des-decisions-sandra.md:186-199` liste explicitement les autorisations de droit à l’image parmi les informations manquantes.
- `docs/pilote/ux-parcours.md:23-23` demande que photos réelles et témoignages arrivent tôt.
- `docs/pilote/plan-contenu.md:58-63` recommande un bloc de réassurance systématique avec avis, témoignages et photos réelles.
- `docs/pilote/plan-contenu.md:143-146` pose la question des autorisations, mais sans règle opérationnelle de repli.

Impact :
La consolidation peut pousser une mise en scène visuelle ou testimoniale non publiable au lancement, en particulier pour les ateliers enfants et duos intergénérationnels.

Correction recommandée :
Ajouter une règle explicite : sans autorisation écrite et vérifiée, pas de photo d’atelier ni de témoignage identifiable ; utiliser en repli portrait de Sandra, photos du lieu, illustrations et verbatims anonymisés si juridiquement recevables.

Arbitrage :
Sandra.

### P1 — Les livrables UX et contenu ne respectent pas le format obligatoire du protocole

Constat :
Deux livrables ne suivent pas le format imposé pour une remise d’agent, ce qui suffit à justifier une demande de reprise avant consolidation.

Preuves :
- `docs/09-protocole-multi-agents.md:85-118` rend obligatoires les sections `Recommandations`, `Décisions proposées`, `Questions à valider par Sandra`, `Risques et dépendances`, `Documents impactés`, `Auto-revue effectuée`, ainsi que date, auteur, version et niveau de confiance.
- `docs/pilote/ux-parcours.md:1-164` n’indique ni auteur, ni version, ni niveau de confiance ; il n’a pas de section `Recommandations` ni `Décisions proposées`.
- `docs/pilote/plan-contenu.md:1-320` n’indique ni auteur, ni version, ni niveau de confiance ; il ne contient ni `Risques et dépendances` ni `Documents impactés`.

Impact :
Le processus de relecture devient fragile : les sections attendues ne sont pas homogènes et certaines décisions ou risques peuvent disparaître au moment de la consolidation.

Correction recommandée :
Normaliser les deux livrables selon le squelette du protocole avant toute reprise de fond.

Arbitrage :
Coordinateur, pas Sandra.

### P2 — Duplication massive des questions ouvertes et surconsommation de contexte

Constat :
Les mêmes questions reviennent dans les trois livrables et dans les documents de référence, sans backlog unique ni identifiant partagé.

Preuves :
- `docs/02-synthese-des-decisions-sandra.md:186-199` contient déjà la liste des informations manquantes.
- `docs/pilote/ux-parcours.md:116-126`, `docs/pilote/plan-contenu.md:108-148` et `docs/pilote/cadrage-technique.md:204-211` réouvrent une grande partie des mêmes sujets.

Impact :
Le coordinateur devra dédupliquer manuellement les arbitrages ; le risque de poser trois fois la même question à Sandra est élevé.

Correction recommandée :
Créer une table unique `question / source / impact / propriétaire / statut`, puis faire référencer cette table par les livrables au lieu de répéter les listes.

Arbitrage :
Coordinateur.

### P2 — Le cadrage technique descend trop tôt au niveau de nommage d’architecture

Constat :
Le livrable technique reste globalement prudent, mais il détaille déjà une arborescence cible, des ports et des repositories nommés alors que plusieurs arbitrages métier bloquants ne sont pas encore actés.

Preuves :
- `docs/pilote/cadrage-technique.md:42-103` propose une structure détaillée `domain / application / infrastructure / presentation` avec interfaces nommées.
- `docs/pilote/cadrage-technique.md:217-223` maintient pourtant plusieurs dépendances majeures en `Bloqué`.
- `docs/09-protocole-multi-agents.md:66-67` demande des changements documentaires courts et vérifiables, sans transformer une hypothèse en décision par défaut.

Impact :
Le futur implémenteur risque de lire ces noms comme un pré-design validé et de sur-architecturer la V1 pour rester conforme au document plutôt qu’au besoin.

Correction recommandée :
Ramener le cadrage technique à des principes et critères de décision, puis ne conserver les noms d’artefacts que s’ils deviennent utiles après arbitrage Resalib, administration et formulaires.

Arbitrage :
Coordinateur.

### P2 — Nommage et découpage de l’offre `duos / familles` non stabilisés

Constat :
Les sources et livrables n’emploient pas la même granularité pour décrire l’offre duo, ce qui entretient une ambiguïté éditoriale et UX.

Preuves :
- `docs/02-synthese-des-decisions-sandra.md:34-36` parle de `Duos et familles`.
- `docs/03-personas-et-parcours.md:143-172` crée une persona `Duo ou famille` et une page `Ateliers duos`.
- `docs/05-arborescence-fonctionnelle.md:78-85` parle de `Ateliers femmes et duos`.
- `docs/pilote/ux-parcours.md:71-75` garde `Duos / familles` comme périmètre encore flou.
- `docs/pilote/plan-contenu.md:204-226` fusionne femmes, duos et venue seule sur une même page.

Impact :
Le risque est de produire des messages, CTA et pages différents pour une offre qui n’a pas encore de contour commercial stabilisé.

Correction recommandée :
Fixer une dénomination canonique et un périmètre de lancement unique, puis aligner IA, CTA et contenu sur ce choix.

Arbitrage :
Sandra.

### P2 — Risque de non-régression documentaire insuffisamment explicité par rapport au dépôt actuel

Constat :
Le livrable technique constate bien l’existence de la base Vue actuelle, mais aucun des trois livrables ne précise comment la future V1 remplace ou réemploie le flux existant déjà présent dans le dépôt.

Preuves :
- `docs/pilote/cadrage-technique.md:21-22` décrit la base actuelle.
- `src/router/index.js:1-6` montre des routes existantes `Home`, `Questionnaire`, `Merci`, `MentionsLegales`, `PolitiqueConfidentialite`.

Impact :
Au moment de l’implémentation, le risque est d’écraser ou d’abandonner implicitement un flux existant sans décider s’il est retiré, migré ou conservé.

Correction recommandée :
Ajouter dans le cadrage technique un point de non-régression explicitant le sort du flux actuel et les critères de remplacement.

Arbitrage :
Coordinateur.

## Documents impactés

- `docs/pilote/ux-parcours.md`
- `docs/pilote/plan-contenu.md`
- `docs/pilote/cadrage-technique.md`
- `docs/03-personas-et-parcours.md`
- `docs/05-arborescence-fonctionnelle.md`
- `docs/06-cahier-des-charges-fonctionnel.md`

## Vérifications impossibles à ce stade

- La présence d’autorisations écrites réelles pour les témoignages, photos d’ateliers, portraits et contenus impliquant des mineurs n’est pas vérifiable depuis le dépôt.
- Le paramétrage effectif de Resalib, son mode d’intégration exact et ses responsabilités contractuelles de traitement ne sont pas vérifiables depuis la documentation locale seule.
- La base légale finale, la durée de conservation et le circuit réel de traitement des formulaires ne sont pas vérifiables tant qu’aucune décision juridique ou organisationnelle supplémentaire n’est documentée.

## Auto-revue effectuée

- [x] Périmètre respecté
- [x] Hypothèses identifiées
- [x] Sources vérifiées
- [x] Contradictions recherchées
- [x] Risques et impacts évalués
- [x] Critères de réussite contrôlés
- [x] Sécurité et données sensibles vérifiées
- [x] Livrable relu et compréhensible

## Décisions non prises

- Ce document ne valide aucune correction et n’approuve aucun arbitrage à la place de Sandra.
- Les constats process relèvent du coordinateur ; les constats métier restent à arbitrer explicitement avant consolidation.
