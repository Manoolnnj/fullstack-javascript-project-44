#!/usr/bin/env node

import { randomInteger } from '../src/index.js';
import readlineSync from 'readline-sync';
import { greetings } from '../src/cli.js';
import { question } from '../src/cli.js';

greetings();
const name = question();

const isEven = (number) => {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

export const evenGame = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < 3; i += 1) {
        const number = randomInteger(0, 50);
        console.log('Question: ' + number)
        const userAnswer = readlineSync.question('Your answer ');

        const check1 = (number % 2 === 0) && (userAnswer === 'yes');
        const check2 = (number % 2 !== 0) && (userAnswer === 'no');



        if (check1 === true || check2 === true) {
            console.log('Correct!');
        } else {
            if (isEven(number)) {
                console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'\nLet's try again, ${name}`)
                return;
            } else {
                console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'\nLet's try again, ${name}`)
                return;
            }
        }
    }
    console.log(`Congratulations, ${name}!`)
};

evenGame();

