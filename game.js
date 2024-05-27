function getComputerChoice() {
    let rockPaperScissor = Math.floor(Math.random() * 10);
    if (rockPaperScissor <= 2) {
        return "rock";
    } else if (rockPaperScissor > 2 && rockPaperScissor <= 5) {
        return "paper";
    } else {
        return "scissor";
    }
}

function getHumanChoice() {
    let answer = prompt("Choose your move");
    return answer.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    let result;

    if (humanChoice === computerChoice) {
        result = "draw";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        result = "win";
        humanScore++;
    } else {
        result = "lost";
        computerScore++;
    }

    return result;
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    console.log("Let's play a best-of-five round!");

    for (let round = 1; round <= 5; round++) {
    

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const roundResult = playRound(humanSelection, computerSelection);
        console.log("Human:", humanSelection);
        console.log("Computer:", computerSelection);
        console.log("Result:", roundResult);
        console.log("Human Score:", humanScore);
        console.log("Computer Score:", computerScore);
    }

    console.log("Final Scores:");
    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);

    if (humanScore > computerScore) {
        console.log("You win the best-of-five round!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the best-of-five round!");
    } else {
        console.log("It's a tie in the best-of-five round!");
    }
}

playGame();