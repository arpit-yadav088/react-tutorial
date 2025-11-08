import React, { useEffect, useState } from 'react'

const HowNotToFatchApi = () => {
  const [apiData, setApiData] = useState([]);

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      // setApiData(data)
    })
    .catch((error) => console.log(error));

  return (
    <div className='container Effect-container'>
     <ul>
      data:
      {apiData.map((curData) => {
        return <li key={curData}> {curData.title} </li>
      })}
      </ul>   
    </div>
  )
}

export default HowNotToFatchApi;