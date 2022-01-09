import React from "react";
import { FiPlay } from "react-icons/fi";
import "../../App.scss";

const Watchbtn = (props) => {
  return (
    <button className="watch-btn">
      <FiPlay /> Watch
    </button>
  );
};

export default Watchbtn;
