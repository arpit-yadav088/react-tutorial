import React from 'react'
import "./EV.css";

const EventPropagation = () => {

    const handleGrandParent = () => {
        console.log("GrandParent Clicked")
    }

     const handleParentClick = () => {
        console.log("Parent Clicked")
    }

    const handleChildClick = (event) => {
        console.log(event)
        event.stopPropagation();
        console.log("child clicked")
    }

  return (
    <section className='main div'>
        <div className="g-div" onClickCapture={handleGrandParent}>
            <div className="p-div" onClickCapture={handleParentClick}>
                 <button className="c-div" onClickCapture={handleChildClick}>child div</button>
            </div>
        </div>
    </section>
  )
}



export default EventPropagation