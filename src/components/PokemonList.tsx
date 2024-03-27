import React from "react";
import useFetch from "../hooks/useFetch";
import PokemonCard from "./PokemonCard";

const PokemonList:React.FC = () => {

    interface PokemonModel {
        id: number,
        name: string,
        url: string
    }

    const pokemons = useFetch("https://pokeapi.co/api/v2/pokemon");
    const pokemonList = pokemons.state;

    console.log(pokemonList)
    return (
        <div className="w-full bg-white">
            <PokemonCard></PokemonCard>
        </div>
    )
}

export default PokemonList