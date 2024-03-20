const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random()*3)] ;
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE !";
    }
    else {
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You Won" : "You Lose";
                break
            case "paper":
                result = (computerChoice === "rock") ? "You Won" : "You Lose";
                break
            case "scissors":
                result = (computerChoice === "paper") ? "You Won" : "You Lose";
                break
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER : ${computerChoice}`;
    resultDisplay.textContent = result ;
    
    
    switch(result) {
        case "You Won" :
            resultDisplay.classList.remove("redText"); // Remove red color class
            resultDisplay.classList.add("greenText"); // Add green color class
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You Lose" :
            resultDisplay.classList.remove("greenText"); // Remove green color class
            resultDisplay.classList.add("redText"); // Add red color class
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        default:
            resultDisplay.classList.remove("greenText", "redText"); // Remove both color classes if it's a tie
    }
}