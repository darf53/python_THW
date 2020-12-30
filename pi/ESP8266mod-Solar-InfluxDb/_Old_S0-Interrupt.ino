/*
 *    FILE: KWh monitoring
 *  AUTHOR: Rob Tillaart
 *    DATE: 2010 03 31 
 *     URL: http://playground.arduino.cc/Main/EEM12L-32AKWhMonitoring
 *
 * PURPOSE: prototype KWh monitoring  
 *
 * Digital Pin layout ARDUINO
 * =============================
 *  2     IRQ 0    - to KW meter EEM12L-32A 
 *
 * This KWh meter gives a pulse every 0.5 Watt
 */

//
// KWH SENSOR CODE
//
// TODO - make a class
//
volatile unsigned long rpk = 0;               // raw pulse KWH counter (private)
volatile unsigned long rpk_old = 0;           // value of last read (private)
volatile boolean CS_KWH = false;              // Critical Section for KWH meter (private)

// The interrupt routine
void Kirq()
{
  rpk++;                    // just increment raw pulse counter.
  if (rpk > 1000000000)     // reset pulse counter after 10e9 pulse = 1000.000 KW 
  {
    if (false == CS_KWH)    // in critical section?  // assumption IRQ-call is handled atomic on arduino.
    {
      rpk -= rpk_old;
      rpk_old = 0;
    }
  }
  Serial.print("Falling");
}

// returns KWH's since last reset
float readKWH1()
{
  return rpk/1000.0;       // one pulse = 1 watt.
}

// returns KWH's since last call
float readKWH()
{
  CS_KWH = true;           // Start Critical Section - prevent interrupt Kirq() from changing rpk & rpk_old ;
      long t = rpk;            // store the raw pulse counter in a temp var.
      long k = t - rpk_old;    // subtract last measure to get delta
      rpk_old = t;             // remember old value
  CS_KWH = false;          // End Critical Section
  return k/1000.0;         // return delta, one pulse = 1.0 watt.
}

//
// SETUP
//
void setup() 
{
   Serial.begin(9600);

  // KWH interrupt attached to IRQ 0  = pin2
  attachInterrupt(digitalPinToInterrupt(2), Kirq, FALLING);
}

//
// MAIN LOOP
//
void loop() 
{
  delay(1000);
  float KWH = readKWH();
  float SUM = readKWH1();
  Serial.print("KWH: ");    
  Serial.print(KWH, 4);
  Serial.print("    ");
  Serial.println(SUM, 4);
}

//
// END OF PROGRAM
//
