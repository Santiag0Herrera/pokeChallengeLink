import React, { useEffect, useState } from "react";
import getPokemones from "../../servicios/getPokemones";
import './pokemones.css'
import Pokemon from "../../components/pokemon/pokemon";

const Pokemones = () => {
    const [pokemones, setPokemones] = useState([])
    const [pokemonView, setPokemonView] = useState('')
    const [isPokeView, setPokeView] = useState(false)
    const [searchBarValue, setSearchBarValue] = useState('')
    const [isMatch, setIsMatch] = useState([])

    const fetchData = async () => {
        const response = await getPokemones();
        setPokemones(response.results);
        console.log(pokemones);
    };

    useEffect(()=>{
        fetchData();
    }, [])

    const handleOnClick = (url) => {
        setPokeView(false)
        setTimeout(()=>{
            setPokeView(true)
            setPokemonView(url)
        }, 100)
    }

    const handleOnChange = (event) => {
        console.log(event.target.value)
        setSearchBarValue(event.target.value)
        const newArray = pokemones.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(event.target.value.toLowerCase())
        )
        event.target.value === '' ? setIsMatch([]) : setIsMatch(newArray)
    }

    const handleClosePokeView = () => {
        setPokeView(false)
    }

    return(
        <div>
            <input placeholder="Search for a pokemon" value={searchBarValue} onChange={handleOnChange} className="searchBar"/>
            {isMatch.length > 0 && 
            <>
                <span className="result">Did you mean... </span>
                { isMatch.map((item)=> <span key={item.id} className="result" > {item.name + ' - '} </span>
                )}
            </>
            }
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
                            <td><button onClick={ () => handleOnClick(poke.url)} className="pokemonButton" >Link to Pokemon</button></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                {isPokeView && 
                <Pokemon url={pokemonView} onClick={handleClosePokeView} />
                }
            </div>
        </div>
    )
}

export default Pokemones