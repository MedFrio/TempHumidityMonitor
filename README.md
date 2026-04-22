# TempHumidityMonitor

[![C++](https://img.shields.io/badge/C%2B%2B-Embedded-00599C?logo=cplusplus&logoColor=white)](https://isocpp.org/)
[![PlatformIO](https://img.shields.io/badge/PlatformIO-IoT-F5822A?logo=platformio&logoColor=white)](https://platformio.org/)

Projet embarqué de mesure température/humidité pour supervision locale ou connectée.

## Fonctionnalités

- Lecture capteurs de température et humidité
- Cycle de mesure configurable
- Base compatible microcontrôleurs cibles
- Integration possible a une chaine IoT

## Stack technique

- C++
- PlatformIO
- Écosystème microcontrôleurs (ESP32/ESP8266 selon configuration)

## Prérequis

- PlatformIO
- Carte cible compatible
- Outils USB/série de programmation

## Démarrage rapide

```bash
pio run
pio run -t upload
```

## Commandes utiles

```bash
pio run
pio run -t upload
pio device monitor
```

## Licence

Projet publié sous licence MIT, sauf indication contraire dans le dépôt.

