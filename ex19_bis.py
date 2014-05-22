def alfas (cc,doors):
  print "The car has an engine size of %d and has %d doors" % (cc,doors)
  print "\n"

print "that Coupe has following specs:"
alfas (1600,2)

berline_doors = 4
berline_engine = 1750

print "that Berline has following specs:"
alfas (berline_engine, berline_doors)

print "Can we get the specs of your car?"
print "What is the engine size?"
user_cc = raw_input()

print "How many doors does it have?"
user_doors = raw_input()

print "These are the specs of your car:"
alfas (int(user_cc),int(user_doors))
