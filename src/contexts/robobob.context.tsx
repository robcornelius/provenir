import React, { useState, createContext } from "react";
import {
  IRoboBob,
  RoboBobProviderProps,
  MathQuestionsArray,
  FixedQuestionsArray,
} from "../types/robobob.types";

export const RoboBobContext = createContext({} as IRoboBob);

const RoboBobProvider = ({ children }: RoboBobProviderProps) => {
  const fixedQuestionsList = [
    { q: "What is your name", a: "RoboBob" },
    { q: "What is your favourite colour", a: "blue" },
    {
      q: "What is the average airspeed of an unladen swallow",
      a: "I don't know",
    },
  ];

  const [fixedQuestions, setFixedQuestions] =
    useState<FixedQuestionsArray>(fixedQuestionsList);
  const [mathQuestions, setMathQuestions] = useState<MathQuestionsArray>([]);

  return (
    <RoboBobContext.Provider
      value={{
        fixedQuestions,
        setFixedQuestions,
        mathQuestions,
        setMathQuestions,
      }}
    >
      {children}
    </RoboBobContext.Provider>
  );
};
export default RoboBobProvider;
