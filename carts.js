'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {
    return this.totalPrice;
  },

  add(item, itemPrice, itemNum = 1) {
    const newItem = {item, itemPrice, itemNum};
    this.items.push(newItem);
    this.increaseCount(itemNum);
    this.calculateItemPrice();
  },

  increaseCount(num) {
    this.count += num;
  },

  calculateItemPrice() {
    this.totalPrice = cart.items.reduce((acc, item) => {
        return acc + (item.itemNum * item.itemPrice);
    }, 0);
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Итоговая стоимость товаров в корзине: ${this.getTotalPrice()} руб.`);
  },
};

cart.add('тетрадь в клетку', 20, 5);
cart.add('карандаши', 15, 7);
cart.add('ластик', 8, 4);

cart.print();
