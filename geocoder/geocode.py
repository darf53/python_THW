# Jef Vandenbergen - 18 June 2015
#
# Geocode module - gets for a specific address
#            "location" : {
#               "lat" : 51.0543422,
#               "lng" : 3.7174243
#
#Module will return a valid code if succesfull
#Otherwise it will return an error


import urllib2,json

def geocode (address):

    url="https://maps.googleapis.com/maps/api/geocode/json?address=%s" % address

    response = urllib2.urlopen(url)
    jsongeocode = json.load(response)

    if jsongeocode['status'] == 'OK':
    	return jsongeocode['results'][0]['geometry']['location']
    else:
	return ("1")

