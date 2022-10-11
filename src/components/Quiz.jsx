import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
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
          <Link to={`/questions/${id}`} className="btn btn-primary w-full mt-2">
            Start practicing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
