#include "ESP8266WiFi.h"  // Enables the ESP8266 to connect to the local network (via WiFi)
#include "PubSubClient.h" // Connect and publish to the MQTT broker
#include <ArduinoJson.h> // Json parser for arduino

// WiFi
const char* ssid = "WiFi-SSID";                 // Your personal network SSID
const char* wifi_password = "WiFi-PWD"; // Your personal network password

// MQTT
const char* mqtt_server = "MQTT-bridge";  // IP of the MQTT broker
const char* sensor_topic = "home/sensor";
const char* clientID = "client_solar"; // MQTT client ID

// Initialise the WiFi and MQTT Client objects
WiFiClient wifiClient;
// 1883 is the listener port for the Broker
PubSubClient client(mqtt_server, 1883, wifiClient); 

// NodeMCU ESP8266 pin setup
const byte interruptPin = 14; //D5-GPIO14 on ESP8266
// Raw pulse KWH counter (1000 pulese / Kwh)
// Second variable to make the interupt loop as short as possible
volatile unsigned long pulse = 0; //volatile as value will be changed during interrupts
long pulse_tosend = 0;

//Sending data points every 5 minutes
#define FIVEMIN (1000UL * 60 * 5)
unsigned long rolltime = millis() + FIVEMIN;

// Custom function to connet to the MQTT broker via WiFi
void connect_MQTT(){
    Serial.print("Connecting to ");
    Serial.println(ssid);

    // Connect to the WiFi
    WiFi.begin(ssid, wifi_password);

    // Wait until the connection has been confirmed before continuing
    while (WiFi.status() != WL_CONNECTED) {
      delay(500);
      Serial.print(".");
    }

    // Debugging - Output the IP Address of the ESP8266
    Serial.println("WiFi connected");
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());

    // Connect to MQTT Broker
    // client.connect returns a boolean value to let us know if the connection was successful.
    // If the connection is failing, make sure you are using the correct MQTT Username and Password (Setup Earlier in the Instructable)
    //  if (client.connect(clientID, mqtt_username, mqtt_password)) {
    if (client.connect(clientID)) {  
      Serial.println("Connected to MQTT Broker!");
    }
    else {
      Serial.println("Connection to MQTT Broker failed...");
    }
}

// The interrupt routine
ICACHE_RAM_ATTR void Pulseirq()
{
  pulse++;                    // just increment raw pulse counter.
  Serial.print("Falling");Serial.println(pulse);    // Debug to be removed
}

void setup() {
  
  // Console output for debugging
  Serial.begin(9600);

  // Activate a built in LED to see activity
  pinMode(LED_BUILTIN, OUTPUT);
  
  // KWH interrupt attached to IRQ 0  = pin2
  attachInterrupt(digitalPinToInterrupt(interruptPin), Pulseirq, FALLING);
  
}

void loop() {
  
  //We will transmit data every 5minutes
  // signed comparison for proper handling of timer rollover
  if((long)(millis() - rolltime) >= 0) {

   //  Do your five minute roll stuff here

   
  // Connect to WIFI network
  connect_MQTT();
  Serial.setTimeout(2000);
  
    // Copy Pulse in pulse_tosend variable and reset pulse counter (if send succesfull, reset pulse_tosend)
    //noInterrupts(); Idealy we should block interrupts, but this is not avaible on NodeMCU
    pulse_tosend += pulse;
    pulse = 0;
    //interrupts();

    // Dimensions for this sensor
    String device_id="sensor_S0";
    String building="bommel64";
    String room="solar";
    String payload="{\"device_id\":\"" + device_id + "\",\"building\":\"" + building + "\",\"room\":\"" + room + "\",";

    //Data information in json format added to payload
    String jsontemp=payload + "\"pulse\":" + String(pulse_tosend) + "}";

    //Debug information to console 
    Serial.println(jsontemp);

    // PUBLISH to the MQTT Broker (topic = Pulse Sensor, defined at the beginning)
    if (client.publish(sensor_topic, String(jsontemp).c_str())) {
      Serial.println("Sensor data sent!");
      pulse_tosend = 0; //resetting puleses
    }
    // Again, client.publish will return a boolean value depending on whether it succeeded or not.
    // If the message failed to send, we will try again, as the connection may have broken.
    else {
      Serial.println("PulsesSolar failed to send. Reconnecting to MQTT Broker and trying again");
      // client.connect(clientID, mqtt_username, mqtt_password);
      client.connect(clientID);
      delay(10); // This delay ensures that client.publish doesn't clash with the client.connect call
      client.publish(sensor_topic, String(jsontemp).c_str());
    }

    client.disconnect();  // disconnect from the MQTT broker

    rolltime += FIVEMIN;

  }

  // blink the built-in LED to show activity
  digitalWrite(LED_BUILTIN, LOW);   // turn the LED on (HIGH is the voltage level)
  delay(2000);                       // wait for a second
  digitalWrite(LED_BUILTIN, HIGH);    // turn the LED off by making the voltage LOW
  delay(2000);                       // wait for a second

}

