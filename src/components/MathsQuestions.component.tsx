import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import useRoboBobContext from "../hooks/useRoboBobContext.hook";
import { MathQuestionsType } from "../types/robobob.types";
import { generateQuestion } from "./mathQuestions.utils";

const MathsQuestions = () => {
  const { mathQuestions, setMathQuestions } = useRoboBobContext();
  const [answers, setAnswers] = useState<boolean[]>([]);

  useEffect(() => {
    if (mathQuestions.length === 0) {
      setMathQuestions([generateQuestion()]);
    }
  }, [mathQuestions, setMathQuestions]);

  const checkAnswer = (supplied: string, correct: string, index: number) => {
    const newAnswers = [...answers];
    if (supplied === correct) {
      newAnswers[index] = true;
    } else {
      newAnswers[index] = false;
    }
    setAnswers(newAnswers);
  };

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") {
      debugger;
      checkAnswer(
        ev.currentTarget.value,
        mathQuestions[mathQuestions.length - 1].a,
        parseInt(ev.currentTarget?.dataset?.index || "")
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
      <p>Enter your answer and hit return to see if you are correct</p>
      <p>Only two decimal places are required</p>
      <div>
        <table width="100%" className="mathsQs" cellSpacing={0}>
          <thead>
            <tr>
              <th style={{ width: "33%" }}>Question:</th>
              <th style={{ width: "33%" }}>Your Answer:</th>
              <th style={{ width: "33%" }}>Solution:</th>
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
                      data-index={idx}
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
