let computerPlay = (result) => {
  let index = Math.floor(Math.random() * 3)
  switch (index) {
    case 0:
      result = "Rock";
      break;
    case 1:
      result = "Paper";
      break;
    case 2:
      result = "Scissors";
      break;
  }
  return result;
};

let getRoundInput = () => {
  return prompt("Your play?", "rock");
};

function calcRoundResults() {
  playerSelection = getRoundInput();
  computerSelection = computerPlay();
  console.log("Comp says: " + computerSelection);
  switch (playerSelection.toLowerCase()) { // something wrong with toLowerCase()!
    case "rock":
      switch (computerSelection.toLowerCase()) {
        case "rock":
          return "Equals";
        case "paper":
          return "You lose";
        case "scissors":
          return "You win";
      }
      break;
    case "paper":
      switch (computerSelection.toLowerCase()) {
        case "paper":
          return "Equals";
        case "rock":
          return "You win";
        case "scissors":
          return "You lose";
      }
      break;
    case "scissors":
      switch (computerSelection.toLowerCase()) {
        case "scissors":
          return "Equals";
        case "paper":
          return "You win";
        case "rock":
          return "You lose";
      }
      break;
  }
}