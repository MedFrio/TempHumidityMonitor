# Description: Scripte Python qui lit les données de l'Arduino et les écrit dans un fichier texte

import serial


ser = serial.Serial('COM3', 115200)
with open('website/donnees.txt', 'w') as file:
    while True:
        data = ser.readline().decode('utf-8')
        print(data, end='')

        # Extraire les valeurs d'humidité et de température de la chaîne
        if "Temperature" in data and "Humidite" in data:
            pass
            temperature_start = data.find("Temperature: ") + 13
            temperature_end = data.find("°C")
            humidity_start = data.find("Humidite") + len("Humidite") + 1
            humidity_end = data.find("%")

            temperature = data[temperature_start:temperature_end].strip()
            humidity = data[humidity_start:humidity_end].strip()
            # convertir les valeurs pour operande diviser 
            temperature = float(temperature)
            humidity = float(humidity)
            temperature = temperature/15
            humidity = humidity/12.5
            temperature = str(temperature)
            humidity = str(humidity)



            # Écrire les valeurs dans le fichier (remplacer les anciennes valeurs)
            file.seek(0)
            file.write(temperature + "," + humidity)
            file.truncate()