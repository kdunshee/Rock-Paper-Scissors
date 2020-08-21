

document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick  = playPaper;
document.getElementById('scissors').onclick = playScissors;


function playRock() {
  play('rock');
}
function playPaper() {
  play('paper');
}

function playScissors() {
  play('scissors');
}

function play(humanChoice) {
  let computerChoice = getComputerChoice();
  if (humanChoice === 'rock') {
    if (computerChoice === 'rock') {
      document.getElementById('result').innerHTML = 'YOU TIED';
    }
    else if (computerChoice === 'scissors') {
      document.getElementById('result').innerHTML = 'YOU WIN, CONGRATULATIONS!';
      humanScore = humanScore + 1;
    }
    else {
      document.getElementById('result').innerHTML = 'YOU LOSE, TRY AGAIN';
      computerScore = computerScore + 1;
    }
  }
  else if (humanChoice === 'paper') {
    if (computerChoice === 'paper') {
      document.getElementById('result').innerHTML = 'YOU TIED';
    }
    else if (computerChoice === 'rock') {
      document.getElementById('result').innerHTML = 'YOU WIN, CONGRATULATIONS!';
      humanScore = humanScore + 1;
    }
    else {
      document.getElementById('result').innerHTML = 'YOU LOSE, TRY AGAIN';
      computerScore = computerScore + 1;
    }
  }
  else if (humanChoice === 'scissors') {
    if (computerChoice === 'scissors') {
      document.getElementById('result').innerHTML = 'YOU TIED'; 
    }
    else if (computerChoice === 'paper') {
      document.getElementById('result').innerHTML = 'YOU WIN, CONGRATULATIONS!'; 
    }
    else {
      document.getElementById('result').innerHTML = 'YOU LOSE, TRY AGAIN';
    } 
  } 
}


function getComputerChoice() {
  let plays = ['rock', 'paper', 'scissors'];
  let choice = plays[Math.floor(Math.random() * plays.length)];
  return choice;
}