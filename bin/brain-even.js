#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (number) => {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

const providingRandomNumber = () => {
    return Math.ceil(Math.random() * 100);
};

import { name } from '../src/cli.js';
const evenGame = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < 3; i += 1) {
        const number = providingRandomNumber();
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

export { evenGame };

evenGame();

