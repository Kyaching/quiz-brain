import React, { useContext } from "react";
import { QuestionContext } from "./Questions";
import QuizQuestions from "./QuizQuestions";

const QuizType = ({ name }) => {
  const questions = useContext(QuestionContext);
  return (
    <div className="mt-10">
      <h2 className="text-xl text-center font-bold">Quiz of {name}</h2>
      <div className="grid grid-cols-5">
        <div className="col-span-4">
          {questions.map((question, index) => (
            <QuizQuestions
              key={question.id}
              index={index}
              questions={question}
            ></QuizQuestions>
          ))}
        </div>
        <div className="bg-red-600 text-center sticky top-0">
          <h2>Total Questions: {questions.length}</h2>
          <p>Correct Answer: </p>
          <p>Wrong Answer:</p>
        </div>
      </div>
    </div>
  );
};

export default QuizType;
