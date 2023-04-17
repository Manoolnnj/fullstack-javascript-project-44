#!/usr/bin/env node

import { gameLogic, randomInteger } from '../src/index.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const makeRound = () => {
  const number = randomInteger(0, 100);
  const question = number.toString();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

gameLogic(task, makeRound);



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
