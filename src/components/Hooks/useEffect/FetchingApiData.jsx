import React, { useEffect, useState } from 'react'
import './Pokemon.css';

const  FetchingApiData = () => {

  const [pokemaon, setPokemon] = useState(null);
  
  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const fatchPokemon = () => {
  // fetch("https://pokeapi.co/api/v2/pokemon?limit=25")
  // fetch("https://jsonplaceholder.typicode.com/posts")
  fetch(API)
  .then((res) => res.json())
  .then((data) => {
    setPokemon(data);
  })
  .catch((error) => console.log(error))
  }

  useEffect(() => {
    fatchPokemon();
  }, []);

  console.log(pokemaon);

  if(!pokemaon) 
    return (
  <div>
    <h1>Loading.....</h1>
  </div>
  );

  return (
    <section className='container'>
      <header>
        <h1>Lets Catch Pokemon</h1>
      </header>
      <ul className='card-demo'>
        <li className='pokemon-card'>
          <figure>
            <img
            src={pokemaon.sprites.other.dream_world.front_default}
            alt={pokemaon.name} 
            className='pokemon-image'
            />
          </figure>
          <h1>{pokemaon.name}</h1>
        </li>
      </ul>
    </section>
  )
}


export default  FetchingApiData;


