# -DevScope
## 1. Présentation du projet

**DevScope** est une application web destinée aux recruteurs tech. Elle
permet de rechercher des développeurs sur GitHub, consulter leurs
profils et leurs dépôts publics, puis enregistrer des candidats dans une
shortlist.

L'application comporte trois pages : - **Recherche (`index.html`)** :
recherche par username GitHub. - **Profil (`profil.html`)** : affichage
des informations et dépôts du développeur. - **Shortlist
(`shortlist.html`)** : consultation, recherche et tri des candidats.

### Technologies utilisées

-   HTML5, Tailwind CSS
-   JavaScript ES6+ et DOM
-   Fetch API, GitHub REST API et MockAPI
-   Modules ES6, Git et GitHub
-   Jira et GitHub Pages

## 2. Planification du projet

**Jour 1 --- 09/11/2026** - Création du projet Jira et du dépôt
GitHub. - Mise en place des trois pages, de la navigation et de Tailwind
CSS. - Création et validation du formulaire de recherche.

**Jour 2 --- 10/11/2026** - Création du module `api.js`. - Utilisation
de `fetch`, `async/await` et `response.ok`. - Récupération et affichage
du profil. - Gestion du chargement et des erreurs.

**Jour 3 --- 11/11/2026** - Récupération et affichage des dépôts
GitHub. - Configuration de MockAPI. - Ajout des candidats avec `POST` et
prévention des doublons.

**Jour 4 --- 12/11/2026** - Récupération des candidats avec `GET`. -
Affichage, recherche et tri de la shortlist. - Gestion des erreurs et
tests.

**Jour 5 --- 13/11/2026** - Finalisation du responsive design. - Tests,
documentation et mise à jour de Jira. - Préparation du déploiement et de
la démonstration.

## 3. Structure du projet

``` text
DevScope/
├── index.html
├── profil.html
├── shortlist.html
├── src/
│   ├── css/style.css
│   └── js/
│       ├── api.js
│       └── pages/
│           ├── recherche.js
│           ├── profil.js
│           └── shortlist.js
├── assets/
└── README.md
```

## 4. Fonctionnalités principales

-   **Recherche :** recherche d'un développeur par username avec
    validation.
-   **Profil :** affichage de l'avatar, du nom, de la bio, de la
    localisation et des statistiques.
-   **Dépôts :** affichage des repositories, du langage, des étoiles et
    des forks.
-   **Shortlist :** ajout sans doublons, sauvegarde avec MockAPI,
    recherche et tri des candidats.

## 5. Règles métier

-   Le username contient de 1 à 39 caractères : lettres, chiffres et
    tirets.
-   Il ne commence ni ne se termine par un tiret.
-   Une recherche invalide ne déclenche pas d'appel API.
-   Un candidat ne peut être ajouté qu'une seule fois.
-   Les informations manquantes sont remplacées par des valeurs par
    défaut.
-   Les erreurs HTTP et réseau sont prises en charge.

## 6. Gestion des API

**GitHub REST API :** `GET` permet de récupérer les profils et les
dépôts publics.

**MockAPI :** - `GET` : récupérer les candidats. - `POST` : ajouter un
candidat.

Les requêtes utilisent `fetch`, `async/await`, `try/catch` et
`response.ok`. Les données envoyées sont converties avec
`JSON.stringify()` et l'en-tête `Content-Type: application/json`. Les
éléments dynamiques sont créés avec `createElement()` et `textContent`.

## 7. Responsive Design et tests

L'interface adopte une approche **Mobile First** et s'adapte aux
mobiles, tablettes et ordinateurs.

Les tests concernent la validation du username, les réponses API (`404`,
`403`, `429`), les erreurs réseau, l'ajout sans doublon, ainsi que la
recherche et le tri des candidats.

## 8. Liens du projet

-   **Site déployé :*[https://zeddich5024-art.github.io/-DevScope/]*.
-   **GitHub :*[https://github.com/zeddich5024-art/-DevScope]* .
-   **Jira :*[https://zakariaeddich.atlassian.net/jira/software/projects/DEVSCOPE/boards/37?filter=&groupBy=none&atlOrigin=eyJpIjoiYWJhMTNkYTJhNThkNDhlZWE4N2FkZmRjYmQ2MjFiYjMiLCJwIjoiaiJ9]*.
-   **Présentation Canva** : *[https://canva.link/f3nvtvqs44sr1qw]*
## 9. Bilan

Ce projet permet de mettre en pratique JavaScript ES6+, la manipulation
du DOM, les modules, les appels API, les méthodes HTTP et la gestion des
erreurs. Il permet également de travailler avec Git, GitHub, Jira et le
déploiement web.

