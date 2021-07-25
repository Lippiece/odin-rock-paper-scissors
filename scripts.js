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
  switch (toLowerCase(playerSelection)) {
    case "rock":
      switch (toLowerCase(computerSelection)) {
        case "rock":
          return "Equals";
        case "paper":
          return "You lose";
        case "scissors":
          return "You win";
      }
      break;
    case "paper":
      switch (toLowerCase(computerSelection)) {
        case "paper":
          return "Equals";
        case "rock":
          return "You win";
        case "scissors":
          return "You lose";
      }
      break;
    case "scissors":
      switch (toLowerCase(computerSelection)) {
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