import React, { useContext } from "react";
import { QuestionContext } from "./Questions";
import QuizQuestions from "./QuizQuestions";

const QuizType = ({ name }) => {
  const questions = useContext(QuestionContext);
  return (
    <div>
      <h2 className="text-xl text-center font-bold">Quiz of {name}</h2>
      {questions.map((question, index) => (
        <QuizQuestions
          key={question.id}
          index={index}
          questions={question}
          totalQuestions={questions}
        ></QuizQuestions>
      ))}
    </div>
  );
};

export default QuizType;
