# Internationalisation

## Décision v1

Le site utilise `vue-i18n` avec trois locales prêtes : `fr`, `en` et `es`.

- `fr` est la langue par défaut.
- Le choix est mémorisé dans `localStorage` avec la clé `maison-loratu-locale`.
- L’attribut `lang` du document est synchronisé avec la locale active.
- Aucun sélecteur de langue n’est affiché pour l’instant.
- Aucun texte visible n’est traduit pour l’instant.
- Les textes actuels restent entièrement en français jusqu’à validation des traductions.

## Organisation

- `src/i18n/index.js` : configuration, locales supportées et persistance.
- `src/i18n/locales/fr.js` : messages français de référence.
- `src/i18n/locales/en.js` : messages anglais.
- `src/i18n/locales/es.js` : messages espagnols.
- Les composants pourront importer `useI18n` lorsqu’une première page traduite sera validée.

## Prochaine étape avant publication multilingue

Migrer les contenus page par page vers des clés namespaceées (`pages.home`, `pages.workshops`, etc.), puis ajouter des routes localisées ou une stratégie SEO équivalente (`/en/...`, `/es/...`) avant de publier les traductions.

Ne pas traduire automatiquement les textes métier, les tarifs, les informations légales ou les témoignages sans validation de Sandra.
