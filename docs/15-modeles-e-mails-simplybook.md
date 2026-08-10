# Maison Loratu — Modèles d’e-mails SimplyBook

**Statut :** première version éditoriale à intégrer dans SimplyBook.

Les détails techniques de la réservation doivent être ajoutés au moyen du bouton **Variables** de SimplyBook : nom de la personne, atelier, date, heure et lien d’annulation. Ne pas recopier une variable manuellement si elle n’est pas proposée par le modèle concerné.

## Confirmation de réservation — cliente

**Objet :** Votre moment à Maison Loratu est réservé

Bonjour [prénom],

Votre réservation est bien notée.

[Détails de la réservation : atelier, date et heure]

Maison Loratu est heureuse de vous accueillir pour ce moment de respiration, de détente et de partage.

Si vous avez une question ou un empêchement, vous pouvez écrire à maisonloratu@gmail.com ou appeler le 06 66 88 33 02.

À très bientôt,

Maison Loratu

## Rappel la veille — cliente

**Objet :** Demain, un moment pour souffler avec Maison Loratu

Bonjour [prénom],

Un petit mot pour vous rappeler votre rendez-vous de demain.

[Détails de la réservation : atelier, date et heure]

Venez simplement comme vous êtes. Maison Loratu vous attend pour une parenthèse de douceur, à votre rythme.

À demain,

Maison Loratu

## Annulation de réservation — cliente

**Objet :** Votre réservation a été annulée

Bonjour [prénom],

Votre réservation a bien été annulée.

[Détails de la réservation annulée]

Si cet imprévu vous laisse un peu de regret, vous serez toujours la bienvenue à une prochaine date. Les ateliers Maison Loratu sont là pour laisser de la place à ce qui compte.

Prenez soin de vous,

Maison Loratu

## Modification de réservation — cliente

**Objet :** Votre réservation a été mise à jour

Bonjour [prénom],

Votre réservation a été modifiée. Voici les nouvelles informations :

[Nouveaux détails de la réservation]

Si ce nouveau créneau ne vous convient pas, contactez Maison Loratu : nous chercherons une solution avec vous.

À bientôt,

Maison Loratu

## Nouvelle réservation — Sandra

**Objet :** Nouvelle réservation — [atelier] — [date]

Une nouvelle réservation vient d’être enregistrée.

[Détails de la réservation : cliente, atelier, date, heure et coordonnées]

## Annulation — Sandra

**Objet :** Annulation — [atelier] — [date]

Une réservation vient d’être annulée.

[Détails de la réservation annulée]

## Paiement confirmé — cliente

À activer lorsque Stripe sera connecté.

**Objet :** Votre paiement est bien reçu — Maison Loratu

Bonjour [prénom],

Votre paiement a bien été reçu. Votre place est réservée.

[Détails de la réservation et du paiement]

À très bientôt pour ce moment à partager,

Maison Loratu

## Mise en place dans SimplyBook

1. Aller dans **Settings → Email and SMS settings**.
2. Ouvrir le modèle concerné, puis choisir **Edit template**.
3. Coller le texte correspondant.
4. Insérer les variables proposées par SimplyBook à l’emplacement des repères entre crochets.
5. Activer la confirmation et un rappel client (recommandé : 24 h avant).
6. Tester chaque e-mail avec une réservation de test avant publication.

Les confirmations, rappels, annulations et modifications peuvent être gérés depuis les paramètres e-mail/SMS ; SimplyBook indique les variables compatibles à côté de chaque modèle. [Documentation SimplyBook](https://help.simplybook.me/index.php?title=Adjusting_notifications%2Ffr)
