# Benchmark design — Maison Loratu

## Périmètre

Benchmark réalisé à partir de références publiques Dribbble et des patterns documentés par Mobbin. L’objectif n’est pas de copier une interface, mais d’identifier les conventions efficaces pour un site de sophrologie familial, intergénérationnel et majoritairement consulté sur mobile.

## Ce qui fonctionne dans les références

| Observation | Ce que cela apporte | Application Maison Loratu |
| --- | --- | --- |
| Palette naturelle et peu contrastée | Installe le calme et la confiance | Crème, sauge, terracotta, jaune soleil ; conserver un contraste texte fort |
| Hero avec une promesse courte et une action | Réduit l’hésitation dès l’arrivée | « Quel moment ferait du bien aujourd’hui ? » + deux actions maximum |
| Cartes de services scannables | Aide à comprendre rapidement l’offre | Une illustration, un bénéfice, un public, une action |
| Parcours par besoin | Évite de demander à l’utilisateur de connaître le vocabulaire métier | Enfant, à deux, pour soi, pour offrir |
| Preuves humaines | Rend l’accompagnement crédible | Quelques photos authentiques, témoignage ou phrase de Sandra, pas de galerie décorative |
| Progression visible dans les formulaires | Rassure et limite l’abandon | Étapes courtes, barre de progression, possibilité de revenir en arrière |
| Icônes fonctionnelles | Accélère la lecture mobile | SVG locaux, toujours associés à un libellé visible |

