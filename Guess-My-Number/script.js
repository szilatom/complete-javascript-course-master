'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Set score
let score = 20;
// Set highscore
let highscore = 0;

function classTextMod(className, text) {
  document.querySelector(`.${className}`).textContent = text;
}

function againBtnClick() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  classTextMod('message', 'Start guessing...');
  classTextMod('score', score);
  classTextMod('number', '?');
  document.querySelector('.guess').value = '';
  // change body CSS style
  document.querySelector('body').style.backgroundColor = '#222';
  // change number color
  document.querySelector('.number').style.color = '#333';
}

function checkBtnClick() {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no number
  if (!guess) {
    classTextMod('message', 'No Number');

    // When the player win
  } else if (guess === secretNumber) {
    classTextMod('message', 'Correct number');
    // write the secretNumber
    document.querySelector('.number').textContent = secretNumber;
    // change body CSS style
    document.querySelector('body').style.backgroundColor = '#60b347';
    // change number color
    document.querySelector('.number').style.color = 'green';
    // check highscore
    if (score > highscore) {
      highscore = score;
      classTextMod('highscore', highscore);
    }

    // When the guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      let text = guess > secretNumber ? 'Too high' : 'Too low';
      classTextMod('message', text);
      score--;
      classTextMod('score', score);
    } else {
      classTextMod('message', 'You lost the game');
      classTextMod('score', 0);
    }
  }
}
/*else if (guess > secretNumber) {
    if (score > 1) {
      classTextMod('message', 'Too high');
      score--;
      classTextMod('score', score);
    } else {
      classTextMod('message', 'You lost the game');
      classTextMod('score', 0);
    }

    // When the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      classTextMod('message', 'Too low');
      score--;
      classTextMod('score', score);
    } else {
      classTextMod('message', 'You lost the game');
      classTextMod('score', 0);
    }
  }
}*/

document.querySelector('.check').addEventListener('click', checkBtnClick);
document.querySelector('.again').addEventListener('click', againBtnClick);
