'use strict';

function createGame () {
  const sicretNumber = Math.floor(Math.random() * 100) + 1;
  console.log(sicretNumber);

  function playGame () {
    const userGuess = prompt('Guess the number from 1 to 100');

    if (userGuess === null) {
      alert('Game over!');
      return;
    }
    const guess = parseInt(userGuess, 10);

    if (isNaN(guess)) {
      alert(' Enter the number!');
    } else if (guess < sicretNumber) {
      alert('The hidden number is greater');
        playGame();
    } else if (guess > sicretNumber) {
      alert('The hidden number is less');
        playGame();
    } else {
      alert('Congratulations, you guessed it!!!')
    }

  }
  return playGame;
}


 const game = createGame();
 game();

