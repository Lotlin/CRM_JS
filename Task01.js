'use strict';

const allSrudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (arrayAllSrudents, arrayFailedStudents) => {
  const arrayPassedExam = []
  
  for (const elem of arrayAllSrudents) {
    if (!arrayFailedStudents.includes(elem)) {
      arrayPassedExam.push(elem);
    }
  }

  return arrayPassedExam;
}

console.log(`Студенты, сдавшие экзамен: ${filter(allSrudents, failedStudents)}.`);
