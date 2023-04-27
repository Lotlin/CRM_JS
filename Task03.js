'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, prefix) => {
  const newPrefix = prefix + ' ';
  const newArr = [];
  let newElem = '';

  for(const elem of arr) {
    newElem = newPrefix + elem;
    newArr.push(newElem);
  }

  return newArr;
}

console.log(`Новый массив: ${addPrefix(names, 'Mr')}.`);
