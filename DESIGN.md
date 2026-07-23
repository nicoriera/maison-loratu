---
name: Maison Loratu
description: Une maison chaleureuse et accessible pour découvrir la sophrologie et réserver un moment pour soi.
colors:
  terracotta-soft: "#F8E8E0"
  terracotta-light: "#F0D0C0"
  terracotta: "#B85A36"
  terracotta-deep: "#5D2A1C"
  cream: "#FEFCF9"
  cream-warm: "#FDF9F3"
  cream-section: "#FBF3E7"
  cream-border: "#D4C0A8"
  sage: "#E7EBDD"
  sage-deep: "#53614B"
typography:
  display:
    fontFamily: "Georgia, serif"
    fontSize: "clamp(2.25rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 0.98
  headline:
    fontFamily: "Georgia, serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.08
  title:
    fontFamily: "Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.08
  body:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.16em"
rounded:
  card: "1.75rem"
  surface: "2rem"
  control: "1rem"
  pill: "9999px"
spacing:
  unit: "0.25rem"
  page-x: "1rem"
  section-y: "4rem"
  section-y-large: "6rem"
  readable: "42rem"
  wide: "72rem"
components:
  button-primary:
    backgroundColor: "{colors.terracotta}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: "0.75rem 2rem"
    height: "2.75rem"
  button-secondary:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.terracotta-deep}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 2rem"
    height: "2.75rem"
  card:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.card}"
    padding: "1.75rem"
  input:
    backgroundColor: "{colors.cream}"
    textColor: "#1F2937"
    rounded: "1rem"
    padding: "0.75rem 1rem"

---

# Design System: Maison Loratu

## Overview

**Creative North Star: "La maison chaleureuse"**

Maison Loratu se présente comme une maison accueillante : un espace simple, humain et rassurant où chaque génération peut trouver un moment adapté à son rythme. Le design privilégie la proximité plutôt que la distance institutionnelle, avec une présence visuelle douce mais suffisamment structurée pour guider rapidement vers une offre et sa réservation.

La palette naturelle, les photographies authentiques et les formes généreuses créent une atmosphère calme et accessible. Le système reste chaleureux sans devenir décoratif : les photos montrent les personnes et les situations réelles, tandis que la typographie éditoriale donne une identité mémorable aux contenus essentiels.

**Key Characteristics:**
- Maison chaleureuse, naturelle et humaine
- Photos authentiques comme principal langage visuel
- Typographie serif éditoriale associée à une sans-serif lisible
- Surfaces crème, sauge et blanc avec accent terracotta
- Parcours mobile-first orienté vers la découverte puis la réservation

## Colors

La palette associe un terracotta chaleureux à des neutres crème et un sauge apaisant. Le terracotta porte l’action et l’identité ; les fonds restent lumineux pour préserver la lisibilité.

### Primary
- **Terracotta chaleureux** (`#B85A36`): Accent principal, boutons d’action, liens actifs et repères de navigation.
- **Terracotta profond** (`#5D2A1C`): Titres forts, surfaces foncées ponctuelles et contrastes émotionnels.

### Secondary
- **Sauge doux** (`#E7EBDD`): Sections de respiration et alternance de fond, particulièrement adaptées aux contenus de groupe et de soin.
- **Sauge profond** (`#53614B`): Accent secondaire lorsqu’un texte ou un repère doit porter la couleur sauge.

### Neutral
- **Crème lumineux** (`#FEFCF9`): Fond principal et surfaces de lecture.
- **Crème chaleureux** (`#FDF9F3`): Surfaces secondaires et états doux.
- **Crème de section** (`#FBF3E7`): Fonds de hero ou de séparation.
- **Crème bordure** (`#D4C0A8`): Bordures de champs et contours secondaires.

### Named Rules
**The Terracotta Invitation Rule.** Le terracotta signale une action, un lien actif ou un repère important ; il ne doit pas recouvrir toute la page.

## Typography

**Display Font:** Georgia (avec `serif`)
**Body Font:** system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto (avec `sans-serif`)

**Character:** Georgia donne une présence éditoriale douce et personnelle aux titres. La sans-serif système garde les informations pratiques, les prix et les actions immédiatement lisibles sur mobile.

### Hierarchy
- **Display** (400, `clamp(2.25rem, 6vw, 4.5rem)`, `0.98`): Hero et message de marque principal.
- **Headline** (400, `clamp(1.875rem, 4vw, 3rem)`, `1.08`): Titres de sections et pages.
- **Title** (400, `1.5rem`, `1.08`): Titres de cartes et sous-sections.
- **Body** (400, `1rem`, `1.75`): Descriptions, explications et contenus de formulaire.
- **Label** (600, `0.875rem`, `0.16em`, capitales): Kicker de service et contexte de section, utilisé avec parcimonie.

### Named Rules
**The Two Voices Rule.** La serif raconte et donne de la chaleur ; la sans-serif explique, mesure et permet d’agir. Ne pas inverser leurs rôles.

## Layout

