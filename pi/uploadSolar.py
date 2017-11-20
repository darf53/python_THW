import requests
import getLogins
import json
from influxdb import InfluxDBClient

watt = 0

def getApiKey():
    login = getLogins.getLogins()
    return(login[4])

def uploadSolar(pulse):
    apikey = getApiKey()
    url = 'https://emoncms.org/input/post?node=solar&apikey=' + apikey + '&fulljson={"pulse": ' + str(pulse) + '}'
    print(url)
    r = requests.post(url)

client = InfluxDBClient('127.0.0.1' ,'8086','read','read','Solar')

#query will return a resultset
result = client.query("select pulse from SolarPanel where time > now() - 5m")
data_points = list(result.get_points())
#print(list(result.get_points(measurement='SolarPanel')))
#print(list(result.get_points()))
#print(result)

for data in data_points:
    watt += data['pulse']

print('power over the last 5 minutes is: ' + str(watt))

uploadSolar(watt)
