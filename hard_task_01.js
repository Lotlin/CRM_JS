'use srtict';

const numOne = + prompt("Введите первое число для поиска наибольшего общего детителя");
const numtwo = + prompt("Введите второе число для поиска наибольшего общего детителя");


const findBiggerAndSmaller = (a, b) => {
  let biggerNum = a;
  let lesserNum = b;
  if (a < b) {
    biggerNum = b;
    lesserNum = a;
  }
  return [biggerNum, lesserNum];
}

const findNOD = (a, b) => {
  let biggerNum = findBiggerAndSmaller(a, b)[0];
  let lesserNum = findBiggerAndSmaller(a, b)[1];
  
  let remainder = biggerNum % lesserNum;

  if (!remainder) {
    return console.log(`Наибольший общий детитель для чисел ${a} и ${b} - это число ${lesserNum}.`);
  }

  let result = remainder;

  while (remainder) {
    result = remainder;
    remainder = biggerNum % lesserNum;
    biggerNum = lesserNum;
    lesserNum = remainder;
  }

  return console.log(`Наибольший общий детитель для чисел ${a} и ${b} - это число ${result}.`);
};

if (Number.isNaN(parseFloat(numOne)) || Number.isNaN(parseFloat(numtwo))) {
  console.log('Вы ввели неверные данные, необходимо ввести числа.');
} else {
  findNOD(numOne, numtwo);
}
