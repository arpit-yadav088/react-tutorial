import { useState } from 'react';
import './EV.css'

const ReactState = () => {
 const [count, setcount] = useState(0);
    const handleButtonClick = () => {
       setcount(() => count + 1); 
    };

  return (
  <>  
    <section className='main-div'>
        <h1 className='counting'>{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
    </section>
  </>  
  )
}


export default ReactState;