import { useCallback, useEffect, useState } from "react";
import { getPokemonList } from "../services/api";
import { Pokemon } from "../types/Pokemon";

export const usePokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [blocks, setBlocks] = useState(1);
  const [loading, setLoading] = useState(true);

  const requestPokemon = async (page: number) => await getPokemonList(page);

  useEffect(() => {
    (async () => {
      const pokemon = await requestPokemon(1);
      setPokemonList(pokemon);
      setLoading(false);
    })();
  }, []);

  const nextPage = useCallback(async () => {
    setLoading(true);
    const more = await requestPokemon(blocks + 1);
    setBlocks((prev) => prev + 1);
    setPokemonList((prev) => [...prev, ...more]);
    setLoading(false);
  }, [blocks]);

  return { pokemonList, setPokemonList, setLoading, nextPage, loading };
};
