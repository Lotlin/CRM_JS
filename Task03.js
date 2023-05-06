'use strict';

`Третья задача:

Скопируйте код task02.js в task03.js

Добавьте 4-ый опциональный параметр у функции


4-ый опциональный параметр это строка:

если функция получает 'even', то функция возвращает массив чётных чисел
если функция получает 'odd', то функция возвращает массив нечётных чисел`

const arrLimitGeneratorEvenOdd = (num, n, m, evenOrOdd = '') => {
  
  const arr = [];
  const max = Math.max(n, m);
  const min = Math.min(n, m)
  let randomNum = 0;

  for (let i = 0; i < num; i++) {
      randomNum = Math.round(Math.random() * (max - min) + min);

      if (evenOrOdd === 'even') {
        if ((randomNum % 2) && (randomNum < max )) {
          randomNum += 1;
        }
        if ((randomNum % 2) && (randomNum === max)) {
          randomNum -= 1;
        }
      }

      if (evenOrOdd === 'odd') {
        if (!(randomNum % 2) && (randomNum < max)) {
          randomNum += 1;
        }

        if (!(randomNum % 2) && (randomNum == max)) {
          randomNum -= 1;
        }
      }

      arr.push(randomNum);
  } 

  return arr;
}

console.log(`Массив нечётных чисел: ${arrLimitGeneratorEvenOdd(30, 10, 18, 'odd')}.`);
console.log(`Массив чётных чисел: ${arrLimitGeneratorEvenOdd(30, 10, 18, 'even')}.`);
