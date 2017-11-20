#!/bin/sh

#Define database to backup:
DBase=Solar

#Capture current date
DATE=`date +%Y%m%d%H%M`


/usr/bin/influxd backup -database $DBase /share/backup/"$DATE"_"$DBase".bck
