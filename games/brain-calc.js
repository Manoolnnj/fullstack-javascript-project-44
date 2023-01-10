#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomInteger } from '../src/index.js';
import { greetings, question } from '../src/cli.js';

greetings();
const name = question();

const calcGame = () => {
    console.log('What is the result of the expression?');
    const mathSymbols = ['+', '-', '*'];

    for (let i = 0; i < 3; i += 1) {
        const firstNumber = randomInteger(0, 50);
        const secondNumber = randomInteger(0, 50);
        const randomSymbol = mathSymbols[randomInteger(0, 2)];
        console.log(`Question: ${firstNumber} ${randomSymbol} ${secondNumber}`);
        const userAnswer = readlineSync.question('Your answer ');
        let result;

        switch (randomSymbol) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
        }

        if (userAnswer === result.toString()) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};

calcGame();