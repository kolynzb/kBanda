import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import TextInput from "../components/TextInput";
import "../scss/pages/login.scss";
import signuppg from "../assets/backgrounds/loginpg.png";
import facebook from "../assets/icons/facebook.png";
import google from "../assets/icons/google.png";
import twitter from "../assets/icons/twitter.png";
import RegisterBtn from "../components/buttons/RegisterBtn";
import validate from "../helpers/inputValidation";
const signin = () => {
  return (
    <main className="loginPg">
      <img className="pgBkgnd" src={signuppg} alt="backgroundImage" />
      <section className="formCard">
        <div className="logo">
          <Link to="/">Chillax</Link>
        </div>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validate}
        >
          {(formik) => (
            <div className="">
              <Form>
                {console.log(formik.values)}
                <TextInput label="Email" name="email" type="email" />
                <TextInput label="password" name="password" type="password" />

                <div className="resetSect">
                  <Link to="/register">
                    <p className="btns">Have no account?</p>
                  </Link>
                  <button className="btns">Forgot Password</button>
                </div>
                <RegisterBtn className=" " type="submit">
                  Login
                </RegisterBtn>
              </Form>
              <section className="continue-sect">
                <header className="contd-title">
                  <div className="lineH"></div>
                  <p>Continue with</p>
                  <div className="lineH"></div>
                </header>
                <main className="icons">
                  <div className="icon">
                    <img src={google} alt="g" />
                  </div>
                  <div className="icon">
                    <img src={facebook} alt="f" />
                  </div>
                  <div className="icon">
                    <img src={twitter} alt="t" />
                  </div>
                </main>
              </section>
            </div>
          )}
        </Formik>
      </section>
    </main>
  );
};

export default signin;
