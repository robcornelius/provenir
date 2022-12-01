/* eslint-disable no-eval */
import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import useRoboBobContext from "../hooks/useRoboBobContext.hook";
import { MathQuestionsType } from "../types/robobob.types";

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};
const getRandomToTwoDecimalPlaces = (max: number) => {
  return (Math.random() * max).toFixed(2);
};
const operators = ["+", "-", "*", "/"];
const generateConsquentString = () => {
  return ` ${operators[getRandomInt(4)]} ${getRandomToTwoDecimalPlaces(100)}`;
};
const generateQuestion = () => {
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

const MathsQuestions = () => {
  const { mathQuestions, setMathQuestions } = useRoboBobContext();
  const [answers, setAnswers] = useState<boolean[]>([]);

  useEffect(() => {
    if (mathQuestions.length === 0) {
      setMathQuestions([generateQuestion()]);
    }
  }, [mathQuestions, setMathQuestions]);

  const checkAnswer = (supplied: string, correct: string) => {
    const newAnswers = [...answers];
    if (supplied === correct) {
      newAnswers.push(true);
    } else {
      newAnswers.push(false);
    }
    setAnswers(newAnswers);
  };

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") {
      checkAnswer(
        ev.currentTarget.value,
        mathQuestions[mathQuestions.length - 1].a
      );
    }
  };

  const askAnother = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    const newQuestions = [...mathQuestions];
    newQuestions.push(generateQuestion());
    setMathQuestions(newQuestions);
  };

  return (
    <>
      <p>type your answer and press enter to see if you are correct</p>
      <p>Only two decimal places are required</p>
      <div>
        <table width="100%" className="mathsQs" cellSpacing={0}>
          <thead>
            <tr>
              <th>Question:</th>
              <th>Your Answer:</th>
              <th>Solution:</th>
            </tr>
          </thead>
          <tbody>
            {mathQuestions.map((qa: MathQuestionsType, idx: number) => {
              return (
                <tr className={idx % 2 === 0 ? "even" : "odd"} key={idx}>
                  <td>{qa.q}</td>
                  <td>
                    <TextField
                      type="number"
                      onKeyDown={handleKeyDown}
                      size="small"
                      placeholder="enter number"
                      style={{ width: "150px", margin: 0 }}
                    />
                  </td>
                  <td>
                    {answers[idx] !== undefined && (
                      <>
                        {answers[idx] === true
                          ? "✅ Correct!"
                          : `❌ ${qa.q} = ${qa.a}`}
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="centerText">
        <Button onClick={askAnother} variant="contained">
          Ask me another
        </Button>
      </p>
    </>
  );
};

export default MathsQuestions;
