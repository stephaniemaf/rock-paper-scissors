const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const displayResult = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    compChoice()
    playGame()
  }))

  function compChoice(){
    const randomNumber = Math.floor(Math.random()* 5) + 1

    if(randomNumber === 1){
        computerChoice = "rock"
    }
    if(randomNumber === 2){
        computerChoice = "paper"
    }
    if(randomNumber === 3){
        computerChoice = "scissors"
    }
    if(randomNumber === 4){
        computerChoice = "lizard"
    }
    if(randomNumber === 5){
        computerChoice = "spock"
    }
    computerChoiceDisplay.innerHTML = computerChoice
  }

  function playGame(){
    if(computerChoice === userChoice){
        result = "You chose the same!! Draw"
    }
    if (computerChoice === "rock" && userChoice === "paper"){
        result = "WooHoo!!! You Won"
    }
    if (computerChoice === "rock" && userChoice === "scissors"){
        result = "Awww You lost!"
    }
    if (computerChoice === "rock" && userChoice === "lizard"){
        result = "Awww You lost!"
    }
    if (computerChoice === "rock" && userChoice === "spock"){
        result = "WooHoo!!! You Won"
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
        result = "WooHoo!!! You Won"
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        result = "Awww You lost!"
    }
    if (computerChoice === "paper" && userChoice === "lizard") {
        result = "WooHoo!!! You Won"
    }
    if (computerChoice === "paper" && userChoice === "spock") {
        result = "Awww You lost!"
    }
    if (computerChoice === "scissors" && userChoice === "rock") {
        result = "WooHoo!!! You Won"
    }
    if (computerChoice === "scissors" && userChoice === "paper") {
        result = "Aww! You lost"
    }
    if (computerChoice === "scissors" && userChoice === "lizard") {
        result = "Aww! You lost"
    }
    if (computerChoice === "scissors" && userChoice === "spock") {
        result = "WooHoo!!! You Won"
    }
    if (computerChoice === "lizard" && userChoice === "rock") {
        result = "WooHoo!!! You Won" 
    }
    if (computerChoice === "lizard" && userChoice === "scissors") {
        result = "WooHoo!!! You Won"
    }
    if (computerChoice === "lizard" && userChoice === "paper") {
        result = "Aww! You lost" 
    }
    if (computerChoice === "lizard" && userChoice === "spock") {
        result = "Aww! You lost" 
    }
    if (computerChoice === "spock" && userChoice === "rock") {
        result = "Aww! You lost" 
    }
    if (computerChoice === "spock" && userChoice === "scissors") {
        result = "WooHoo!!! You Won" 
    }
    if (computerChoice === "spock" && userChoice === "paper") {
        result = "WooHoo!!! You Won" 
    }
    if (computerChoice === "spock" && userChoice === "lizard") {
        result = "Aww! You lost"  
    }  

    displayResult.innerHTML = result
}