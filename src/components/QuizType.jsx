import React, { useContext, useState } from "react";
import AnswerCounter from "./AnswerCounter";
import { QuestionContext } from "./Questions";
import QuizQuestions from "./QuizQuestions";

const QuizType = ({ name }) => {
  const [count, setCount] = useState(0);
  const [errorCount, setErrorCount] = useState(0);

  const questions = useContext(QuestionContext);
  const handleAnswer = (selectOption) => {
    if (selectOption) {
      setCount(count + 1);
    } else {
      setErrorCount(errorCount + 1);
    }
  };
  return (
    <div className="mt-10">
      <h2 className="text-xl text-center font-bold">Quiz of {name}</h2>
      <div className="grid md:grid-cols-5">
        <div className="md:col-span-4">
          {questions.map((question, index) => (
            <QuizQuestions
              key={question.id}
              index={index}
              questions={question}
              handleAnswer={handleAnswer}
            ></QuizQuestions>
          ))}
        </div>
        <div>
          <AnswerCounter
            key={questions.id}
            questions={questions}
            count={count}
            errorCount={errorCount}
          ></AnswerCounter>
        </div>
      </div>
    </div>
  );
};

export default QuizType;
