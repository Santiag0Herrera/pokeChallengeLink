import axios from "axios";

export default async function getPokemonDetails(url) {
    try {
        const response = await axios.get(`${url}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}