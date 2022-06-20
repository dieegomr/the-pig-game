'use strict';

const currentScoreP0El = document.querySelector('#current--0');
const currentScoreP1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const generalScore0El = document.querySelector('#score--0');
const generalScore1El = document.querySelector('#score--1');

let currentScoreP0 = 0;
let currentScoreP1 = 0;
let generalScoreP0 = 0;
let generalScoreP1 = 0;
document.querySelector('.dice').classList.add('hidden');

generalScore0El.textContent = generalScoreP0;
generalScore1El.textContent = generalScoreP1;

const changePlayers = function () {
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Roll Dice button
document.querySelector('.btn--roll').addEventListener('click', function () {
  if (
    player0El.classList.contains('player--winner') ||
    player1El.classList.contains('player--winner')
  ) {
    console.log('Does not work');
  } else {
    let diceNumber = Number(Math.trunc(Math.random() * 6 + 1));
    document.querySelector('.dice').classList.remove('hidden');
    document.querySelector('.dice').src = `dice-${diceNumber}.png`;
    // If 1
    if (diceNumber === 1) {
      // Player0 loose current score
      if (player0El.classList.contains('player--active')) currentScoreP0 = 0;
      currentScoreP0El.textContent = currentScoreP0;
      // Player1 loose current score
      if (player1El.classList.contains('player--active')) currentScoreP1 = 0;
      currentScoreP1El.textContent = currentScoreP1;
      // Change players
      changePlayers();
    } else {
      // Player0 adds dice to current score
      if (player0El.classList.contains('player--active'))
        currentScoreP0 += diceNumber;
      currentScoreP0El.textContent = currentScoreP0;
      // Player1 adds dice to current score
      if (player1El.classList.contains('player--active'))
        currentScoreP1 += diceNumber;
      currentScoreP1El.textContent = currentScoreP1;
    }
  }
});

// Hold button
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (
    player0El.classList.contains('player--winner') ||
    player1El.classList.contains('player--winner')
  ) {
    console.log('Does not work');
  } else {
    // Player0
    if (player0El.classList.contains('player--active')) {
      // generalScore0 receives currentScore0
      generalScoreP0 += currentScoreP0;
      generalScore0El.textContent = generalScoreP0;
      // current score > 100 ?
      if (generalScoreP0 >= 100) {
        player0El.classList.add('player--winner');
        document.querySelector('.dice').classList.add('hidden');
      } else {
        changePlayers();
        currentScoreP0 = 0;
        currentScoreP0El.textContent = currentScoreP0;
      }
    } else if (player1El.classList.contains('player--active')) {
      // General Score receives Current Score
      generalScoreP1 += currentScoreP1;
      generalScore1El.textContent = generalScoreP1;
      // current score > 100 ?
      if (generalScoreP1 >= 100) {
        player1El.classList.add('player--winner');
        document.querySelector('.dice').classList.add('hidden');
      } else {
        changePlayers();
        currentScoreP1 = 0;
        currentScoreP1El.textContent = currentScoreP1;
      }
    }
  }
});

// New Game button

document.querySelector('.btn--new').addEventListener('click', function () {
  currentScoreP0 = 0;
  currentScoreP1 = 0;
  generalScoreP0 = 0;
  generalScoreP1 = 0;
  generalScore0El.textContent = generalScoreP0;
  currentScoreP0El.textContent = currentScoreP0;
  generalScore1El.textContent = generalScoreP1;
  currentScoreP1El.textContent = currentScoreP1;
  player1El.classList.contains('player--active') && changePlayers();
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  document.querySelector('.dice').classList.add('hidden');
});
