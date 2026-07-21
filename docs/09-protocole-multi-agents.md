# Protocole de travail multi-agents

**Projet :** Maison Loratu  
**Version :** 1.2  
**Statut :** proposition à valider avant implémentation

## 1. Objectif

Permettre à plusieurs agents autonomes de contribuer au cadrage du site Maison Loratu sans produire de code, dupliquer les analyses ou créer des décisions contradictoires.

Le protocole s’applique jusqu’à la validation explicite du cadrage par Sandra.

## 2. Source de vérité

Les agents utilisent en priorité les documents suivants :

1. `docs/01-note-de-cadrage-strategique.md` — vision et objectifs.
2. `docs/02-synthese-des-decisions-sandra.md` — décisions exprimées par Sandra.
3. `docs/03-personas-et-parcours.md` — publics et parcours.
4. `docs/04-catalogue-des-offres.md` — offres, formats et tarifs.
5. `docs/05-arborescence-fonctionnelle.md` — structure du site.
6. `docs/06-cahier-des-charges-fonctionnel.md` — exigences et périmètre.
7. `docs/07-direction-artistique.md` — principes visuels.
8. `docs/08-contenus-page-par-page.md` — contenu attendu.

En cas de contradiction, l’agent ne tranche pas seul : il signale le conflit dans son livrable et le transforme en question à valider.

## 3. Rôles des agents

### Agent produit

Vérifie la cohérence entre la mission, les publics, les offres et les objectifs de réservation. Il identifie les priorités et les décisions manquantes.

### Agent UX

Analyse les parcours des parents, enfants, femmes, seniors, duos et responsables de structures. Il vérifie que chaque parcours mène à une action claire.

### Agent contenu

Prépare la structure des textes, les messages clés, les appels à l’action, la FAQ et la liste des contenus que Sandra doit fournir.

### Agent direction artistique

Contrôle la cohérence entre illustrations, photographies, palette, typographies, ton éditorial et publics ciblés.

### Agent technique

Analyse les besoins de réservation, Resalib, paiement, administration, formulaires, RGPD, SEO et évolutivité. Il ne développe pas.

### Agent qualité

Relit les livrables sous l’angle accessibilité, mobile, clarté, cohérence, SEO, sécurité, RGPD et critères d’acceptation. Il joue le rôle de Quality Analyst et peut refuser un livrable incomplet.

### Coordinateur

Définit les missions, attribue les périmètres, évite les conflits, consolide les résultats, tient le registre des décisions et présente les arbitrages à Sandra. Il est responsable du passage d’une phase à l’autre, mais ne remplace pas la validation de Sandra.

## 4. Règles communes

- Aucun agent ne code, ne modifie l’interface ou n’installe de dépendance avant validation du cadrage.
- Chaque agent travaille sur un périmètre clairement défini.
- Un agent ne réécrit pas le travail d’un autre sans signaler la modification.
- Toute recommandation doit être reliée à un besoin utilisateur, une décision ou un risque identifié.
- Toute hypothèse doit être explicitement marquée comme `À confirmer`.
- Les tarifs, horaires, lieu, coordonnées, règles d’annulation et contenus non validés ne doivent pas être inventés.
- Les agents privilégient les changements documentaires, courts et vérifiables.
- Les décisions validées sont séparées des propositions et des questions ouvertes.
- Chaque livrable indique sa date, son auteur, sa version et son niveau de confiance.
- Les recherches externes mentionnent leur source et leur date de consultation.
- Les données personnelles réelles de Sandra ou des futurs clients ne sont jamais utilisées dans les tests ou les exemples.
- Chaque agent effectue une auto-revue documentée avant de remettre son travail.
- L’auto-revue ne remplace jamais une revue indépendante.
- Un agent ne peut ni s’auto-approuver, ni valider une décision qui relève de Sandra.

### Statuts des éléments

Chaque décision, exigence ou question utilise un seul statut :

- `À analyser` — le sujet n’a pas encore été étudié ;
- `À décider` — une réponse de Sandra ou un arbitrage est nécessaire ;
- `Proposition V1` — un choix provisoire permet d’avancer, mais doit être validé avec les écrans ;
- `Validé` — la décision est documentée et approuvée ;
- `Bloqué` — le sujet empêche une étape suivante ;
- `Obsolète` — l’élément ne s’applique plus.

## 5. Format obligatoire d’un livrable

