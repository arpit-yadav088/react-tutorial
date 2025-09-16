import React from 'react'
import "./EV.css";

const EventHandling = () => {

    // function handleButtonClick() {
    //     alert("hey i am onclick event");
    //}

    const handleButtonClick = (event) => {
      console.log(event);
      console.log(event.target);
      console.log(event.type);
      alert("hey I am fat arrow function");
    };

    const handleWelcomeUser = (user) => {
      console.log(`hey ${user}, welcome`);
    };

  return (
    <>
    {/* function component with named function */}
    <button onClick={handleButtonClick}>click me!</button>
    <br />
    <button onClick={(event) => handleButtonClick(event)}>click me!2</button>
    <br />
    {/* inline event handler:- esem function me jo bhi paas hai use direct 
    yahan event. ke sath likh kar pa shakte hai */}
    <button onClick={(event) => console.log(event)}>inline event</button>
    <br />
    {/* function component with inline arrow function */}
    <button onClick={() => alert("hey I am fat arrow function")}>inline arrow fun</button>
    <br />
     <button onClick={() => handleWelcomeUser("Thapa")}>click me!</button>
    </>
  );
};

export default EventHandling