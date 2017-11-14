import requests
import getLogins

def getApiKey():
  login = getLogins.getLogins()
  return(login[4])

def uploadSolar(pulse):
  apikey = getApiKey()
  url = 'https://emoncms.org/input/post?node=solar&apikey=' + apikey + '&fulljson={"pulse": ' + str(pulse) + '}'
  r = requests.post(url)

