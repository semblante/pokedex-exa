import React, {useState, useEffect} from 'react';

// TODO: use interface to store pokemon props
import PokemonList from './PokemonList';
import PokedexHeader from './PokedexHeader';
import SearchBar from './SearchBar';

const POKE_API = "https://pokeapi.co/api/v2/pokemon";

const PokedexBody:React.FC = () => {

  const [pokemons, setPokemons] = useState([])
    
  // Calling pokemons from API
  const getPokeData = async () => {
    const response = await fetch(POKE_API)
    const data = await response.json()
    const names = data.results.map((r: { name: any; }) => r.name) // extracting 'name' prop into array of names
    console.log(data)

    setPokemons(names)
  }

  // TODO check if after render? 
  useEffect(() => {
      getPokeData();
  }, []);

  return (
    <>
      <div className='bg-white'>
        <SearchBar/>

        <div className="grid grid-cols-3 gap-4">  

          {pokemons.map((value,index) => (
            <span className="p-4 bg-slate-300" key={`${index}-${value}`}>
              <div>POKE IMAGEN</div>
              {value}
            </span>
          ))}
              
        </div>
      </div>
    </>
  )
}

export default PokedexBody
