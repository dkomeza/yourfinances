import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import '../scss/Login.scss';

import logo from '../assets/logo.svg';
import eyeIcon from '../assets/eye-icon.svg';
import googleIcon from '../assets/google-icon.svg';
import facebookIcon from '../assets/facebook-icon.svg';

function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState('password');
  const { currentUser, signin, googleSignin, facebookSignin, handleErrorCodes } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  })

  async function handleSignin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    try {
      await signin(email, password);
      navigate('/');
    } catch (error: any) {
      setError(handleErrorCodes(error.code));
      hideError();
    }
    setLoading(false);
  }

  async function handleGoogleSignin() {
    setLoading(true);
    setError('');
    try {
      await googleSignin();
      navigate('/');
    } catch (error: any) {
      setError(error.toString());
    }
    setLoading(false);
  }

  async function handleFacebookSignin() {
    setLoading(true);
    setError('');
    try {
      await facebookSignin();
      navigate('/');
    } catch (error: any) {
      setError(error.toString());
    }
    setLoading(false);
  }

  function handleShowPassword() {
    if (showPassword ===   "password") {
      setShowPassword("text");
    }
    else {
      setShowPassword("password");
    }
  }

  async function hideError() {
    window.setTimeout(() => {
      setError('');
    } , 1000);
  }

  return (
    <>
    { !currentUser && 
    <main className='login-container'>
      {error && 
      <div className="error-container">
        <p className="error" style={{textAlign: "center"}}>{ error }</p>
      </div>}
      <div className="form-wrapper">
        <div className="form-header">
          <img src={logo} alt="logo" />
        </div>
        <div className="form-container">
          <form onSubmit={ handleSignin }>
            <div className="field-group">
              <fieldset>
                <label htmlFor="email">Email</label>
                <span className='input-wrapper'><input required type="email" name="email" id="email" ref={emailRef} /></span>
              </fieldset>
              <fieldset>
                <label htmlFor="password">password</label>
                <span className='input-wrapper'><input required type={showPassword} name="password" id="password" ref={passwordRef} /><img className="show-password" onClick={handleShowPassword} src={eyeIcon} alt="Password show icon"></img></span>
                <span className='reset-password'><Link to={'/password-reset'}>forgot your password?</Link></span>
              </fieldset>
            </div>
            <button disabled={loading} type="submit">Sign In</button>
          </form>
          <p>Don't have an account? <Link to={"/signup"}>Sign Up</Link> here</p>
        </div>
        <div className="form-footer">
          <button className="google-login social-login" onClick={handleGoogleSignin}>
            <img src={googleIcon} alt="Google icon" />Sign In with Google
          </button>
          <button className="facebook-login social-login" onClick={handleFacebookSignin}>
            <img src={facebookIcon} alt="Facebook icon" />Sign In with Facebook
          </button>
        </div>
      </div>
    </main>
    }
    </>
    )
}

export default Login