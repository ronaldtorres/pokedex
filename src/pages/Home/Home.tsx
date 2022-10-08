import { useState } from "react";
import { Box, Fade, Alert } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { BaseLayout } from "../../layouts";
import { PokemonList, SearchInput } from "../../components";
import { usePokemonList } from "../../hooks";
import { Pokemon } from "../../types";

export const Home = () => {
  const { pokemonList, nextPage, loading } = usePokemonList();
  const [searchResult, setSearchResult] = useState<Pokemon[] | null>(null);
  const [error, setError] = useState("");

  const onSearch = (result: Pokemon | null, error: boolean = false) => {
    if (!error) {
      setError("");
      return result ? setSearchResult([result]) : setSearchResult(null);
    }

    setError("Pokemon not found");
  };

  return (
    <BaseLayout>
      <Box sx={{ my: 3 }}>
        <SearchInput onSearch={onSearch} />
      </Box>

      {error ? (
        <Alert severity="error" color="info">
          {error}
        </Alert>
      ) : (
        <PokemonList list={searchResult || pokemonList} />
      )}

      <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
        {!searchResult && !error && (
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
        )}
      </Box>
    </BaseLayout>
  );
};
