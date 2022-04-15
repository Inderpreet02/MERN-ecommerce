import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Auth.css'

export const Auth = ( { user , setUser}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const history = useNavigate();

    const [email1, setEmail1] = useState("");
    const [password1, setPassword1] = useState("");
    const [username, setUsername] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:3001/login',{
            email: email,
            password: password
        })
        .then((res) => {
            setUser(res.data);
        })
        
        history('/');
    }

    const handleSignin = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:3001/signup',{
            email: email1,
            password: password1,
            name: username
        })
        .then((res) => {
            setUser(res.data.result);
        })

        history('/');
    }

  return (
    <div className='auth'>
        <div className="auth__container">
            <div className="auth__section">
                <h1>Login</h1>

                <input type="email" className="auth__input" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" className="auth__input" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button className="btn" onClick={handleLogin}>Login</button>
            </div>

            <div className="auth__section">
                <h1>Signup</h1>

                <input type="username" className="auth__input" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="email" className="auth__input" placeholder='email' value={email1} onChange={(e) => setEmail1(e.target.value)}/>
                <input type="password" className="auth__input" placeholder='password' value={password1} onChange={(e) => setPassword1(e.target.value)}/>

                <button className="btn" onClick={handleSignin}>Signup</button>
            </div>
        </div>
    </div>
  )
}
