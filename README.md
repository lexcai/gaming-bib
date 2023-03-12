# ELECTIVE REACT M1
## RESUME RAPIDE
Application qui permet en se connectant d'avoir une bibliothèque de jeux-vidéos (nom, description, catégorie, jouable en ligne ou pas, etc...) consultable mais aussi de pouvoir ajouter des jeux dans nos favoris et pour chaque jeu pouvoir discuter sous forme de forum pour pouvoir s'inviter à jouer ensemble.
Pour chaque utilisateur, avoir la possibilité de rajouter son id discord, son mail et son telephone pour pouvoir etre contacter par les personnes sur le forum.

## PRE-REQUIS
- Routing : react-router-dom 
- Contexts ou redux : Contexts (  UserContext.tsx, GameContext.tsx )
- BDD/ Auth : Firebase --> auth/firestore
- Api : https://www.freetogame.com/api-doc
- Typescript : Oui

## FEATURES
- Inscription
- Authentification
- Edition de profil
- Deconnexion
- Cookie de connexion qui stocke l'uid de l'utilisateur
- Redirection si user déjà connecté vers le dashboard
- Systèmes d'affichage des jeux sous forme de Card
- Recherche par noms Dynamique de jeux
- Ajout de Favoris (Work in progress: stocké en localStorage dans un tableau pour le moment visible dans la console, et visible via l'icone de coeur present sur la card de chaque jeu qui se remplit une fois selectionné)
- Détails du jeu selectionné avec notament : sa jaquette , sa description, des informations complementaires, un lien en savoir plus qui redirge vers l'hebergeur de l'API qui contient des informations supplémentaire 
- Chat utilisateur lié au jeu selectionné qui sert d'espace commentaire message triée par date de publication

## RESTE A FAIRE
- Finir la feature Favoris
- 


# Lien vers l'application web : 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
