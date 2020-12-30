/*
  Code to test interrupts on NodeMCU

  Turns a LED on and off on port LedPIN, 
  based on interrupt connected to interruptPin
  
  created 30 Dec 2020
  by Jef VDbergen
*/


const byte ledPin = 12;  //D6-GPIO12 on ESP8266
const byte interruptPin = 14; //D5-GPIO14 on ESP8266
//const byte interruptPin = 4; //D2-GPIO4 on ESP8266
volatile byte state = LOW;
volatile boolean intfired = false;
volatile unsigned long pulse = 0;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(interruptPin, INPUT_PULLUP);
  pinMode(LED_BUILTIN, OUTPUT);
  //pinMode(interruptPin, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(interruptPin), callback, FALLING);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(ledPin, state);
  //Serial.print("Doing Good");
  if (intfired) {
    Serial.println("Interrupt Detected");
    Serial.print("Stamp(ms): ");
    Serial.println(millis());
    intfired=false;
    }
  Serial.print("Pulses: ");
  Serial.println(pulse);
  delay(10000);
  //noInterrupts(); Doesn't work on NodeMCU
    digitalWrite(LED_BUILTIN, LOW);    // turn the LED on (HIGH is the voltage level)
    Serial.println("Led ON - No interrupts");
    delay(5000);                       // wait for a second
    digitalWrite(LED_BUILTIN, HIGH);   // turn the LED off by making the voltage LOW
    Serial.println("Led OF - Interrupts allowed");
  //interrupts();
}

// ICACHE_RAM_ATTR is needed to keep the interrupt loop in memory
ICACHE_RAM_ATTR void callback() {
  state = !state;
  intfired=true;
  pulse++;
}
