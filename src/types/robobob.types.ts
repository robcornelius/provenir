import { ReactNode } from "react";

export type FixedQuestion = { q: string; a: string };
export type FixedQuestionsArray = FixedQuestion[];

export type MathQuestion = number | "+" | "-" | "*" | "/"[];

export type MathQuestions = {
  q: MathQuestion;
  a: number;
};
export type MathQuestionsArray = MathQuestions[];

export interface IRoboBob {
  fixedQuestions: FixedQuestionsArray;
  setFixedQuestions: (value: FixedQuestionsArray) => void;
  mathQuestions: MathQuestionsArray;
  setMathQuestions: (value: MathQuestionsArray) => void;
}
export type RoboBobProviderProps = {
  children?: ReactNode;
};
