let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 9);

function compareGuesses(userGuess, computerGuess, target) {
    let userDiff = Math.abs(userGuess - target);
    let computerDiff = Math.abs(computerGuess - target);
    if (userDiff == computerDiff || userDiff < computerDiff) {
        return true;
    } else {
        return false;
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

const advanceRound = () => { currentRoundNumber++; }
