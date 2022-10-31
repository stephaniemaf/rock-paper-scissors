//wait for the dom to finish loading before running the game
//get the button elements and add the listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button")

    for(let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type")==="submit"){
                checkAnswer();
            }
            else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

})