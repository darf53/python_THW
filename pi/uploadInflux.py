from influxdb import client as influxdb
db = influxdb.InfluxDBClient(host='127.0.0.1', port=8086, username='rpi', password='rpi123', database='Bommelstraat64')

def upload(temp, tempOut, humOut):
    data = [
      {"points":[[temp,tempOut]],
       "name":"temperature",
       "columns":["internal", "external"]
      }
    ]
    db.write_points(data)
    data2 = [
      {"points":[[humOut]],
       "name":"Humidity",
       "columns":["external"]
      }
    ]
    db.write_points(data2)

