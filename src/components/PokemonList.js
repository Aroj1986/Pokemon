import React, { useState, useEffect, useParams } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

function PokemonList() {

  const [pokemon, setPokemon] = useState([])

  useEffect(()=>{
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
          setPokemon(response.data.results);
      })
      .catch((err)=>{
        console.log(err)
      })
  }, []);

  return (
    <div>
      <hr />
      {pokemon.map((pokeItem, index) => {
        return (
          <ul key={index}>
            <li>{pokeItem.name}</li>
            <NavLink to={`/pokemon/${pokeItem.name}`}><button>view more</button></NavLink>
          </ul>
        );
        })
      }
    </div>
  );
}

export default PokemonList
