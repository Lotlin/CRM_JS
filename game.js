'use strict';
(() => {
  const DATA_RUS = {
    figures: ['камень', 'ножницы', 'бумага'],

    validCharacters: [
      'камень', 'камен', 'каме', 'кам', 'ка', 'к', 'ножницы',
      'ножниц', 'ножни', 'ножн', 'нож', 'но', 'н', 'бумага',
      'бумаг', 'бума', 'бум', 'бу', 'б',
    ],

    winningCombinations: {
      player: ['кн', 'нб', 'бк'],
      computer: ['кб', 'нк', 'бн'],
      draw: ['кк', 'нн', 'бб'],
    },
  };

  const DATA_ENG = {
    figures: ['rock', 'scissors', 'paper'],

    validCharacters: [
      'rock', 'roc', 'ro', 'r', 'scissors', 'scissor', 'scisso',
      'sciss', 'scis', 'sci', 'sc', 's', 'paper', 'pape', 'pap', 'pa', 'p',
    ],

    winningCombinations: {
      player: ['rs', 'sp', 'pr'],
      computer: ['rp', 'sr', 'ps'],
      draw: ['rr', 'ss', 'pp'],
    },
  };

  const getData = lang => {
    let data = {};

    if (lang === 'ENG') {
      data = DATA_ENG;
    } else {
      data = DATA_RUS;
    }

    return data;
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getFigure = data =>
    data.figures[getRandomIntInclusive(0, (data.figures.length - 1))];

  const getCombination = (userChoice, computerChoice) =>
    userChoice[0] + computerChoice[0];

  const getFullChoiseName = (userChoice, data) => {
    let fullName = '';

    for (let i = 0; i < data.figures.length; i++) {
      if (data.figures[i][0] === userChoice[0]) {
        fullName = data.figures[i];
      }
    }

    return fullName;
  };

  const game = language => {
    const lang = language === 'EN' || language === 'ENG' ? 'ENG' : 'RUS';
    const data = getData(lang);

    const result = {
      player: 0,
      computer: 0,
    };

    const getWinner = (userChoice, computerChoice, data) => {
      const combination = getCombination(userChoice, computerChoice);
      let message = '';

      if (data.winningCombinations.player.includes(combination)) {
        message = 'Вы выиграли';
        result.player += 1;
      }

      if (data.winningCombinations.computer.includes(combination)) {
        message = 'Вы проиграли';
        result.computer += 1;
      }

      if (data.winningCombinations.draw.includes(combination)) {
        message = 'Ничья';
      }

      const resultMesage = `игрок - ${getFullChoiseName(userChoice, data)} 
      \n компьютер - ${computerChoice} \n ${message}`;

      return resultMesage;
    };

    return function start() {
      const userChoice = prompt('камень, ножницы, бумага?');
      const computerChoice = getFigure(data);

      if (userChoice === null) {
        const exit = prompt(`Вы уверены, что хотите выйти?
        \nЕсли нет - введите 0, если да - любой символ`);
        if (exit === '0') {
          start();
        } else {
          return alert(`Результат: 
          \nигрок: ${result.player} \nкомпьютер: ${result.computer}`);
        }
      }

      if (data.validCharacters.includes(userChoice)) {
        alert(getWinner(userChoice, computerChoice, data));
        alert(`Результат: 
        \nигрок: ${result.player} \nкомпьютер: ${result.computer}`);
        start();
      } else {
        return start();
      }
    };
  };

  window.gameRSP = game;
})();
