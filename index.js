'use srtict';

const goodName = prompt('Введите наименование товара', 'checkered 12');
const goodAmount = + prompt('Введите количество товара', 10);
const goodCategory = prompt('Введите категорию товара', 'notebook');
const goodPrice = + prompt('Введите цену товара', 25);

console.log(typeof(goodName));
console.log(typeof(goodAmount));
console.log(typeof(goodCategory));
console.log(typeof(goodPrice));

goodTotalPrice = goodAmount * goodPrice;

console.log(`На складе ${goodAmount} единицы товара ${goodName} на сумму ${goodTotalPrice} деревянных`);
