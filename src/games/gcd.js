/* eslint-disable indent */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import game from '../index.js';
import { randomNumberNotZero } from '../helper.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let num1Copy = num1;
  let num2Copy = num2;

  while (num1Copy !== 0 && num2Copy !== 0) {
    if (num1Copy > num2Copy) {
      num1Copy %= num2Copy;
    } else {
      num2Copy %= num1Copy;
    }
  }
  return num1Copy + num2Copy;
};

const getQuestionAnswer = () => {
  const number1 = randomNumberNotZero(100);
  const number2 = randomNumberNotZero(100);
  const question = `${number1} ${number2}`;

  const rightAnswer = getGcd(number1, number2);
  return [question, rightAnswer.toString()];
};

export default () => {
  game(description, getQuestionAnswer);
};
