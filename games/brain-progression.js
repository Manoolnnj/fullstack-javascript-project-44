#!/usr/bin/env node

import { randomInteger } from '../src/index.js';
import readlineSync from 'readline-sync';
import { greetings } from '../src/cli.js';
import { question } from '../src/cli.js';

greetings();
const name = question();

const progression = () => {
    console.log('What number is missing in the progression ?')

    for (let i = 0; i < 3; i += 1) {
        const initialTerm = randomInteger(1, 20);
        const commonDifference = randomInteger(1, 7);
        const arr = [initialTerm];
        let lastNumber = initialTerm;

        for (let i = 0; i < 9; i += 1) {
            arr.push(lastNumber + commonDifference)
            lastNumber += commonDifference;
        }

        console.log(`Question: ${arr.join(' ')}`);
        const userAnswer = readlineSync.question('Your answer ');

        if (userAnswer === commonDifference.toString()) {
            console.log('Correct!');
        } else {
            console.log(`${userAnswer} is wrong answer; (.Correct answer was '${commonDifference}'.\nLet's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`)
}

progression();