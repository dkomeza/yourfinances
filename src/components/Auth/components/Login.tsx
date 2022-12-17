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
          <div className="background-image-container"></div>
          <div className="login-container"></div>
        </main>
      )}
    </>
  );
}

export default Login;
