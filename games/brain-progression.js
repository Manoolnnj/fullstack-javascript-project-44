#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomInteger } from '../src/index.js';
import { greetings, question } from '../src/cli.js';

greetings();
const name = question();

const progression = () => {
  console.log('What number is missing in the progression ?');

  for (let i = 0; i < 3; i += 1) {
    const initialTerm = randomInteger(1, 20);
    const commonDifference = randomInteger(1, 7);
    const arr = [initialTerm];
    let lastNumber = initialTerm;
    const hiddenIndex = randomInteger(0, 9);

    for (let j = 0; j < 9; j += 1) {
      arr.push(lastNumber + commonDifference);
      lastNumber += commonDifference;
    }
    const arrClone = arr.slice(0);
    arrClone[hiddenIndex] = '..';
    console.log(`Question: ${arrClone.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer ');

    if (userAnswer.toString() === arr[hiddenIndex].toString()) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer; (.Correct answer was '${arr[hiddenIndex]}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

progression();
