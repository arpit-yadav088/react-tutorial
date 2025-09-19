import './EV.css'
import React from 'react'
import { useState } from 'react';


//using ReactState 


export const DerivedState = () => {

    const [users, setUsers] = useState([
    {name: "Arpit", age: 21},
    {name: "Aman", age: 24},
    {name: "Ashush", age: 20},
    {name: "Kiran", age: 25},
] )

  return (
    <div className='main-div'>
        <h1>users list</h1>
        <ul>
            {
                users.map((curElem, index) => {
                    return (
                        <li key={index}>
                            {curElem.name} - {curElem.age} year ago
                        </li>
                    );
                }
            )
            }
        </ul>
    </div>
  );
};



// normal method 


// const users = [
//     {name: "Arpit", age: 21},
//     {name: "Aman", age: 24},
//     {name: "Ashush", age: 20},
//     {name: "Kiran", age: 25},
// ]

// export const DerivedState = () => {
//     return(
//         <div className="main-div">
//             <h1 className='title'>this is user list</h1>
//             <ul>
//                 {
//                     users.map((curElem, index) => {
//                         return (
//                             <li key={index}>
//                                {curElem.name} - {curElem.age} year old
//                             </li>
//                         )
//                     }
//                 )
//                 }
//             </ul>
//         </div>
//     )
// }





 