import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "@Auth/context/AuthContext";

import "@Auth/scss/Login.scss";

function Login() {
  const {
    currentUser,
    signin,
    googleSignin,
    facebookSignin,
    handleErrorCodes,
  } = useAuth();

  return <>{!currentUser && <main className="login-container"></main>}</>;
}

export default Login;
