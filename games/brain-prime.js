#!/usr/bin/env node

import { gameLogic, isPrime } from '../src/index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
gameLogic(task, isPrime);




/*
const brainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = randomInteger(1, 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if ((isPrime(number)) && (userAnswer === 'yes')) {
      console.log('Correct!');
    }
    else if ((!(isPrime(number))) && (userAnswer === 'no')) {
      console.log('Correct!');
    } else {
      if (isPrime(number)) {
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

brainPrime();*/
