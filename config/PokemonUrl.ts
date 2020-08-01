export const getAllPokemonURL = (limit: number, offset: number): string => {
  return `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
};
