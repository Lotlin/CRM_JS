'use srtict';
/*
в 1-й и 2-й доп задачах разные условия:
(в 1-й доход до 15000-минимальная ставка (т.е. до 14999.99 включительно), на доход равный 15000 - средняя ставка,
а во 2-й задаче - средняя ставка налога от 15000.01).
*/

const income2 = + prompt('Введите сумму полученного вами дохода');

const minincome2 = 15000;
const middleincome2 = 50000;

const minTax2Rate2 = 13;
const middleTax2Rate2 = 20;
const maxTax2Rate2 = 30;

const maxMinTax2 = (minincome2 * minTax2Rate2) / 100; // 1950, максимальный налог по ставке 13%
const maxMiddleTax2 = (((middleincome2 - minincome2) * middleTax2Rate2) / 100) + maxMinTax2; // 8950, максимальный налог по ставке 20%

switch (true) {
  case income2 <= minincome2: {
    const Tax2 = Math.round(income2 * minTax2Rate2) / 100;
    console.log(`Размер налога составляет: ${Tax2}₽.`);
    break;
  }
  case income2 > minincome2 && income2 <= middleincome2: {
    const excessincome2 = income2 - minincome2;
    const increasedTax2 = Math.round(excessincome2 * middleTax2Rate2) / 100;
    const Tax2 = increasedTax2 + maxMinTax2;
    console.log(`Размер налога составляет: ${Tax2}₽.`);
    break; 
  }
  case income2 > 50000: {
    const excessincome2 = income2 - middleincome2;
    const increasedTax2 = Math.round(excessincome2 * maxTax2Rate2) / 100;
    const Tax2 = increasedTax2 + maxMiddleTax2;
    console.log(`Размер налога составляет: ${Tax2}₽.`);
    break;
  }
  default: {
    console.log('Введены неверные данные, налог высчитать невозожно.');
  }
}
