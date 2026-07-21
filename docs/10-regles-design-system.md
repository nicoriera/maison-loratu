# Règles de design V1 — Maison Loratu

## Objectif

Conserver une interface douce, illustrée et lisible pour les enfants, les femmes, les seniors et les structures, sans multiplier les valeurs visuelles au fil des écrans.

## Grille d’espacement

La base est une grille de **4 px** (`0,25 rem`). Les espacements suivent cette échelle :

| Usage | Mobile | Écran large |
| --- | ---: | ---: |
| Texte lié ou contrôle compact | 8–12 px | 8–12 px |
| Groupe de champs ou carte courte | 20–24 px | 24–32 px |
| Entre blocs d’une section | 32–40 px | 40–48 px |
| Padding horizontal de page | 16 px | 16 px, puis largeur maximale |
| Padding vertical de section | 64 px | 96 px |

Primitives CSS : `.page-container`, `.section-padding`, `.surface-card`.

## Typographie

- **Titre de page** : `48 px` mobile, `60 px` large, serif, interligne proche de `1,08`.
- **Titre de section** : `36 px` mobile, `48 px` large, serif, interligne proche de `1,08`.
- **Titre de carte** : `24 px`, serif.
- **Texte courant** : `16 px`, interligne `1,75`; `18 px` pour les introductions.
- **Libellé de service** : `14 px` mobile, `16 px` large, capitales espacées.
- **Boutons** : au moins `44 px` de hauteur, texte `16 px`, graisse semi-bold.

Primitives CSS : `.page-title`, `.section-title`, `.body-copy`.

## Largeurs et composition

- Contenu principal : maximum `1152 px`.
- Texte courant : maximum `672 px`.
- Une section ne dépasse pas deux colonnes sur tablette/desktop.
- Les cartes utilisent un rayon généreux (`28–32 px`) et une ombre discrète.
- Les illustrations restent un élément de respiration, jamais une surcharge décorative.

## Interaction et accessibilité

- Tout lien et bouton affiche `cursor: pointer`.
- Un contrôle désactivé affiche `cursor: not-allowed`.
- Tout élément interactif conserve un focus visible.
- Les zones tactiles ne descendent pas sous `44 × 44 px`.
- Les animations respectent `prefers-reduced-motion`.
