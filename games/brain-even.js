#!/usr/bin/env node

import { gameLogic, isEven } from '../src/index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
gameLogic(task, isEven);


/*
const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = randomInteger(1, 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if ((isEven(number)) && (userAnswer === 'yes')) {
      console.log('Correct!');
    }
    else if ((!(isEven(number))) && (userAnswer === 'no')) {
      console.log('Correct!');
    } else {
      if (isEven(number)) {
        console.log(`'${userAnswer}' is wrong answer ; (.Correct answer was 'yes'\nLet's try again, ${name}!`);
        return;
      } else {
        console.log(`'${userAnswer}' is wrong answer ; (.Correct answer was 'no'\nLet's try again, ${name}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${name}!`);
};

evenGame();
export default evenGame;  */
