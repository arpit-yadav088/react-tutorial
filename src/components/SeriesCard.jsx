import React from 'react'

export const SeriesCard = (props) => {
    console.log(props)

    const btn_style = {
            padding: "1.2rem 2.4rem",
            border: "none",
            fontSize: "1.2rem",
            backgroundColor: `${props.curElem.rating >= 8.5 ? "#FF6347" : "#FF1493" }`,
            color: "var(--bg-color)",
          }

          const ratingClass = props.curElem.rating >= 8.5 ? "super_hit" : "average"

          function handleButtonClick() {
        alert("hey i am onclick event");
    }

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
         <h2>Rating:
          <span className={`rating ${ratingClass}`}> 
            {props.curElem.rating} 
            </span> 
            </h2>
         <p>Summary: {props.curElem.description}</p>
         <p>Genre: {props.curElem.genre}</p>
         <p>Cast: {props.curElem.cast}</p>
         <a href={props.curElem.watch_url} target='_blank'>
         <button 
              onClick={handleButtonClick}
           style={btn_style}
         >Watch now</button>  
         </a>
         </div>
      </li> 
  )
}

