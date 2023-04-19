'use srtict';

// Task 2

const rain = Math.round(Math.random());

if (rain) {
  console.log('Пошёл дождь. Возьмите зонт!');
} else {
  console.log('Дождя нет!');
}

// Task 3

const mathScore =  + prompt('Артур, введите кол-во баллов по математике:');
const rusScore =  + prompt('Артур, введите кол-во баллов по русскому языку:');
const infScore =  + prompt('Артур, введите кол-во баллов по информатике:');

const totalScore = mathScore + rusScore + infScore

const passingScore = 265;

if (!Number.isFinite(mathScore) || !Number.isFinite(rusScore) || !Number.isFinite(infScore)) {
  console.log("Артур, вы ввели некорректные данные.");
} else if ((mathScore + rusScore + infScore) >= 265) {
  console.log('Артур, поздравляю, вы поступили на бюджет!');
} else {
  console.log('Артур, извините, баллов для поступления на бюджет недостаточно.');
}

// Task 4

const withdrawnMoney = + prompt('Владимир, сколько денего вы хотите снять? Введите число:');

if (!Number.isFinite(withdrawnMoney)) {
  console.log("Владимир, вы ввели некорректные данные.");
} else if (!(withdrawnMoney % 100) && withdrawnMoney) {
  console.log("Владимир, банкомат МОЖЕТ выдать запрашиваемую вами сумму.");
} else {
  console.log("Владимир, банкомат НЕ МОЖЕТ выдать запрашиваемую вами сумму.");
}
