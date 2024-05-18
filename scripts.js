document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));

function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const aiChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = determineWinner(playerChoice, aiChoice);
    displayResult(playerChoice, aiChoice, result);
}

function determineWinner(playerChoice, aiChoice) {
    if (playerChoice === aiChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && aiChoice === "scissors") ||
        (playerChoice === "paper" && aiChoice === "rock") ||
        (playerChoice === "scissors" && aiChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function displayResult(playerChoice, aiChoice, result) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
    You chose ${playerChoice} 
    and the AI chose ${aiChoice}\n
    <p>${result}</p>
    `;
}