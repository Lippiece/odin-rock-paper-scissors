let container = document.querySelector("div");

let paragraphs = document.querySelectorAll("p");
let compLog = paragraphs[0];
let playerLog = paragraphs[1];
let resultLog = paragraphs[2];

let buttons = document.querySelectorAll("button");
let compButton = buttons[0];
let playerButton = buttons[1];
let resultsButton = buttons[2];

let computerSelection;
let playerSelection;
let result;

function getCompSelection() {
	rand = Math.floor(Math.random() * 3);
	switch (rand) {
		case 0:
			return "rock";
			break;
		case 1:
			return "paper";
			break;
		case 2:
			return "scissors";
			break;
	}
}

function getPlayerSelection() {
	let output = prompt("Your choice?", "Rock");
	return output;
}

function calcResult(you, them) {
	you = you.toLowerCase();
	them = them.toLowerCase();
	switch (you) {
		case "rock":
			switch (them) {
				case "rock":
					return "Even.";
					break;
				case "paper":
					return `Their ${them} wins your ${you}. Fuck you.`;
					break;
				case "scissors":
					return `Your ${you} wins their ${them}. Fuck them.`;
					break;
			}
			break;
		case "paper":
			switch (them) {
				case "rock":
					return `Your ${you} wins their ${them}. Fuck them.`;
					break;
				case "paper":
					return "Even.";
					break;
				case "scissors":
					return `Their ${them} wins your ${you}. Fuck you.`;
					break;
			}
			break;
		case "scissors":
			switch (them) {
				case "rock":
					return `Their ${them} wins your ${you}. Fuck you.`;
					break;
				case "paper":
					return `Your ${you} wins their ${them}. Fuck them.`;
					break;
				case "scissors":
					return "Even.";
					break;
			}
			break;
		default:
			return "You can't play like that.";
	}
}

compButton.addEventListener("click", function (e) {
	computerSelection = getCompSelection();
	compLog.innerText = "Computer plays " + computerSelection + ".";
});

playerButton.addEventListener("click", function (e) {
	playerSelection = getPlayerSelection();
	playerLog.innerText = "You play " + playerSelection + ".";
});

let button = document.querySelector("button");
button.addEventListener("click", function (e) {
});
