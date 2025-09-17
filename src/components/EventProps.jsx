 import React from 'react'
import "./EV.css";
 
 const EventProps = () => {

    const HandleWelcomeUser = (user) => {
        alert(`hey, ${user}`);
    };

    const handleHover = () => {
        alert(`hey Thanks for hovering me`);
    };

    return (
        <>
        <WelcomeUser
         onClick={() => HandleWelcomeUser("Thapa")}
        onMouseEnter={handleHover}
        />
        </>
    );
};

const WelcomeUser = (props) => {
    const handleGreeting = () => {
        console.log(`hey user, welcome`);
        props.onClick();
    };
    return (
        <>
        <button onClick={props.onClick}>Click me!</button>
        <br />
        <button onMouseEnter={props.onMouseEnter}>Hover me</button>
        <br />
        <button onClick={handleGreeting}>Greeting!</button>
        </>
    );
};

export default EventProps;


