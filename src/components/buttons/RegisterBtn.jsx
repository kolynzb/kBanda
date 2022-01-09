import React from "react";
import "../../App.scss";

const registerBtn = (props) => {
  return (
    <button className="registerbtn" type="submit">
      {props.children}
    </button>
  );
};

export default registerBtn;
