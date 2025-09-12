
import React from 'react'
import SeriesData from '../api/seriesData';
import { SeriesCard } from './seriesCard';

//using props tutorial 13

 const Netflix = () => {
  return (
    <>
    <ul>
      {SeriesData.map((curElem)=> (
           <SeriesCard key={curElem.id} curElem={curElem} />
        ))}
    </ul>
    </>
  );
};

export default Netflix 

{/* // tutorial 12 */}
{/* 
// const Netflix = () => { */}
{/* //   return (
//     <ul>
//       {seariesData.map((curElem) => { */}
{/* //     return (
//       <li key={curElem.id}>
//       <div>
//         <img */}
{/* //          src={curElem.img_url} 
//          alt={curElem.name}
//           width='40%' height='40%' 
//           />
//       </div> */}
{/* //       <h1>Name: {curElem.name} </h1>
//       <h2>Rating: {curElem.rating} </h2>
//       <p>Summary: {curElem.description}</p>
//       <p>Genre: {curElem.genre}</p>
//       <p>Cast: {curElem.cast}</p>
//       <a href={curElem.watch_url} target='_blank'>
//         <button className='bg-amber-600'>Watch now</button>  
//       </a>
//       </li> */}
{/* //     )
//    })}
//   </ul>
//  );
// }; */}


// export default Netflix 