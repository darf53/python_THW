import thermometer
import thermometerOut
import getLogins
#import gspread
import datetime
import uploadInflux

strTemp = str(round(thermometer.temp("c"),1))
print "Current temperature is: " + strTemp + " C"

tempOutValues = thermometerOut.values()
strTempOut = str(tempOutValues[0])
strHumOut = str(tempOutValues[1])
print "Current temperature outside is: " + strTempOut + " C"
print "Current relative humisitye outside is: " + strHumOut + "%"

print "adding data to timesdatabase"
uploadInflux.upload(strTemp, strTempOut, strHumOut)

