function gameBot() {
  let secretNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 10;

  function playGame() {
      let userGuess = prompt(`Угадай число от 1 до 100. Осталось попыток: ${attempts}`);

      if (userGuess === null) {
          alert("Игра окончена.");
          return;
      }

      userGuess = Number(userGuess);

      if (isNaN(userGuess)) {
          alert("Введи число!");
      } else {
          if (userGuess > secretNumber) {
              alert("Загаданное число меньше.");
          } else if (userGuess < secretNumber) {
              alert("Загаданное число больше.");
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
              if (confirm("Попытки закончились, хотите сыграть еще?")) {
                  gameBot();
                  return;
              } else {
                  alert("Игра окончена.");
                  return;
              }
          }

          playGame();
      }
  }

  playGame();
}

gameBot();