Chaque agent remet un document ou une section comprenant :

```markdown
# Livrable — [rôle] — [date]

## Périmètre analysé

## Constats

## Recommandations

## Décisions proposées

## Questions à valider par Sandra

## Risques et dépendances

## Documents impactés

## Auto-revue effectuée

- [ ] Périmètre respecté
- [ ] Hypothèses identifiées
- [ ] Sources vérifiées
- [ ] Contradictions recherchées
- [ ] Risques et impacts évalués
- [ ] Critères de réussite contrôlés
- [ ] Sécurité et données sensibles vérifiées
- [ ] Livrable relu et compréhensible
```

Un livrable doit être compréhensible sans relire l’intégralité de l’échange avec l’agent.

## 6. Déroulement d’une mission

### Étape 1 — Préparer

Le coordinateur rédige une fiche de mission avec un objectif, un périmètre, les documents d’entrée et le livrable attendu.

### Étape 2 — Analyser

L’agent lit les documents de référence, distingue les faits des hypothèses et produit ses recommandations sans modifier le périmètre des autres agents. Avant restitution, il exécute son auto-revue et corrige les erreurs détectées.

### Étape 3 — Relire

Un second agent relit le livrable en recherchant les contradictions, oublis, doublons et décisions non justifiées.

### Étape 4 — Arbitrer

Le coordinateur consolide les résultats. Les arbitrages importants sont présentés à Sandra sous forme de questions simples.

### Étape 5 — Valider

Une décision n’est considérée comme validée que lorsqu’elle est inscrite dans la documentation et marquée `Validé`.

### Étape 6 — Autoriser la suite

Le développement ne commence qu’après validation des points bloquants, de l’arborescence, des parcours prioritaires, des offres et des contenus minimums.

### Règle de sortie de chaque phase

Une phase ne se termine que si son livrable est relu, ses questions sont enregistrées, ses risques sont attribués et son statut est explicite. Le coordinateur ne peut pas transformer une hypothèse en décision par défaut.

### Conditions d’arrêt

Un agent doit s’arrêter et demander un arbitrage lorsqu’il :

- rencontre une contradiction entre deux sources de vérité ;
- ne peut pas vérifier une information importante ;
- sort de son périmètre ou doit modifier le travail d’un autre agent ;
- détecte un risque de sécurité, de confidentialité ou de conformité ;
- échoue trois fois sur la même opération ;
- atteint le budget de temps, de tours ou de tokens défini dans sa mission.

## 7. Organisation Git

Pour une mission nécessitant une modification de fichier :

- branche : `codex/cadrage-[mission]` ;
- un objectif par branche ;
- commits au format Conventional Commits ;
- exemple : `docs(ux): clarify workshop booking journeys` ;
- aucune fusion directe dans `main` sans relecture ;
- une MR décrit le périmètre, les décisions prises et les questions restantes.
- une branche ne doit pas modifier simultanément les mêmes lignes qu’une autre branche sans accord du coordinateur ;
- les conflits sont résolus par le coordinateur, puis documentés dans la MR ;
- les contrôles automatiques et la revue Quality Analyst doivent être verts avant fusion.

Les agents qui ne produisent qu’une analyse peuvent remettre leur livrable sans créer de branche, selon la décision du coordinateur.

### Worktrees pour l’exécution parallèle

Chaque agent qui modifie des fichiers travaille dans un worktree dédié, créé depuis le même commit de référence :

```text
worktrees/
├── agent-ux/         → codex/ux-[mission]
├── agent-contenu/    → codex/contenu-[mission]
├── agent-technique/  → codex/technique-[mission]
└── agent-qualite/    → codex/qualite-[mission]
```

Règles d’utilisation :

- aucun agent ne travaille directement dans le worktree principal partagé ;
- chaque worktree est associé à une seule mission et une seule branche ;
- les agents reçoivent le même état de référence au démarrage d’une vague de travail ;
- les fichiers communs sont modifiés uniquement par le coordinateur ou après accord explicite ;
- un agent remet ses changements par commit et description de MR ;
- le coordinateur intègre les branches une par une après revue et contrôles ;
- un worktree est supprimé uniquement après intégration ou abandon documenté de la mission.

Les agents qui ne font qu’analyser peuvent utiliser le worktree principal en lecture seule, mais ne doivent pas y écrire.

## 8. Critères de fin du cadrage

Le cadrage est prêt pour l’implémentation lorsque :

