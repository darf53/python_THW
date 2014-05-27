
def while_loop(iteration):
  i = 0
  numbers = []
  while i < iteration:
    print "At the top i is %d" % i
    numbers.append(i)

    i = i + 1
    print "Numbers now:", numbers
    print "At the bottom i is %d" % i
  return numbers

print "Give me the number of iterations:"
times = int(raw_input("> "))

list_numbers = while_loop(times)

print "The Numbers:"

for num in list_numbers:
  print "\t", num
