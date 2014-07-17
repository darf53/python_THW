import thermometer
import thermometerOut
import getLogins
import gspread
import datetime

strTemp = str(round(thermometer.temp("c"),1))
print "Current temperature is: " + strTemp + " C"

tempOutValues = thermometerOut.values()
strTempOut = str(tempOutValues[0])
strHumOut = str(tempOutValues[1])
print "Current temperature outside is: " + strTempOut + " C"
print "Current relative humisitye outside is: " + strHumOut + "%"

#Sending information to spreadsheet
def addGoogle(temp, tempOut, humOut):
  # Open connection to google
  login = getLogins.getLogins()
  c = gspread.Client(auth=(login[0], login[1]))
  c.login()

  #Open a spreadsheet and select the correct worksheet
  sht = c.open(login[2])
  worksheet = sht.get_worksheet(0)

  #Prepare the date
  now = datetime.datetime.now()
  date = now.strftime("%m/%d/%Y %H:%M:%S")
  
  #Append the data to the spreadsheet
  values = [date,temp,tempOut, humOut]
  print values
  worksheet.append_row(values)

  #Set the latest values in specific cell is worksheet
  worksheet.update_acell('F2', values[0])
  worksheet.update_acell('F3', values[1])
  worksheet.update_acell('F4', values[2])
  worksheet.update_acell('F5', values[3])

  #print worksheet.get_all_records()

  #print worksheet.findall("test")

print "adding data to GoogleSpreadsheet"
addGoogle(strTemp, strTempOut, strHumOut)
