'use strict';

const allCashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

const  getAverageOneGoodPrice = arr => {
  const numOfCheks = arr[0];
  const totalSumOfCheck = arr[1];
  const averagePriceOneGoodPrice = Math.round((totalSumOfCheck / numOfCheks) * 100) / 100; 

  return averagePriceOneGoodPrice;
}


const getAveragePriceGoods = arr => {

  const arrAverageCheckPrice = arr.map(getAverageOneGoodPrice);
  let totalSum = 0;
  let numOfElem = 0;

  for (const elem of arrAverageCheckPrice) {
    totalSum += elem;
    numOfElem += 1;
  }

  const averagePriceGoods = Math.round((totalSum / numOfElem) * 100) / 100; 

  return averagePriceGoods;
}

console.log(`Средняя стоимость одного товара в магазине: ${getAveragePriceGoods(allCashbox)} руб.`);