Les concepts wellness publics sur Dribbble convergent vers des palettes douces, une hiérarchie très lisible, des cartes de services et une action de réservation clairement exposée. Les exemples les plus utiles pour Maison Loratu sont [Wellness — Landing Page](https://dribbble.com/shots/15098146-Wellness-Landing-Page), [Therapy — Website Design](https://dribbble.com/shots/26861977-Physiotherapy-Wellness-Website-Design) et [Serenica — Mental Health Wellness](https://dribbble.com/shots/26624315-Serenica-Mental-Health-Wellness-Landing-Page-Website-Design).

Mobbin est surtout utile ici pour valider les patterns d’usage mobile : bibliothèque de centaines de milliers d’écrans réels, recherche par écran et parcours, et références spécifiques aux applications de santé. Voir [Mobbin](https://mobbin.com/mcp), [la documentation Mobbin](https://docs.mobbin.com/) et [la recherche d’écrans](https://docs.mobbin.com/api/reference/introduction).

## Version 1 — Maison-jardin illustrée

### Idée

Faire de Maison Loratu un lieu identifiable : une maison chaleureuse, des chemins, des fleurs et des personnages reliés entre eux. Le site ressemble à un carnet illustré qui accueille chaque génération sans infantiliser les adultes.

### Direction visuelle

- Une direction majoritairement illustrée, avec des photos authentiques réservées aux preuves humaines et aux situations réelles. Le ratio indicatif est de 70 % illustrations / 30 % photos, sans chercher à remplir un quota.
- Grandes illustrations pleine largeur dans les cartes, avec fonds crème et contours organiques.
- Motif récurrent : chemin qui relie une fleur, une maison et un personnage.
- Terracotta pour les actions, sauge pour les espaces de respiration, jaune pour les moments positifs.
- Typographie serif expressive pour les titres, sans-serif très lisible pour les informations pratiques.

### Structure de la page d’accueil

1. Promesse et illustration principale.
2. Question d’orientation : « Quel moment ferait du bien aujourd’hui ? »
3. Quatre cartes par intention : accompagner un enfant, partager un moment, prendre du temps pour soi, offrir.
4. Atelier du moment avec date, durée, tarif et action.
5. Une courte preuve humaine.
6. Contact et Instagram.

### Forces

- Différenciation forte par rapport aux sites de sophrologues très photographiques.
- Cohérence avec le goût de Sandra pour les illustrations.
- Très adapté aux enfants, aux familles et aux seniors.

### Risques

- Trop enfantin si les illustrations deviennent caricaturales.
- Trop décoratif si chaque bloc reçoit un motif différent.

### Recommandation

Version recommandée comme socle principal.

## Version 2 — Le carnet de route

### Idée

Organiser tout le site comme une orientation douce. L’utilisateur ne choisit pas d’abord une prestation ; il part de ce qu’il ressent ou de la personne qu’il accompagne.

### Direction visuelle

- Interface plus éditoriale, avec chapitres, onglets et repères de progression.
- Illustrations plus petites mais très signifiantes, comme des vignettes de carnet.
- Cartes à une seule action, peu de texte avant le premier clic.
- Barre d’action mobile persistante : Accueil, Ateliers, Accompagnement, Contact, Réserver.

### Parcours clé

1. « Pour qui cherchez-vous un moment ? »
2. « Quel besoin souhaitez-vous accompagner ? »
3. Proposition de format avec explication simple.
4. Questionnaire ou réservation.

### Forces

- Très bon guidage pour les visiteurs qui ne connaissent pas la sophrologie.
- Réduit la charge cognitive et les hésitations.
- Excellent terrain pour le questionnaire déjà présent dans le projet.

### Risques

- Peut donner une impression de tunnel si l’accès direct aux pages est masqué.
- Demande une rédaction très courte et des états vides bien pensés.

### Recommandation

À intégrer comme couche UX à la Version 1, principalement sur l’accueil et le questionnaire.

## Version 3 — L’atelier vivant

### Idée

Assumer une identité plus joyeuse, locale et mémorable : affiches d’ateliers, formes découpées, couleurs franches et détails inspirés du Pays basque, sans tomber dans le folklore.

### Direction visuelle

- Terracotta plus soutenu, rose poudré, jaune solaire et bleu profond en accent.
- Illustrations comme des affiches ou des cartes à collectionner.
- Blocs asymétriques, titres courts, petites annotations manuscrites utilisées avec parcimonie.
- Animations légères : fleur qui s’ouvre, chemin qui se dessine, carte qui se soulève au survol.

### Forces

- Très mémorable et différenciante.
- Met naturellement en valeur les ateliers, les séances en plein air et Instagram.
- Peut créer une vraie signature locale.

### Risques

- Moins apaisante si la couleur et le mouvement sont trop présents.
- Asymétrie et annotations à surveiller pour les seniors et la lecture mobile.

### Recommandation

À utiliser en touches : page Ateliers, carte cadeau, campagne saisonnière et publications Instagram.

## Comparaison

| Critère | Version 1 — Maison-jardin | Version 2 — Carnet | Version 3 — Atelier vivant |
| --- | ---: | ---: | ---: |
| Différenciation | 5/5 | 4/5 | 5/5 |
| Clarté immédiate | 4/5 | 5/5 | 3/5 |
| Accessibilité intergénérationnelle | 5/5 | 5/5 | 3/5 |
| Compatibilité mobile | 4/5 | 5/5 | 3/5 |
| Facilité de production | 4/5 | 4/5 | 3/5 |
| Potentiel Instagram | 4/5 | 3/5 | 5/5 |

## Décision proposée

Adopter une combinaison contrôlée :

- **Socle visuel :** Version 1, Maison-jardin illustrée.
- **Socle UX :** Version 2, parcours par intention et orientation progressive.
- **Accent de marque :** Version 3, réservé aux ateliers, aux saisons et aux contenus sociaux.

Cette combinaison permet de rendre le site mémorable sans sacrifier la compréhension. Elle respecte la promesse : des séances et ateliers simples, joyeux et accessibles aux petites filles, aux adolescentes, aux femmes, aux mamans et aux grand-mères.

## Principes à conserver

- Une action principale par bloc.
- Un libellé visible avec chaque icône.
- Aucun texte essentiel placé uniquement dans une illustration.
- Des zones tactiles d’au moins `44 px`.
- Une animation désactivable via `prefers-reduced-motion`.
- Des illustrations qui occupent toute la largeur utile de leur bloc.
- Des photos utilisées pour la preuve et l’humain, pas pour remplir les espaces.
- Les illustrations orientent et racontent ; les photos montrent le réel, les lieux et les ateliers.
- Une seule grammaire visuelle forte par bloc : ne pas superposer photo et illustration au même niveau.
