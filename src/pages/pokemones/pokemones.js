import React, { useEffect, useState } from "react";
import getPokemones from "../../servicios/getPokemones";
import './pokemones.css'
import Pokemon from "../../components/pokemon/pokemon";

const Pokemones = () => {
    const [pokemones, setPokemones] = useState([])
    const [pokemonView, setPokemonView] = useState('')
    const [isPokeView, setPokeView] = useState(false)

    const fetchData = async () => {
        const response = await getPokemones();
        setPokemones(response.results);
        console.log(pokemones);
    };

    useEffect(()=>{
        fetchData();
    }, [])

    const handleOnClick = (url) => {
        console.log("click")
        setPokeView(false)
        setPokemonView(url)
        setPokeView(true)
    }

    const handleClosePokeView = () => {
        setPokeView(false)
    }

    return(
        <div className="pokemones-container">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Url</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemones.map((poke) => (
                    <tr key={poke.name}>
                        <td>{poke.name}</td>
                        <td><button onClick={ () => handleOnClick(poke.url)}>Link to Pokemon</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
            {isPokeView && 
                <Pokemon url={pokemonView} onClick={handleClosePokeView}/>
            }
        </div>
    )
}

export default Pokemones