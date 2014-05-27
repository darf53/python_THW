
def while_loop(iteration,increment):
  i = 0
  numbers = []
  while i < iteration:
    print "At the top i is %d" % i
    numbers.append(i)

    i = i + increment
    print "Numbers now:", numbers
    print "At the bottom i is %d" % i
  return numbers

def for_loop(iteration,increment):
  i = 0
  numbers = []
  for i in range(0,iteration):
    print "At the top i is %d" % i
    numbers.append(i)

    i = i + increment
    print "Numbers now:", numbers
    print "At the bottom i is %d" % i
  return numbers

print "Give me the number of iterations and an increment number:"
times = int(raw_input("> "))
plus = int(raw_input("> "))

list_numbers = for_loop(times,plus)

print "The Numbers:"

for num in list_numbers:
  print "\t", num
