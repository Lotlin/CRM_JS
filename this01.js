'use strict';

const rectangle = {
  trueWidth: 5,
  trueHeight: 5,

  set width(val) {
    if (typeof val === 'number') {
      this.trueWidth = val;
    }
  },

  set height(val) {
    if (typeof val === 'number') {
      this.trueHeight = val;
    }
  },

  get perimeter() {
    return `${(this.trueWidth + this.trueHeight) * 2} см`;
  },

  get area() {
    return `${(this.trueWidth * this.trueHeight)} см`;
  },

};

console.log(rectangle.perimeter);
console.log(rectangle.area);
