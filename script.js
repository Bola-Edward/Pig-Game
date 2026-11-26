'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
diceEl.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function() {

    // 1. generating random dice roll
    const diceNum = Math.trunc(Math.random() * 6) + 1;

    // 2. display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNum}.png`;

    // 3. check for rolled 1 : if true, switch to next player
    if(diceNum !== 1) {
        // Add dice to the current score
        currentScore += diceNum;
        currentScore0El.textContent = currentScore;  // we will change it later to the active player
    }
    else {
        // switch to next player
    }
});