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
        const updatedPokemones = response.results.map((poke, index) => ({
            ...poke,
            id: index + 1
        }));
        setPokemones(updatedPokemones);
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
            <label for="searchBar">Search a Pokemon: </label>
            <br />
            <input placeholder="Example: pikachu" value={searchBarValue} onChange={handleOnChange} className="searchBar" id="searchBar"/>
            <div className="result container">
            {isMatch.length > 0 && searchBarValue != '' &&
                <>
                <span className="result">Are you looking for </span>
                { isMatch.map((item)=> <span key={item.id} className="result" > {`'${item.name}' `} </span>
                )}
                <span className="result">?</span>
                </>
            }
            {
                isMatch.length < 1 && searchBarValue != '' &&
                <p className="failResult">Sorry, your pokemon is not in this list...</p>
            }
            </div>
            <div className="pokemones-container">
                <table>
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>Nombre</th>
                            <th>Url</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pokemones.map((poke) => (
                        <tr key={poke.name}>
                            <td>{poke.id}</td>
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