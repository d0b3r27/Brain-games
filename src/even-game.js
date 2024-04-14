/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const randomNumber = () => {
    const maxValue = 100;
    return (Math.floor(Math.random() * maxValue));
  };

  for (let i = 0; i < 3; i += 1) {
    const number = randomNumber();
    console.log(`Question: ${number}`);
    let rightAnswer = '';
    if (number % 2 === 0) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default game;
