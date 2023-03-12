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
- Faire systèmes de notation de jeu {BONUS}
- Faire connection avec un autre api qui reference les giveaways en fonction des jeux {BONUS}


# Lien vers l'application web : 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts


In the project directory, you can run:
### `npm install`

Afin de lire le package.json et installé les dependances nécessaire au fonctionnement de l'application 

### `npm start`

Exécute l'application en mode développement.
Ouvrez [http://localhost:3000](http://localhost:3000) pour l'afficher dans le navigateur.

La page sera rechargée si vous faites des modifications.
Vous verrez également toutes les erreurs de lint dans la console.


### `npm run build`

Construit l'application pour la production dans le dossier `build`.
Il intègre correctement React en mode production et optimise la construction pour obtenir les meilleures performances.

Le build est minifié et les noms de fichiers incluent les hashs.\N- L'application est prête à être déployée.
Votre application est prête à être déployée !

Voir la section [deployment](https://facebook.github.io/create-react-app/docs/deployment) pour plus d'informations.

### `npm run eject`


**Remarque : il s'agit d'une opération à sens unique. Une fois que vous `éjectez`, vous ne pouvez plus revenir en arrière!**

Si vous n'êtes pas satisfait de l'outil de construction et des choix de configuration, vous pouvez vous `éjecter` à tout moment. Cette commande supprimera la seule dépendance de construction de votre projet.

A la place, elle copiera tous les fichiers de configuration et les dépendances transitives (webpack, Babel, ESLint, etc) directement dans votre projet afin que vous ayez un contrôle total sur eux. Toutes les commandes, à l'exception de `eject`, fonctionneront toujours, mais elles pointeront vers les scripts copiés afin que vous puissiez les modifier. A ce stade, vous êtes seul.

Vous n'aurez jamais à utiliser `eject`. L'ensemble des fonctionnalités est adapté aux petits et moyens déploiements, et vous ne devriez pas vous sentir obligé d'utiliser cette fonctionnalité. Cependant, nous comprenons que cet outil ne serait pas utile si vous ne pouviez pas le personnaliser lorsque vous êtes prêt à le faire.

## En savoir plus

Pour en savoir plus, consultez la [documentation sur la création d'une application React] (https://facebook.github.io/create-react-app/docs/getting-started).

Pour apprendre React, consultez la [documentation React](https://reactjs.org/).
