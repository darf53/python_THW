def add(a, b):
  print "Adding %d + %d" % (a, b)
  return a + b

def substract(a, b):
  print "Substracting %d - %d" % (a, b)
  return a - b

def multiply(a, b):
  print "Multiplying %d * %d" % (a, b)
  return a * b

def divide(a, b):
  print "Dividing %d / %d" % (a, b)
  return a / b

print "Let's do some math with just functions!"

age = add(30, 5)
height = substract(78, 4)
weight = multiply(90, 2)
iq = divide(100, 2)

print "Age: %d, Height: %d, Weight: %d, IQ: %d" % (age, height, weight, iq)

print "Here is a puzzle"

what = add(age, substract(height, multiply(weight, divide(iq, 2))))

print "That becomes: ", what , "Can you do it by hand?"

print "============================================="

print "Let's get 2 numbers to do some calculation on:"
num1 = float(raw_input())
num2 = float(raw_input())

sum = add (num1, num2)
division = divide (num1, num2)

print "The sum is %s, and the division is %s." % (sum, division)
