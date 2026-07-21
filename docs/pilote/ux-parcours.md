# Livrable — Agent UX — 2026-07-21

## Périmètre analysé

Analyse documentaire des parcours de réservation et de contact pour les publics suivants : enfants, femmes, seniors, duos/familles et structures.

Sources lues :
- `docs/01-note-de-cadrage-strategique.md`
- `docs/02-synthese-des-decisions-sandra.md`
- `docs/03-personas-et-parcours.md`
- `docs/04-catalogue-des-offres.md`
- `docs/05-arborescence-fonctionnelle.md`
- `docs/06-cahier-des-charges-fonctionnel.md`
- `docs/07-direction-artistique.md`
- `docs/08-contenus-page-par-page.md`
- `docs/09-protocole-multi-agents.md`
- `docs/registre-des-decisions.md`

## Constats

- Le site a un objectif de conversion clair : orienter vite vers une réservation d’atelier ou une demande de devis.
- Le besoin principal est la compréhension immédiate du bon parcours par public, avant toute lecture détaillée.
- La confiance est un prérequis fort : Sandra, son parcours, les photos réelles, les témoignages et les repères pratiques doivent arriver tôt.
- Les parcours particuliers et les parcours structures n’ont pas la même logique d’action : réservation directe d’un côté, demande de devis de l’autre.
- Les contraintes d’accessibilité sont structurantes, surtout pour les seniors et pour l’usage mobile.
- Le téléphone et l’email doivent rester visibles comme alternatives crédibles à la réservation en ligne.
- Les offres confirmées existent, mais plusieurs détails d’exécution restent ouverts : âges exacts, présence des parents, lieu précis, règles météo, annulation, tarif duo, modalités seniors.
- Les contenus doivent éviter toute ambiguïté entre atelier, séance individuelle, cours en plein air et intervention sur devis.

## Parcours prioritaires

1. **Ateliers enfants**
   - Parcours le plus sensible à la réassurance parentale.
   - Priorité UX : expliquer le cadre, l’âge, le déroulé, le bénéfice et le niveau d’autonomie de l’enfant.
2. **Ateliers femmes et duos**
   - Parcours à forte intention émotionnelle et relationnelle.
   - Priorité UX : rendre la proposition désirable, simple et immédiatement réservable.
3. **Ateliers seniors**
   - Parcours à forte exigence d’accessibilité et de lisibilité.
   - Priorité UX : rassurer sur l’adaptation, le confort et l’accès au contact humain.
4. **Structures**
   - Parcours orienté demande qualifiée plutôt que réservation.
   - Priorité UX : cadrer rapidement le besoin, le public et le format.
5. **Cours en plein air**
   - Parcours secondaire mais important pour certaines femmes, duos et seniors.
   - Priorité UX : rendre visibles les conditions, le lieu et la météo.
6. **Accompagnement individuel**
   - Parcours de soutien, à présenter clairement comme distinct des ateliers.

## Frictions

### Enfants

- Le parent doit comprendre si la séance convient à l’âge de l’enfant.
- Le déroulé d’une séance reste abstrait sans exemple concret.
- La question de la présence ou non du parent peut bloquer la décision.
- Le vocabulaire peut être perçu comme trop vague si les bénéfices ne sont pas formulés simplement.

### Femmes

- Le visiteur peut hésiter entre atelier collectif, duo, cours en plein air et accompagnement individuel.
- Le prix doit être visible sans effort, sinon la navigation perd en efficacité.
- Le besoin de douceur ne doit pas être confondu avec un ton infantilisant.

### Seniors

- La lisibilité des textes, du contraste et du téléphone est décisive.
- Les conditions physiques d’accès et d’adaptation doivent être explicites.
- Une réservation uniquement numérique serait trop restrictive pour ce public.

### Duos / familles

