'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

// for testing
document.querySelector('.number').textContent = secretNumber;
//

// Set score
let score = 20;

function classTextMod(className, text) {
  document.querySelector(`.${className}`).textContent = text;
}

function checkBtnClick() {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no number
  if (!guess) {
    classTextMod('message', 'No Number');

    // When the player win
  } else if (guess === secretNumber) {
    classTextMod('message', 'Correct number');
    // change body CSS style
    document.querySelector('body').style.backgroundColor = '#60b347';
    // change number color
    document.querySelector('.number').style.color = 'green';

    // When the guess is too high
  } else if (guess > secretNumber) {
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
}

document.querySelector('.check').addEventListener('click', checkBtnClick);
