import React, { useEffect, useState } from "react";
import getPokemonDetails from "../../servicios/getPokemonDetail";
import ReusableCard from "../reusableCard/resusableCard";

const Pokemon = (props) => {
    const [pokemonData, setPokemonData] = useState({})

    const fetchPokemonData = async (url) => {
        const response = await getPokemonDetails(url)
        setPokemonData(response)
    };

    useEffect(()=>{
        fetchPokemonData(props.url)
    }, [])

    const handleClose = () => {
        props.onClick()
    }
    return(
        <div className="card">
        <ReusableCard img={false} button={true} pokemon={true} pokemonType={pokemonData.types} cardTitle={pokemonData.name} onClick={handleClose}/>
        </div>
    )
}

export default Pokemon