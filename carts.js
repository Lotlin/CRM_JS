'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  add(item, itemPrice, itemNum = 1) {
    const newItem = {item, itemPrice, itemNum};
    this.items.push(newItem);
    this.increaseCount(itemNum);
  },

  increaseCount(num) {
    this.count += num;
  },

  calculateItemPrice() {
    const totalPrice = cart.items.reduce((acc, item) => {
        return acc + (item.itemNum * item.itemPrice);
    }, 0);

    return totalPrice;
  },

  get totalPrice() {
    return this.calculateItemPrice();
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Итоговая стоимость товаров в корзине: ${this.totalPrice} руб.`);
  },
};

cart.add('тетрадь в клетку', 20, 5);
cart.add('карандаши', 15, 7);
cart.add('ластик', 8, 4);

cart.print();
