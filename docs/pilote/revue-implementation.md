# Revue indépendante de l'implémentation V1

**Auteur :** QA final délégué  
**Date :** 2026-07-21  
**Périmètre relu :** état du dépôt, routes Vue, vues publiques, prototype admin, configuration Resalib, tests disponibles, décisions V1 et cadrage technique.

## Verdict

**Recommandation finale : non, ce livrable n'est pas prêt pour la revue d'écrans Sandra.**

La base visuelle et plusieurs garde-fous V1 sont présents, mais quatre écarts `P1` touchent le parcours structures, la cohérence des CTA, la fiabilité du questionnaire et la conformité RGPD/données.

## Sources de référence

- `docs/pilote/decisions-v1-provisoires.md`
- `docs/05-arborescence-fonctionnelle.md`
- `docs/08-contenus-page-par-page.md`
- `docs/pilote/cadrage-technique.md`
- `src/router/index.js`
- `src/views/Home.vue`
- `src/views/Ateliers.vue`
- `src/views/Contact.vue`
- `src/views/Questionnaire.vue`
- `src/views/Administration.vue`
- `src/config/site.js`
- `src/config/site.test.js`

## Points conformes observés

- `src/config/site.js:1-60` filtre bien les URL Resalib pour n'accepter que `https://*.resalib.fr`.
- `src/router/index.js:38-49` et `src/config/site.js:31-55` rendent le prototype admin inaccessible en contexte de production.
- `src/config/site.test.js:1-62` couvre ces règles de configuration, et le lancement direct `node --test src/config/site.test.js` passe (`5/5`).
- Aucun usage de `localStorage`, `sessionStorage` ou `document.cookie` n'a été trouvé dans `src`.
- Les textes publics évitent bien d'inventer une adresse, un téléphone ou un lien Resalib tant qu'ils ne sont pas validés, conformément à `docs/pilote/decisions-v1-provisoires.md:39-56` et `69-71`.

## Problèmes

### P1

#### 1. Le parcours "structures" est cassé fonctionnellement

- Fichiers : `src/views/Ateliers.vue:30-36`, `src/views/Contact.vue:40-49`, `src/views/Questionnaire.vue:15-29`, `150-219`
- Impact : les CTA structures mènent vers `/questionnaire`, mais le questionnaire ne sait traiter que `femme-enceinte`, `enfant` et `adulte`. Il n'existe aucun flux devis structure avec établissement, effectif, âge, objectif, période ou lieu.
- Écart de référence : `docs/05-arborescence-fonctionnelle.md:121-141` et `docs/08-contenus-page-par-page.md:173-184` demandent un flux distinct de demande de devis.
- Correction recommandée : créer un vrai branchement "structure" avec schéma dédié et page de confirmation dédiée, ou séparer complètement les formulaires particulier / structure avant la revue.

#### 2. Les CTA de découverte changent de sens dès qu'un lien Resalib est configuré

- Fichiers : `src/views/Home.vue:71-80`, `160-165`, `src/components/CTAButton.vue:31-37`
- Impact : le CTA hero `Découvrir les ateliers` et le CTA `Voir les ateliers` pointent vers Resalib en externe dès que `VITE_RESALIB_URL` existe. Le parcours de découverte interne `/ateliers` est alors court-circuité.
- Écart de référence : `docs/pilote/decisions-v1-provisoires.md:15-18` fixe un CTA hero `Découvrir les ateliers`, et `39-43` précise que l'ajout du lien Resalib ne doit pas modifier le parcours.
- Correction recommandée : figer les CTA de découverte sur les routes internes et réserver les liens Resalib aux CTA explicitement libellés `Réserver`.

#### 3. Le questionnaire multi-étapes n'est pas fiable

- Fichiers : `src/views/Questionnaire.vue:65-77`, `79-110`, `230-245`, `323-340`
- Impact : l'utilisateur peut avancer sans validation intermédiaire. Au dernier écran, un `submit` invalide peut échouer sur des champs cachés sans feedback visible. En plus, la sélection des besoins repose sur un `@click` sur le `<label>` et un `@change` sur la checkbox, ce qui crée un risque de double bascule.
- Effet probable : perte de confiance, abandon du formulaire, non-régression difficile à garantir sans tests de parcours.
- Correction recommandée : valider chaque étape avant `nextStep`, afficher les erreurs sur l'étape concernée, et remplacer la logique de sélection des besoins par un seul mécanisme piloté par `v-model` ou par l'API `vee-validate`.

#### 4. Le traitement des données du questionnaire n'est pas conforme au cadrage RGPD provisoire

