let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    const resultsDiv = document.querySelector("#results");
    const resultText = document.createElement("p");

    if (humanChoice === computerChoice) {
        resultText.textContent = `It's a tie! You both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultText.textContent = `You win this round! ${humanChoice} beats ${computerChoice}. Your score: ${humanScore}, Computer score: ${computerScore}`;
    } else {
        computerScore++;
        resultText.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}. Your score: ${humanScore}, Computer score: ${computerScore}`;
    }

    resultsDiv.appendChild(resultText);

    if (humanScore === 5 || computerScore === 5) {
        const finalResult = document.createElement("p");
        finalResult.textContent = humanScore === 5 ? "Congratulations! You won the game!" : "Game over! The computer won the game!";
        resultsDiv.appendChild(finalResult);

        // Disable all buttons after the game ends
        document.querySelectorAll(".btn").forEach(button => button.disabled = true);
    }
}

function playGame() {
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", () => {
            if (humanScore < 5 && computerScore < 5) {
                const humanChoice = button.value;
                const computerChoice = getComputerChoice();
                playRound(humanChoice, computerChoice);
            }
        });
    });
}

playGame();
