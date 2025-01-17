let secretNumber;
let attempts = 0;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('message').textContent = '';
    document.getElementById('attempts').textContent = 'Attempts: 0';
    document.getElementById('reset').style.display = 'none';
}

function checkGuess() {
    const userGuess = document.getElementById('guess').value;
    attempts++;

    if (userGuess == secretNumber) {
        document.getElementById('message').textContent = `Correct! The number was ${secretNumber}.`;
        document.getElementById('reset').style.display = 'block';
    } else if (userGuess < secretNumber) {
        document.getElementById('message').textContent = 'Too low! Try again.';
    } else {
        document.getElementById('message').textContent = 'Too high! Try again.';
    }

    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
}

function resetGame() {
    document.getElementById('guess').value = '';
    startGame();
}

// Initialize game
startGame();
