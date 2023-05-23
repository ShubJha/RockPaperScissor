var playerScore = 0;
var computerScore = 0;
var maxScore = 5;
var turnResults = [];

function startGame() {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('game-screen').style.display = 'block';
}

function playGame(playerMove) {
  var moves = ['rock', 'paper', 'scissors'];
  var computerMove = moves[Math.floor(Math.random() * moves.length)];

  var resultText = document.getElementById('result-text');
  var playerScoreText = document.getElementById('player-score');
  var computerScoreText = document.getElementById('computer-score');
  var turnList = document.getElementById('turn-list');

  var playerMoveText = capitalizeFirstLetter(playerMove);
  var computerMoveText = capitalizeFirstLetter(computerMove);

  var turnResultText = '';

  if (document.getElementById('game-screen').style.display === 'block') {
    turnResultText = "You picked " + playerMoveText + ". The computer picked " + computerMoveText + ". ";

    if (playerMove === computerMove) {
      resultText.innerText = turnResultText + "It's a tie!";
    } else if (
      (playerMove === 'rock' && computerMove === 'scissors') ||
      (playerMove === 'paper' && computerMove === 'rock') ||
      (playerMove === 'scissors' && computerMove === 'paper')
    ) {
      resultText.innerText = turnResultText + "You win!";
      playerScore++;
    } else {
      resultText.innerText = turnResultText + "You lose!";
      computerScore++;
    }

    turnResults.push(turnResultText);
    var turnResultItem = document.createElement('li');
    turnResultItem.innerText = turnResultText;
    turnList.appendChild(turnResultItem);

    playerScoreText.innerText = "Player: " + playerScore;
    computerScoreText.innerText = "Computer: " + computerScore;

    if (playerScore === maxScore) {
      resultText.innerText = " You win the game!";
      endGame();
    } else if (computerScore === maxScore) {
      resultText.innerText = " Computer wins the game!";
      endGame();
    }
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  turnResults = [];

  document.getElementById('result-screen').style.display = 'none';
  document.getElementById('game-screen').style.display = 'block';

  var playerScoreText = document.getElementById('player-score');
  var computerScoreText = document.getElementById('computer-score');
  var turnList = document.getElementById('turn-list');

  playerScoreText.innerText = "Player: " + playerScore;
  computerScoreText.innerText = "Computer: " + computerScore;
  turnList.innerHTML = "";
}

function endGame() {
  document.getElementById('game-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'block';
  var resultText = document.getElementById('result-text');
  resultText.innerText = resultText.innerText.split(' You picked')[0];
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
