import React, { useContext } from "react";
import Image from "../assets/hero-pic.jpg";
import Quiz from "./Quiz";
import { QuizContext } from "./Root";

const Home = () => {
  const quizType = useContext(QuizContext);
  const quizzes = quizType.data;
  return (
    <div>
      <section>
        <div className="mt-7 mx-7 card lg:card-side bg-base-100 shadow-xl justify-center">
          <figure>
            <img src={Image} className="w-[450px] h-52" alt="Album" />
          </figure>
          <div className="card-body justify-center">
            <h2 className="card-title">Conquer the Quiz!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
          </div>
        </div>
        <section className=" m-5 md:m-14 grid md:grid-cols-3 gap-3">
          {quizzes.map((quiz) => (
            <Quiz key={quiz.id} quiz={quiz}></Quiz>
          ))}
        </section>
      </section>
    </div>
  );
};

export default Home;
