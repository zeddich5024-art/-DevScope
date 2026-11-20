# DevScope v2

## 1. Présentation du projet

DevScope est une application web qui permet aux recruteurs de rechercher
des développeurs GitHub, consulter leurs profils et gérer une shortlist
de candidats.

La version 2 apporte de nouvelles fonctionnalités pour faciliter le
suivi des candidats, la recherche des dépôts et améliorer les
performances grâce au système de cache.

## 2. Technologies utilisées

-   HTML5
-   CSS3 / Tailwind CSS
-   JavaScript ES6+
-   Fetch API
-   MockAPI
-   Git et GitHub
-   Jira
-   localStorage
-   GitHub Pages

## 3. Planification et avancement

### Jour 1 -- Lundi 16/11/2026

-   Création du tag Git `v1.0`.
-   Création de l'Epic DevScope v2 sur Jira.
-   Ajout de la recherche et du filtre des dépôts.

### Jour 2 -- Mardi 17/11/2026

-   Création de `updateCandidate()` avec PUT.
-   Ajout de la fenêtre de modification d'un candidat.
-   Mise à jour de la carte sans recharger la page.

### Jour 3 -- Jeudi 19/11/2026

-   Création de `deleteCandidate()` avec DELETE.
-   Ajout de la confirmation avant suppression.
-   Création du module `cache.js`.
-   Utilisation de `Promise.all()` pour charger les données en
    parallèle.

### Jour 4 -- Vendredi 20/11/2026

-   Tests des fonctionnalités et des erreurs.
-   Correction des problèmes.
-   Mise à jour du README.
-   Déploiement sur GitHub Pages.

## 4. Structure du projet

``` text
DevScope/
│
├── index.html
├── profil.html
├── shortlist.html
│
├── js/
│   ├── config.js
│   ├── api.js
│   ├── cache.js
│   ├── utils.js
│   ├── profil.js
│   └── shortlist.js
└── README.md
```

## 5. Fonctionnalités principales

### Page Shortlist

-   Afficher les candidats.
-   Modifier le statut, la note et le commentaire.
-   Supprimer un candidat après confirmation.
-   Mettre à jour la liste et le compteur sans recharger la page.

### Page Profil

-   Rechercher un dépôt par son nom.
-   Filtrer les dépôts par langage.
-   Combiner la recherche et le filtre.
-   Afficher un message si aucun dépôt ne correspond.

### Performance

-   Enregistrer les profils dans `localStorage`.
-   Réutiliser les données pendant 10 minutes.
-   Charger le profil et les dépôts en parallèle avec `Promise.all()`.

## 6. Gestion des erreurs

-   Désactivation des boutons pendant les requêtes.
-   Affichage des messages d'erreur.
-   Gestion des erreurs réseau.
-   Gestion des candidats introuvables (404).

## 7. Liens du projet

-   **GitHub :** À compléter
-   **Application en ligne :** À compléter
-   **Jira :** À compléter

## 8. Bilan

Cette version 2 m'a permis d'améliorer DevScope en ajoutant la
modification et la suppression des candidats, la recherche et le
filtrage des dépôts, ainsi qu'un système de cache pour réduire les
requêtes vers l'API GitHub.


