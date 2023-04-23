'use strict';

const isPrime = num => {
  const sqrt = Math.sqrt(num); // у каждого непростого числа есть делитель, не превышающий квадратного корня из числа
  for (let i = 2; i <= sqrt; i++) {  
    if (!(num % i)) {
      return false;
    }
  }

  return true;
}

const userNum =  + prompt('Введите число для проверки на простоту числа', 151);

if (!Number.isFinite(userNum)) {
  console.log("Вы ввели некорректные данные.");
} else {
  console.log(isPrime(userNum));
}
