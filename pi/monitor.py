import thermometer
import getLogins
import gspread
import datetime

strTemp = str(round(thermometer.temp("c"),1))
print "Current temperature is: " + strTemp + " C"

#Sending information to spreadsheet
def addGoogle(temp):
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
  tempRound = round(temp,1)
  values = [date,tempRound]
  print values
  worksheet.append_row(values)

  #print worksheet.get_all_records()

  #print worksheet.findall("test")

print "adding data to GoogleSpreadsheet"
addGoogle(thermometer.temp("c"))
