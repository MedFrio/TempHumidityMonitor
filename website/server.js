const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

var os = require('os');
// Chemin du répertoire des fichiers statiques
app.use(express.static(path.join(__dirname)));

// Point d'entrée pour le fichier HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(port, "192.168.137.1", () => {
    console.log(`App listening at : 192.168.137.1:${port}`);
}
);