- Le périmètre des publics reste à clarifier : duos seulement, familles plus larges, âges autorisés, participation seule ou non.
- Le tarif par personne ou par duo doit être clarifié avant mise en avant.
- Le site doit éviter de faire croire qu’un format familial existe alors qu’il n’est pas encore cadré.

### Structures

- Le formulaire peut devenir trop long si tous les champs sont rendus obligatoires sans hiérarchie.
- L’attente de devis nécessite un délai de réponse affiché, sinon la demande paraît peu fiable.
- Les structures ont besoin de comprendre vite les objectifs possibles, les publics couverts et le type d’intervention.

## CTA

### CTA primaire recommandé

- `Réserver un atelier`

### CTA secondaires recommandés

- `Voir les ateliers enfants`
- `Voir les ateliers femmes et duos`
- `Voir les ateliers seniors`
- `Réserver un cours en plein air`
- `Appeler Sandra`
- `Envoyer un email`
- `Demander un devis`
- `Poser une question`

### CTA par parcours

- **Enfants** : `Réserver un atelier enfant` + `Poser une question`
- **Femmes** : `Réserver un atelier femmes et duos` + `Voir les prochaines dates`
- **Seniors** : `Appeler Sandra` + `Réserver un atelier senior`
- **Duos / familles** : `Réserver un atelier duo` + `Vérifier si le format convient`
- **Structures** : `Demander un devis` + `Décrire mon projet`

## Hypothèses

- La réservation en ligne restera portée par un outil externe, avec redirection depuis le site.
- L’action la plus importante du site reste la réservation d’un atelier, pas la prise de rendez-vous individuelle.
- Les ateliers enfants, femmes et duos, seniors et plein air peuvent être traités comme des entrées distinctes, même si certains contenus restent partiellement à confirmer.
- Les structures ne doivent pas passer par un parcours de réservation classique, mais par un formulaire de demande.
- Le parcours le plus efficace combine carte d’offre, réassurance, prix visible et CTA explicite.

## Questions à valider

- Les ateliers enfants sont-ils organisés par tranche d’âge séparée ou mélangée ?
- Les parents restent-ils présents pendant les ateliers enfants ?
- Le public seniors est-il limité au studio ou ouvert aussi à des interventions externes ?
- Les ateliers duos incluent-ils les familles au sens large ou seulement certains binômes ?
- Le tarif des ateliers duos est-il par personne ou pour le duo ?
- Le cours en plein air doit-il être mis en avant au même niveau que les ateliers ou comme offre complémentaire ?
- La réservation individuelle doit-elle rester très visible dès l’accueil ou être reléguée après les ateliers ?
- Quel délai de réponse doit être affiché pour les demandes de devis ?
- Quel niveau de détail minimum doit apparaître pour les règles d’annulation, de report et de météo ?

## Risques

- Mélanger réservation, information et demande de devis peut brouiller la hiérarchie des parcours.
- Mettre trop d’options dès l’accueil peut diluer la conversion principale.
- L’absence de précision sur les offres rendra les CTA moins crédibles.
- Une interface peu lisible pour les seniors peut exclure un public prioritaire.
- Un formulaire structure trop exigeant peut faire chuter les demandes.
- Une présentation trop générique des ateliers enfants peut manquer de réassurance parentale.
- Une mise en avant insuffisante du téléphone peut pénaliser les utilisateurs qui préfèrent le contact humain.

## Documents impactés

- `docs/01-note-de-cadrage-strategique.md`
- `docs/02-synthese-des-decisions-sandra.md`
- `docs/03-personas-et-parcours.md`
- `docs/04-catalogue-des-offres.md`
- `docs/05-arborescence-fonctionnelle.md`
- `docs/06-cahier-des-charges-fonctionnel.md`
- `docs/07-direction-artistique.md`
- `docs/08-contenus-page-par-page.md`
- `docs/registre-des-decisions.md`

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

- Aucune décision définitive n’est formulée ici.
- Les sujets ouverts restent à arbitrer par Sandra ou par le coordinateur avant validation du cadrage.
