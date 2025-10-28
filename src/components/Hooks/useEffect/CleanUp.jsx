import React, { useState, useEffect } from 'react'
import "./ClnUp.css"

const CleanUp = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
  const timer = setInterval(() => {
    setCount((prev) => prev + 1);
  }, 1000);

  return () => clearInterval(timer);
  }, []);

  return (
    <div className='container'>
        <div className="counter">
            <h1>My Subscribers on YouTube</h1>
            <div className="odometer" id='odometer'>
                {count}
            </div>
            <h2 className='title'>
                Subscribers <br /> Realtime Counter
            </h2>
        </div>
    </div>
  )
}

export default CleanUp