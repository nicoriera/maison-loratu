# Maquettes détaillées V1 — Maison Loratu

## Direction retenue

**Maison-jardin illustrée** comme base visuelle, **parcours guidé par intention** pour l’expérience, et **accents plus joyeux** sur les ateliers et Instagram.

Promesse à conserver :

> Maison Loratu propose des séances et des ateliers simples, joyeux et accessibles aux petites filles, aux adolescentes, aux femmes, aux mamans et aux grand-mères.

## Règles communes

### Composition

- Largeur de lecture : `42 rem` maximum pour les textes longs.
- Conteneur principal : `72 rem` maximum.
- Espacement vertical entre sections : `4 rem` mobile, `6 rem` desktop.
- Rayon principal : `1.75 rem` à `2 rem`.
- Illustrations : pleine largeur utile, sans marge blanche artificielle dans les cartes.
- Photos : réservées aux espaces réels, aux ateliers et aux preuves humaines ; une seule photo forte par section.
- Une action principale maximum par bloc.

### Couleurs

| Rôle | Couleur |
| --- | --- |
| Fond principal | crème doux |
| Surface | blanc chaud |
| Action principale | terracotta |
| Information / respiration | sauge |
| Accent joyeux | jaune doux |
| Accent relationnel | rose poudré |
| Texte | brun profond ou gris très foncé |

### Typographie

- Titres : serif expressive, phrases courtes, `1.08` de hauteur de ligne.
- Texte courant : sans-serif, `16 px` minimum, hauteur de ligne généreuse.
- Libellés : capitales espacées, jamais utilisés seuls pour transmettre une information.
- Boutons : libellés explicites, minimum `44 px` de hauteur.

### Iconographie et illustration

- SVG locaux, trait arrondi de `1.75 px`.
- Icône fonctionnelle toujours accompagnée d’un libellé visible lorsque possible.
- Illustrations humaines non stéréotypées, avec plusieurs générations et morphologies.
- Pas d’illustration décorative si elle détourne de l’action ou du contenu.

## Écran 1 — Accueil

### Objectif

Faire comprendre en quelques secondes ce qu’est Maison Loratu et aider la personne à choisir son point d’entrée.

### Desktop

1. Header : logo, navigation, Instagram, réservation.
2. Hero en deux colonnes : promesse à gauche, illustration maison-jardin à droite.
3. CTA principal : **Découvrir les ateliers**.
4. CTA secondaire : **Trouver le bon accompagnement**.
5. Bloc d’orientation : **Quel moment ferait du bien aujourd’hui ?**
6. Quatre cartes illustrées : enfant, à deux/en famille, pour soi, offrir.
7. Bloc **Atelier du moment** avec durée, prix et disponibilité.
8. Preuve humaine courte : phrase de Sandra ou photo authentique unique.
9. Footer avec contact, mentions légales et Instagram.

### Mobile

- Header réduit : logo + Instagram.
- Hero empilé : titre, illustration, CTA.
- Cartes en une colonne avec illustration en ratio `4:3`.
- Barre de navigation fixe : Accueil, Ateliers, Accompagnement, Contact, Réserver.
- Les cartes restent entièrement cliquables, pas uniquement le bouton.

### États

- Sans lien Resalib : CTA **Être recontacté** ou **Voir les ateliers**.
- Atelier du moment désactivé : bloc masqué, aucun espace vide.
- Orientation non sélectionnée : quatre choix visibles.
- Orientation sélectionnée : résultat affiché avec `aria-live`, sans redirection automatique.

## Écran 2 — Ateliers

### Objectif

Présenter les formats sans créer de confusion entre atelier collectif, plein air et accompagnement individuel.

### Structure

1. Hero : **Des parenthèses pour respirer** + illustration légère.
2. Trois cartes de formats avec icône, durée, prix, bénéfice et action.
3. Bloc illustré **Des parenthèses dehors**.
4. Bloc disponibilité / réservation.
5. Bloc FAQ court.

### Carte de format

- Icône dans un cercle coloré.
- Libellé de durée et prix en premier niveau secondaire.
- Titre court.
- Bénéfice en une phrase.
- Liste de trois à cinq éléments maximum.
- CTA explicite : **Préparer mon atelier** ou **Parler de mon besoin**.

### Mobile

- Une carte par écran logique, sans grille trop compacte.
- Icône toujours visible en haut à droite.
- CTA pleine largeur en bas de chaque carte.
- Réservation persistante uniquement si un lien réel existe.

## Écran 3 — Accompagnement

### Objectif

