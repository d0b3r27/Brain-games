/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import game from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const randomNumber = () => {
  const maxValue = 100;
  return (Math.floor(Math.random() * maxValue));
};

const isEven = (num) => num % 2 === 0;

const questionAnswer = () => {
  const question = randomNumber();
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => {
  game(description, questionAnswer);
};
