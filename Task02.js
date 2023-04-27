'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const  getAverageValue = arr => {
  const numOfCheks = arr.length;
  let totalCash = 0;

  for (const elem of arr) {
    totalCash += elem;
  }

  const averageValue = Math.floor(totalCash / numOfCheks);

  return averageValue;
}

console.log(`Средний чек за день: ${getAverageValue(allCashbox)} руб.`);
