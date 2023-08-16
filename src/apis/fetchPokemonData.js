const fetchPokemonData = async (name) => {
    const baseUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch pokemon with status: ${response.status}`)
          }
        const pokemonData = await response.json();
        return pokemonData;
    } catch (err) {
        console.error('error:', err);
    }
}
export default fetchPokemonData;
