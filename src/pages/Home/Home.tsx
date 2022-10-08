import { Box, Fade } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { BaseLayout } from "../../layouts";
import { PokemonList } from "../../components";
import { usePokemonList } from "../../hooks";

export const Home = () => {
  const { pokemonList, nextPage, loading } = usePokemonList();

  return (
    <BaseLayout>
      <PokemonList list={pokemonList} />
      <Box sx={{ display: "flex", justifyContent: "center", marginY: 4 }}>
        <Fade in={Boolean(pokemonList.length)}>
          <LoadingButton
            size="large"
            onClick={() => nextPage()}
            loading={loading}
            variant="outlined"
            color="primary"
            disabled={loading}
          >
            Load more
          </LoadingButton>
        </Fade>
      </Box>
    </BaseLayout>
  );
};
