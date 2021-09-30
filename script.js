const buttonRock = document.querySelector("#button-rock");
const buttonPaper = document.querySelector("#button-paper");
const buttonScissors = document.querySelector("#button-scissors");

let gameScore = document.querySelector("#score");
gameScore.textContent = "Player Score: 0  Computer Score: 0";
let gameState = document.querySelector("#game-state");
gameState.textContent = "Make your move!";

let playerScore = 0;
let computerScore = 0;

buttonRock.addEventListener("click", () => game("rock", cpuChoice()));
buttonPaper.addEventListener("click", () => game("paper", cpuChoice()));
buttonScissors.addEventListener("click", () => game("scissors", cpuChoice()));

// Provides the computer with a random choice of either rock, paper or scissors
function cpuChoice() {
  let computerChoice = ["rock", "paper", "scissors"];
  let randomCPUChoice =
    computerChoice[Math.floor(Math.random() * computerChoice.length)];
  //  console.log(`Here's a secret: the computer chose ${randomCPUChoice.toLowerCase()}`);
  return randomCPUChoice;
}

// Main game - sets player/CPU choice and scores, and the number of rounds ('best of' x) to be played

function game(playerChoice, computerChoice) {
  // If the computer chose rock
  if (computerChoice == "rock") {
    switch (playerChoice.toLowerCase()) {
      case "rock":
        gameState.textContent = "Both players chose rock: a tie!";
        break;
      case "paper":
        gameState.textContent = "The computer chose rock, you win!";
        playerScore++;
        break;
      case "scissors":
        gameState.textContent = "The computer chose rock, you lose!";
        computerScore++;
        break;
    }
    // If the computer chose paper
  } else if (computerChoice == "paper") {
    switch (playerChoice.toLowerCase()) {
      case "paper":
        gameState.textContent = "Both players chose paper: a tie!";
        break;
      case "scissors":
        gameState.textContent = "The computer chose paper, you win!";
        playerScore++;
        break;
      case "rock":
        gameState.textContent = "The computer chose paper, you lose!";
        computerScore++;
        break;
    }
    // If the computer chose scissors
  } else if (computerChoice == "scissors") {
    switch (playerChoice.toLowerCase()) {
      case "scissors":
        gameState.textContent = "Both players chose scissors: a tie!";
        break;
      case "rock":
        gameState.textContent = "The computer chose scissors, you win!";
        playerScore++;
        break;
      case "paper":
        gameState.textContent = "The computer chose scissors, you lose!";
        computerScore++;
        break;
    }
  }
  // Log scores at the end of each round
  gameScore.textContent = `Player Score: ${playerScore}  Computer Score: ${computerScore}`;
  // At the end of x rounds, check who has the higher score
  if (playerScore == 5) {
    gameState.textContent = "You win!";
  } else if (computerScore == 5) {
    gameState.textContent = "You lose!";
  }
}
