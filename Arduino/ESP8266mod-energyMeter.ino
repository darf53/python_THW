//nodeMCU v1.0 (black) with Arduino IDE
//pulseMonitor Energy meter
//vandenbergenj@gmail.com
//nodemcu esp8266
//PinLayout http://forum.makehackvoid.com/uploads/default/178/df994028721a8bdf.png
//Code for EnergyMeter EM10-din
//https://www.gavazzionline.com/pdf/EM10DINDSENG210711.pdf

#include <ESP8266WiFi.h>


float prevTemp = 0;
const char* server = "api.thingspeak.com";
String apiKey ="XXXXXXXX";
const char* MY_SSID = "XXXXXX"; 
const char* MY_PWD = "XXXXXXXXXX";
int sent = 0;

void setup() {
  Serial.begin(115200);
  connectWifi();
  pinMode(A0,INPUT);
}

void loop() {
  int pulse;
  
  pulse = analogRead(A0);
  if (pulse > 50)
  {
  sendSolarPulse(1);
  //delay(200) //pulse
  delay(200); //delay on 2s for testing
  Serial.print(pulse);
  Serial.println(" Pulse transmitted");  
  }  
  
  //we will pol every 50ms
  delay(50);
}

void connectWifi()
{
  Serial.print("Connecting to "+*MY_SSID);
  WiFi.begin(MY_SSID, MY_PWD);
  while (WiFi.status() != WL_CONNECTED) {
  delay(1000);
  Serial.print(".");
  }
  
  Serial.println("");
  Serial.println("Connected");
  Serial.println("");  
}//end connect

void sendSolarPulse(int pulse)
{  
   WiFiClient client;
  
   if (client.connect(server, 80)) { // use ip 184.106.153.149 or api.thingspeak.com
   Serial.println("WiFi Client connected ");
   
   String postStr = apiKey;
   postStr += "&field1=";
   postStr += String(pulse);
   postStr += "\r\n\r\n";
   
   client.print("POST /update HTTP/1.1\n");
   client.print("Host: api.thingspeak.com\n");
   client.print("Connection: close\n");
   client.print("X-THINGSPEAKAPIKEY: " + apiKey + "\n");
   client.print("Content-Type: application/x-www-form-urlencoded\n");
   client.print("Content-Length: ");
   client.print(postStr.length());
   client.print("\n\n");
   client.print(postStr);
   delay(500);
   
   }//end if
   sent++;
 client.stop();
}//end send
