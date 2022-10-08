import { Box, Grid, Button } from "@mui/material";
import { BaseLayout } from "../../layouts";
import { PokemonList } from "../../components";
import { usePokemonList } from "../../hooks";

export const Home = () => {
  const { pokemonList, nextPage } = usePokemonList();

  return (
    <BaseLayout>
      <PokemonList list={pokemonList} />
      <Button onClick={() => nextPage()} color="primary">
        Next Page
      </Button>
    </BaseLayout>
  );
};
