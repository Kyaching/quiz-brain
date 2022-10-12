import React from "react";

const AnswerCounter = ({ questions, count, errorCount }) => {
  return (
    <div className=" text-center sticky top-0">
      <h2 className="text-2xl p-5 font-semibold">
        Total Questions: {questions.length}
      </h2>
      <p className="text-lg text-success font-semibold ">
        Correct Answer: {count}
      </p>
      <p className="text-lg text-red-600 font-semibold">
        Wrong Answer: {errorCount}
      </p>
    </div>
  );
};

export default AnswerCounter;
