print "Give three numbers for people, cats, dogs:"
people = int(raw_input())
cats = int(raw_input())
dogs = int(raw_input())


print "These are the numbers you gave:\n\tpeople: %d\n\tcats: %d\n\tdogs: %d" % (people,cats,dogs)
if people < cats:
  print "Too many cats! The world is doomed!"

if people > cats:
  print "Not many cats! The world is saved!"

if people < dogs:
  print "The world is drooled on!"

if people > dogs:
  print "The world is dry!"

dogs += 5

if people >= dogs:
  print "People are greater than or equal to dogs."

if people <= dogs:
  print "People are less than or equal to dogs."

if people == dogs:
  print "People are dogs."


