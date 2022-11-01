const displayComp = document.getElementById("computer-choice")
const displayUser = document.getElementById("user-choice")
const displayResult = document.getElementById("result-area")
const possibleChoices = document.querySelectorAll("button")
let userChoice
let compChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    displayUser.innerHTML = userChoice
    computerChoice()
    playGame()
  }))

  function computerChoice(){
    const randomNumber = Math.floor(Math.random()* 5) + 1

    if(randomNumber === 1){
        compChoice = "rock"
    }
    if(randomNumber === 2){
        compChoice = "paper"
    }
    if(randomNumber === 3){
        compChoice = "scissors"
    }
    if(randomNumber === 4){
        compChoice = "lizard"
    }
    if(randomNumber === 5){
        compChoice = "spock"
    }
    displayComp.innerHTML = computerChoice
  }

  function olayGame(){
    if(compChoice === userChoice){
        result = "You chose the same!! Draw"
    }
    if (compChoice === "rock" && userChoice === "paper"){
        result = "WooHoo!!! You Won"
    }
    if (compChoice === "rock" && userChoice === "scissors"){
        result = "Awww You lost!"
    }
    if (compChoice === "rock" && userChoice === "lizard"){
        result = "Awww You lost!"
    }
    if (compChoice === "rock" && userChoice === "spock"){
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

    resultDisplay.innerHTML = resultArea
}