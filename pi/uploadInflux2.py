from influxdb import client as influxdb
db = influxdb.InfluxDBClient(host='127.0.0.1', port=8086, username='rpi', password='rpi123', database='Bommelstraat64')

data2 = [
   {"points":[[79]],
    "name":"Humidity",
    "columns":["external"]
   }
]
db.write_points(data2)

