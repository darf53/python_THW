import os

cwd = os.getcwd()
credentials_dir = cwd + "/../../Credentials"

def getLogins():

  fh = open(credentials_dir,"r")
  credentials = []

  for line in fh:
    credentials.append(line.strip('\n'))

  fh.close()

  return (credentials)

