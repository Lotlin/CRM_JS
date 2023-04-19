'use srtict';

const goodName = prompt('Введите наименование товара', 'checkered 12');
const goodAmount = + prompt('Введите количество товара', 10);
const goodCategory = prompt('Введите категорию товара', 'notebook');
const goodPrice = + prompt('Введите цену товара', 25);

if (Number.isFinite(goodAmount) && Number.isFinite(goodPrice)) {
  goodTotalPrice = goodAmount * goodPrice;
  console.log(`На складе ${goodAmount} единицы товара ${goodName} на сумму ${goodTotalPrice} деревянных`);
} else {
  console.log("Вы ввели некорректные данные");
}
