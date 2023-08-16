import dom from "../dom.js";
import loadPokemonHandler from "../handlers/loadPokemonHandler.js";

const loadEvent = () => {
    dom.searchPokeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loadPokemonHandler();
    })
}

export default loadEvent;
