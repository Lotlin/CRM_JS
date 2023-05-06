'use strict';

const arrLimitGenerator = (num, n, m) => {
  
  const arr = [];
  const max = Math.max(n, m);
  const min = Math.min(n, m)

  for (let i = 0; i < num; i++) {
    arr.push(Math.round(Math.random() * (max - min) + min));
  }

  return arr;
}

console.log(`Массив чисел в выбранном диапазоне: ${arrLimitGenerator(30, -200, 18)}.`);
