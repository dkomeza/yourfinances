import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "@Auth/context/AuthContext";
import { imageParalex } from "./helpers/imageParalex";

import "@Auth/scss/Login.scss";

import backgroundImage from "@Auth/assets/background.png";
import logo from "@Auth/assets/logo.svg";
import googleIcon from "@Auth/assets/google-icon.svg";
import facebookIcon from "@Auth/assets/facebook-icon.svg";

function Login() {
  const {
    currentUser,
    signin,
    googleSignin,
    facebookSignin,
    handleErrorCodes,
  } = useAuth();

  const [emailCorrect, setEmailCorrect] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [animate, setAnimate] = useState(false);
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    imageParalex();
  }, []);

  function handleEmailSubmit() {
    if (emailRef.current?.value) {
      setEmail(emailRef.current?.value);
      setAnimate(true);
      setTimeout(() => {
        setTransform(-200);
      }, 1);

      setTimeout(() => {
        setEmailCorrect(true);
        setAnimate(false);
      }, 1000);
    }
  }

  function handleSubmit() {
    console.log("email: ", email);
    console.log("password: ", passwordRef.current?.value);
  }

  return (
    <>
      {!currentUser && (
        <main className="login-page">
          <div className="background-image-container">
            <img
              className="background-image"
              src={backgroundImage}
              alt="Background Image"
            />
          </div>
          <div className="login-container">
            <div className="login-wrapper">
              <img src={logo} alt="Logo" />
              {(!emailCorrect || animate) && (
                <div
                  style={{ transform: `translateX(${transform}%)` }}
                  className="email-container form-container"
                >
                  <div className="input-wrapper">
                    <label htmlFor="email">e-mail</label>
                    <input type="text" name="email" id="email" ref={emailRef} />
                  </div>
                  <button
                    type="submit"
                    onClick={handleEmailSubmit}
                    className="login-button"
                  >
                    Sign in with email
                  </button>
                  <div className="signup-wrapper">
                    Don't have an account? <a href="/">Sign up</a> here!
                  </div>
                  <div className="social-login-wrapper">
                    <button type="submit" onClick={googleSignin}>
                      <img src={googleIcon} alt="Google Icon" />
                      <span>Sign in with Google</span>
                    </button>
                    <button type="submit" onClick={facebookSignin}>
                      <img src={facebookIcon} alt="Facebook Icon" />
                      <span>Sign in with Facebook</span>
                    </button>
                  </div>
                </div>
              )}
              {(emailCorrect || animate) && (
                <div
                  className="password-container form-container"
                  style={{ transform: `translateX(${200 + transform}%)` }}
                >
                  <div className="input-wrapper">
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      ref={passwordRef}
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="login-button"
                  >
                    Sign in
                  </button>
                </div>
              )}
              <div className="placeholder">
                <div className="input-wrapper">
                  <input type="text" name="placeholder" id="placeholder" />
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default Login;
