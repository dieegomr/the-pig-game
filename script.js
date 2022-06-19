'use strict';

const currentScoreP0El = document.querySelector('#current--0');
const currentScoreP1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let currentScoreP0 = 0;
let currentScoreP1 = 0;

document.querySelector('.btn--roll').addEventListener('click', function () {
  let diceNumber = Number(Math.trunc(Math.random() * 6 + 1));
  document.querySelector('.dice').src = `dice-${diceNumber}.png`;
  if (diceNumber === 1) {
    if (player0El.classList.contains('player--active')) currentScoreP0 = 0;
    currentScoreP0El.textContent = currentScoreP0;
    if (player1El.classList.contains('player--active')) currentScoreP1 = 0;
    currentScoreP1El.textContent = currentScoreP1;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  } else {
    if (player0El.classList.contains('player--active'))
      currentScoreP0 += diceNumber;
    currentScoreP0El.textContent = currentScoreP0;
    if (player1El.classList.contains('player--active'))
      currentScoreP1 += diceNumber;
    currentScoreP1El.textContent = currentScoreP1;
  }
});
