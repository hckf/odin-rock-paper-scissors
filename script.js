function plChoice() {
  let plChoice = prompt("Please enter either Rock, Paper or Scissors!");
  let proceed = true;
  let validChoices = ["rock", "paper", "scissors"];
  while (proceed) {
    if (typeof plChoice == "string") {
      plChoice = plChoice.trim();
      if (plChoice != "") {
        if (validChoices.includes(plChoice)) {
          proceed = false;
          return plChoice;
        }
      }
    }
    plChoice = prompt("Be sure to select either rock, paper or scissors!");
  }
}

function cpuChoice() {
  let computerChoice = ["rock", "paper", "scissors"];
  let randomCPUChoice =
    computerChoice[Math.floor(Math.random() * computerChoice.length)];
  //  console.log(`Here's a secret: the computer chose ${randomCPUChoice.toLowerCase()}`);
  return randomCPUChoice;
}

function game() {
  let gameRounds = 5;

  let playerChoice;
  let playerScore = 0;

  let computerChoice;
  let computerScore = 0;
  for (let i = 0; i <= gameRounds; i++) {
    playerChoice = plChoice();
    computerChoice = cpuChoice();
    if (computerChoice == "rock") {
      switch (playerChoice.toLowerCase()) {
        case "rock":
          console.log("Both players chose rock: a tie. Please try again!");
          i--;
          break;
        case "paper":
          console.log("The computer chose rock, you win!");
          playerScore++;
          break;
        case "scissors":
          console.log("The computer chose rock, you lose!");
          computerScore++;
          break;
      }
    } else if (computerChoice == "paper") {
      switch (playerChoice.toLowerCase()) {
        case "paper":
          console.log("Both players chose paper: a tie. Please try again!");
          i--;
          break;
        case "scissors":
          console.log("The computer chose paper, you win!");
          playerScore++;
          break;
        case "rock":
          console.log("The computer chose paper, you lose!");
          computerScore++;
          break;
      }
    } else if (computerChoice == "scissors") {
      switch (playerChoice.toLowerCase()) {
        case "scissors":
          console.log("Both players chose scissors: a tie. Please try again!");
          i--;
          break;
        case "rock":
          console.log("The computer chose scissors, you win!");
          playerScore++;
          break;
        case "paper":
          console.log("The computer chose scissors, you lose!");
          computerScore++;
          break;
      }
    }
    console.log(
      `Player Score: ${playerScore}  Computer Score: ${computerScore}`
    );
  }
  if (playerScore > computerScore) {
    alert("You win!");
  } else if (computerScore > playerScore) {
    alert("You lose!");
  } else {
    alert("It's a tie!");
  }
}
if (confirm("Do you want to play Rock Paper Scissors?")) {
  game();
} else {
  alert("Perhaps another time?");
}
