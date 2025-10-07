import React, { useState } from 'react'
import './Rg.css'

const Ragistration = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        switch(name){
            case "firstName":
                setFirstName(value);
                break;

            case "lastName": 
                 setLastName(value); 
                 break;

            case "email":
                setEmail(value);
                break;    
            
            case "password":
                setPassword(value);
                break;

            case "phoneNumber":
                setPhoneNumber(value);
                break;    
        }

          
        // setPhoneNumber(e.target.value);

    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
        }
        console.log(formData)
    }
  return (
    <>
    <form onSubmit={handleFormSubmit}>
        <div className='ragistration-form'>
            <h1>Sign Up</h1>
            <p>please fill in this form to create an account</p>

            <label htmlFor='first name'>
                <b>First Name</b>
                <input 
                type='text'
                name='firstName' 
                placeholder='Enter firstName'
                required
                value={firstName}
                onChange={handleInputChange}
                />
            </label>

            <label htmlFor='last name'>
                <b>Last Name</b>
                <input 
                type='text'
                name='lastName'
                placeholder='enter lastName'
                required
                value={lastName}
                onChange={handleInputChange}
                />
            </label>

            <label htmlFor='email'>
                <b>Email</b>
                </label>
                <input  
                type='text' 
                name='email' 
                placeholder='enter email' 
                required value={email}
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
            value={password}
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
            value={phoneNumber}
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

export default Ragistration