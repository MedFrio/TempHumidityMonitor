#include <Arduino.h>
#include <DHT.h>
#include <Adafruit_Sensor.h>

#define DHTPIN 23
#define DHTTYPE DHT22

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(115200);
  dht.begin();
}

void loop() {
  delay(2000);
  // Le DHT22 renvoie au maximum une mesure toute les 2s
  float h = dht.readHumidity();
  // Lis le taux d'humidite en %
  float t = dht.readTemperature();
  // Lis la température en degré celsius
  float f = dht.readTemperature(true);
  // Avec (true), renvoit la température en fahrenheit


  if (isnan(h) || isnan(t) || isnan(f)) {
    Serial.println(F("Echec reception"));
    return;
    // Renvoit une erreur si l'ESP32 ne reçoit aucune mesure
  }

  Serial.print("Humidite: ");
  Serial.print(h);
  Serial.print("%  Temperature: ");
  Serial.print(t);
  Serial.print("°C, ");
  Serial.print(f);
  Serial.println("°F");
  // Transmet les mesures reçues vers l'ordinateur via l'usb
}