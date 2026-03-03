let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let maxAttempts = 10;

function checkGuess() {

    let userGuess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");
    let attempts = document.getElementById("attempts");
    let history = document.getElementById("history");

    if (!userGuess) {
        message.textContent = "Please enter a valid number!";
        return;
    }

    guessCount++;
    history.textContent += userGuess + " ";

    if (userGuess === randomNumber) {
        message.textContent = "🎉 Correct! You won!";
        disableGame();
    }
    else if (guessCount >= maxAttempts) {
        message.textContent = "❌ Game Over! The number was " + randomNumber;
        disableGame();
    }
    else if (userGuess > randomNumber) {
        message.textContent = "Too high!";
    }
    else {
        message.textContent = "Too low!";
    }

    attempts.textContent = "Attempts: " + guessCount + " / " + maxAttempts;
}

function disableGame() {
    document.getElementById("guessInput").disabled = true;
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessCount = 0;

    document.getElementById("guessInput").disabled = false;
    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("history").textContent = "";
}