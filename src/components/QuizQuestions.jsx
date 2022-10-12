import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const QuizQuestions = ({ questions, index, handleAnswer }) => {
  const { options, question, correctAnswer } = questions;
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);
  };

  const handleOptions = (selectOption) => {
    const ans = options.find((option) => option === selectOption);
    if (ans === correctAnswer) {
      toast.success("Correct answer!", {
        position: "top-center",
        autoClose: 500,
      });
      handleAnswer(ans);
    } else {
      toast.error("Wrong Answer", {
        autoClose: 500,
      });
      handleAnswer(false);
    }
  };

  return (
    <div>
      <div className="card w-full md:w-3/4 mx-auto m-4 bg-base-100 shadow-xl relative">
        <div className="card-body text-center">
          <h2 className="card-title justify-center">
            Quiz {index + 1}: {question}
          </h2>
          {options.map((option, index) => (
            <div
              key={index}
              className="w-full md:w-4/5 mx-auto border-2 p-6 hover:border-blue-600"
            >
              <label className="radio flex flex-initial w-full rounded-none border-0">
                <input
                  onClick={() => handleOptions(option)}
                  name="radio"
                  type="radio"
                />
                <span className="ml-4 text-base">{option}</span>
              </label>
            </div>
          ))}
        </div>
        <FontAwesomeIcon
          onClick={handleClick}
          className="absolute right-0 p-4 cursor-pointer"
          icon={isShown ? faEyeSlash : faEye}
        />
        {isShown && (
          <p className="p-4 text-lg text-success">
            Correct Answer: {correctAnswer}
          </p>
        )}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};

export default QuizQuestions;
