import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import useRoboBobContext from "../hooks/useRoboBobContext.hook";
import { FixedQuestion } from "../types/robobob.types";
let questionsAnswered: number = 0;

const FixedQuestions = () => {
  const { fixedQuestions } = useRoboBobContext();
  const [question, setQuestion] = useState<string | null>("");
  const [answer, setAnswer] = useState<string>("");
  const questions = fixedQuestions.map((el: FixedQuestion) => {
    return el.q;
  });

  const handleKeyDown = (event: any) => {
    switch (event.key) {
      case "Enter": {
        event.preventDefault();
        event.stopPropagation();
        if (event.currentTarget.value.length > 0) {
          setQuestion(event.currentTarget.value);
        }
        const qa = fixedQuestions.find((el: FixedQuestion) => {
          return el.q === question;
        });
        setAnswer(qa?.a || "");
        questionsAnswered++;
        break;
      }
      default:
    }
  };

  if (questionsAnswered < fixedQuestions.length) {
    return (
      <>
        <Autocomplete
          id="hit"
          options={questions}
          autoHighlight
          renderInput={(params: any) => {
            params.inputProps.onKeyDown = handleKeyDown;
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
            setQuestion(newValue);
          }}
        />
        <p className="fixedAnswer">
          <strong>{answer}</strong>
        </p>
      </>
    );
  }
  return (
    <>
      <h3>Your answers</h3>
      {fixedQuestions.map((qa: FixedQuestion) => {
        return (
          <p>
            {qa.q} = <strong>{qa.a}</strong>
          </p>
        );
      })}
    </>
  );
};
export default FixedQuestions;
