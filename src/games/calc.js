/* eslint-disable indent */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import game from '../index.js';
import { randomNumber } from '../helper.js';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];
const rightAnswer = (num1, num2, operator) => {
  let answer;
  if (operator === '+') {
    answer = num1 + num2;
  } else if (operator === '-') {
    answer = num1 - num2;
  } else {
    answer = num1 * num2;
  }
  return answer;
};

const getQuestionAnswer = () => {
  const number1 = randomNumber(10);
  const number2 = randomNumber(10);
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];
  const question = `${number1} ${randomOperation} ${number2}`;

  return [question, rightAnswer(number1, number2, randomOperation).toString()];
};

export default () => {
  game(description, getQuestionAnswer);
};
