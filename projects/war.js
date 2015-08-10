var player = {
	name: "player1",
	deck: [],
	count: 0
};
var computer = {
	name: "computer",
	deck: [],
	count: 0
};

function createDeck(){
	var deck = [];
	var i = 1;

	while(i <= 52){
		if (i <= 13){
			var card = {
				number: i,
				face: function(number){
					  if(number == 1){
						this.face = "Ace";
						this.number = 14;
					  }else if(number == 11){
						this.face = "Jack";
					  }else if (number == 12){
						this.face = "Queen";
					  }else if (number == 13){
						this.face = "King";
					  }else{
					  	this.face = this.number;
					  };
					},
				suit: "Clubs",
				assigned: ""
			};
			card.face(card.number);
			deck.push(card);
		}else if(i > 13 && i <= 26){
			var card = {
				number: i - 13,
				face: function(number){
					  if(number == 1){
						this.face = "Ace";
						this.number = 14;
					  }else if(number == 11){
						this.face = "Jack";
					  }else if (number == 12){
						this.face = "Queen";
					  }else if (number == 13){
						this.face = "King";
					  }else{
					  	this.face = this.number;
					  };
					},
				suit: "Spades",
				assigned: ""
			};
			card.face(card.number);
			deck.push(card);
		}else if (i > 26 && i <= 39){
			var card = {
				number: i - 26,
				face: function(number){
					  if(number == 1){
						this.face = "Ace";
						this.number = 14;
					  }else if(number == 11){
						this.face = "Jack";
					  }else if (number == 12){
						this.face = "Queen";
					  }else if (number == 13){
						this.face = "King";
					  }else{
					  	this.face = this.number;
					  };
					},
				suit: "Hearts",
				assigned: ""
			};
			card.face(card.number);
			deck.push(card);
		}else{
			var card = {
				number: i - 39,
				face: function(number){
					  if(number == 1){
						this.face = "Ace";
						this.number = 14;
					  }else if(number == 11){
						this.face = "Jack";
					  }else if (number == 12){
						this.face = "Queen";
					  }else if (number == 13){
						this.face = "King";
					  }else{
					  	this.face = this.number;
					  };
					},
				suit: "Diamonds",
				assigned: ""
			};
			card.face(card.number);
			deck.push(card);
		};
		i++;
	};

	return deck;
};

function shuffleDeck(deck){
	var deck1 = [];
	var deck2 = [];
	var currentIndex = deck.length, tempValue, randomIndex;

  	while (0 !== currentIndex) {
  	   	randomIndex = Math.floor(Math.random() * currentIndex);
    	currentIndex -= 1;

    	tempValue = deck[currentIndex];
    	deck[currentIndex] = deck[randomIndex];
    	deck[randomIndex] = tempValue;
  	};

	for(var i = 0; i < 52; i++){
		if (i % 2 == 0){
			deck[i].assigned = "computer";
			deck2.push(deck[i]);
		}else{
			deck[i].assigned = "player1";
			deck1.push(deck[i]);
		};
	};  
	player.deck = deck1;
	computer.deck = deck2;
	player.count = player.deck.length;
	computer.count = computer.deck.length;
}

function playRound(){
	var playerCard = player.deck.shift();
	var computerCard = computer.deck.shift(); 
	var round = [playerCard, computerCard];

	document.getElementById("player").innerHTML = "Your card is: " + playerCard.face + " of " + playerCard.suit;
	document.getElementById("computer").innerHTML = "The computer's card is: " + computerCard.face + " of " + computerCard.suit;

	if (playerCard.number == computerCard.number){
		window.alert("The REAL war has begun!");
		war(round);
	}else if(playerCard.number < computerCard.number){
		playerCard.assigned = "computer";
		computer.deck.push(playerCard, computerCard);
		window.alert("The computer won this round!");
	}else if(playerCard.number > computerCard.number){
		computerCard.assigned = "player1";
		player.deck.push(playerCard, computerCard);
		window.alert("You won this round!");
	}; 
	computer.count = computer.deck.length;
	player.count = player.deck.length;
};

function war(round){
	var playerWar = [];
	var computerWar = []; 
	var x;
	
	for(var x = 0; x < 4; x++){
		var card1 = player.deck.shift();
		var card2 = computer.deck.shift();

		playerWar.push(card1);
		computerWar.push(card2);
	};

	round = round.concat(playerWar);
	round = round.concat(computerWar);
	
	document.getElementById("player").innerHTML = "Your War trump card is: " + playerWar[3].face + " of " + playerWar[3].suit;
	document.getElementById("computer").innerHTML = "The computer's War trump card is: " + computerWar[3].face + " of " + computerWar[3].suit;
	
	if (playerWar[3].number == computerWar[3].number){
		window.alert("ANOTHER war has started!");
		war(round);
	}else if(playerWar[3].number < computerWar[3].number){
		for(x in playerWar){playerWar[x].assigned = "computer";};
		computer.deck.push(round[0],round[1],round[2],round[3],round[4],round[5],round[6],round[7],round[8],round[9]);
		window.alert("The computer won this round!");
	}else if(playerWar[3].number > computerWar[3].number){
		for(x in computerWar){computerWar[x].assigned = "player1";};
		player.deck.push(round[0],round[1],round[2],round[3],round[4],round[5],round[6],round[7],round[8],round[9]);
		window.alert("You won this round!");
	};
};

function countCards(){
	if (player.count == computer.count){
		window.alert("Both players have " + player.count + " cards. A draw has occurred");
	}else if(player.count < computer.count){
		window.alert("The computer has won with " + computer.count + " cards");
	}else if(player.count > computer.count){
		window.alert("You have won with " + player.count + " cards");
	};
};