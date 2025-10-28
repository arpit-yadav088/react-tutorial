import React, { useEffect, useState } from 'react'
import "./EffectChallenge.css"

const EffectChallenge = () => {
    const [count, setCount]= useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
      document.title = `count: ${count}`;
    }, [count])

    useEffect(() => {
      console.log(name);
    }, [name]);

  return (
        <div className="effect-container">
          <div className='effect-card'>
            <h1>Effect Challenge</h1>
            <span>Count: {count}</span>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>
              Name
            </p>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            <p>
              Nmae: <span> {name} </span>
            </p>
          </div>
        </div>
  )
}

export default EffectChallenge