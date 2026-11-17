# La Bibliothèque

Application web de gestion de bibliothèque créée avec React 19 et Vite. Elle permet de consulter un catalogue de livres, de suivre leur disponibilité et d'ajouter de nouveaux ouvrages.

## Fonctionnalités

- Afficher le nombre total de livres du catalogue.
- Afficher le nombre de livres actuellement disponibles.
- Distinguer les livres disponibles des livres empruntés.
- Emprunter un livre et le remettre en rayon.
- Ajouter un livre avec son titre et son auteur.
- Afficher une interface responsive adaptée aux ordinateurs et aux appareils mobiles.

## Technologies utilisées

- React 19
- Vite 8
- JavaScript (ES modules)
- CSS
- ESLint

## Prérequis

- Node.js
- npm

## Installation

Depuis le dossier du projet :

```sh
npm install
```

## Lancement

Pour démarrer le serveur de développement :

```sh
npm run dev
```

L'application est généralement disponible à l'adresse indiquée dans le terminal, par défaut :

```text
http://localhost:5173
```

## Scripts disponibles

- `npm run dev` : lance le serveur de développement.
- `npm run build` : crée la version de production dans le dossier `dist`.
- `npm run preview` : prévisualise localement la version de production.
- `npm run lint` : vérifie le code avec ESLint.

Exemple de vérification complète :

```sh
npm run lint
npm run build
```

## Structure du projet

```text
src/
├── components/
│   └── BookCard.jsx   # Carte présentant un livre
├── App.jsx            # Catalogue, formulaires et état de l'application
├── App.css            # Styles principaux
├── index.css          # Styles globaux
└── main.jsx           # Point d'entrée React
```

## Fonctionnement

Les données initiales du catalogue sont définies dans `src/App.jsx`. L'état est géré côté client avec `useState`. Les actions d'emprunt, de retour et d'ajout mettent à jour l'affichage immédiatement.

Les modifications ne sont pas enregistrées dans une base de données : elles sont perdues lors du rechargement de la page.
