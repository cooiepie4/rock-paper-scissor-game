function getComputerChoice() {
    let rockPaperScissor = Math.floor(Math.random() * 10);
    if (rockPaperScissor <= 2) {
        return "rock";
    } else if (rockPaperScissor > 2 && rockPaperScissor <= 5) {
        return "paper";
    } else {
        return "scissor";
    }
};

const button1 = document.getElementById("rock");
const button2 = document.getElementById("paper");
const button3 = document.getElementById("scissor");
const human = document.getElementById("HumanScore");
const computer = document.getElementById("ComputerScore");
const winner = document.getElementById("Winner");



let humanScore = 0;
let computerScore = 0; 


function playRoundRock(computerChoice) {
    let result;

    if (button1.id === computerChoice) {
        result = "draw";
    } else if (computerChoice === "scissor") {
        humanScore++;
    } else {
        computerScore++;
    }

    human.innerText = `Human Score: ${humanScore}`;
    computer.innerText = `Computer Score: ${computerScore}`;
    Winner()

};

function playRoundPaper(computerChoice) {
    let result;

    if (button2.id === computerChoice) {
        result = "draw";
    } else if (computerChoice === "rock") {
        humanScore++;
    } else {
        computerScore++;
    }

    human.innerText = `Human Score: ${humanScore}`;
    computer.innerText = `Computer Score: ${computerScore}`;
    Winner()

};

function playRoundScissor(computerChoice) {
    let result;

    if (button3.id === computerChoice) {
        result = "draw";
    } else if (computerChoice === "paper") {
        humanScore++;
    } else {
        computerScore++;
    }

    human.innerText = `Human Score: ${humanScore}`;
    computer.innerText = `Computer Score: ${computerScore}`;
    Winner();};

    button1.addEventListener("click", function() {
        const computerChoice = getComputerChoice();
        playRoundRock(computerChoice);
    });
    
    button2.addEventListener("click", function() {
        const computerChoice = getComputerChoice();
        playRoundPaper(computerChoice);
    });
    
    button3.addEventListener("click", function() {
        const computerChoice = getComputerChoice();
        playRoundScissor(computerChoice);
    });

function Winner(){
    if (humanScore>=5){
        human.innerText = `Human Score: 5`;
        winner.innerText = "You won"
    } else if (computerScore>=5){
        computer.innerText = `Computer Score: 5`;
        winner.innerText = "Computer won"
    }
};

Winner()



