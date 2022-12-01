/* eslint-disable no-eval */
export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};
export const getRandomToTwoDecimalPlaces = (max: number) => {
  return (Math.random() * max).toFixed(2);
};
export const operators = ["+", "-", "*", "/"];
export const generateConsquentString = () => {
  return ` ${operators[getRandomInt(4)]} ${getRandomToTwoDecimalPlaces(100)}`;
};
export const generateQuestion = () => {
  const oneInFour = getRandomInt(4);
  let fiftyFifty = getRandomInt(2);
  const firstNumber = getRandomToTwoDecimalPlaces(100);
  const secondNumber = getRandomToTwoDecimalPlaces(100);
  let questionString = `${firstNumber} ${operators[oneInFour]} ${secondNumber}`;
  while (fiftyFifty === 1) {
    questionString += generateConsquentString();
    fiftyFifty = getRandomInt(2);
  }
  const questionAnswer = eval(questionString).toFixed(2);
  return { q: questionString, a: questionAnswer };
};
