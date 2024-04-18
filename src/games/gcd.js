/* eslint-disable indent */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import game from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const randomNumberNotZero = () => {
  const maxValue = 10;
  return (Math.floor(Math.random() * maxValue + 1));
};

const questionAnswer = () => {
  let number1 = randomNumberNotZero();
  let number2 = randomNumberNotZero();
  const question = `${number1} ${number2}`;

  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  const rightAnswer = number1 + number2;
  return [question, rightAnswer.toString()];
};

export default () => {
  game(description, questionAnswer);
};
