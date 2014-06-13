class Song(object):
  
  def __init__(self, lyrics, rating):
    self.lyrics = lyrics
    self.rating = rating

  def sing_me_a_song(self):
    for line in self.lyrics:
      print line

  def highest_rating(self):
    print self.lyrics, self.rating

happy_bday = Song(["Happy birthday to you", 
                  "I don't want to get sued",
                  "So I'll stop right here..."], 5)

bulls_on_parade = Song(["They rally around family",
                        "With pcokets full of shells"], 3)

happy_bday.sing_me_a_song()

bulls_on_parade.sing_me_a_song()

happy_bday.highest_rating()

bulls_on_parade.highest_rating()
