import React, { useState } from 'react'
import './Circuit.css'

const ShortCircuit = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');
  return (
    <section className='section-container'>
        <h1>Welcome to the Short Circuit Evaluation</h1>

        {isLoggedIn && <p> Yes are logged in!</p>}

        {user ? `Hello! ${user}` :  'Please Login!'}

        <div className="buttons-wrapper">
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
            <button onClick={() => setUser("Arpit")}>Set User</button>
            <button onClick={() => setUser("")}>Clear User</button>
        </div>
    </section>
  )
}

export default ShortCircuit