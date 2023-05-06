'use strict';
`Необходимо написать функцию, которая принимает 2 параметра n и m

И возвращает массив с високосными годами в диапазоне между n и m

Алгоритм определения високосного года следует найти в интернете самостоятельно или спросите у куратора

Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.`

const leapYearArrayGenerator = (n, m) => {
  const minYear = Math.min(n, m);
  const maxYear = Math.max(n, m);
  const leapYearArray = []

  for (let i = minYear; i <= maxYear; i++) {
    if (!(i % 4)) {
      if((i % 100)) {
        leapYearArray.push(i);
      } else if (!(i % 100) && !(i % 400)) {
        leapYearArray.push(i);
      }
    } 
  }

  return leapYearArray;
}

console.log(`Високосные годы в выбранном диапазоне: ${leapYearArrayGenerator(1900, 2100)}`);