Le système utilise un conteneur centré large (`72rem`) avec une marge horizontale de `1rem` sur mobile. Les sections respirent avec `4rem` de padding vertical, porté à `6rem` sur les grands écrans. Les textes de lecture restent contenus autour de `42rem` pour éviter les lignes trop longues.

Les pages privilégient une alternance de fonds crème et sauge. Les cartes et sections principales s’empilent naturellement sur mobile ; les grilles passent à deux, trois ou quatre colonnes lorsque la largeur le permet. La navigation mobile fixe reste visible en bas, avec des zones tactiles d’au moins `2.75rem` et un espace adapté aux safe areas iOS.

## Elevation & Depth

La profondeur est hybride mais discrète : les fonds colorés créent la hiérarchie principale et les surfaces blanches sont légèrement soulevées par des ombres diffuses. Les ombres servent à distinguer une carte ou une action, jamais à donner un effet flottant excessif.

### Shadow Vocabulary
- **Soft** (`0 4px 20px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04)`): Cartes et surfaces courantes.
- **Soft large** (`0 8px 30px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)`): Hero image, grandes surfaces et états d’action renforcés.
- **Mobile navigation** (`0 -8px 24px rgba(74, 44, 33, 0.08)`): Séparation douce de la barre fixe avec le contenu.

### Named Rules
**The Warm Surface Rule.** Une surface blanche peut être élevée par une ombre douce ; elle ne doit pas cumuler une bordure forte et une ombre lourde.

## Shapes

Les silhouettes sont généreuses et arrondies : cartes autour de `1.75rem`, grandes sections autour de `2rem`, champs autour de `1rem` et boutons en pilule. Les boutons utilisent une hauteur minimale de `2.75rem` pour rester confortables au toucher. Les bordures restent fines et servent surtout aux champs, à la navigation et aux états secondaires.

## Components

### Buttons
- **Shape:** Pilule généreuse (`9999px`) avec une hauteur minimale de `2.75rem`.
- **Primary:** Fond terracotta, texte blanc, padding horizontal `2rem`, ombre douce.
- **Hover / Focus:** Terracotta plus profond au survol ; anneau de focus visible terracotta avec décalage de `3px`.
- **Secondary:** Fond blanc, bordure terracotta de `2px`, texte terracotta profond ; le fond crème apparaît au survol.
- **Behavior:** Les boutons prennent toute la largeur sur petit écran puis retrouvent leur largeur naturelle à partir de `sm`.

### Cards / Containers
- **Corner Style:** Cartes généreusement arrondies (`1.75rem`) ; grandes surfaces (`2rem`).
- **Background:** Blanc sur fonds crème ou sauge.
- **Shadow Strategy:** Ombre soft au repos, ombre soft large pour les surfaces majeures.
- **Border:** Pas de bordure décorative par défaut ; bordure légère seulement lorsqu’elle améliore la séparation.
- **Internal Padding:** `1.5rem` à `1.75rem` sur mobile, `2rem` sur desktop.
- **Signature:** Les cartes d’offres utilisent une photo en haut, un contenu flexible et une action alignée en pied.

### Inputs / Fields
- **Style:** Fond crème, bordure crème, rayon `1rem`, padding `0.75rem 1rem`.
- **Focus:** Bordure terracotta et anneau terracotta clair de `2px`.
- **Error / Disabled:** Les états doivent rester explicites et conserver un contraste suffisant ; les boutons désactivés signalent l’interdiction par le curseur.

### Navigation
- **Desktop:** En-tête sticky blanc translucide, bordure terracotta très légère, logo serif, liens sans-serif et soulignement terracotta pour l’état actif.
- **Mobile:** Barre fixe inférieure blanche translucide, quatre actions maximum, icônes de `22px`, zones tactiles d’au moins `48px` et CTA Réserver en terracotta.
- **States:** L’état actif combine texte terracotta et fond crème ; le focus reste visible au clavier.

### Offering Cards
Les cartes d’offres sont le composant signature : photo authentique en ratio `4:3`, titre serif, informations pratiques lisibles, description courte et CTA « Je découvre » aligné en bas par une colonne flexible.

## Do's and Don'ts

### Do:
- **Do** utiliser des photos authentiques et naturelles comme langage visuel principal.
- **Do** réserver le terracotta aux actions, titres importants et repères de navigation.
- **Do** conserver une hiérarchie claire entre récit en serif et informations pratiques en sans-serif.
- **Do** tester chaque composition sur mobile avec des zones tactiles d’au moins `48px`.
- **Do** garder des espaces généreux et des cartes lisibles plutôt que de tasser le contenu.

### Don't:
- **Don't** multiplier les illustrations décoratives : elles ne doivent pas concurrencer les photos ni le contenu.
- **Don't** utiliser des dégradés, effets glassmorphism ou animations décoratives sans besoin fonctionnel.
- **Don't** transformer chaque section en grille de cartes identiques ; les cartes sont réservées aux offres ou contenus qui bénéficient réellement d’une comparaison.
- **Don't** inventer un lieu, une disponibilité, un témoignage ou une information commerciale.
- **Don't** réduire la taille des textes ou des contrôles pour faire tenir davantage de contenu sur mobile.
