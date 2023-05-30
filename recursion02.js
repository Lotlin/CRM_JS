'use strict';

const arr = [1, 2, 3];

const getArr = (arr) => {
  const num = Math.round(Math.random() * 9) + 1;
  arr.push(num);
  const sumEl = arr.reduce((acc, item) => acc + item, 0);

  if (sumEl >= 50) {
    return arr;
  } else {
    return getArr(arr);
  }
};

console.log(getArr(arr));
