export interface PokeapiAll {
  results: pokemonData[];
}

interface pokemonData {
  name: string;
  url: string;
}
