import json
import getLogins
import urllib2


#Getting the Underground weather API-key

def getApiKey():
  login = getLogins.getLogins()
  return(login[3])


#Querying the weather underground station

def values():

  getApiKey()

  url="http://api.wunderground.com/api/"
  uri="/conditions/q/51.06,3.74.json"
  http = url + str(getApiKey()) + uri

  response = urllib2.urlopen(http)
  data = json.load(response)

  return(data["current_observation"]["temp_c"], data["current_observation"]["relative_humidity"].strip('%'))
