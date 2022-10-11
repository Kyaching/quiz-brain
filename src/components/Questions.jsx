import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import QuizType from "./QuizType";

export const QuestionContext = createContext();
const Questions = () => {
  const quizData = useLoaderData();
  const name = quizData.data.name;
  const questions = quizData.data.questions;

  return (
    <QuestionContext.Provider value={questions}>
      <QuizType name={name}></QuizType>
    </QuestionContext.Provider>
  );
};

export default Questions;