- les publics prioritaires et leurs parcours sont confirmés ;
- l’arborescence et la navigation sont validées ;
- les offres, formats, tarifs et appels à l’action sont validés ;
- les contenus minimums et les éléments à fournir par Sandra sont identifiés ;
- la stratégie de réservation est choisie ou son périmètre de première version est figé ;
- les règles RGPD, contact et annulation ont un responsable et un statut ;
- la direction artistique est validée ;
- les critères d’acceptation sont vérifiables ;
- aucune question bloquante ne reste sans propriétaire.

## 9. Portes de validation

Le projet avance par portes explicites :

1. **Porte cadrage** — mission, publics, objectifs et périmètre validés.
2. **Porte expérience** — parcours, arborescence, CTA et contenus minimums validés.
3. **Porte technique** — architecture, intégrations, sécurité, RGPD et stratégie de tests validés.
4. **Porte design** — direction artistique, composants et règles de contenu validés.
5. **Porte lancement** — critères d’acceptation, tests, SEO, accessibilité et données légales vérifiés.

Un seul élément `Bloqué` sur une porte empêche le passage à la suivante.

## 10. Première expérimentation recommandée

Lancer trois missions en parallèle :

1. **UX** — vérifier les parcours de réservation par public.
2. **Contenu** — transformer les besoins en plan de contenu exploitable.
3. **Technique** — cadrer Resalib, réservation, administration et RGPD.

Puis confier à l’agent qualité une revue croisée des trois livrables avant de soumettre une synthèse à Sandra.

## 11. Fiche de mission réutilisable

```markdown
# Mission — [nom]

## Agent responsable

## Objectif

## Périmètre inclus

## Périmètre exclu

## Documents à lire

## Questions auxquelles répondre

## Livrable attendu

## Critères de réussite

## Agent relecteur

## Dépendances

## Budget maximal

## Conditions d’arrêt et d’escalade

## Date de restitution
```

## 12. Respect de la Clean Architecture

La Clean Architecture s’applique dès la conception technique et doit être respectée par tous les agents qui prépareront ou implémenteront le site.

### Principes obligatoires

- Le domaine métier reste indépendant du framework, de l’interface, de Resalib, du stockage et des services externes.
- Les dépendances de code pointent vers l’intérieur : présentation et infrastructure dépendent des cas d’utilisation, jamais l’inverse.
- Les règles métier sont exprimées dans des cas d’utilisation testables et indépendants de Vue, Vite ou Tailwind.
- Les intégrations externes sont encapsulées derrière des interfaces ou adaptateurs remplaçables.
- Les composants d’interface ne contiennent pas de logique métier, de gestion directe de réservation ou d’accès aux données.
- Les secrets, paramètres d’environnement et détails de configuration restent hors du domaine métier.

### Organisation cible à confirmer par l’agent technique

```text
src/
├── domain/
│   ├── entities/
│   ├── value-objects/
│   └── repositories/
├── application/
│   ├── use-cases/
│   └── dto/
├── infrastructure/
│   ├── booking/
│   ├── contact/
│   └── persistence/
└── presentation/
    ├── components/
    ├── pages/
    └── composables/
```

Cette organisation est une cible de conception, pas une autorisation de coder avant la validation du cadrage.

### Contrôle obligatoire avant fusion

L’agent qualité ou l’agent technique vérifie :

- l’absence d’appel Resalib, HTTP ou stockage dans `domain/` ;
- l’absence de règles métier importantes dans les composants Vue ;
- la possibilité de tester les cas d’utilisation sans navigateur ni service externe ;
- le remplacement possible de Resalib ou du prestataire de paiement ;
- la séparation entre données de présentation et modèles métier ;
- la gestion explicite des erreurs, états de chargement et indisponibilités externes ;
- la conformité des dépendances avec le sens des couches ;
- la présence de tests adaptés aux cas d’utilisation et aux adaptateurs.

Toute exception doit être documentée dans la MR avec sa justification et sa dette technique éventuelle.

### Décisions techniques à valider avant développement

L’agent technique doit proposer, puis faire valider :

1. la correspondance entre les couches et l’architecture Vue existante ;
2. les cas d’utilisation de la première version ;
3. les interfaces nécessaires pour la réservation, le contact et les contenus ;
4. la stratégie de gestion des erreurs et des indisponibilités de Resalib ;
5. la stratégie de tests par couche ;
6. les règles de nommage, d’import et de dépendances ;
7. les limites acceptées pour une première version sans sur-architecture.

