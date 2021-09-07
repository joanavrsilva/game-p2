const handOptions = {
    "rock": "/assets/images/Rock.png",
    "paper": "/assets/images/Paper.png",
    "scissors": "/assets/images/Scissors.png",
    "spock": "/assets/images/spock.png",
    "lizard": "assets/images/lizard.png",
  }
  
  let SCORE = 0;
  
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
  
  const referee = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "scissors") {
      setDecision("YOU LOSE!");
    }
    else if (userHand == "paper" && cpHand == "rock") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }
    else if (userHand == "paper" && cpHand == "paper") {
      setDecision("It's a tie!");
    }
    else if (userHand == "rock" && cpHand == "scissors") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }
    else if (userHand == "rock" && cpHand == "paper") {
      setDecision("YOU LOSE!");
    }
    else if (userHand == "rock" && cpHand == "rock") {
      setDecision("It's a tie!");
    }
    else if (userHand == "scissors" && cpHand == "scissors") {
      setDecision("It's a tie!");
    }
    else if (userHand == "scissors" && cpHand == "rock") {
      setDecision("YOU LOSE!");
    }
    else if (userHand == "scissors" && cpHand == "paper") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }
// ll
    else if (userHand == "spock" && cpHand == "spock") {
      setDecision("It's a tie!");
    }

    else if (userHand == "spock" && cpHand == "scissors") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }

    else if (userHand == "spock" && cpHand == "rock") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }
    
    else if (userHand == "spock" && cpHand == "lizard") {
      setDecision("YOU LOSE!");

    }

    else if (userHand == "spock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
    }
  // kkk
  else if (userHand == "lizard" && cpHand == "lizard") {
    setDecision("It's a tie!");
  }

  else if (userHand == "lizard" && cpHand == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }

  else if (userHand == "lizard" && cpHand == "spock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  
  else if (userHand == "lizard" && cpHand == "rock") {
    setDecision("YOU LOSE!");

  }

  else if (userHand == "lizard" && cpHand == "scissors") {
  setDecision("YOU LOSE!");
  };

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
  
  const setScore = (newScore) => {
    SCORE = newScore;
    document.querySelector(".score h1").innerText = newScore;
  }