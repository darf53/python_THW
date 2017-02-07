//nodeMCU v1.0 (black) with Arduino IDE
//pulseMonitor Energy meter to InfluxDB
//20170206 - BelGium
//vandenbergenj@gmail.com
//nodemcu esp8266
//PinLayout http://forum.makehackvoid.com/uploads/default/178/df994028721a8bdf.png
//Code for EnergyMeter EM10-din
//https://www.gavazzionline.com/pdf/EM10DINDSENG210711.pdf

//#include <SPI.h>
#include <ESP8266WiFi.h>
#include <WiFiUDP.h>

// Wifi connection settings
const char* MY_SSID = ""; 
const char* MY_PWD = "";

// the IP address and port of your InfluxDB
byte host[] = {192, 168, 0, 223};
int port = 8089;

WiFiUDP udp;

int sent = 0;
float prevTemp = 0;

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

  // print the IP address:
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

  // print the received signal strength:
  long rssi = WiFi.RSSI();
  Serial.print("signal strength (RSSI):");
  Serial.print(rssi);
  Serial.println(" dBm");
    
  Serial.println("");  
  
}//end connect

void setup() {
  Serial.begin(115200);
  connectWifi();
  pinMode(A0,INPUT);
}

void sendSolarPulse(int pulse) {  
   String line, data;

   //Convert int data to string
   data = String(pulse);

   //Concatenate all data into line protocol
   line = String("SolarPanel,host=Bommelstraat64 pulse="+ data);
   Serial.println(line);

   //Send the packet
   Serial.println("Sending UDP packet...");
   udp.beginPacket(host, port);
   udp.print(line);
   udp.endPacket();
   
}//end send

void loop() {
  int pulse;
  int count=0;
  int var = 0;

  // we will collect data over a period of 20s (100-var x 200-delay)
  while(var < 100){
    pulse = analogRead(A0);
    //if (pulse > 50) we will count a pulse from pulse meter 
    //Serial.println(pulse);
    if (pulse >50){
      count++;
      //Serial.print(count);
      }  
    delay(200); //delay on 200ms for as a typical pulse is between 100 and 120ms
    var++;
    //Serial.print(var);
    //Serial.println("-------------------");
  }
  
  if (count >0){
    sendSolarPulse(count);
  }
  //Serial.print(count);
  //Serial.println("Pulses transmitted");  
  //Serial.println("===================");
}




