'use strict';

const reverseStr = string => {
  const strLength = string.length;
  let reversedString = '';

  for (let i = strLength - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  return reversedString;
}

const userString = prompt('Введите строку', 'Привет мир');
console.log(reverseStr(userString));
