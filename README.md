# Projet de Surveillance de Température et d'Humidité avec ESP32

Ce projet est une application Web qui surveille les données de température et d'humidité à l'aide d'un ESP32. Les données collectées sont ensuite affichées sur une page Web avec des LEDs représentant les niveaux de température et d'humidité. De plus, le projet comprend une fonctionnalité de notification qui envoie des alertes au téléphone en cas de conditions de température ou d'humidité critiques.

## Installation

1. Clone ce dépôt sur ton ordinateur local.
2. Assure-toi d'avoir Node.js installé.
3. Exécute `npm install` pour installer les dépendances.
4. Exécute `node server.js` pour lancer le serveur.

## Utilisation

1. Avant de commencer, assure-toi de partager l'accès point mobile depuis ton PC.
2. Assure-toi que l'ESP32 est correctement connecté et envoie des données.
3. Accède à l'application en ouvrant un navigateur Web et en visitant l'URL http://192.168.137.1:3000
4. Les données de température et d'humidité sont affichées avec des LEDs indiquant les niveaux respectifs.

## Fonctionnalités à venir

Dans les versions futures de ce projet, nous prévoyons d'implémenter une fonctionnalité d'envoi de notifications qui alertera les utilisateurs sur leur téléphone en cas de conditions de température ou d'humidité critiques.

## Auteur

Mohammed FRIOUICHEN et [Hicham DJEBALI](https://github.com/spideystreet/)


## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
