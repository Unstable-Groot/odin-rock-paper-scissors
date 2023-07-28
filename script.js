function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);

    if (rand == 0) {
        return "rock";
    }
    else if (rand == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "You Lose! Paper covers Rock";
        }
        else if (computerSelection == "scissors") {
            return "You Win! Rock beat scissors";
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return "You Lose! Scissors cuts Paper";
        }
        else if (computerSelection == "rock") {
            return "You Win! Paper covers Rock";
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "You Lose! Rock beat scissors";
        }
        else if (computerSelection == "paper") {
            return "You Win! Scissors cuts Paper";
        }
    }
    else {
        return "Not an option";
    }

    return "Tie! No one wins.";
}

function runGame() {
    const gameResult = playRound(this.id);
    const domElement = document.querySelector("#result");
    domElement.textContent = gameResult;
    return;
}

//button setup
const buttons = document.querySelectorAll(".btn-container button");
buttons.forEach(function (e) {
    e.addEventListener("click", runGame); 
});
