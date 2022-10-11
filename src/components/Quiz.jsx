import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img className="bg-gray-900" src={logo} alt="brand Icons" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{name}</h2>
          <p className="flex-grow-0">
            <small>Total Question: {total}</small>
          </p>
        </div>
        <div className="card-actions">
          <Link to={`/questions/${id}`} className="btn btn-primary w-full mt-2">
            Start practicing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
