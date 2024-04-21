/* eslint-disable indent */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import game from '../index.js';

const description = 'What number is missing in the progression?';

const randomNumber = () => {
  const maxValue = 10;
  return (Math.floor(Math.random() * maxValue));
};

const progressionLength = 10;
const count = 2;

const questionAnswer = () => {
  let startNumber = randomNumber();
  const progression = [startNumber];
  const replacementNumber = Math.floor(Math.random() * progressionLength);

  for (let i = 1; i < progressionLength; i += 1) {
    startNumber += count;
    progression.push(startNumber);
  }

  const rightAnswer = progression[replacementNumber];

  progression[replacementNumber] = '..';

  let question = '';

  for (let i = 0; i < progressionLength; i += 1) {
    question += `${progression[i]} `;
  }

  return [question, rightAnswer.toString()];
};

export default () => {
  game(description, questionAnswer);
};
