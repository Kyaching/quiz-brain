import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="m-4 flex items-center justify-center h-96">
      <div className="text-center">
        <h1 className="text-4xl p-4">Oops!</h1>
        <FontAwesomeIcon
          className="w-16 h-16"
          icon={faSadTear}
        ></FontAwesomeIcon>
        <p className="text-3xl">Sorry! Your desire page is Not Found</p>
        <p className="text-red-600 text-lg">
          Error: <i>{error.status}</i>{" "}
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
