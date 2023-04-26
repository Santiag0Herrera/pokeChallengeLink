import React, { useEffect, useState } from "react";
import getPokemonDetails from "../../servicios/getPokemonDetail";
import ReusableCard from "../reusableCard/resusableCard";

const Pokemon = (props) => {
    const [pokemonData, setPokemonData] = useState({})

    const fetchPokemonData = async (url) => {
        const response = await getPokemonDetails(url);
        console.log("poke data", response);
        setPokemonData(response);
    };

    useEffect(()=>{
        fetchPokemonData(props.url)
    }, [])

    const handleClose = () => {
        props.onClick()
    }
    return(
        <div>
        <ReusableCard name={pokemonData.name} onClick={handleClose}/>
        </div>
    )
}

export default Pokemon