- Fichiers : `src/views/Questionnaire.vue:15-29`, `83-99`, `202-215`, `src/views/PolitiqueConfidentialite.vue:42-48`, `57-66`
- Impact : le formulaire collecte des données potentiellement sensibles sur la grossesse et le post-partum, puis les envoie à Formspree (`https://formspree.io/...`) alors que la politique indique que les données ne sont "jamais partagées avec des tiers".
- Écart de référence : `docs/pilote/cadrage-technique.md:148-159` demande de minimiser les données, d'éviter les données de santé et d'indiquer clairement destinataire/finalité/conservation.
- Correction recommandée : retirer les données santé non indispensables, documenter explicitement le sous-traitant et le destinataire réel, ajouter un consentement exploitable, et recalibrer le questionnaire sur une simple prise de contact V1.

### P2

#### 5. L'arborescence V1 documentée et les routes réellement exposées ne sont pas alignées

- Fichiers : `src/router/index.js:12-69`, `src/components/Header.vue:9-16`
- Impact : l'implémentation expose seulement `Accueil`, `Ateliers`, `Contact`, `Questionnaire`, `Merci`, les pages légales et le prototype admin. Les entrées `Accompagnement individuel` et `À propos` prévues dans la navigation V1 n'existent pas comme routes ou destinations explicites.
- Écart de référence : `docs/05-arborescence-fonctionnelle.md:30-37` et `193-204`.
- Correction recommandée : soit mettre à jour la documentation V1 pour assumer une architecture "one-page + pages satellites", soit rétablir les destinations manquantes avant validation métier.

#### 6. La séparation technique reste trop couplée à la vue pour une "Clean Architecture pragmatique"

- Fichiers : `src/views/Questionnaire.vue:15-110`
- Impact : validation métier, mapping de payload et appel réseau vers Formspree vivent dans le composant Vue. Le flux critique n'est donc ni isolé, ni testable par contrat sans navigateur.
- Écart de référence : `docs/pilote/cadrage-technique.md:168-182` et `186-190`.
- Correction recommandée : sortir au minimum la configuration d'envoi et le mapping du questionnaire dans un service/adaptateur dédié, avec tests de contrat ciblés.

#### 7. Le durcissement des liens externes est incomplet

- Fichiers : `src/components/Header.vue:66-71`, `85-90`, `146-151`, `src/components/CTAButton.vue:35-36`, `src/views/Ateliers.vue:96-101`
- Impact : les liens externes ouverts en `_blank` utilisent `rel="noreferrer"` mais pas systématiquement `noopener noreferrer`.
- Correction recommandée : harmoniser tous les liens externes sur `rel="noopener noreferrer"` pour réduire les écarts de comportement et simplifier la revue sécurité.

## Régressions potentielles

- Ajouter `VITE_RESALIB_URL` en préproduction modifiera immédiatement plusieurs CTA internes sans changer le code.
- Toute correction du questionnaire sans tests de parcours peut réintroduire des régressions sur les validations invisibles.
- Le prototype admin est bien bloqué en prod, mais son ergonomie locale pourrait être interprétée comme une fonctionnalité prête alors qu'il n'existe aucun stockage ni contrôle d'accès réel.

## Validation responsive et clavier

- Vérification statique positive : la navigation utilise de vrais liens/boutons, des états `focus-visible` et un bouton menu avec `aria-expanded` / `aria-controls`.
- Vérification incomplète : je n'ai pas pu exécuter l'application dans un navigateur pour valider le comportement réel mobile, le tab order, l'ouverture/fermeture clavier du menu, ni le comportement des animations et transitions sur device réel.
- Risque principal côté clavier : le questionnaire reste le point le plus fragile à cause de sa logique de progression et de sélection personnalisée.

## Tests et validations impossibles dans l'environnement courant

- `node --test src/config/site.test.js` : exécuté, **succès** (`5/5`).
- `npm run build` : **impossible à valider** dans cet environnement. Échec observé : `vite: command not found`, car `node_modules` n'est pas présent.
- Le dépôt annonce en plus `Node.js 20.19+ ou 22.12+` dans `README.md` et `.nvmrc` cible `22`, alors que l'environnement courant expose `node v18.19.0`.
- Faute de dépendances installées et de build exécutable, je n'ai pas pu vérifier :
  - rendu responsive réel ;
  - comportement clavier complet ;
  - navigation de production effective ;
  - intégration Resalib en situation réelle ;
  - non-régression visuelle.

## Auto-revue

- [x] Périmètre respecté
- [x] Aucune modification du code applicatif
- [x] Relecture croisée code + documents V1
- [x] Problèmes classés `P0/P1/P2`
- [x] Fichiers concernés et corrections recommandées indiqués
- [x] Limites de validation documentées
- [x] Recommandation finale formulée

## Conclusion

La V1 a de bons fondations sur la configuration Resalib, l'absence de stockage local public et le verrouillage du prototype admin. En revanche, tant que les quatre points `P1` ci-dessus ne sont pas corrigés, je ne recommande pas de présenter ces écrans à Sandra comme une implémentation V1 cohérente et testable.
