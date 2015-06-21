#data = """blahblahblah 
#<a  href="THIS IS WHAT I WANT" title="NOT THIS">I DONT CARE ABOUT THIS EITHER</a>
#blahblahblah"""


import lxml.html
import urllib2
response = urllib2.urlopen('http://www.2dehands.be/autos/?auto_bj__tot=1983&locale=all')
print response.info()
data = response.read()
tree = lxml.html.fromstring(data)
links = tree.xpath('//article/div/a/@href')
images = tree.xpath('//article/div/a/div/img/@src')
descriptions = tree.xpath('//article/div/a/div/div/p/@itemprop')

for link in links:
	print link

for image in images:
	print image
