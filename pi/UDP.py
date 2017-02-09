import socket

UDP_IP = "192.168.0.223"
UDP_PORT = 8089
MESSAGE = "SolarPanel,host=Bommelstraat64 pulse=0"

sock = socket.socket(socket.AF_INET, # Internet
                     socket.SOCK_DGRAM) # UDP
sock.sendto(MESSAGE, (UDP_IP, UDP_PORT))
