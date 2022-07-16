const btns = document.querySelectorAll(".btn");

const container = document.querySelector("#container");
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
      return "You Won! Rock beats scissors";
    } else if (computerSelection === "paper") {
      return "You Lose! Paper beats Rock";
    } else {
      return "No winner! Start Again!";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You Lose! Rock beats scissors";
    } else if (computerSelection === "paper") {
      return "You Won! Scissors beats paper";
    } else {
      return "No winner! Start Again!";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You Won! Paper beats Rock";
    } else if (computerSelection === "scissors") {
      return "You Lose! Scissors beats paper";
    } else {
      return "No winner! Start Again!";
    }
  }
}

// Event handling with click
let data = { property: "Data" };

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    //Reassign property value of data
    data.property = e.target.textContent.toLowerCase();
    //Execute function and assign to result variable
    const result = playRound(data.property, computerSelection);
    //Create elements and add content on HTML
    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = result;
    container.appendChild(content);
  });
});
