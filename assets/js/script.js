  
  //Start -- Pop-up getting elemenets & necessary functions
  
  //Get necessary Pop-up elements
 // Get the Pop-up
  var gameOverPopUp = document.getElementById("gameOverPopUp");

  // Get the <span> element that redirects the player home
  var goHomeLink = document.getElementsByClassName("goHome")[0];

  // Get Image & Title you Lose
  var youLoseImg = document.getElementById("youLoseImg");
  var youLoseTit = document.getElementById("youLoseTit");

  // Get Image & Title you Win
  var youWinImg = document.getElementById("youWinImg");
  var youWinTit = document.getElementById("youWinTit");
  
  // Go Home function
  goHomeLink.onclick = function() {
    gameOverPopUp.style.display = "none";
    window.location.href = "index.html";
  }

  //Stat -- Play & Score Functions
  const handOptions = {
    'rock': "assets/images/Rock.png",
    'paper': "assets/images/Paper.png",
    'scissors': "assets/images/Scissors.png",
    'spock': "assets/images/spock.png",
    'lizard': "assets/images/lizard.png",
  }
  
  let SCORE = 0;
  let SCORECP = 0;
  
  const playUserHand = (hand, Level) => {
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
  
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
  
    // set user Image
    document.getElementById("userPickImage").src = handOptions[hand];
  
    //Select function depending on the Level to choose CpHand randomly
    if (Level==1){
      cpHand = pickComputerHandL1();
    } else{
      cpHand = pickComputerHandL2();
    }

    referee(hand, cpHand);

  };
  
  const pickComputerHandL1 = () => {
      let hands = ['rock', 'paper', 'scissors'];
      let cpHand = hands[Math.floor(Math.random() * hands.length)];
      
      // set computer image 
      document.getElementById("computerPickImage").src = handOptions[cpHand];
      
      return cpHand;
  };

  const pickComputerHandL2 = () => {
    let hands = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
    let cpHand = hands[Math.floor(Math.random() * hands.length)];
    
    // set computer image 
    document.getElementById("computerPickImage").src = handOptions[cpHand];
      
    return cpHand;  
  };

  // New code
  const handWins = {
    'rock': ['scissors', 'lizard'],
    'paper': ['rock', 'spock'],
    'scissors': ['paper', 'lizard'],
    'spock': ['rock', 'scissors'],
    'lizard': ['paper', 'spock']
  }
 

  const referee = (userHand, cpHand) => {

    if (userHand == cpHand) {
      setDecision("It's a tie!");
    }
    else if (handWins[userHand].includes(cpHand)){
      setDecision("YOU WIN!");
      SCORE=SCORE + 1
      setScore(SCORE,"scoreUser");
      /*Put this in a dedicated function*/
      
      if(SCORE==3){
        /*Put this in a dedicated function*/
        gameOverPopUp.style.display = "block";
        youWinImg.style.display = "block";
        youWinTit.style.display = "block";
     }

    }
    else {
      setDecision("YOU LOSE!");
      SCORECP=SCORECP + 1
      setScore(SCORECP,"scoreCP");

     
      if(SCORECP==3){
         /*Put this in a dedicated function*/
        gameOverPopUp.style.display = "block";
        youLoseImg.style.display = "block";
        youLoseTit.style.display = "block";
      }
      

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
//End -- Play & Score Functions