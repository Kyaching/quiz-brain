import React from "react";

const Quiz = ({ quiz }) => {
  const { name, logo, total } = quiz;
  console.log(quiz);
  return (
    <div className="card w-full bg-base-100 shadow-xl m-2">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title w-1/2">{name}</h2>
          <p>
            <small className="w-1/2">Total Question: {total}</small>
          </p>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary w-full mt-2">
            Start practicing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