Rassurer sur l’accompagnement individuel et rendre le premier contact simple.

### Structure

1. Hero : **Un temps rien que pour vous** + illustration d’un espace calme.
2. CTA : **Échanger avec Sandra**.
3. Bloc tarif : `1 h · 60 €` avec icône d’accompagnement.
4. Explication courte de la séance.
5. Quatre sujets présentés comme des repères, avec icône de validation.
6. Rappel : la sophrologie ne remplace pas un suivi médical ou psychologique.

### Mobile

- Illustration immédiatement après la promesse.
- Tarif visible avant le texte détaillé.
- Les sujets passent en liste verticale accessible.
- Le rappel santé reste lisible mais visuellement secondaire.

## Écran 4 — Carte cadeau

### Objectif

Faire comprendre en une phrase ce qui est offert, à qui et comment demander la carte.

### Structure

1. Hero doux avec illustration enveloppe fleurie.
2. Carte prix mise en avant : `114 €`.
3. Information : **2 ateliers à utiliser dans les 2 mois**.
4. CTA : **Demander une carte cadeau**.
5. Texte relationnel pour petite fille, femme, maman ou grand-mère.

### Mobile

- Prix et durée immédiatement visibles sous l’illustration.
- CTA pleine largeur.
- Pas de formulaire de paiement tant que le paiement en ligne n’est pas validé.

## Écran 5 — Contact

### Objectif

Remplacer l’absence temporaire de coordonnées par une orientation claire.

### Structure

1. Hero : **Parlons de votre besoin**.
2. CTA principal : **Partager mon besoin**.
3. CTA secondaire : **Voir les repères**.
4. Deux cartes : particuliers / questions fréquentes.
5. Trois repères : public, contexte, coordonnées.
6. Instagram comme lien relationnel complémentaire, jamais comme seul contact.

### États

- Coordonnées non confirmées : afficher **À venir**, sans inventer de numéro ou d’adresse.
- Formulaire envoyé : écran Merci avec confirmation claire et retour vers l’accueil.
- Erreur : message proche du champ concerné, sans perte des données saisies.

## Écran 6 — Questionnaire

### Objectif

Transformer une demande vague en premier échange exploitable sans demander d’informations sensibles inutiles.

### Structure

1. Introduction rassurante.
2. Barre de progression et nombre d’étapes.
3. Une question principale par écran.
4. Choix par cartes avec icône et libellé.
5. Retour / suivant visibles.
6. Résumé avant envoi.
7. Message de confidentialité et rappel de ne pas fournir de données médicales détaillées.

### Mobile

- Une colonne, boutons minimum `44 px`.
- Clavier et focus gérés correctement.
- Progression compréhensible sans dépendre uniquement de la couleur.
- Bouton suivant fixé en bas uniquement si cela ne masque pas le contenu.

## Écran 7 — FAQ

### Objectif

Lever les doutes avant une demande de contact ou une réservation.

### Structure

- Titre et introduction courte.
- Accordéons avec icône d’ouverture.
- Questions regroupées par thèmes : méthode, enfants, seniors, ateliers, carte cadeau.
- CTA final vers contact.

### Mobile

- Une question par ligne, zone de clic sur toute la largeur.
- Réponse limitée à une largeur lisible.
- Une seule ouverture automatique maximum, aucune lecture imposée.

## Écran 8 — Administration

### Objectif

Permettre à Sandra de modifier le contenu public sans exposer de logique technique.

### Direction

- Même palette, mais interface plus dense et fonctionnelle.
- Onglets clairs : Accueil, offres, FAQ, articles, aperçu.
- Étiquettes de statut : brouillon, publié, erreur.
- Aperçu public toujours disponible avant validation.
- Ne pas ajouter d’éléments décoratifs qui ralentissent la saisie.

## Validation attendue avant implémentation finale

- Sandra valide la direction visuelle générale.
- Sandra choisit les illustrations à conserver ou remplacer.
- Les textes définitifs sont confirmés.
- Le lien Resalib est fourni lorsqu’il existe.
- Les coordonnées et règles d’annulation sont confirmées.
- Le parcours questionnaire est validé écran par écran.
- La version mobile est relue en priorité sur iOS et Android.

## Décision de production

La prochaine implémentation peut partir de l’écran Accueil, puis suivre cet ordre :

1. Accueil et orientation.
2. Navigation mobile et CTA globaux.
3. Ateliers.
4. Accompagnement et carte cadeau.
5. Contact et questionnaire.
6. FAQ et états de confirmation.
7. Ajustements administration.
