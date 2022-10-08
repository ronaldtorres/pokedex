import { Box, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { usePokemonList } from "../../hooks";
import { BaseLayout } from "../../layouts";

export const Home = () => {
  const { pokemonList, nextPage } = usePokemonList();

  return (
    <BaseLayout>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={8}>
          {pokemonList.map((pokemon, i) => (
            <Grid key={i + pokemon.name + pokemon.id} item md={6} lg={4}>
              <Link
                to={`/details/${pokemon.name}`}
                style={{ textDecoration: "none" }}
              >
                <Box>{pokemon.name}</Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Button onClick={() => nextPage()} color="primary">
        Next Page
      </Button>
    </BaseLayout>
  );
};
