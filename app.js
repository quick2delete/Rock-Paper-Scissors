const btns = document.querySelectorAll(".btn");
const container = document.querySelector("#container");

// Event handling with click
let data = { property: "Data" };
const rpsArray = ["rock", "paper", "scissors"];
// create function that randomly returns rock, paper, scissors by computer
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
const computerSelection = computerPlay();

// Function for comparison
function playRound(playerSelection, computerSelection) {
  // Comparison
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "You Won! ";
    } else if (computerSelection === "paper") {
      return "You Lose! ";
    } else {
      return "Tie! ";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You Lose!";
    } else if (computerSelection === "paper") {
      return "You Won! ";
    } else {
      return "Tie! ";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You Won! ";
    } else if (computerSelection === "scissors") {
      return "You Lose! ";
    } else {
      return "Tie!";
    }
  }
}

let result = playRound();
let playerScore = 0;
let compuerScore = 0;
// Function for summing results
function displayScore(result) {
  for (let i = 1; i <= 3;i++)
{ if (result ==="You Won") {
  playerScore +=1;
}
}

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    //Reassign property value of data
    data.property = e.target.textContent.toLowerCase();
    //Execute function and assign to result variable
    result = playRound(data.property, computerSelection);
    //Create elements and add content on HTML
    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = result;
    container.appendChild(content);
  });
});
