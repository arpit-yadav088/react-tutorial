import React from 'react'

export const SeriesCard = (props) => {
    console.log(props)
  return (
    
    <li>
       <div>
        <img 
        src={props.curElem.img_url} 
         alt={props.curElem.name}
          width='40%' 
          height='40%' 
          />
         </div> 
         <h1>Name: {props.curElem.name} </h1>
         <h2>Rating: {props.curElem.rating} </h2>
         <p>Summary: {props.curElem.description}</p>
         <p>Genre: {props.curElem.genre}</p>
         <p>Cast: {props.curElem.cast}</p>
         <a href={props.curElem.watch_url} target='_blank'>
         <button className='bg-amber-600'>Watch now</button>  
         </a>
    </li> 
  )
}

