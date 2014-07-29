from sys import argv

script, filename = argv

text = open(filename)
print text.read()
