'use strict';

const stopGame = userStr => {
  if (userStr === null) {
    return true;
  }
  return false;
}

const chekIsNumber = userStr => {
  if (userStr === '') {
    return false;
  }
  if (!(Number.isFinite(+ userStr))) {
    return false;
  } 
  return true;
}

const getNumOfAttempts = (minNumInRange, maxNumInRange) => {
  let numOfAttempts = 0;
  const percentageOAttempts = 0.3;
  const numInRange = (maxNumInRange - minNumInRange) + 1;

  if (minNumInRange === 50 && maxNumInRange === 100) {
    numOfAttempts = 15;
  } else {
    numOfAttempts = Math.round(percentageOAttempts * numInRange);
  }
  return numOfAttempts;
}

const checkRepeatedNum =  (num, numArray) => {
  const repNum = numArray.find((item) => {
    return item === num;
  })
  return repNum;
}

const compareDifferentNumbers = (enteredNum, hiddenNum) => {
  let message = '';
  if (enteredNum < hiddenNum) { 
    message = 'Больше! Введи новый вариант: ';
  }
  if (enteredNum > hiddenNum) { 
    message = 'Меньше! Введи новый вариант: ';
  }
  return message;
}

let userFirstNumRange = prompt(`Добро пожаловать в игру 'Угадай число'. \nЯ загадываю число в диапазоне двух чисел, которые ты введёшь, а ты угадываешь.
                        \nДля выхода нажми 'отмена/cancel'.  \n\nВведи первое число: `);

if (!(stopGame(userFirstNumRange))) {
  while (!chekIsNumber(userFirstNumRange)) {
    userFirstNumRange = prompt('Введи число!');
  }

  if (!(stopGame(userFirstNumRange))) {
    let userSecondNumRange = prompt('Отлично, а теперь введи второе число, отличное от первого: ');
    while (!chekIsNumber(userSecondNumRange) || userSecondNumRange === userFirstNumRange) {
      userSecondNumRange = prompt('Введи второе число, отличное от первого');
    } 

    if (!(stopGame(userSecondNumRange))) {
      // раньше не было приведено к числу, чтобы не пропустить пустую строку
      userFirstNumRange = Number(userFirstNumRange);
      userSecondNumRange = Number(userSecondNumRange);

      const minNumInRange = Math.min(userFirstNumRange, userSecondNumRange);
      const maxNumInRange = Math.max(userFirstNumRange, userSecondNumRange);
      
      let numOfAttempts = getNumOfAttempts(minNumInRange, maxNumInRange);

      const botNum = Math.round(Math.random() * (maxNumInRange - minNumInRange)) + minNumInRange;

      let userNum = prompt(`Итак, тебе нужно угадать число, которое я загадал в диапазоне от ${minNumInRange} до ${maxNumInRange}. 
                            \nКоличество попыток: ${numOfAttempts}
                            \nВведи число: `);

      const enteredNum = [];
      
      while ((numOfAttempts > 0) && !(stopGame(userNum))) {
        if (!(chekIsNumber(userNum))) {
          userNum = prompt('Введи число!');
          continue;
        }

        if (checkRepeatedNum(userNum, enteredNum)) {
          userNum = prompt(`Это число вы уже вводили. Введите новое число:`);
          continue;
        }

        if (+ userNum === botNum) {
          alert(`Правильно!`);
          break;
        }

        enteredNum.push(userNum);

        if (numOfAttempts === 1) {
          alert(`Попытки закончились. Не угадал. Загаданное число: ${botNum}`);
        } else {
          userNum = prompt(`${compareDifferentNumbers(userNum, botNum)}`);
        }

        numOfAttempts -= 1;
      } 
    }
  }
}

alert('Жаль, что игра закончена, приходи ещё!');
