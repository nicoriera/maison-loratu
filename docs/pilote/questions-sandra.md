# Questions d’arbitrage pour Sandra

**Projet :** Maison Loratu  
**Version :** 0.1  
**Statut :** `Réponses provisoires — validation avec les écrans`

Ce document reprend uniquement les questions bloquantes ou structurantes identifiées par les agents UX, contenu, technique et qualité. Les réponses pourront être reportées dans `docs/registre-des-decisions.md`.

## Priorité P1 — à traiter avant le design final

### 1. Priorité des offres

Quel ordre doit être mis en avant sur l’accueil ?

- ateliers enfants ;
- ateliers femmes et duos ;
- ateliers seniors ;
- cours en plein air ;
- accompagnement individuel ;
- interventions pour structures.

**Réponse provisoire :** enfants et femmes en priorité, puis ateliers, seniors et structures visibles sans dominer l’accueil. Voir `docs/pilote/decisions-v1-provisoires.md`.  
**Impact :** navigation, page d’accueil, CTA et contenus.

### 2. Administration du site

Pour la V1, souhaites-tu :

- gérer toi-même les contenus via une interface d’administration ;
- ou demander les premières mises à jour au prestataire via Git / versionnement ?

**Réponse provisoire :** oui, une interface d’administration est prévue pour les contenus, offres, FAQ, témoignages, visuels et lien de réservation.  
**Impact :** architecture, coût, sécurité et maintenance.

### 3. Réservation

Resalib est-il confirmé pour la V1 ? Si oui, quel est le lien public ou le compte à intégrer ?

**Réponse provisoire :** prévoir l’emplacement et la configuration du lien Resalib ; Sandra l’ajoutera après création de son compte.  
**Impact :** CTA, intégration technique et parcours de réservation.

### 4. Localisation et formats

Quels lieux et zones doivent être affichés ?

- adresse du studio ;
- zone d’intervention dans les écoles, centres de loisirs et associations ;
- lieux des séances en plein air ;
- modalités de déplacement éventuelles.

**Réponse provisoire :** localisation à définir pendant la prospection ; aucune adresse ne doit être inventée.  
**Impact :** SEO local, réassurance et demandes de devis.

### 5. Annulation et météo

Quelles règles appliquer pour :

- annulation d’un atelier ;
- absence d’un participant ;
- report d’une séance en plein air ;
- météo défavorable ?

**Réponse provisoire :** appliquer une règle de référence à 48 heures, avec report ou remboursement si Sandra annule et report prioritaire en cas de météo défavorable. Validation juridique nécessaire avant publication.  
**Impact :** réservation, FAQ, emails et conditions légales.

### 6. Coordonnées et contact

Quelles coordonnées officielles publier ?

- nom affiché ;
- email ;
- téléphone ;
- adresse ou zone ;
- réseaux sociaux éventuels ;
- horaires de réponse.

**Réponse provisoire :** coordonnées à venir ; prévoir les emplacements sans données fictives.  
**Impact :** en-tête, pied de page, formulaire, mentions légales et SEO local.

## Priorité P1 — conformité et confiance

### 7. Formulaires et données personnelles

Quels champs sont réellement nécessaires pour un premier contact ?

Le site doit-il interdire explicitement la saisie de données de santé ou d’informations sensibles concernant un enfant ?

**Réponse provisoire :** appliquer la minimisation des données et interdire les données de santé ou informations sensibles sur les enfants dans les champs libres.  
**Impact :** RGPD, sécurité, UX et traitement des demandes.

### 8. Photos, témoignages et mineurs

Quels contenus sont déjà autorisés à publier ?

- portrait de Sandra ;
- photos du lieu ;
- photos d’ateliers ;
- témoignages nominatifs ;
- témoignages anonymes ;
- images d’enfants ou de familles.

Sans autorisation écrite vérifiée, le contenu identifiable ne sera pas publié en V1.

**Réponse provisoire :** aucune photo ou témoignage identifiable ne sera publié sans autorisation vérifiée.  
**Impact :** direction artistique, confiance et conformité.

### 9. Offre duos / familles

Le périmètre V1 doit-il rester limité à :

- mère-fille ;
- grand-mère-petite-fille ;
- sœurs ;

ou souhaites-tu communiquer plus largement sur les duos et familles ?

**Réponse provisoire :** conserver le périmètre mère-fille, grand-mère-petite-fille et sœurs pour la V1 ; validation avec les écrans.  
**Impact :** vocabulaire, personas, offres et illustrations.

## Priorité P2 — à préciser avant mise en ligne

### 10. Paiement

Le paiement reste-t-il uniquement sur place pour la V1 ? Souhaites-tu afficher une mention expliquant que le paiement en ligne pourra être étudié plus tard ?

**Réponse provisoire :** paiement sur place pour la V1 ; paiement en ligne reporté.  
**Impact :** FAQ, réservation et périmètre technique.

### 11. Contenus disponibles

Quels éléments peux-tu fournir pour la première version ?

- biographie ;
- photos ;
- témoignages ;
- textes des ateliers ;
- logo ou identité existante ;
- mentions légales ;
- politique de confidentialité.

**Réponse de Sandra :**  
**Impact :** calendrier de production et contenu de lancement.

### 12. Administration éditoriale future

Quels contenus souhaites-tu pouvoir modifier seule à terme ?

- ateliers et tarifs ;
- dates et disponibilités ;
- articles ;
- FAQ ;
- témoignages ;
- images ;
- liens de réservation.

**Réponse de Sandra :**  
**Impact :** choix d’un CMS ou d’une gestion versionnée.

## Règle de consolidation

Une réponse est considérée comme une décision uniquement après validation explicite de Sandra et report dans `docs/registre-des-decisions.md` avec un identifiant `DEC-*`.
