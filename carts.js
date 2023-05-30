'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,

  add(item, itemPrice, itemNum = 1) {
    const newItem = {item, itemPrice, itemNum};
    this.items.push(newItem);
    this.increaseCount(itemNum);
  },

  increaseCount(num) {
    this.count += num;
  },

  calculateItemPrice() {
    const totalPrice = cart.items.reduce((acc, item) =>
      acc + (item.itemNum * item.itemPrice), 0);
    const totalDiscount = totalPrice * (this.discount / 100);
    const result = totalPrice - totalDiscount;

    return result;
  },

  get totalPrice() {
    return this.calculateItemPrice();
  },

  clear() {
    this.items = [];
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Итоговая стоимость товаров в корзине 
    с учётом скидки ${this.discount}% по промокоду: ${this.totalPrice} руб.`);
  },

  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount += 15;
    }

    if (promocode === 'NEWYEAR') {
      this.discount += 21;
    }
  },
};

cart.add('тетрадь в клетку', 20, 5);
cart.add('карандаши', 15, 7);
cart.add('ластик', 8, 4);

cart.setDiscount = 'METHED';

cart.print();
