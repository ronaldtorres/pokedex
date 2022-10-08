import { Pokemon } from "../types/Pokemon";

const baseURL = "https://pokeapi.co/api/v2";
const LIMIT = 15;

export const getPokemon = async (pokemon: string) => {
  let response: Response | undefined;
  let data: Pokemon | null;
  let error;

  try {
    response = await fetch(`${baseURL}/pokemon/${pokemon}`);
    data = await response.json();
    error = false;
  } catch {
    data = null;
    error = true;
  }

  return { response, data, error };
};

export const getPokemonList = async (page: number) => {
  const offset = LIMIT * (page - 1);
  const response = await fetch(
    `${baseURL}/pokemon?offset=${offset}&limit=${LIMIT}`
  );
  const data = await response.json();

  const promises = data.results.map(
    async (pokemon: { name: string }) => (await getPokemon(pokemon.name)).data
  );

  const pokemonList = Promise.all(promises);

  return pokemonList;
};

type byTypeProps = {
  pokemon: { name: string };
};

export const getPokemonByType = async (type: string, pokemonAmount = LIMIT) => {
  try {
    const response = await fetch(`${baseURL}/type/${type}`);
    const data = await response.json();

    const promises = data.pokemon
      .filter(
        (item: byTypeProps, index: number) => index + 1 <= pokemonAmount && item
      )
      .map(
        async (item: byTypeProps) => (await getPokemon(item.pokemon.name)).data
      );

    const pokemonList = Promise.all(promises);

    return pokemonList;
  } catch (error) {
    console.error(error);
  }
};
