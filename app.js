const btns = document.querySelectorAll(".btn");
const container = document.querySelector("#container");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const btnStartOver = document.querySelector(".btn-startover");
const message = document.querySelector(".message");
const content = document.querySelector(".content");

// Variables Declared
let data = { property: "Data" };
let player = 0;
let computer = 0;
const computerSelection = computerPlay();

//Functions

// Funtions for random return of RPS
function computerPlay() {
  // create random number 1, 2, 3
  const num = Math.floor(Math.random() * 3) + 1;
  // if statement to get the result
  if (num === 1) {
    return "Rock";
  } else if (num === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Function for comparison
function playRound(playerSelection, computerSelection) {
  // Comparison
  if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      return "You Win!";
    } else if (computerSelection === "Paper") {
      return "You Lose!";
    } else {
      return "Tie!";
    }
  }
  if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      return "You Lose!";
    } else if (computerSelection === "Paper") {
      return "You Win!";
    } else {
      return "Tie!";
    }
  }
  if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      return "You Win!";
    } else if (computerSelection === "Scissors") {
      return "You Lose!";
    } else {
      return "Tie!";
    }
  }
}

// Function for displaying individual play
function clickEvent(e) {
  data.property = e.target.dataset.key;
  result = playRound(data.property, computerSelection);

  content.classList.add("content");
  content.textContent = result;
}

//Function for displaying final result
function displayScore(e) {
  console.log(e, e.target.dataset.key);
  // data.property = e.target.textContent.toLowerCase();
  data.property = e.target.dataset.key;

  // result = playRound(data.property, computerSelection);
  result = playRound(data.property, computerSelection);
  if (player < 5 && computer < 5) {
    if (result == "You Win!") {
      player = player + 1;
      playerScore.textContent = player;
    } else if (result == "You Lose!") {
      computer = computer + 1;
      computerScore.textContent = computer;
    }
    if (player === 5) {
      message.textContent = `Game Over!`;
      content.textContent = `Winner`;
    } else if (computer === 5) {
      message.textContent = `Game Over!`;
      content.textContent = `Loser`;
    }
  }
}

// Functions for start-over
function startOver() {
  playerScore.textContent = "0";
  computerScore.textContent = "0";
  message.textContent = "";
  content.textContent = "";
  player = 0;
  computer = 0;
}

// Eventhandlers
btns.forEach((btn) => btn.addEventListener("click", clickEvent));
btns.forEach((btn) => btn.addEventListener("click", displayScore));
btnStartOver.addEventListener("click", startOver);
