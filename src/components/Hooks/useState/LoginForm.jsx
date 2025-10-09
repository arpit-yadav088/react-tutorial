import React, { useState } from 'react'
import "./Lgn.css";

const LoginForm = () => {
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const LoginData = {
            username,
            password
        };
     console.log(LoginData);
    };

  return (
    <div className='container'>
        <div className='card'>
            <h1>Login Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor='username'>Username</label>
                <input 
                type='text'
                name="username"
                required 
                autoComplete='off' 
                value={username}
                onChange = {(e) => setUsername(e.target.value)}
                />

                <label htmlFor='password'>Password</label>
                <input
                 type='password'
                 name='password' 
                 required
                 autoComplete='off' 
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 />

                <button>Login</button>
            </form>
        </div>
    </div>
  )
}

export default LoginForm;