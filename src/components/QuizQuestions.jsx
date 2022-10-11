import React, { useContext, useState } from "react";

const QuizQuestions = ({ questions }) => {
  const { question, correctAnswer } = questions;

  return (
    <div className="card w-1/2 mx-auto m-4 bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="card-title justify-center">Quiz : {question}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestions;
