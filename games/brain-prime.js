#!/usr/bin/env node

import { randomInteger } from '../src/index.js';
import readlineSync from 'readline-sync';
import { greetings } from '../src/cli.js';
import { question } from '../src/cli.js';
import { isPrime } from '../src/index.js';
import { answerChecking } from '../src/index.js';

greetings();
const name = question();

const brainPrime = () => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

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
                console.log(`'${userAnswer}' is wrong answer ; (.Correct answer was 'yes'\nLet's try again, ${name}`)
                return;
            } else {
                console.log(`'${userAnswer}' is wrong answer ; (.Correct answer was 'no'\nLet's try again, ${name}`)
                return;
            }
        }
    }
    console.log(`Congratulations, ${name}!`);
};

brainPrime();