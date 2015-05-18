import sys
import urllib2
import sre
from bs4 import BeautifulSoup

url = "http://www.2dehands.be/autos/?show_markt_uitvoer=1&locale=all&plaatsdatum__x=30&auto_bj__tot=1980"

website = urllib2.urlopen(url)
website_html = website.read()
    
soup = BeautifulSoup(website_html)
nice = soup.prettify()
print nice
matches = sre.findall('<a href="http://www.2dehands.be/autos/.*', nice)
print matches
for link in soup.find_all('a'):
  print(link.get('href'))



#  matches = sre.findall('<a href="http://www.2dehands.be/autos/.*', nice)
#  print matches
