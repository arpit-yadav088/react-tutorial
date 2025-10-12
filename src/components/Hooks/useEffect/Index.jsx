//tutorial 52 useEffect Hool with dependency Array

import { useEffect, useState } from 'react'
import './index.css'

// export const ReactUseEffect = () => {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         console.log("hello useEffect", count);
//     }, [count]);

//     return (
//         <div className="container">
//             <h1>UseEffect Hook</h1>
//             <p>Count: {count}</p>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//         </div>
//     )
// }

export const ReactUseEffect = () => {
    const [date, setDate] = useState(0);

    useEffect(() => {
        setInterval(() => {
             const upadatedDate = new Date();
             setDate(upadatedDate.toLocaleTimeString());
        }, 1000)
    }, []);
    return (
        <div className="container">
            <h1>Hello useEffect</h1>
            <p>Date: {date}</p>
        </div>
    )
}



