import { Pokemon } from "../../types";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { PokemonCard } from "../PokemonCard";

type PokemonListType = {
  list: Pokemon[];
};

export const PokemonList: React.FC<PokemonListType> = ({ list }) => {
  return (
    <Box>
      <Grid container spacing={8}>
        {list.map((pokemon, i) => (
          <Grid key={i + pokemon.name + pokemon.id} item md={6} lg={4}>
            <Link
              to={`/details/${pokemon.name}`}
              style={{ textDecoration: "none" }}
            >
              <PokemonCard pokemon={pokemon} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
