#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomInteger } from '../src/index.js';
import { greetings, question } from '../src/cli.js';

greetings();
const name = question();

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
};

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
export default evenGame;
