import axios from "axios";

export default async function getPokemones() {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=50')
        return response.data
    } catch (error) {
        console.error(error)
    }
}