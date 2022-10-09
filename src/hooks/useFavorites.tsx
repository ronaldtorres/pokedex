import { useState, useEffect } from "react";
import { Pokemon } from "../types";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<{ [x: string]: number }>({});

  useEffect(() => {
    const favs = localStorage.getItem("favs");

    if (favs) {
      setFavorites(JSON.parse(favs));
    }
  }, []);

  const addFavorite = (pokemon: Pokemon) => {
    setFavorites((prev) => {
      if (prev[pokemon.name]) return prev;
      const newState = {
        ...prev,
        [pokemon.name]: pokemon.id,
      };

      localStorage.setItem("favs", JSON.stringify(newState));
      return newState;
    });
  };

  const removeFavorite = (pokemon: Pokemon) => {
    setFavorites((prev) => {
      if (!prev[pokemon.name]) return prev;
      const newState = { ...prev };

      delete newState[pokemon.name];

      localStorage.removeItem("favs");
      return newState;
    });
  };

  const toggleFavorite = (pokemon: Pokemon, newStatus: boolean) => {
    newStatus ? addFavorite(pokemon) : removeFavorite(pokemon);
  };

  return { favorites, addFavorite, removeFavorite, toggleFavorite };
};
