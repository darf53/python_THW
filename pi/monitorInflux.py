import thermometer
import thermometerOut
import uploadInflux
import sds011

#strTemp = str(round(thermometer.temp("c"),1))
#print "Current temperature is: " + strTemp + " C"

tempOutValues = thermometerOut.values()
#strTempOut = str(tempOutValues[0])
#strHumOut = str(tempOutValues[1])
#print "Current temperature outside is: " + strTempOut + " C"
#print "Current relative humisitye outside is: " + strHumOut + "%"

dustParticles = sds011.dust()

print "adding data to timesdatabase"
#uploadInflux.upload(strTemp, strTempOut, strHumOut)
uploadInflux.uploadTemp(round(thermometer.temp("c"),1), tempOutValues[0], tempOutValues[1])
if dustParticles:
  uploadInflux.uploadDustParticles(dustParticles[0], dustParticles[1])

