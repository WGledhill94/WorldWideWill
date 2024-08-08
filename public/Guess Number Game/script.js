'use strict';
/*
// The below reads the line of a HTML Element
console.log(document.querySelector('.message').textContent);

// The below modifies the text of the HTML Element
document.querySelector('.message').textContent = 'Correct Number!';

console.log((document.querySelector('.number').textContent = 14));
console.log((document.querySelector('.score').textContent = 18));

document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value);
*/

//Guess My Number Game!

// State Variable as it's part of the application state which is the data that is relevant to the application
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// State Variable as it's part of the application state which is the data that is relevant to the application
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (value) {
  document.querySelector('.score').textContent = score;
};

const resetSecretNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 0) {
    // When there isn't an input
    if (!guess) {
      displayMessage('⛔ No Number!');
      // When player wins
    } else if (guess === secretNumber) {
      displayMessage('✅ Correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      // Setting Highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      // When guess is wrong
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '⬆️ To High!' : '⬇️ To Low!');
        document.querySelector('.guess').value = '';
        score--;
        displayScore(score);
      } else {
        displayMessage('💥 You Lost!');
        document.querySelector('.score').textContent = 0;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // Restoring secret number & score
  score = 20;
  displayScore(score);
  resetSecretNumber();
  document.querySelector('.number').value = secretNumber;
  // Restoring messaging and clearing input field
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  // Restoring background color & number box
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
