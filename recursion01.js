'use strict';

const botNum = Math.round(Math.random() * 99) + 1;


const userNum = prompt(`Добро пожаловать в игру 'Угадай число'. 
                      \nЯ загадываю число от 1 до 100, а ты угадываешь.
                      \nКоличество попыток не ограничено. 
                      \nДля выхода нажми 'отмена/cancel'.  \n\nВведи число: `);

const gessNum = (userNum, botNum) => {
  if (userNum === null) {
    alert('Жаль, что игра закончена, приходи ещё!');

    return true;
  } else {
    if (+userNum === botNum) {
      alert(`Правильно!`);
      alert('Жаль, что игра закончена, приходи ещё!');

      return true;
    }

    if (userNum < botNum) {
      userNum = prompt(`Больше! Введи новый вариант:`);
    }

    if (userNum > botNum) {
      userNum = prompt(`Меньше! Введи новый вариант:`);
    }

    if (!(Number.isFinite(+userNum)) || userNum === '') {
      userNum = prompt('Введи число!');
    }

    return gessNum(userNum, botNum);
  }
};

gessNum(userNum, botNum);