## 13. Utilisation des patterns

Les patterns sont des outils de conception, pas des objectifs en soi. Un agent ne propose un pattern que s’il répond à un problème identifié, améliore la testabilité ou protège une évolution probable du projet.

### Patterns privilégiés

- **Use Case** : encapsuler une action métier comme réserver un atelier, envoyer une demande de contact ou récupérer les ateliers disponibles.
- **Repository** : isoler l’accès aux données et permettre de remplacer Resalib, une API ou un stockage local.
- **Adapter** : convertir le format d’un service externe vers le modèle attendu par l’application.
- **Gateway / Port** : définir une interface interne pour communiquer avec un service externe sans le rendre visible du domaine.
- **Factory** : construire des entités ou objets métier lorsque leur création comporte des règles ou plusieurs variantes.
- **Strategy** : gérer plusieurs comportements interchangeables, par exemple plusieurs modes de réservation ou de notification.
- **DTO / Mapper** : séparer les données transportées par une API des objets utilisés par le domaine.
- **Facade** : fournir une interface simple à une intégration complexe, notamment pour la réservation ou l’administration.

### Patterns à utiliser avec prudence

- **Singleton** uniquement pour une ressource réellement unique et sans état métier caché.
- **Observer / Event Bus** uniquement si le découplage apporte un bénéfice clairement documenté.
- **Generic Repository** uniquement si plusieurs implémentations partagent réellement le même comportement.
- **Service Locator** à éviter, car il masque les dépendances et complique les tests.
- Les abstractions, factories et interfaces créées uniquement « au cas où » sont refusées.

### Fiche obligatoire pour chaque pattern

Toute introduction d’un pattern doit être justifiée dans la MR :

```markdown
## Pattern proposé

### Problème résolu

### Pattern retenu

### Pourquoi cette solution

### Alternatives écartées

### Impact sur les tests et la maintenance

### Coût ou complexité ajoutée
```

### Critères de revue

L’agent qualité vérifie que chaque pattern :

- répond à un besoin réel de Maison Loratu ;
- respecte le sens des dépendances de la Clean Architecture ;
- rend le code plus lisible ou plus testable ;
- n’ajoute pas de couche sans responsabilité claire ;
- possède une alternative plus simple évaluée ;
- reste proportionné à la première version du site.

## 14. Stratégie TDD

Le TDD est prévu de manière ciblée, en priorité sur les règles métier et les cas d’utilisation. Il ne doit pas retarder le cadrage ni produire des tests artificiels pour des composants purement visuels.

### Périmètre obligatoire

- entités et règles métier ;
- cas d’utilisation : réservation, demande de contact, disponibilité et annulation ;
- validation des données et gestion des erreurs ;
- adaptateurs de réservation au moyen de tests de contrat ou de mocks maîtrisés ;
- fonctions critiques liées au RGPD et aux consentements.

### Périmètre complémentaire

- composants Vue avec comportement utilisateur significatif ;
- parcours de réservation de bout en bout ;
- responsive et régression visuelle lorsque l’outillage est disponible ;
- navigation clavier et messages d’erreur accessibles.

### Cycle TDD attendu

1. écrire un test qui décrit un comportement attendu ;
2. vérifier qu’il échoue pour la bonne raison ;
3. implémenter la solution minimale ;
4. rendre le code lisible et supprimer les duplications ;
5. vérifier les tests unitaires, d’intégration et de parcours concernés.

### Règles de qualité

- Les tests vérifient des comportements, pas les détails internes d’implémentation.
- Les cas nominaux, erreurs, indisponibilités et limites sont couverts.
- Les services externes ne sont jamais appelés par les tests unitaires.
- Un test fragile ou redondant doit être simplifié ou supprimé.
- Toute fonctionnalité fusionnée indique son niveau de couverture et les limites restantes.
- L’agent qualité peut bloquer une MR si un comportement critique n’est pas testable.

Le niveau minimal attendu pour la première version est : tests unitaires des cas d’utilisation, tests d’intégration des adaptateurs et un parcours E2E de réservation lorsque la solution de réservation sera choisie.

## 15. Sécurité du code et prévention des régressions

La sécurité et la non-régression sont des critères de validation obligatoires. Aucun agent ne doit privilégier la vitesse de livraison au détriment de l’intégrité du code, des données ou des parcours existants.

