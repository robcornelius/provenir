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
    { q: "What is your name?", a: "RoboBob" },
    { q: "What is your favourite colour?", a: "blue" },
    {
      q: "What is the average airspeed of an unladen swallow?",
      a: "I don't know ARRRGH",
    },
    {
      q: "How many roads must a man walk down?",
      a: "Precisely 17",
    },
    {
      q: "Are you bored yet?",
      a: "Most likely",
    },
    {
      q: "What is the capital of North Korea?",
      a: "Pyong Yang",
    },
    {
      q: "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
      a: "It depends on both the size of the wood and the size of the woodchuck",
    },
    {
      q: "what is higher, two pairs or three of a kind?",
      a: "Depends on who is holding the gun",
    },
    {
      q: "What is the answer to life, the universe and everything?",
      a: "42",
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
