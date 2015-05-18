import sys
import urllib2
import sre
from bs4 import BeautifulSoup

urls = open("url.txt")

for url in urls.readlines():

  print url
  website = urllib2.urlopen(url)
  website_html = website.read()
    
#  soup = BeautifulSoup(''.join(website_html))
  soup = BeautifulSoup(website_html)
  nice = soup.prettify()
  for link in soup.find_all('a'):
    print(link.get('href'))
#  matches = sre.findall('<a href="http://www.2dehands.be/autos/.*', nice)
#  print matches
