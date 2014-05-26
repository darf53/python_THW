from sys import argv

script, people, cars, buses = argv
"""
people = 30
cars = 40
buses = 15
"""

print "You entered %s people, %s cars and %s buses." % (people,cars,buses)


if cars > people:
  print "We should take the cars."
elif cars < people:
  print "We should not take the cars."
else:
  print "We can't decide."

if buses > cars:
  print "That's too many buses."
elif buses < cars:
  print "Maybe we could take the buses."
else:
  print "We still can't decide."

if people > buses:
  print "Alright, let's just take the buses."
else:
  print "Fine, let's stay home then."
