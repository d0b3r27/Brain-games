/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import game from '../index.js';
import { randomNumber } from '../helper.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAnswer = () => {
  const question = randomNumber(100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => {
  game(description, getQuestionAnswer);
};
