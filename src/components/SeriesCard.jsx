import React from 'react'

export const SeriesCard = (props) => {
    console.log(props)
  return (

    <li className='card'>
      <nav className="navbar">
      <img 
      src='public/images/Navbar Netflix.jpg'></img>
      </nav>
       <div>
        <img 
        src={props.curElem.img_url} 
         alt={props.curElem.name}
          width='100%' 
          height='1o0%' 
          />
         </div> 
         <div className='card-content'>
         <h1>Name: {props.curElem.name} </h1>
         <h2>Rating: {props.curElem.rating} </h2>
         <p>Summary: {props.curElem.description}</p>
         <p>Genre: {props.curElem.genre}</p>
         <p>Cast: {props.curElem.cast}</p>
         <a href={props.curElem.watch_url} target='_blank'>
         <button className='bg-amber-600'>Watch now</button>  
         </a>
         </div>
      </li> 
  )
}

