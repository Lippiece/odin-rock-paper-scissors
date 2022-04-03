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

}


let button = document.querySelector("button");
button.addEventListener("click", function (e) {
});
