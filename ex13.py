from sys import argv

script, first, second, third = argv

print "The script is called:", script
print "Your first variable is:", first
print "Your second variable is:", second
print "Your third variable is:", argv[3]

x = raw_input ("Give another argument:")
print "Another argument:", x
