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

  if (!guess) {
    //document.querySelector('.message').textContent = 'No Number';
    classTextMod('message', 'No Number');
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Correct number';
    classTextMod('message', 'Correct number');
  } else if (guess > secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent = 'Too high';
      classTextMod('message', 'Too high');
      score--;
      //document.querySelector('.score').textContent = score;
      classTextMod('score', score);
    } else {
      //document.querySelector('.message').textContent = 'You lost the game';
      classTextMod('message', 'You lost the game');
      //document.querySelector('.score').textContent = 0;
      classTextMod('score', 0);
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent = 'Too low';
      classTextMod('message', 'Too low');
      score--;
      //document.querySelector('.score').textContent = score;
      classTextMod('score', score);
    } else {
      //document.querySelector('.message').textContent = 'You lost the game';
      classTextMod('message', 'You lost the game');
      //document.querySelector('.score').textContent = 0;
      classTextMod('score', 0);
    }
  }
}

document.querySelector('.check').addEventListener('click', checkBtnClick);
