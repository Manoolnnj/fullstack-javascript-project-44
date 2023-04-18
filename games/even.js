#!/usr/bin/env node

import { gameLogic, randomInteger } from '../src/index.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
};

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeRound = () => {
  const number = randomInteger(0, 100);
  const question = number.toString();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default gameLogic(task, makeRound);