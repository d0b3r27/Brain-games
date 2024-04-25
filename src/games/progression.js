/* eslint-disable indent */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import game from '../index.js';
import { randomNumber } from '../helper.js';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (startNum, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNum + step * i);
  }
  return progression;
};

const getQuestionAnswer = () => {
  const startNumber = randomNumber(50);
  const step = randomNumber(9);
  const progression = getProgression(startNumber, step);
  const randomIndex = randomNumber(progressionLength - 1);
  const rightAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, rightAnswer.toString()];
};

export default () => {
  game(description, getQuestionAnswer);
};
