const randomNumber = (maxValue) => Math.floor(Math.random() * maxValue);

const randomNumberNotZero = (maxValue) => Math.floor(Math.random() * maxValue + 1);

export { randomNumber, randomNumberNotZero };
