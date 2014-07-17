def getLogins():

  fh = open("/home/pi/Credentials","r")
  credentials = []

  for line in fh:
    credentials.append(line.strip('\n'))

  fh.close()

  return (credentials)

