import readlineSync from 'readline-sync';

export const randomInteger = (min, max) => {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

export const gcdFinder = (a, b) => b === 0 ? Math.abs(a) : gcdFinder(b, a % b);

export const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
};

export const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};


export const gameLogic = (task, type) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);

  for (let i = 0; i < 3; i += 1) {
    const number = randomInteger(1, 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if ((type(number)) && (userAnswer === 'yes')) {
      console.log('Correct!');
    }
    else if ((!(type(number))) && (userAnswer === 'no')) {
      console.log('Correct!');
    } else {
      if (type(number)) {
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