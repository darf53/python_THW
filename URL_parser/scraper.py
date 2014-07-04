import sys
import urllib2
import sre

urls = open("url.txt")

for url in urls.readlines():

  print url
  website = urllib2.urlopen(url)
  website_html = website.read()
  cars = open("car.txt")

  for car in cars.readlines():
    
    matches = sre.findall('<a href.*alfa.*</a>', website_html)
    print matches
