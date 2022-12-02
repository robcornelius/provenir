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
      {showAll && (
        <div className="roboBobBorder">
          <table width="100%" className="robobobQs" cellSpacing={0}>
            <thead>
              <tr>
                <th style={{ width: "50%" }}>Question:</th>
                <th style={{ width: "50%" }}>RoboBobs Answer</th>
              </tr>
            </thead>
            <tbody>
              {answeredQuestions.map((el: FixedQuestion, idx: number) => {
                return (
                  <tr key={idx} className={idx % 2 === 0 ? "even" : "odd"}>
                    <td>{el.q}</td>
                    <td>{el.a}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default FixedQuestions;
