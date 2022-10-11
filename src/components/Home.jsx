import React, { useContext } from "react";
import Image from "../assets/hero-pic.jpg";
import Quiz from "./Quiz";
import { QuizContext } from "./Root";

const Home = () => {
  const quizType = useContext(QuizContext);
  const quizzes = quizType.data;
  return (
    <div className="m-5">
      <div className="card lg:card-side bg-base-100 mt-10 flex-col-reverse rounded-none">
        <figure>
          <img
            className="w-[500px] h-96 rounded order-last"
            src={Image}
            alt="Album"
          />
        </figure>
        <div className="card-body justify-center">
          <h2 className="card-title justify-center font-bold">
            Welcome to Quiz Brain
          </h2>
          <p className="flex-grow-0">
            A quiz refers to a short test of knowledge, typically around 10
            questions in length, with question formats often including multiple
            choice, fill in the blanks, true or false and short answer. A quiz
            is much shorter than a traditional test or exam and is rarely
            impactful on a final course grade.
          </p>
        </div>
      </div>
      <div className=" m-3 md:m-14 grid md:grid-cols-3 gap-3">
        {quizzes.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Home;
