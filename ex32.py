the_count = [1, 2, 3, 4, 5]
fruits = ['apples', 'oranges', 'pears', 'apricots']
change = [1, 'pennies', 2, 'dimes', 3, 'quarters']

#The first kind of for-loop goes through a list
for number in the_count:
  print "This is count %d" % number

#same as above
for fruit in fruits:
  print "A fruit of type: %s." % fruit

#also we can go through mixed lists
#notice we have to use %r since we don't know what it is
for i in change:
  print "I got %r" % i

#We can also build list, first start with an empty one
elements = []

#Then use the range funcrtion to do 0 to 5 counts
j = 0
for i in range(0,10,2):
  print "Adding %d to the list." % i
  j = j + i
  #Append is a function that lists understand
  elements.append(j)

#Now print the lists
for i in elements:
  print "Elements was: %d" % i

