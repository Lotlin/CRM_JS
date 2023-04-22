'use srtict';

const num1 = + prompt("Введите первое число для сравнения");
const num2 = + prompt("Введите второе число для сравнения");

const findMin = (a, b) => (a >= b) * b + (b > a) * a;

if (Number.isNaN(parseFloat(num1)) || Number.isNaN(parseFloat(num2))) {
  console.log('Вы ввели неверные данные, необходимо ввести числа.');
} else {
  console.log(`${findMin(num1, num2)} - искомое число.`);
}
