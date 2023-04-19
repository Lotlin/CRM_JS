'use srtict';
/*
в 1-й и 2-й доп задачах разные условия:
(в 1-й доход до 15000-минимальная ставка (т.е. до 14999.99 включительно), на доход равный 15000 - средняя ставка,
а во 2-й задаче - средняя ставка налога от 15000.01).
*/

const income = + prompt('Введите сумму полученного вами дохода');

const minIncome = 15000;
const middleIncome = 50000;

const minTaxRate = 13;
const middleTaxRate = 20;
const maxTaxRate = 30;

switch (true) {
  case income < minIncome: {
    const tax = Math.round(income *  minTaxRate) / 100;
    console.log(`Размер налога составляет: ${tax}₽.`);
    break;
  }
  
  case income >= minIncome && income <= middleIncome: {
    const tax = Math.round(income * middleTaxRate) / 100;
    console.log(`Размер налога составляет: ${tax}₽.`);
    break;
  }
  
  case income > middleIncome: {
    const tax = Math.round(income * maxTaxRate) / 100;
    console.log(`Размер налога составляет: ${tax}₽.`);
    break;
  }
  default: {
    console.log('Введены неверные данные, налог высчитать невозожно.');
  }
}
