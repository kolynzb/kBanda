import React from "react";
import { Link } from "react-router-dom";
import "../scss/pages/Notfound.scss";
const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link to="/">
        <button className="back-btn ">Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
