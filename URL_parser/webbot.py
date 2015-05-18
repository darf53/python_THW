import mechanize
import time
from bs4 import BeautifulSoup
import re
import urllib
import string
import os

def downloadProcess (html, base, filetype, linklist):
    "This does the actual file downloading."
    soup = BeautifulSoup(html)
    for link in soup.find_all('a'):
        linkText = str(link.get('href'))

        if filetype in linkText:
        	slashList = [i for i, ind in enumerate(linkText) if find == '/']
        	directoryName = linkText[(slashList[0]+1):slashList[1]]
        	if not os.path.exists(directoryName):
        		os.makedirs(directoryName)

        	image = urllib.URLopener()
        	linkGet = base + linkText
        	filesave = string.lstrip(linkText, "/")
        	image.retrieve (linkGet, filesave)
        elif "htm" in linkText: #covers both html and htm
        	linkList.append(link)

start = "http://" + raw_input ("where would you like to start searching?\n")
filetype = raw_input ('What would you like to find?\n')

numSlash = start.count('/') #number of slashes are greater then 3
slashList = [i for i, ind in enumerate(start) if ind == '/'] #list of indices of slashes
print "start " + start
print "numSlash " + str(numSlash)
print "slasList "
print slashList

if (len(slashList) >= 3):
	third = slashList[2]
	print "third "
	print third
	base = start[:third] #base is everything up to third slash
	print "base " + base
else:
	base = start

br = mechanize.Browser()
r = br.open(start)
html = r.read()
linkList = [] #emnpty list of links

print "parsing " + start
downloadProcess(html, base, filetype, linkList)

print linkList

for leftover in linkList:
	time.sleep(0.1) #wiat 0.1 seconds to avoid overloading server
	linkText = str(leftover.get('href'))
	print "Parsing " + base + linkText
	br = mechanize.Browser()
	r = br.open(base + linkText)
	html = r.read()
	linkList = []
	downloadProcess(html, base, filetupe, linkList)
