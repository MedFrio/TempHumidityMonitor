// Fonction pour lire un fichier texte
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false); // false pour synchrone
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) { // readyState 4 = DONE
            if (rawFile.status === 200 || rawFile.status == 0) { // status 200 = OK
                callback(rawFile.responseText);
            }
        }
    }
    rawFile.send(null);
}

// Fonction pour mettre à jour les LEDs en fonction des données du fichier texte
function updateFromTextFile() {
    readTextFile("donnees.txt", function(text) {
        var data = text.trim().split(",");
        temperatureData = parseInt(data[0]);
        humidityData = parseInt(data[1]);

        updateLeds(temperatureData, humidityData);
    });
}

// Fonction pour ajuster l'opacité des LEDs en fonction des données reçues
function updateLeds(temperature, humidity) {
    const temperatureLeds = document.querySelectorAll('.temperature-leds .led');
    const humidityLeds = document.querySelectorAll('.humidity-leds .led');

    // Ajuste l'opacité des LEDs en fonction des données de température
    for (let i = 0; i < temperatureLeds.length; i++) {
        if (i < temperature) {
            temperatureLeds[i].style.opacity = 1;
        } else {
            temperatureLeds[i].style.opacity = 0.3; // Opacité pour les LEDs non allumées
        }
    }

    // Ajuste l'opacité des LEDs en fonction des données d'humidité
    for (let i = 0; i < humidityLeds.length; i++) {
        if (i < humidity) {
            humidityLeds[i].style.opacity = 1;
        } else {
            humidityLeds[i].style.opacity = 0.3; // Opacité pour les LEDs non allumées
        }
    }
}

setInterval(updateFromTextFile, 500);


console.log("temperature: " + temperatureData);
console.log("humidity: " + humidityData);
