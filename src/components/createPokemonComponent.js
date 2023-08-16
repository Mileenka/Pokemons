const createPokemonComponent = (userData) => {
    const container = document.getElementById('container');
    container.innerText = '';
    const pokeImg = document.createElement('div');
    pokeImg.classList = 'pokeImg';

    const image = document.createElement('img');
    image.src = userData.sprites.other.home.front_default;
    image.alt = 'pokemon image'

    const pokeName = document.createElement('h5');
    pokeName.className = 'pokeName';
    pokeName.innerText = userData.name;
    
    // const pokeStats = document.createElement('p');
    // pokeStats.className = 'pokeStats';
    // pokeStats.innerText = userData.stats['base_stat'];
    
    pokeImg.appendChild(image);
    container.append(pokeImg, pokeName);
}

export default createPokemonComponent;