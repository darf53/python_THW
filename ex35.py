from sys import exit

def gold_room():
  print "This room is full of gold. How much do you take?"

  next = raw_input("> ")

  if "0" in next or "1" in next:
    how_much = int(next)
  else:
    dead("man, learn to type a number.")

  if how_much < 50:
    print "Nice, you're not greedy, you win!"
    exit(0)
  else:
    dead("You greedy bastard!")

def bear_room():
  print "There is a bear here."
  print "The bear has a bunch of honey."
  print "The fat bear is in front of another door."
  print "How are you going to move the bear?"
  bear_moved = False

  while True:
    next = raw_input("> ")

    if next == "Take honey":
      dead ("The bear kills you.")
    elif next == "taunt bear" and not bear_moved:
      print "The bear has moved, you can pass."
      bear_moved = True
    elif next == "open door" and bear_moved:
      gold_room()
    else:
      print "I got no idea what that means"
    
def cthulhu_room():
  print "Meet the great eveil Cthulhu"
  print "He stares at you and you go insane"
  print "Do you flee or eat your head?"

  next = raw_input("> ")

  if "flee" in next:
    start()
  elif "head" in next:
    dead("well that was tasty")
  else:
    cthulhu_room()

def dead(why):
  print why, "Good Job!"
  exit (0)

def start():
  print "YOu're in a dark room"
  print "Door right and left"
  print "Which one do you take"

  next = raw_input("> ")

  if next == "left":
    bear_room()
  elif next == "right":
    cthulhu_room()
  else:
    dead("You die in the darkroom...")

start()
