/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import game from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const randomNumber = () => {
  const maxValue = 30;
  return (Math.floor(Math.random() * maxValue));
};

const isPrime = (num) => {
  let answer = 'yes';
  if (num < 2) {
    answer = 'no';
  } else {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        answer = 'no';
      }
    }
  }
  return answer;
};

const questionAnswer = () => {
  const question = randomNumber();
  const rightAnswer = isPrime(question);
  return [question, rightAnswer];
};

export default () => {
  game(description, questionAnswer);
};
