from influxdb import client as influxdb
#db = influxdb.InfluxDBClient(host='127.0.0.1', port=8086, username='rpi', password='rpi123', database='Bommelstraat64')
db = influxdb.InfluxDBClient(host='192.168.0.223', port=8086, username='rpi', password='rpi123', database='Bommelstraat64')

def uploadTemp(temp, tempOut, humOut):
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

def uploadDustParticles(pm_25, pm_10):
    data = [
      {
	"measurement": "Dust_Particles",
	"fields": {
	   "pm_25": pm_25,
	   "pm_10": pm_10
	}
      }
    ]
    db.write_points(data)
