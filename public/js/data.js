// seed page with sample posts
var postData = [{
  'title': 'Quail Watching 101',
  'author': 'Bradford',
  'image': 'https://upload.wikimedia.org/wikipedia/commons/a/aa/California_quail.jpg',
  'content': 'I like quails.',
  'date': new Date(),
  'score': 2,
  'comments': [{
    'author': 'Ned',
    'content': 'This post is dumb.',
    'date': new Date()
  }, {
    'author': 'Lucas',
    'content': 'This post is dumber.',
    'date': new Date()
  }]
}, {
  'title': 'How to Keep it Wonhunnit',
  'author': 'Bennett',
  'image': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Usdollar100front.jpg',
  'content': 'Be Bennett.',
  'date': new Date(),
  'score': 8,
  'comments': [{
    'author': 'Amanda',
    'content': 'What\'s up!',
    'date': new Date()
  }]
}, {
  'title': 'My Shark Friends',
  'author': 'Daniel',
  'image': 'http://i.telegraph.co.uk/multimedia/archive/03575/shark_3575581b.jpg',
  'content': 'Here\'s a list of my favorite sharks: hammerhead, great white, tiger shark, baby shark, mama shark, adolescent shark, happy shark, ambivalent shark, careful shark, mako shark, girl shark, thresher shark, goblin shark.',
  'date': new Date(),
  'score': -27,
  'comments': []
}];
