/* eslint-disable indent */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import game from '../index.js';

const description = 'What is the result of the expression?';

const randomNumber = () => {
  const maxValue = 10;
  return (Math.floor(Math.random() * maxValue));
};

const operations = ['+', '-', '*'];

const questionAnswer = () => {
  const number1 = randomNumber();
  const number2 = randomNumber();
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];
  const question = `${number1} ${randomOperation} ${number2}`;

  let rightAnswer;
  if (randomOperation === '+') {
    rightAnswer = number1 + number2;
  } else if (randomOperation === '-') {
    rightAnswer = number1 - number2;
  } else {
    rightAnswer = number1 * number2;
  }
  return [question, rightAnswer.toString()];
};

export default () => {
  game(description, questionAnswer);
};
