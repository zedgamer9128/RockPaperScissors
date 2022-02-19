let playerScore = 0;
let computerScore = 0;
let retry = document.querySelector("#retry")
retry.addEventListener('click', function () {
    window.location.reload();
});
function computerPlay() {
    let randomMove = Math.floor(Math.random() * 100);
    if (randomMove > 66) {
        return 'rock';
    } else if (randomMove < 33) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

function playRound(playerSelection, computerSelection) {
        if (playerSelection == 'rock' && computerSelection == 'paper') {
            computerScore += 1
            return "You Lose! Paper beats Rock\n"
        } else if (playerSelection == 'paper' && computerSelection == 'scissor') {
            computerScore += 1
            return "You Lose! Scissor beats Paper\n"
        } else if (playerSelection == 'scissor' && computerSelection == 'rock') {
            computerScore += 1
            return "You Lose! Rock beats Scissor\n"
        } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
            playerScore += 1
            return "You Win! Rock beats Scissor\n"
        } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            playerScore += 1
            return "You Win! Paper Beats Scissor\n"
        } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
            playerScore += 1
            return "You Win! Rock beats Scissor\n"
        } else {
            return "It's a Draw\n"
        }
}

let playerMove = document.querySelectorAll('.playerMove');
playerMove.forEach(move => move.addEventListener('click', function () {
    let textarea = document.querySelector('#results');
    textarea.disabled = true;
    textarea.append(playRound(this.innerText.toLowerCase(), computerPlay()));
    textarea.scrollTop = textarea.scrollHeight;
    document.querySelector('#playerScore').textContent = playerScore;
    document.querySelector('#computerScore').textContent = computerScore;
    if (playerScore === 5) {
        document.querySelector('#results').append("Player Wins!");
        playerMove.forEach(move => move.disabled = true);
        retry.style.display = 'block'
    } else if (computerScore === 5) {
        document.querySelector('#results').append("Computer Wins!");
        playerMove.forEach(move => move.disabled = true);
        retry.style.display = 'block'
    }
}));
