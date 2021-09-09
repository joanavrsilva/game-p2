const handOptions = {
    "rock": "/assets/images/Rock.png",
    "paper": "/assets/images/Paper.png",
    "scissors": "/assets/images/Scissors.png",
    "spock": "/assets/images/spock.png",
    "lizard": "assets/images/lizard.png",
  }
  
  let SCORE = 0;
  let SCORECP = 0;
  
  const pickUserHand = (hand) => {
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
  
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
  
    // set user Image
    document.getElementById("userPickImage").src = handOptions[hand];
  
    pickComputerHand(hand);
  };
  
  const pickComputerHand = (hand) => {
      let hands = ["rock", "paper", "scissors", "spock", "lizard"];
      let cpHand = hands[Math.floor(Math.random() * hands.length)];
      
      // set computer image 
      document.getElementById("computerPickImage").src = handOptions[cpHand]
      
      referee(hand, cpHand);
  };
  // New code
  const handWins = {
    "rock": ["scissors", "lizard"],
    "paper": ["rock", "spock"],
    "scissors": ["paper", "lizard"],
    "spock": ["rock", "scissors"],
    "lizard": ["paper", "spock"]
  }
 

  const referee = (userHand, cpHand) => {

    if (userHand == cpHand) {
      setDecision("It's a tie!");
    }
    else if (handWins[userHand].includes(cpHand)){
      setDecision("YOU WIN!");
      SCORE=SCORE + 1
      setScore(SCORE,"scoreUser");
    }
    else {
      setDecision("YOU LOSE!");
      SCORECP=SCORECP + 1
      setScore(SCORECP,"scoreCP");
    }
    
}

  const restartGame = () => {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
  
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
  }
  
  const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
  }
  
  const setScore = (newScore, id) => {
    document.getElementById(id).innerText = newScore;
  }