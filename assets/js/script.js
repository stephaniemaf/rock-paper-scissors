var compPlay = document.getElementById("computer-choice")
var userPlay = document.getElementById("user-choice")
var resultDisp= document.getElementById("result")
var choices = document.querySelectorAll("button")
let playerChoice
let computerChoice
var result

choices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    userPlay.innerHTML = playerChoice
    compChoice()
    playGame()
  }))

  function compChoice(){
    var randNum = Math.floor(Math.random()* 5) + 1

    if(randNum === 1){
        computerChoice = "rock"
    }
    if(randNum === 2){
        computerChoice = "paper"
    }
    if(randNum === 3){
        computerChoice = "scissors"
    }
    if(randNum === 4){
        computerChoice = "lizard"
    }
    if(randNum === 5){
        computerChoice = "spock"
    }
    compPlay.innerHTML = computerChoice
  }

  function playGame(){
    if(computerChoice === playerChoice){
        result = "You chose the same!! Draw"
    }
    else if ( playerChoice === "paper"){
      if(computerChoice === "rock"){
        result = "WooHoo!!! You Won"}
    }
    else if (playerChoice === "scissors"){
      if(computerChoice === "rock")
        {result = "Awww You lost!"}
    }
    else if (playerChoice === "lizard"){
      if(computerChoice === "rock")
        {result = "Awww You lost!"}
    }
    else if (playerChoice === "spock"){
      if(computerChoice === "rock")
        {result = "WooHoo!!! You Won"}
    }
    else if (playerChoice === "scissors") {
      if(computerChoice === "paper")
        {result = "WooHoo!!! You Won"}
    }
    else if (playerChoice === "rock") {
      if(computerChoice === "paper")
        {result = "Awww You lost!"}
    }
    else if (playerChoice === "lizard") {
      if(computerChoice === "paper" )
        {result = "WooHoo!!! You Won"}
    }
    else if (playerChoice === "spock") {
      if(computerChoice === "paper")
        {result = "Awww You lost!"}
    }
    else if (playerChoice === "rock") {
      if(computerChoice === "scissors" )
        {result = "WooHoo!!! You Won"}
    }
    else if (playerChoice === "paper") {
      if(computerChoice === "scissors" )
        {result = "Aww! You lost"}
    }
    else if (playerChoice === "lizard") {
      if(computerChoice === "scissors")
        {result = "Aww! You lost"}
    }
    else if (playerChoice === "spock") {
      if(computerChoice === "scissors")
        {result = "WooHoo!!! You Won"}
    }
    else if (playerChoice === "rock") {
      if(computerChoice === "lizard")
        {result = "WooHoo!!! You Won"} 
    }
    else if (playerChoice === "scissors") {
      if(computerChoice === "lizard")
        {result = "WooHoo!!! You Won"}
    }
    else if (playerChoice === "paper") {
      if(computerChoice === "lizard")
        {result = "Aww! You lost"} 
    }
    else if (playerChoice === "spock") {
      if(computerChoice === "lizard")
        {result = "Aww! You lost"} 
    }
    else if (playerChoice === "rock") {
      if(computerChoice === "spock")
        {result = "Aww! You lost" }
    }
    else if (playerChoice === "scissors") {
      if(computerChoice === "spock")
        {result = "WooHoo!!! You Won"} 
    }
    else if (playerChoice === "paper") {
      if(computerChoice === "spock")
        {result = "WooHoo!!! You Won"} 
    }
    else if(playerChoice === "lizard") {
      if(computerChoice === "spock")
        result = "Aww! You lost"  
    }  

    resultDisp.innerHTML = result
}
