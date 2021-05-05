console.log('Lodash is loaded:', typeof _ !== 'undefined');
// cards
var cards = [
  {
    name: 'Ace',
    suit: 'hearts',
    value: 11
  },
  {
    name: 2,
    suit: 'hearts',
    value: 2
  },
  {
    name: 3,
    suit: 'hearts',
    value: 3
  }, {
    name: 4,
    suit: 'hearts',
    value: 4
  }, {
    name: 5,
    suit: 'hearts',
    value: 5
  }, {
    name: 6,
    suit: 'hearts',
    value: 6
  }, {
    name: 7,
    suit: 'hearts',
    value: 7
  }, {
    name: 8,
    suit: 'hearts',
    value: 8
  }, {
    name: 9,
    suit: 'hearts',
    value: 9
  }, {
    name: 10,
    suit: 'hearts',
    value: 10
  }, {
    name: 'Jack',
    suit: 'hearts',
    value: 10
  }, {
    name: 'Queen',
    suit: 'hearts',
    value: 10
  }, {
    name: 'King',
    suit: 'hearts',
    value: 10
  }, {
    name: 'Ace',
    suit: 'diamonds',
    value: 11
  },
  {
    name: 2,
    suit: 'diamonds',
    value: 2
  },
  {
    name: 3,
    suit: 'diamonds',
    value: 3
  }, {
    name: 4,
    suit: 'diamonds',
    value: 4
  }, {
    name: 5,
    suit: 'diamonds',
    value: 5
  }, {
    name: 6,
    suit: 'diamonds',
    value: 6
  }, {
    name: 7,
    suit: 'diamonds',
    value: 7
  }, {
    name: 8,
    suit: 'diamonds',
    value: 8
  }, {
    name: 9,
    suit: 'diamonds',
    value: 9
  }, {
    name: 10,
    suit: 'diamonds',
    value: 10
  }, {
    name: 'Jack',
    suit: 'diamonds',
    value: 10
  }, {
    name: 'Queen',
    suit: 'diamonds',
    value: 12
  }, {
    name: 'King',
    suit: 'diamonds',
    value: 10
  }, {
    name: 'Ace',
    suit: 'spades',
    value: 11
  },
  {
    name: 2,
    suit: 'spades',
    value: 2
  },
  {
    name: 3,
    suit: 'spades',
    value: 3
  }, {
    name: 4,
    suit: 'spades',
    value: 4
  }, {
    name: 5,
    suit: 'spades',
    value: 5
  }, {
    name: 6,
    suit: 'spades',
    value: 6
  }, {
    name: 7,
    suit: 'spades',
    value: 7
  }, {
    name: 8,
    suit: 'spades',
    value: 8
  }, {
    name: 9,
    suit: 'spades',
    value: 9
  }, {
    name: 10,
    suit: 'spades',
    value: 10
  }, {
    name: 'Jack',
    suit: 'spades',
    value: 10
  }, {
    name: 'Queen',
    suit: 'spades',
    value: 10
  }, {
    name: 'King',
    suit: 'spades',
    value: 10
  }, {
    name: 'Ace',
    suit: 'clubs',
    value: 11
  },
  {
    name: 2,
    suit: 'clubs',
    value: 2
  },
  {
    name: 3,
    suit: 'clubs',
    value: 3
  }, {
    name: 4,
    suit: 'clubs',
    value: 4
  }, {
    name: 5,
    suit: 'clubs',
    value: 5
  }, {
    name: 6,
    suit: 'clubs',
    value: 6
  }, {
    name: 7,
    suit: 'clubs',
    value: 7
  }, {
    name: 8,
    suit: 'clubs',
    value: 8
  }, {
    name: 9,
    suit: 'clubs',
    value: 9
  }, {
    name: 10,
    suit: 'clubs',
    value: 10
  }, {
    name: 'Jack',
    suit: 'clubs',
    value: 10
  }, {
    name: 'Queen',
    suit: 'clubs',
    value: 10
  }, {
    name: 'King',
    suit: 'clubs',
    value: 10
  }
];
// shuffle function: takes card deck and returns an array of 2 random cards
function shuffleDeal(cards, number) {
  var hand = [];
  for (var i = 0; i < number; i++) {
    var random = (Math.random() * cards.length);
    random = Math.floor(random);
    var card = cards[random];
    hand.push(card);
  }
  return hand;
}
// players array: array of 4 objects; name, 2 cards
var players = [
  {
    name: 'Billy'
  }, {
    name: 'Bob'
  }, {
    name: 'Cleatus'
  }, {
    name: 'Dusty'
  }
];
// function play: deals each player cards --> toals the hand
function play(players, number) {
  var winner = players[0];
  // console.log("initial winner", winner);
  // deal cards
  var playa;
  for (playa of players) {
    var hand = shuffleDeal(cards, number);
    playa.cards = hand;
    // sum cards --> assign to 'value' of obj
    var card;
    var value = 0;
    for (card of playa.cards) {
      value = value + card.value;
    }
    playa.value = value;
    // console.log(playa)
  }
  // find player with highest value --> log to console
  for (var i = 1; i < players.length; i++) {
    var player = players[i];
    if (player.value > winner.value) {
      winner = player;
      // console.log("winner changed:", winner)
    } else {
      continue;
    }
  }
  console.log(winner.name, 'is the winner!!');
}

play(players, 100);
