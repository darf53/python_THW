from influxdb import client as influxdb
db = influxdb.InfluxDBClient(host='127.0.0.1', port=8086, username='rpi', password='rpi123', database='Bommelstraat64')

def upload(temp, tempOut, humOut):
    data = [
      {
	"measurement": "temperature",
	"fields": {
	   "internal": temp,
	   "external": tempOut
	}
      }
    ]
    db.write_points(data)
    data2 = [
      {
        "measurement": "humidity",
        "fields": {
           "external": humOut
        }
      }
    ]
    db.write_points(data2)

