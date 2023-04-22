'use srtict';

const coeffEuroToDollar = 1.2;
const coeffDollarToRubles = 73;
const coeffEuroToRubles = coeffEuroToDollar * coeffDollarToRubles;

const convertEuroToRubles = euro => Math.floor(euro * coeffEuroToRubles * 100) / 100;

const euroToConvert = + prompt("Введите сумму покупки в евро");

if (Number.isNaN(parseFloat(euroToConvert)) || euroToConvert < 0) {
  console.log('Вы ввели неверные данные, необходимо ввести неотрицательное число.');
} else {
  console.log(`Сумма покупки в рублях составляет ${convertEuroToRubles(euroToConvert)} рублей.`);
}
