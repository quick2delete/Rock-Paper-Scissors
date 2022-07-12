// create function that randomly returns rock, paper, scissors
function computerPlay() {
  // create random number 1, 2, 3
  const num = Math.floor(Math.random() * 3) + 1;

  // if statement to get the result
  if (num === 1) {
    return "rock";
  } else if (num === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Create variables for playRound function
// const playerSelection = prompt("Enter Your Choice: ").toLowerCase();
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  // Comparison
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      console.log("You Won! Rock beats scissors");
    } else if (computerSelection === "paper") {
      console.log("You Lose! Paper beats Rock");
    } else {
      console.log("No winner! Start Again!");
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      console.log("You Lose! Rock beats scissors");
    } else if (computerSelection === "paper") {
      console.log("You Won! Scissors beats paper");
    } else {
      console.log("No winner! Start Again!");
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      console.log("You Won! Paper beats Rock");
    } else if (computerSelection === "scissors") {
      console.log("You Lose! Scissors beats paper");
    } else {
      console.log("No winner! Start Again!");
    }
  }
  console.log(`Player: ${playerSelection},  Computer: ${computerSelection}`);
}

// Invoke playRound function
// playRound(playerSelection, computerSelection);

// game function

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter Your Choice: ").toLowerCase();
    playRound(playerSelection, computerPlay());
    // console.log(computerSelection);
  }
}

// Calling game function
console.log(game());
