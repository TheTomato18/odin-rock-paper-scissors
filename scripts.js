function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

let humanScore = 0;
let computerScore = 0;
let rounds = 5;

function getComputerChoice() {
    let computerChoice = getRandomIntInclusive(0, 2);
    return computerChoice === 0 ? "rock" : computerChoice === 1 ? "paper" : "scissors";
}

function getHumanChoice() {
    let humanChoice = (prompt("Enter your choice: ")).toLowerCase();
    return humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors" ? humanChoice : getHumanChoice();
}

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("Computer wins!");
        computerScore++;
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("Human wins!");
        humanScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("Computer wins!");
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("Human wins!");
        humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("Human wins!");
        humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("Computer wins!");
        computerScore++;
    } else {
        console.log("Error");
    }

    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);

    if (rounds > 1) {
        rounds--;
        return playRound(getHumanChoice(), getComputerChoice());
    } else {
        if (humanScore > computerScore) {
            return "Human wins the game!";
        } else if (humanScore < computerScore) {
            return "Computer wins the game!";
        } else {
            return "The game is a tie!";
        }
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice()));