#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomInteger, gcdFinder } from '../src/index.js';
import { greetings, question } from '../src/cli.js';

greetings();
const name = question();

const gcd = () => {
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = randomInteger(1, 50);
    const secondNumber = randomInteger(1, 50);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const userAnswer = readlineSync.question('Your answer ');

    if (userAnswer === gcdFinder(firstNumber, secondNumber).toString()) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer; (.Correct answer was ${gcdFinder(firstNumber, secondNumber)}.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

gcd();
