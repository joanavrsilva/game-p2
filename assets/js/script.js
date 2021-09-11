  
  //Start -- Pop-up getting elemenets & necessary functions
  
  //Get necessary Pop-up elements
 // Get the Pop-up
  var gameOverPopUp = document.getElementById("gameOverPopUp");

  // Get the <span> element that redirects the player home
  var goHomeLink = document.getElementsByClassName("goHome")[0];

  // Get Image you Lose
  var youLoseImg = document.getElementById("youLoseImg");

  // Get Image you Win
  var youWinImg = document.getElementById("youWinImg");
  
  // Go Home function
  goHomeLink.onclick = function() {
    gameOverPopUp.style.display = "none";
    window.location.href = "index.html";
  }

  //Stat -- Play & Score Functions
  
  //Images
  const handOptions = {
    'rock': "assets/images/Rock.png",
    'paper': "assets/images/Paper.png",
    'scissors': "assets/images/Scissors.png",
    'spock': "assets/images/spock.png",
    'lizard': "assets/images/lizard.png",
  }

  //winning matches
  const handWins = {
    'rock': ['scissors', 'lizard'],
    'paper': ['rock', 'spock'],
    'scissors': ['paper', 'lizard'],
    'spock': ['rock', 'scissors'],
    'lizard': ['paper', 'spock']
  }
 
  //Score variables
  let SCORE = 0;
  let SCORECP = 0;

  //Get Elements
  
  var hands = document.getElementById("hands");
  var results = document.getElementById("results");
  var userPick = document.getElementById("userPickImage")
  var cpPick = document.getElementById("computerPickImage");

  //Main play function
  const playUserHand = (hand, Level) => {
    hands.style.display = "none";  
    results.style.visibility = "visible";
  
    // set user Image
    userPick.src = handOptions[hand];
  
    //Select function depending on the Level to choose CpHand randomly
    if (Level==1){
      cpHand = pickComputerHandL1();
    } else{
      cpHand = pickComputerHandL2();
    }

    referee(hand, cpHand);

  };
  
  const pickComputerHandL1 = () => {
      let handsOpts = ['rock', 'paper', 'scissors'];
      let cpHand = handsOpts[Math.floor(Math.random() * handsOpts.length)];
      
      // set computer image 
      cpPick.src = handOptions[cpHand];
      
      return cpHand;
  };

  const pickComputerHandL2 = () => {
    let handsOpts = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
    let cpHand = handsOpts[Math.floor(Math.random() * handsOpts.length)];
    
    // set computer image 
    cpPick.src = handOptions[cpHand];
      
    return cpHand;  
  };

  const referee = (userHand, cpHand) => {

    if (userHand == cpHand) {
      setDecision("It's a tie!","none");
    }
    else if (handWins[userHand].includes(cpHand)){
      setDecision("You win this round!","your-score");
      SCORE=SCORE + 1
      setScore(SCORE,"scoreUser");
      /*Put this in a dedicated function*/
      
      if(SCORE==3){
        /*Put this in a dedicated function*/
        gameOverPopUp.style.display = "block";
        youWinImg.style.display = "block";
     }

    }
    else {
      setDecision("Computer wins this round","computer-score");
      SCORECP=SCORECP + 1
      setScore(SCORECP,"scoreCP");

     
      if(SCORECP==3){
         /*Put this in a dedicated function*/
        gameOverPopUp.style.display = "block";
        youLoseImg.style.display = "block";
      }
      

    }
    
}

  const restartGame = () => {
    results.style = "results";
    hands.style="hands";
  }
  
  const setDecision = (decision, style) => {
    document.querySelector(".score-results h1").innerText = decision;
  }
  
  const setScore = (newScore, id) => {
    document.getElementById(id).innerText = newScore;
  }
//End -- Play & Score Functions