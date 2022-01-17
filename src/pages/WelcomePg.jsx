import React from "react";
import { Link } from "react-router-dom";
import "../scss/pages/WelcomePg.scss";
import welcomeBg from "../assets/backgrounds/welcomepg.png";
import facebook from "../assets/icons/facebook.png";
import google from "../assets/icons/google.png";
import twitter from "../assets/icons/twitter.png";
const WelcomePg = () => {
  return (
    <main className="WelcomePg">
      <img className="pgBkgnd" src={welcomeBg} alt="Welcome" />
      <section className="container">
        <h1 className="pgtitle">Welcome To Chillax</h1>
        <p className="pgslogan">A Whole New World Awaits</p>
        <div className="btns">
          <Link to="/register">
            <button>Register</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>

        <div className="ContinueBtns">
          <div className="orr">
            <div className="lineH"></div>
            <h1>OR</h1>
            <div className="lineH"></div>
          </div>
          <ContinueBtn social="google" icon={google} />
          <ContinueBtn social="facebook" icon={facebook} />
          <ContinueBtn social="twitter" icon={twitter} />
        </div>
      </section>
    </main>
  );
};

export default WelcomePg;

const ContinueBtn = ({ social, icon }) => {
  return (
    <button className="contdbtn">
      <h1>Continue with {social}</h1>
      <img className="icon" src={icon} alt={social} />
    </button>
  );
};
