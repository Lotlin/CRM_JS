'use srtict';

let goodName = 'checkered 12';
let goodAmount = 10;
let goodCategory = 'notebook';
let goodPrice = 25;
let goodTotalPrice = goodAmount * goodPrice;

console.log (`Наименование товара: ${goodName}.`);
console.log (`Общая стоимость товара: ${goodTotalPrice} рублей.`);

goodName = prompt('Введите наименование товара');
goodAmount = prompt('Введите количество товара');
goodCategory = prompt('Введите категорию товара');
goodPrice = prompt('Введите цену товара');

console.log(typeof(goodName));
console.log(typeof(goodAmount));
console.log(typeof(goodCategory));
console.log(typeof(goodPrice));

goodAmount = + goodAmount;
goodPrice = + goodPrice;
goodTotalPrice = goodAmount * goodPrice;

console.log(`На складе ${goodAmount} единицы товара ${goodName} на сумму ${goodTotalPrice} деревянных`);
