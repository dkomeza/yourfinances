import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "@Auth/context/AuthContext";

import "@Auth/scss/Login.scss";

import backgroundImage from "@Auth/assets/background.png";

function Login() {
  const {
    currentUser,
    signin,
    googleSignin,
    facebookSignin,
    handleErrorCodes,
  } = useAuth();

  return (
    <>
      {!currentUser && (
        <main className="login-page">
          <div className="background-image-container">
            <img src={backgroundImage} alt="Background Image" />
          </div>
          <div className="login-container">
            <form>
              <fieldset>
                <label htmlFor="email">e-mail</label>
                <input type="email" name="email" id="email" />
              </fieldset>
              <fieldset>
                <label htmlFor="password">password</label>
                <input type="password" name="password" id="password" />
              </fieldset>
              <button type="submit">Login</button>
            </form>
          </div>
        </main>
      )}
    </>
  );
}

export default Login;
