
// start -- Pop-up getting elemenets & necessary functions

// get necessary Pop-up elements
//  get the Pop-up
var gameOverPopUp = document.getElementById("gameOverPopUp");

// get the <span> element that redirects the player home
var goHomeLink = document.getElementsByClassName("goHome")[0];

// get Image you Lose
var youLoseImg = document.getElementById("youLoseImg");

// get Image you Win
var youWinImg = document.getElementById("youWinImg");

// go Home function
goHomeLink.onclick = function() {
  gameOverPopUp.style.display = "none";
  window.location.href = "index.html";
}

// star -- Play & Score Functions

// images
const handOptions = {
  'rock': "assets/images/Rock.png",
  'paper': "assets/images/Paper.png",
  'scissors': "assets/images/Scissors.png",
  'spock': "assets/images/spock.png",
  'lizard': "assets/images/lizard.png",
}

// winning matches
const handWins = {
  'rock': ['scissors', 'lizard'],
  'paper': ['rock', 'spock'],
  'scissors': ['paper', 'lizard'],
  'spock': ['rock', 'scissors'],
  'lizard': ['paper', 'spock']
}

// score variables
let SCORE = 0;
let SCORECP = 0;

// get gameElements

//get hands options
var hands = document.getElementById("hands");

//get result section elements
var results = document.getElementById("results");
var userPick = document.getElementById("userPickImage")
var cpPick = document.getElementById("computerPickImage");

// main play function
const playUserHand = (hand, Level) => {
  
  hands.style.display = "none";  
  results.style.visibility = "visible";

  // set user Image
  userPick.src = handOptions[hand];

  // select function depending on the Level to choose CpHand randomly
  if (Level==1){
    cpHand = pickComputerHandL1();
  } else{
    cpHand = pickComputerHandL2();
  }

    referee(hand, cpHand);
};

//randomely choose cp hand L1
const pickComputerHandL1 = () => {
  let handsOpts = ['rock', 'paper', 'scissors'];
  let cpHand = handsOpts[Math.floor(Math.random() * handsOpts.length)];

  // set computer image accordingly
  cpPick.src = handOptions[cpHand];

  return cpHand;
};

//randomely choose cp hand L2
const pickComputerHandL2 = () => {
  let handsOpts = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
  let cpHand = handsOpts[Math.floor(Math.random() * handsOpts.length)];

  // set computer image accordingly
  cpPick.src = handOptions[cpHand];

  return cpHand;  
};

// result - tie, win and lose;
const referee = (userHand, cpHand) => {

  if (userHand == cpHand) {
    setDecision("It's a tie!","none");
  }
  else if (handWins[userHand].includes(cpHand)){
    setDecision("You win this round!","your-score");
    SCORE=SCORE + 1
    setScore(SCORE,"scoreUser");

    //Display final pop-up - You win - Limit 3 rounds
    if(SCORE==3){
      gameOverPopUp.style.display = "block";
      youWinImg.style.display = "block";
    }

  }
  else {
    setDecision("Computer wins this round","computer-score");
    SCORECP=SCORECP + 1
    setScore(SCORECP,"scoreCP");

    //Display final pop-up - You lose - Limit 3 rounds
    if(SCORECP==3){
      gameOverPopUp.style.display = "block";
      youLoseImg.style.display = "block";
    }
  }
}

//function to restart game
const restartGame = () => {
  results.style = "results";
  hands.style="hands";
}

//Function to set the decision
const setDecision = (decision, style) => {
  document.querySelector(".score-results h1").innerText = decision;
}

//Function to set the score
const setScore = (newScore, id) => {
  document.getElementById(id).innerText = newScore;
}
// end -- play & score Functions