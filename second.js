'use strict';
function createGame () {
  const sicretNumber = Math.floor(Math.random() * 100) + 1;
  console.log(sicretNumber)
  function playGame () {
    const userGuess = prompt('Угадай число от 1 до 100');

    if (userGuess === null) {
      alert('Игра окончена');
      return;
    }
      const guess = parseInt(userGuess, 10);

      if (isNaN(guess)) {
        alert('Введи число!');
      } else if (guess < sicretNumber) {
        alert('Загаданное число больше');
        playGame();
      } else if (guess > sicretNumber) {
        alert('Загаданное число меньше');
        playGame();
      } else {
        alert('Поздравляю, Вы угадали!!!');
      }
    
  }
  return playGame;

}
const play = createGame();
play();