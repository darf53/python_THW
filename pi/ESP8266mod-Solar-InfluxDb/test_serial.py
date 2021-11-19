import serial, string

output = " "
#ser = serial.Serial('/dev/tty.usbserial-AR4XHLG3', 115200, 8, 'N', 1, timeout=1)
ser = serial.Serial('/dev/tty.usbserial-AR4XHLG3', 115200)
while True:
  print ("----")
  while output != "":
    output = ser.readline()
    print (output)
  output = (" ")
