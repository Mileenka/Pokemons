
import fetchPokemonData from "../apis/fetchPokemonData.js";
import createPokemonComponent from "../components/createPokemonComponent.js";
import data from "../data.js";
import dom from "../dom.js";



const loadPokemonHandler = async () => {
    // debugger
    const input = dom.input.value;
    let name;
    let pokemonId;
    if(isNaN(input)) {
        name = input.toLowerCase();
    } else {
        pokemonId = Number(input);
    }
    
    if(data.id === pokemonId || data.name === name){
        return;
    }
    let pokemonData;
    if(name) {
        pokemonData = await fetchPokemonData(name);
        data.name = pokemonData.name;
        data.id = pokemonData.id;
    } 

    if(pokemonId) {
        pokemonData = await fetchPokemonData(pokemonId);
        data.name = pokemonData.name;
        data.id = pokemonData.id;
    }

    createPokemonComponent(pokemonData);
}

export default loadPokemonHandler;
