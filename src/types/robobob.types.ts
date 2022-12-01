import { ReactNode } from "react";

export type FixedQuestion = { q: string; a: string };
export type FixedQuestionsArray = FixedQuestion[];

export type MathQuestionsType = {
  q: string;
  a: string;
};
export type MathQuestionsArray = MathQuestionsType[];

export interface IRoboBob {
  fixedQuestions: FixedQuestionsArray;
  setFixedQuestions: (value: FixedQuestionsArray) => void;
  mathQuestions: MathQuestionsArray;
  setMathQuestions: (value: MathQuestionsArray) => void;
}
export type RoboBobProviderProps = {
  children?: ReactNode;
};
