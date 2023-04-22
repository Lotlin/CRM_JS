
'use srtict';

const calculate = (totalCartSum, numItemsInCart, promoCode) => {
  let newTotalCartSum = totalCartSum;

  const numItemsForDiscount = 10;
  const itemsDiscountSize = 0.03;

  const totalCartSumForDiscount = 30000;
  const cartSumDiscountSize = 0.15;

  const promoCodeForDiscount = "METHED";
  const promoCodeDiscountSize = 0.1;

  const promoCodeForDiscount1 = "G3H2Z1";
  const totalCartSumForDiscount1 = 2000;
  const promoCodeDiscountSize1 = 500;

  if (numItemsInCart > numItemsForDiscount) {
    newTotalCartSum -= itemsDiscountSize * newTotalCartSum;
  }

  if (totalCartSum > totalCartSumForDiscount) {
    const excessAmount = newTotalCartSum - totalCartSumForDiscount;
    newTotalCartSum -= cartSumDiscountSize * excessAmount;
  }

  if (promoCode === promoCodeForDiscount) {
    newTotalCartSum -= promoCodeDiscountSize * newTotalCartSum;
  }

  if (promoCode === promoCodeForDiscount1 && newTotalCartSum > totalCartSumForDiscount1) {
    newTotalCartSum -= promoCodeDiscountSize1;
  }

  return `Стоимость корзины товаров с учётом всех скидок составляет: ${Math.round(newTotalCartSum * 100) / 100} рублей.`;
}

console.log(calculate(31000, 11, "METHED"));
