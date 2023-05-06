'use strict';

const arrGenerator = num => {
  
  const arr = [];
  const min = 1;
  const max = 100;

  for (let i = 0; i < num; i++) {
    arr.push(Math.round(Math.random() * (max - min)) + min);
  }

  return arr;
}

console.log(`Массив чисел в диапазоне 1 - 100: ${arrGenerator(30)}.`);
