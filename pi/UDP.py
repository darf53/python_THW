# to make the graph look nice
# sending a data point every hour after the sun goes down

import socket

UDP_IP = "192.168.0.223"
UDP_PORT = 8089
MESSAGE = "SolarPanel,host=Bommelstraat64 pulse=0"

sock = socket.socket(socket.AF_INET, # Internet
                     socket.SOCK_DGRAM) # UDP
sock.sendto(MESSAGE, (UDP_IP, UDP_PORT))
