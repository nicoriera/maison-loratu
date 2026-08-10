---
target: Revue avant commit des modifications Sandra
total_score: 29
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
timestamp: 2026-08-10T13-49-05Z
slug: src-views-ateliers-vue
---
## Design Health Score

| # | Heuristique | Score | Point clé |
|---|---|---:|---|
| 1 | Visibilité de l’état | 3 | La page d’attente indique clairement que les réservations ne sont pas ouvertes. |
| 2 | Correspondance avec le réel | 3 | Les nouveaux noms, publics et tarifs sont cohérents localement. |
| 3 | Contrôle et liberté | 4 | Les parcours vers les pages détaillées et le contact restent directs. |
| 4 | Cohérence | 3 | Les pages et le SEO utilisent les nouveaux intitulés. |
| 5 | Prévention des erreurs | 2 | Le contenu distant existant peut réintroduire les anciens tarifs et intitulés. |
| 6 | Reconnaissance | 4 | Les publics et prix sont affichés avec les noms des offres. |
| 7 | Flexibilité | n/a | Surface de découverte. |
| 8 | Design minimaliste | 4 | Aucun débordement à 375 px ; lisibilité conservée. |
| 9 | Récupération d’erreur | 3 | La page d’attente propose une alerte e-mail. |
| 10 | Aide et documentation | n/a | Surface de découverte. |
| **Total** |  | **29/32** | Solide, avec trois corrections avant publication. |

## Priorités

### P1 — Migration du contenu éditorial distant

Les pages Ateliers et FAQ remplacent leurs valeurs locales par le contenu de `/api/content`. Si le Blob de production contient les anciens intitulés et tarifs, il continuera à être affiché. Enregistrer ou migrer les nouvelles offres et la FAQ dans l’administration avant le déploiement.

### P1 — SEO de la page de réservation

La page de réservation est redevenue une page d’attente, mais son titre et sa description promettent toujours des dates disponibles et une réservation. Revenir à une formulation d’ouverture prochaine.

### P1 — Promesse de la carte cadeau

Le formulaire de carte cadeau envoie une demande à finaliser, mais son CTA peut être compris comme une commande à 49 ou 54 €. Clarifier que la demande est envoyée, puis que Maison Loratu confirme le règlement et l’envoi. Rendre l’option Signature à 54 € visible dès l’introduction.

### P2 — Références projet à harmoniser

Mettre à jour PRODUCT.md et les pages de documentation qui gardent les anciens intitulés ou Resalib comme solution en vigueur. Conserver SimplyBook dans les notes de reprise, mais ne pas le présenter comme une intégration active sur cette branche.

## Points validés

- Les Petits Explorateurs, En douceur et Grandir ensemble sont cohérents dans l’accueil, l’index, les pages détaillées, la FAQ, le SEO et les valeurs par défaut de l’administration.
- Grandir ensemble affiche bien 42 € pour 2 et 4 duos de mamans et d’enfants.
- À deux affiche bien un atelier privatif à 49 €.
- Le rendu mobile à 375 px ne présente pas de débordement horizontal et les images ont des dimensions et alternatives définies.
- Le contrôle déterministe Impeccable sur Ateliers.vue ne remonte aucune anomalie.

## Faux positif écarté

Le contrôle de source confirme que CTAButton rend un router-link avec la prop `to` pour les liens internes ; le constat d’actions sans href n’est pas retenu.
