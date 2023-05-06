'use strict';

const botNum = Math.round(Math.random()  * 99) + 1;


let userNum = prompt(`Добро пожаловать в игру 'Угадай число'. \nЯ загадываю число от 1 до 100, а ты угадываешь.
                        \nКоличество попыток не оганичено. \nДля выхода нажми 'отмена/cancel'.  \n\nВведи число: `);

                        
if (!(userNum === null)) {
  while (!(userNum === null)) {
    if (+ userNum === botNum) {
      alert(`Правильно!`);
      break;
    }

    if (userNum < botNum) {
      userNum = prompt(`Больше! Введи новый вариант:`);
    }

    if (userNum > botNum) {
      userNum = prompt(`Меньше! Введи новый вариант:`);
    }

    if (!(Number.isFinite(+ userNum)) || userNum === '') {
      userNum = prompt('Введи число!');
    }
  }
} 


alert('Жаль, что игра закончена, приходи ещё!');
