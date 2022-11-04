//global variables, button queries and event listener for buttons
const compPlay = document.getElementById("computer-choice");
const userPlay = document.getElementById("user-choice");
const resultDisp= document.getElementById("result");
const choices = document.querySelectorAll("button");
var scorePlayer = document.getElementById("player-score");
var scoreComputer = document.getElementById("computer-score");
var scoreDraw = document.getElementById("draw-score");
let playerChoice;
let computerChoice;
let result;

choices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    userPlay.innerHTML = playerChoice;
    compChoice();
    playGame();
  }));

  //random number generator for computer guesses
  //switch statement for computer guesses
function compChoice(){
    const randNum = Math.floor(Math.random()* 5) + 1;
    switch(randNum){
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3: 
            computerChoice = "scissors";
            break;
        case 4:
            computerChoice = "lizard";
            break;
        case 5:
            computerChoice = "spock";
            break;
        default:
            computerChoice = "invalid";
    }
    compPlay.innerHTML = computerChoice;
  }
//switch statement for player choices and score tracker code 
function playGame(){
    if(computerChoice === playerChoice){
        result = "You chose the same!! Draw";
        scoreDraw.innerHTML = parseInt(scoreDraw.innerHTML)+1;
    }   else{
        switch(playerChoice){
            case "rock":
                if(computerChoice === "scissors" )
                {result = "WooHoo!!! You Won";
                scorePlayer.innerHTML = parseInt(scorePlayer.innerHTML)+1;}
                else if(computerChoice === "lizard")
                {result = "WooHoo!!! You Won";
                scorePlayer.innerHTML = parseInt(scorePlayer.innerHTML)+1;}
                else if(computerChoice === "paper")
                {result = "Aww! You lost"; 
                scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML)+1;}
                if(computerChoice === "spock")
                {result = "Aww! You lost";
                scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML)+1;}
                break;
            case "paper":
                if(computerChoice === "rock")
                {result = "WooHoo!!! You Won";
                scorePlayer.innerHTML = parseInt(scorePlayer.innerHTML)+1;}
                else if(computerChoice === "scissors" )
                {result = "Aww! You lost";
                scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML)+1;}
                else if(computerChoice === "lizard")
                {result = "Aww! You lost";
                scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML)+1;}
                else if(computerChoice === "spock")
                {result = "WooHoo!!! You Won";
                scorePlayer.innerHTML = parseInt(scorePlayer.innerHTML)+1;}
                break;
            case "scissors":
                if(computerChoice === "rock")
                {result = "Awww You lost!";
                scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML)+1;}
                else if(computerChoice === "paper")
                {result = "WooHoo!!! You Won";
                scorePlayer.innerHTML = parseInt(scorePlayer.innerHTML)+1;}
                else if(computerChoice === "lizard")
                {result = "WooHoo!!! You Won";
                scorePlayer.innerHTML = parseInt(scorePlayer.innerHTML)+1;}
                else if(computerChoice === "spock")
                {result = "Awww You lost!";
                scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML)+1;}
                break;
            case "lizard":
                if(computerChoice === "rock")
                {result = "Awww You lost!";
                scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML)+1;}
                else if(computerChoice === "paper" )
                {result = "WooHoo!!! You Won";
                scorePlayer.innerHTML = parseInt(scorePlayer.innerHTML)+1;}
                else if(computerChoice === "scissors")
                {result = "Aww! You lost";
                scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML)+1;}
                else if(computerChoice === "spock")
                {result = "Aww! You lost";
                scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML)+1;}
                break;
            case "spock":
                if(computerChoice === "rock")
                {result = "WooHoo!!! You Won";
                scorePlayer.innerHTML = parseInt(scorePlayer.innerHTML)+1;}
                else if(computerChoice === "paper")
                {result = "Awww You lost!";
                scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML)+1;}
                else if(computerChoice === "scissors")
                {result = "WooHoo!!! You Won";
                scorePlayer.innerHTML = parseInt(scorePlayer.innerHTML)+1;}
                else if(computerChoice === "lizard")
                {result = "Aww! You lost";
                scoreComputer.innerHTML = parseInt(scoreComputer.innerHTML)+1;}             
        }    
    } 
    resultDisp.innerHTML = result;
}
