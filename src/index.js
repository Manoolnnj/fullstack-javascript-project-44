import readlineSync from 'readline-sync';

export const randomInteger = (min, max) => {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

export const gcdFinder = (a, b) => b === 0 ? Math.abs(a) : gcdFinder(b, a % b);

export const gameLogic = (task, makeRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = makeRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ; (.Correct answer was "${correctAnswer}"\nLet's try again, ${name}!`);
        return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
