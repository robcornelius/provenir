import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useRoboBobContext from "../hooks/useRoboBobContext.hook";
import { FixedQuestion, FixedQuestionsArray } from "../types/robobob.types";

const FixedQuestions = () => {
  const { fixedQuestions } = useRoboBobContext();
  const [answer, setAnswer] = useState<string>("");
  const [showAll, setShowAll] = useState<boolean>(false);
  const [answeredQuestions, setAnsweredQuestions] =
    useState<FixedQuestionsArray>([]);
  const questions = fixedQuestions.map((el: FixedQuestion) => {
    return el.q;
  });

  const showAnswers = (ev: React.MouseEvent<HTMLButtonElement>) => {
    setShowAll(true);
  };

  return (
    <>
      <Autocomplete
        id="hit"
        options={questions}
        autoHighlight
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              variant="outlined"
              label=""
              placeholder="Make a selection and hit enter"
              margin="normal"
              fullWidth
            />
          );
        }}
        onChange={(ev: any, newValue: string | null) => {
          const qa = fixedQuestions.find((el: FixedQuestion) => {
            return el.q === newValue;
          });
          setAnswer(qa?.a || "");
          const newAnswers = [...answeredQuestions];
          newAnswers.push({ q: qa?.q || "", a: qa?.a || "" });
          setAnsweredQuestions(newAnswers);
        }}
      />
      <p className="fixedAnswer">
        <strong>{answer}</strong>
      </p>
      <p className="centerText">
        <Button onClick={showAnswers} variant="contained">
          Show answers
        </Button>
      </p>
      {showAll &&
        answeredQuestions.map((el: FixedQuestion) => {
          return (
            <p>
              {el.q}
              <br />
              <strong>{el.a}</strong>
            </p>
          );
        })}
    </>
  );
};
export default FixedQuestions;
