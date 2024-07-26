// ROCK PAPER SCISSORS
 
const options =["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const compDisplay = document.getElementById("compDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){

    const compChoice = options[ Math.floor(Math.random() * 3)]
    let result = "";
    
    if(playerChoice === compChoice){
        result = "IT'S A TIE !!"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (compChoice === "scissors") ? "YOU WIN!!" : "YOU LOSE!!";
                break;
            case "paper":
                result = (compChoice === "rock") ? "YOU WIN!!" : "YOU LOSE!!";
                break;
            case "scissors":
                result = (compChoice === "paper") ? "YOU WIN!!" : "YOU LOSE!!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    compDisplay.textContent = `COMPUTER: ${compChoice}`;
    resultDisplay.textContent = result ;

    resultDisplay.classList.remove("greenText" ,"redText");

    switch(result){
        case "YOU WIN!!" :
            resultDisplay.classList.add("greenText");
            break;
        case "YOU LOSE!!" :
            resultDisplay.classList.add("redText");
            break;
    }


}
