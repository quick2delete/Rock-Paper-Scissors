const btns = document.querySelectorAll(".btn");
const container = document.querySelector("#container");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");

// Event handling with click
let data = { property: "Data" };

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
      return "You Win!";
    } else if (computerSelection === "paper") {
      return "You Lose!";
    } else {
      return "Tie!";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You Lose!";
    } else if (computerSelection === "paper") {
      return "You Win!";
    } else {
      return "Tie!";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You Win!";
    } else if (computerSelection === "scissors") {
      return "You Lose!";
    } else {
      return "Tie!";
    }
  }
}


let player = 0;
let computer = 0;
let count = 0;
function displayScore(e) {
  data.property = e.target.textContent.toLowerCase();
  result = playRound(data.property, computerSelection);
  console.log(data.property, result);

    if (result == "You Win!") {
      player = player + 1;
      playerScore.textContent = player;
    } else if (result == "You Lose!") {
      computer = computer + 1;
      computerScore.textContent = computer;
    }
    count += 1;


  console.log(player, computer);
}

function clickEvent(e) {
  //Reassign property value of data
  data.property = e.target.textContent.toLowerCase();
  //Execute function and assign to result variable
  result = playRound(data.property, computerSelection);
  //Create elements and add content on HTML
  console.log(result);

  const content = document.createElement("div");
  content.classList.add("content");
  content.textContent = result;
  container.appendChild(content);


}

btns.forEach((btn) => btn.addEventListener("click", clickEvent));
btns.forEach((btn) => btn.addEventListener("click", displayScore)); //This works and work with displayScore Function
