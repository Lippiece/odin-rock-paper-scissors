let score;
let div = document.querySelector("div");
let para = document.createElement("p");

let computerPlay = result => {
	let index = Math.floor(Math.random() * 3);
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
	return prompt("Your play?", "Rock");
};

function calcRoundResults() {
	playerSelection = getRoundInput();
	computerSelection = computerPlay();
	console.log("Comp says: " + computerSelection);
	switch (playerSelection.toLowerCase()) {
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
let calcScore = () => {
	score = 0;
	para = document.createElement("p");
	div.appendChild(para);
	for (let i = 0; i < 5; i++) {
		text = `This is round ${i}.`;
		div.appendChild(para);
		switch (calcRoundResults()) {
			case "You win":
				text = "Round won.";
				div.appendChild(para);
				score += 1;
				break;
			case "You lose":
				text = "Round lost.";
				div.appendChild(para);
				score -= 1;
				break;
		}
	}
	return score;
};
let showResults = () => {
	para = document.createElement("p");
	div.appendChild(para);

	if (score > 0) {
		text = `Your score is ${score}. You've won the series.`;
		para.textContent = text;
	} else if (score < 0) {
		text = `Your score is ${score}. You've lost the series.`;
		para.textContent = text;
	} else {
		text = `Your score is ${score}. There's no winner.`;
		para.textContent = text;
	}
};
let game = () => {
	calcScore();
	showResults();
};

let button = document.querySelector("button");
button.addEventListener("click", function (e) {
	game();
});
