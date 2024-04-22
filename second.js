'use strict';
function gameBot() {
  let sicretNumber = Math.floor(Math.random() * 100) + 1;
  console.log(sicretNumber);
  let attempts = 5;

    function playGame(){
      let userGuess = prompt(`Угадай число от 1 до 100 . Осталось ${attempts} попыток`);
    
    if (userGuess === null) {
      alert('Игра окончена');
      return;
    }

    userGuess = Number(userGuess);

    if (isNaN(userGuess)) {
      alert('Введи число!');
    } else if (userGuess > sicretNumber) {
      alert('Загаданное число меньше');
    } else if (userGuess < sicretNumber) {
      alert('Загаданное число больше');
    } else {
      if (confirm("Поздравляю, Вы угадали!!! Хотите сыграть еще?")) {
        gameBot();
        return;
      } else {
        alert("Игра окончена.");
        return;
      }
    }

   
    attempts--;

    if (attempts === 0) {
      if(confirm("Попытки закончились, хотите сыграть еще?")) {
        gameBot();
        return;
      } else {
        alert('"Игра окончена."');
        return;
      }
    }
    playGame();
}
playGame();
}

gameBot();