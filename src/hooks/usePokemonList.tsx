import { useCallback, useEffect, useState } from "react";
import { getPokemonList } from "../services/api";
import { Pokemon } from "../types/Pokemon";

export const usePokemonList = () => {
  const [pokemonList, setpokemonList] = useState<Pokemon[]>([]);
  const [blocks, setBlocks] = useState(1);

  const requestPokemon = async (page: number) => await getPokemonList(page);

  useEffect(() => {
    (async () => {
      const pokemon = await requestPokemon(1);
      setpokemonList(pokemon);
    })();
  }, []);

  const nextPage = useCallback(async () => {
    const more = await requestPokemon(blocks + 1);
    setBlocks((prev) => prev + 1);
    setpokemonList((prev) => [...prev, ...more]);
  }, [blocks]);

  return { pokemonList, nextPage };
};
