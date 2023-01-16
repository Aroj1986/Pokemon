import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import './poke.css'

function PokemonPage() {
  const navigate = useNavigate()
  const {name} = useParams()
  const [pokeItem, setPokeItem] = useState({})

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response)=>{
      setPokeItem(response.data)
    .catch((error) => { alert(error)})
    })
  }, [])

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go Back to the Pokemon List</button>
        <br />
        <br />
        <div className='poke-css'>
          <img src={pokeItem.sprites?.front_default} />
          <div className='pokeDetails-css'>
            <p>{name.toUpperCase()}</p>
            <p> Height = {pokeItem.height}</p>
            <p> weight = {pokeItem.weight}</p>          
          </div>
        </div>
    </div>
  )
}

export default PokemonPage
