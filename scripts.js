let computerPlay = (result) => {
  let index = Math.floor(Math.random() * 3)
  switch (index) {
    case 0:
      result = "rock";
      break;
    case 1:
      result = "paper";
      break;
    case 2:
      result = "scissors";
      break;
  }
  return result;
};

let playRound = () => {
  userInput = prompt("Your play?", "rock");
  computerInput = computerPlay;
  function calcWinner() {
    switch (userInput) {
      case "rock":
        switch (computerInput) {
          case "rock":
            return "Equals";
          case "paper":
            return "You win";
          case "scissors":
            return "You lose";
        }
        break;
      case "paper":
        switch (computerInput) {
          case "paper":
            return "Equals";
          case "rock":
            return "You win";
          case "scissors":
            return "You lose";
        }
        break;
      case "scissors":
        switch (computerInput) {
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
}