let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let randomMove = Math.floor(Math.random() * 100);
    if (randomMove > 66) {
        return 'rock';
    }else if (randomMove < 33){
        return 'paper';
    }else {
        return 'scissor';
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore += 1 
        return "You Lose! Paper beats Rock"
    }else if (playerSelection == 'paper' && computerSelection == 'scissor'){
        computerScore += 1 
        return "You Lose! Scissor beats Paper"
    }else if (playerSelection == 'scissor' && computerSelection == 'rock'){
        computerScore += 1 
        return "You Lose! Rock beats Scissor"
    }else if (playerSelection == 'rock' && computerSelection == 'scissor'){
        playerScore += 1 
        return "You Win! Rock beats Scissor"
    }else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore += 1
        return "You Win! Paper Beats Scissor"
    }else if (playerSelection == 'rock' && computerSelection == 'scissor'){
        playerScore += 1
        return "You Win! Rock beats Scissor"
    }else {
        return "It's a Draw"
    }
}

function game() {
    let playerMove = prompt("Enter Your Move");
    playerMove = playerMove.toString().toLowerCase();

    console.log(playRound(playerMove, computerPlay()))
    console.log(playRound(playerMove, computerPlay()))
    console.log(playRound(playerMove, computerPlay()))
    console.log(playRound(playerMove, computerPlay()))
    console.log(playRound(playerMove, computerPlay()))
     
    console.log(`Your Score = ${playerScore}`)
    console.log(`Computers Score = ${computerScore}`)

    if (playerScore > computerScore){
        return 'You Win The Game';
    }else if (playerScore < computerScore){
        return 'You Lose The Game';
    }else {
        return "The game is a Draw";
    }
}
