import React from "react";
import { Formik, Form } from "formik";
import TextInput from "../components/TextInput";
import { Link } from "react-router-dom";
import validate from "../validators/registerValidation";
// import "../scss/pages/Register.scss";
import signuppg from "../assets/backgrounds/signuppg.png";
import facebook from "../assets/icons/facebook.png";
import google from "../assets/icons/google.png";
import twitter from "../assets/icons/twitter.png";
import RegisterBtn from "../components/buttons/RegisterBtn";
import {
  continueWithGoogle,
  continueWithMeta,
  register,
} from "../firebase/auth";

const Register = () => {
  return (
    <main className="registerPg">
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
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            alert(JSON.stringify(values, null, 2));
            let [email, password, username, confirmPassword] = JSON.stringify(
              values,
              null,
              2
            );
            register(email, password, setSubmitting);
          }}
        >
          {(formik) => (
            <div className="">
              <Form>
                {console.log(formik.values)}
                <TextInput label="Username" name="username" type="name" />
                <TextInput label="Email" name="email" type="email" />
                <TextInput label="password" name="password" type="password" />
                <TextInput
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />
                <div className="resetSect">
                  <Link to="/login">
                    <p className="btns">Already have an account</p>
                  </Link>
                  <button className="btns" type="reset">
                    Reset
                  </button>
                </div>
                <RegisterBtn
                  className=" "
                  type="submit"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? "loading...." : "Register"}
                </RegisterBtn>
              </Form>
              <section className="continue-sect">
                <header className="contd-title">
                  <div className="lineH"></div>
                  <p>Continue with</p>
                  <div className="lineH"></div>
                </header>
                <main className="icons">
                  <div className="icon" onClick={() => continueWithGoogle()}>
                    <img src={google} alt="g" />
                  </div>
                  <div className="icon" onClick={() => continueWithMeta()}>
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

export default Register;
