'use strict';
/*
document.querySelector('.message').textContent = 'Correct number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

function checkBtnClick() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }
}

document.querySelector('.check').addEventListener('click', checkBtnClick);
