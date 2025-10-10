import React, { useState } from 'react'
import "./CnttFm.css"

const ContactForm = () => {
   const [contacts, setContacts ] = useState({
    username: "",
    email: "",
    message: "",
   });

     // handle input changes
   const handleInputChange = (e) => {
    const {name, value} = e.target;
    setContacts((prev) => ({...prev, [name]: value,}));
   };
   
   
  // handle form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // const ContactData = {
        // username: contacts.username,
        // email: contacts.email,
        // message: contacts.message,
        // }
        console.log(contacts);

            // reset the form
    setContacts({
      username: "",
      email: "",
      message: "",
    });

    alert("Message Sent Successfully!");
    }

  return (
    <div className='container'>
        <div className='card'>
            <h1>Contact Form</h1>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor='username'>
                <b>Username</b>
            </label>
            <input 
            type='username'
            name='username'
            required
            autoComplete='off'
            value={contacts.username}
            onChange={handleInputChange}
            />

            <label htmlFor='email'>
                <b>Email</b>
            </label>
            <input 
            type='email'
            name='email'
            required
            autoComplete='off'
            value={contacts.email}
            onChange={handleInputChange}
            />

            <label>
                <b>Message</b>
            </label>
            <input 
            type='message'
            name='message'
            required
            autoComplete='off'
            value={contacts.message}
            onChange={handleInputChange}
            rows='7'
            />

            <button>Send Message</button>
        </form>    
        </div>
    </div>
  )
}

export default ContactForm;
