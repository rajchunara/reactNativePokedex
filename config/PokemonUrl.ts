export const getAllPokemonURL = (limit: number, offset: number): string => {
  return `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
};

export const getPokemonImageURL = (pokeId: string): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`;
  // return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;
};
