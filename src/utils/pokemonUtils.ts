import { Pokemon } from "../types";

export const pokemonColorByType = [
  { name: "bug", color: "#7bcf00" },
  { name: "dark", color: "#5a566a" },
  { name: "dragon", color: "#0076ff" },
  { name: "electric", color: "#ffde00" },
  { name: "fairy", color: "#ff76ff" },
  { name: "fighting", color: "#ff215b" },
  { name: "fire", color: "#ff9900" },
  { name: "flying", color: "#89bdff" },
  { name: "ghost", color: "#4e6aff" },
  { name: "grass", color: "#1cd80e" },
  { name: "ground", color: "#ff6b0d" },
  { name: "ice", color: "#2ee4c6" },
  { name: "normal", color: "#9fa39d" },
  { name: "poison", color: "#f149ff" },
  { name: "psychic", color: "#ff6c64" },
  { name: "rock", color: "#d8bc5a" },
  { name: "steel", color: "#23a1bd" },
  { name: "water", color: "#14a8ff" },
];

export const pokemonColor = (pokemon: Pokemon, typeIndex = 0) => {
  return pokemonColorByType.filter(
    (type) => pokemon.types[typeIndex].type.name.indexOf(type.name) !== -1
  );
};

export const pokemonImageUrl = (pokemonId: number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`;
};

export const formatPokemonId = (id: number) => {
  if (id < 10) return `#00${id}`;
  else if (id >= 10 && id < 99) return `#0${id}`;
  else return `#${id}`;
};