### Règles de sécurité du code

- Ne jamais committer de secret, clé API, mot de passe, token ou donnée personnelle réelle.
- Valider et normaliser toutes les données reçues depuis un formulaire, une URL ou un service externe.
- Échapper ou neutraliser les contenus affichés afin d’éviter les injections XSS.
- Ne jamais faire confiance aux données renvoyées par Resalib ou un autre fournisseur.
- Appliquer le principe du moindre privilège aux accès, fonctions et variables d’environnement.
- Ne pas exposer d’information sensible dans les logs, messages d’erreur ou URLs.
- Utiliser HTTPS, des dépendances maintenues et des versions verrouillées.
- Vérifier les dépendances et leurs vulnérabilités avant fusion et avant mise en production.
- Documenter toute exception de sécurité avec son risque, sa justification et sa date de réévaluation.

### Stratégie anti-régression

Chaque modification doit :

1. identifier les comportements impactés ;
2. ajouter ou mettre à jour les tests correspondants ;
3. exécuter les tests ciblés avant la revue ;
4. exécuter la suite complète avant fusion ;
5. vérifier les parcours critiques sur mobile et clavier si l’interface est concernée ;
6. décrire dans la MR les risques de régression et la méthode de vérification.

Les parcours critiques sont au minimum :

- consultation d’une offre ;
- réservation d’un atelier ;
- demande de contact ;
- affichage des informations légales et de confidentialité ;
- navigation mobile et navigation au clavier.

### Garde-fous obligatoires de la MR

Une MR ne peut pas être fusionnée si :

- les tests échouent ou ne sont pas exécutés ;
- une vulnérabilité critique ou élevée reste non traitée sans acceptation explicite du risque ;
- une fonctionnalité critique n’a pas de test de non-régression ;
- un secret ou une donnée personnelle est détecté ;
- les erreurs de lint, de type ou de build ne sont pas expliquées ;
- la revue de l’agent qualité n’est pas terminée.

### Vérification continue

Le dépôt doit disposer, avant l’implémentation fonctionnelle, d’une automatisation de contrôle comprenant au minimum :

- lint ;
- vérification de types ;
- tests unitaires et d’intégration ;
- build de production ;
- analyse des dépendances ;
- détection de secrets ;
- tests E2E des parcours critiques dès qu’ils existent.

Les contrôles doivent être exécutés sur chaque MR et avant chaque mise en production. Une régression détectée après fusion donne lieu à un ticket prioritaire, une analyse de cause et un test empêchant sa réapparition.

### Restauration et traçabilité

Chaque mise en production doit être liée à un commit identifié et réversible. En cas de régression critique, la priorité est de restaurer la dernière version saine avant d’ajouter une correction. La cause, l’impact, la correction et le test ajouté sont documentés.

## 16. Orchestration des agents

L’autonomie est limitée par le contrat de mission. Un agent est autonome dans son analyse, mais ne l’est pas pour modifier le périmètre, inventer une décision ou fusionner son travail.

### Contrat d’exécution

Chaque mission doit préciser :

- l’agent responsable et l’agent relecteur ;
- l’objectif et le résultat attendu ;
- les entrées autorisées et les fichiers modifiables ;
- les dépendances avec les autres missions ;
- le budget maximal de temps, de tours ou de tokens ;
- les conditions d’arrêt et d’escalade ;
- les critères de réussite mesurables.

### Modèle recommandé par rôle

Le modèle le plus léger capable de produire un résultat fiable est utilisé par défaut. Le changement de modèle doit être motivé dans la mission ou le livrable.

| Rôle | Modèle par défaut | Niveau conseillé | Escalade |
|---|---|---|---|
| Agent produit | `gpt-5.4-mini` | moyen | `gpt-5.4` pour arbitrer des offres contradictoires |
| Agent UX | `gpt-5.4-mini` | moyen | `gpt-5.4` pour les parcours complexes ou multi-publics |
| Agent contenu | `gpt-5.4-mini` | faible à moyen | `gpt-5.4` pour la stratégie éditoriale globale |
| Agent direction artistique | `gpt-5.4-mini` | moyen | `gpt-5.4` pour arbitrer une direction complète |
| Agent technique | `gpt-5.4` | élevé | `gpt-5.5` pour l’architecture, la sécurité ou les intégrations sensibles |
| Agent qualité / Quality Analyst | `gpt-5.4` | élevé | `gpt-5.5` pour une revue de sécurité ou de risque critique |
| Coordinateur | `gpt-5.4` | moyen à élevé | `gpt-5.5` pour la synthèse finale et les arbitrages complexes |

