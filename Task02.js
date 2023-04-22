'use srtict';

const string = prompt('Введите строку для изменения');

const toUpperFirstLetter = string => {
  const changedString = string[0].toUpperCase() + string.slice(1).toLocaleLowerCase();
  return changedString;
}

console.log(toUpperFirstLetter(string));
