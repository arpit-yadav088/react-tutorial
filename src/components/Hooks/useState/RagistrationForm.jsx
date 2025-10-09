import React, { useState } from 'react'
import './Rg.css'

const RagistrationForm = () => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
    });


    const handleInputChange = (e) => {
        const {name, value} = e.target;
       setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(user)
    }
  return (
    <>
    <form onSubmit={handleFormSubmit}>
        <div className='ragistration-form'>
            <h1>Sign Up</h1>
            <p>please fill in this form to create an account</p>

            <label htmlFor='first name'>
                <b>First Name</b>
            </label>
                <input 
                type='text'
                name='firstName' 
                placeholder='Enter firstName'
                required
                value={user.firstName}
                onChange={handleInputChange}
                />

            <label htmlFor='last name'>
                <b>Last Name</b>
                </label>
                <input 
                type='text'
                name='lastName'
                placeholder='enter lastName'
                required
                value={user.lastName}
                onChange={handleInputChange}
                />

            <label htmlFor='email'>
                <b>Email</b>
                </label>
                <input  
                type='text' 
                name='email' 
                placeholder='enter email' 
                required value={user.email}
                onChange={handleInputChange}
                 />

            <label htmlFor='password'>
                <b>Password</b>
            </label>
            <input 
            type='password' 
            name='password' 
            placeholder='plz enter password' 
            required  
            value={user.password}
            onChange={handleInputChange}
            />

            <label htmlFor='phone'>
                <b>Phone Number</b>
            </label>
            <input 
            type='phoneNumber' 
            name='phoneNumber' 
            placeholder='1234556690' 
            required 
            value={user.phoneNumber}
            onChange={handleInputChange} 
            />

            <p>
                By creating an account you agree to our 
                <a href='#' style={{ color: "dodgerblue"}}>
                    Term & Privacy
                </a>
            </p>

            <div className='clearfix'>
                <button>Sign Up</button>
            </div>
        </div>
    </form>
    {/* <section
    className='summary'
    style={{textAlign: "center", marginTop: "30px"}}>
        <p>
            Hello, my name is
            <span>{firstName}{lastName}</span>
            .My email is <span>{email}</span> and my phone number is 
            <span>{phoneNumber}</span>
        </p>
    </section> */}
    </>
  )
}

export default RagistrationForm