import readlineSync from 'readline-sync';

const gameLogic = (task, makeRound) => {
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

export default gameLogic;