Les tâches de recherche simple, extraction, classement ou relecture de forme restent sur `gpt-5.4-mini`. Les tâches qui engagent la sécurité, le RGPD, l’architecture ou une décision structurante utilisent au minimum `gpt-5.4`.

### Gestion du budget de tokens

- Le coordinateur définit un budget par mission avant son lancement.
- L’agent commence par une analyse ciblée des documents utiles, sans charger tout le dépôt par défaut.
- Les livrables sont structurés et synthétiques ; les répétitions sont supprimées.
- Un agent ne relance pas une analyse déjà produite sans expliquer ce qui a changé.
- À 80 % du budget, l’agent résume son état et demande une décision de poursuite ou d’arrêt.
- À 100 % du budget, il remet un livrable partiel clairement marqué et s’arrête.
- L’escalade vers un modèle plus puissant est réservée à une incertitude, un conflit ou un risque identifié.

Le modèle utilisé, le niveau de raisonnement, le budget prévu et la consommation estimée sont indiqués dans chaque fiche de mission.

### Gestion du contexte

Un agent ne reçoit jamais l’intégralité du dépôt ou de l’historique par défaut. Le coordinateur lui transmet uniquement le contexte nécessaire à sa mission, accompagné d’un résumé court des décisions déjà validées.

Le contexte fourni doit distinguer clairement :

- les faits validés ;
- les hypothèses ;
- les questions ouvertes ;
- les contraintes de la mission ;
- les fichiers et lignes réellement concernés.

Règles pratiques :

- commencer par lire la fiche de mission et les documents directement pertinents ;
- ne charger un document complémentaire qu’en cas de dépendance identifiée ;
- préférer un résumé validé à la répétition d’un long historique de conversation ;
- ne jamais transmettre des logs, fichiers générés ou extraits sans rapport avec la mission ;
- conserver les résultats intermédiaires dans un livrable plutôt que dans le contexte d’un autre agent ;
- réinitialiser le contexte entre deux missions différentes ;
- demander un complément au coordinateur lorsqu’une information manque, plutôt que d’inférer silencieusement.

La réduction du contexte ne doit toutefois pas supprimer une contrainte de sécurité, une décision validée ou une dépendance nécessaire à la compréhension du sujet.

### Exécution parallèle

Les missions peuvent être parallèles uniquement si elles ne dépendent pas d’une décision non validée et ne modifient pas les mêmes artefacts. Les missions dépendantes sont exécutées dans un graphe explicite : aucune mission ne consomme un livrable non marqué `Validé`.

Le coordinateur limite le nombre d’agents actifs afin d’éviter les analyses redondantes, les contradictions et la dilution de la responsabilité.

### Revue contradictoire

Pour les sujets à risque — réservation, paiement, RGPD, sécurité et architecture — la revue doit être réalisée par un agent différent, avec une consigne de recherche active des erreurs et des alternatives. Une simple approbation automatique est insuffisante.

## 17. Traçabilité des décisions

Le projet maintient un registre unique des décisions. Chaque entrée contient :

| Champ | Contenu attendu |
|---|---|
| Identifiant | `DEC-001`, `DEC-002`, etc. |
| Sujet | Question ou choix concerné |
| Options | Solutions étudiées |
| Décision | Choix retenu ou statut `À décider` |
| Justification | Raisons et contraintes |
| Validateur | Sandra ou rôle autorisé |
| Date | Date de validation |
| Impact | Documents, parcours et code concernés |

Une réponse donnée dans une conversation n’est pas une décision exploitable tant qu’elle n’est pas reportée dans ce registre.

## 18. Definition of Ready / Definition of Done

### Definition of Ready

Une mission est prête lorsque son objectif est testable, son périmètre est borné, ses sources sont listées, son propriétaire et son relecteur sont désignés, et ses dépendances sont connues.

### Definition of Done

Une mission est terminée lorsque le livrable est produit, auto-relu, relu indépendamment, relié aux documents impactés, débarrassé de ses ambiguïtés non signalées et accepté par le coordinateur ou Sandra selon le niveau de décision.

Un livrable ne peut pas être déclaré terminé uniquement parce que l’agent a produit une réponse.
