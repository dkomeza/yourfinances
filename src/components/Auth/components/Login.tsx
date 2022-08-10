import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import '../scss/Login.scss';
import logo from '../assets/logo.svg';

function Login() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const { signin } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError('');
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        try {
            await signin(email, password);
            navigate('/');
        } catch (error: any) {
            setError(error);
        }
        setLoading(false);
    }

    return (
        <main className='login-container'>
            <div className="form-wrapper">
                {error && <p>{error}</p>}
                <div className="form-header">
                    <img src={logo} alt="logo" />
                </div>
                <div className="form-container">
                    <form onSubmit={ handleLogin }>
                        <div className="field-group">
                            <label htmlFor="email">Email</label>
                            <input required type="email" name="email" id="email" ref={emailRef} />
                            <label htmlFor="password">password</label>
                            <input required type="password" name="password" id="password" ref={passwordRef} />
                        </div>
                        <button disabled={loading} type="submit">Sign In</button>
                    </form>
                    <p>Don't have an account? <Link to={"/signup"}>Sign Up</Link> here</p>
                </div>
                <div className="form-footer"></div>
            </div>
        </main>
    )
}

export default Login