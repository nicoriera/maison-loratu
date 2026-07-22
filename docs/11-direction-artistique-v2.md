# Direction artistique V2 — Maison Loratu

## Décision de positionnement

Des ateliers de sophrologie conçus pour toutes les générations, des enfants aux grand-mères.

Le site ne doit pas être présenté comme un catalogue de prestations. Il doit être vécu comme une **maison-jardin intergénérationnelle**, dans laquelle chaque visiteur trouve un moment adapté à son besoin.

## Promesse d’expérience

> Entrer pour choisir un moment. Repartir avec l’envie de prendre soin de soi et des autres.

L’expérience suit un arc simple :

1. **Accueillir** — une image ou une illustration calme et immédiatement identifiable.
2. **Orienter** — choisir une intention plutôt qu’un âge ou une prestation.
3. **Rassurer** — découvrir Sandra, les formats, les tarifs et les réponses utiles.
4. **Agir** — réserver, prendre contact ou offrir une carte cadeau.

## Système visuel

### Motif signature

Le motif principal est une **fleur en chemin** : un trait souple part d’un point, se transforme en tige, puis s’ouvre en fleur. Il peut apparaître dans le hero, les cartes, les transitions et la navigation mobile.

Le motif reste discret : une seule apparition forte par écran, puis de petites reprises graphiques.

### Style d’illustration

- Ligne dessinée à la main, légèrement irrégulière.
- Texture papier très légère, sans effet vintage excessif.
- Formes simples, chaleureuses et lisibles sur mobile.
- Palette Maison Loratu : terracotta, crème, sauge, jaune soleil en accent.
- Aucun texte intégré dans les images.
- Les personnes sont représentées avec diversité d’âge sans caricature ni stéréotype.

### Illustrations prioritaires

| Parcours | Illustration | Intention |
| --- | --- | --- |
| Enfant | Soleil, nuage respiratoire, petites étoiles | Apprivoiser et jouer |
| Duo / famille | Deux fleurs ou deux silhouettes reliées | Partager et transmettre |
| Pour soi | Cocon, fauteuil, maison intérieure | Se recentrer |
| Plein air | Vague, relief et soleil | Respirer dehors |
| Carte cadeau | Enveloppe fleurie ou bouquet | Offrir une parenthèse |

Les illustrations passent avant les photos dans les cartes de parcours. Les photos servent principalement à prouver le réel : Sandra, un atelier, un lieu ou une séance extérieure.

## Système d’icônes

Les icônes servent à orienter et confirmer une action. Elles ne remplacent pas les illustrations des cartes.

- Style linéaire, chaleureux et légèrement organique.
- Tracé régulier de `1,75 px`, extrémités arrondies, sans pictogrammes emoji.
- Taille standard : `20 px` dans la navigation, `24 px` dans les contrôles, `32 px` dans les cartes.
- Couleurs : terracotta pour l’action, sauge pour l’information, gris doux pour l’état neutre.
- Une icône active peut recevoir un aplat léger, mais jamais dépendre de la couleur seule.
- Les icônes fonctionnelles seront des composants SVG locaux, sans police d’icônes ni dépendance distante.

### Icônes prioritaires

| Usage | Icône |
| --- | --- |
| Accueil | petite maison arrondie |
| Ateliers | étoile / fleur à quatre pétales |
| Accompagnement | silhouette ou cercle respiratoire |
| Contact | enveloppe ou bulle de dialogue |
| Réserver | calendrier avec un pétale |
| Carte cadeau | enveloppe fleurie |
| Plein air | soleil et vague |
| Retour / suivant | flèche simple à extrémités rondes |

Les contrôles iconographiques conservent toujours un libellé visible lorsque la place le permet. Une icône seule doit avoir un nom accessible explicite via `aria-label`.

## Nouvelle hiérarchie de l’accueil

1. Hero illustré : **Un espace pour souffler, grandir et revenir à soi.**
2. Mini-parcours : **Qu’est-ce qui vous ferait du bien aujourd’hui ?**
3. Trois portes principales :
   - accompagner un enfant ;
   - partager un moment ;
   - prendre du temps pour soi.
4. Atelier du moment.
5. Une photo authentique de Sandra ou d’un atelier.
6. Maison Loratu et son histoire.
7. Contact ou réservation.

Les catégories d’âge restent accessibles dans les pages et les contenus, mais ne dominent pas l’accueil.

## Règles d’animation

- Une animation doit expliquer, orienter ou confirmer une action.
- Utiliser prioritairement `transform` et `opacity`.
- Une interaction utilisateur répond rapidement ; une apparition éditoriale peut être plus lente.
- Pas de vidéo automatique, carrousel automatique ou mouvement permanent.
- Respecter `prefers-reduced-motion` et conserver le contenu entièrement accessible sans animation.

## Règles photos

- Maximum trois photos fortes sur l’accueil.
- Priorité aux photos de Sandra et aux ateliers réels.
- Éviter les images génériques de banques d’images.
- Chaque photo doit avoir un rôle : confiance, preuve, lieu ou atmosphère.
- Les cartes de parcours utilisent par défaut les illustrations.

## Navigation mobile

La barre basse constitue la navigation principale sur mobile : Accueil, Ateliers, Accompagnement, Contact et Réserver. Le header mobile conserve uniquement l’identité Maison Loratu.

La barre respecte la zone sécurisée iOS, le focus clavier, les états actifs et un espace bas suffisant pour ne jamais recouvrir le contenu.

## Critères de validation avant nouvelle implémentation

- Les trois parcours principaux sont compris sans lire toute la page.
- L’illustration est reconnaissable sans texte, mais le texte reste présent pour l’accessibilité.
- Une personne âgée peut lire et utiliser les contrôles sur mobile.
- L’identité reste reconnaissable même sans photo.
- Le site n’utilise pas plus d’un motif graphique fort par écran.
- La page ne ressemble pas à une collection de cartes de prestations.
- Le bouton `Réserver` est utilisé uniquement lorsque le lien Resalib est réellement actif ; sinon le libellé reste `Voir les ateliers`.
