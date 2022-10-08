import { useState } from "react";
import { Box, Fade, Alert, Divider, Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { BaseLayout } from "../../layouts";
import { PokemonList, SearchFilter, SearchInput } from "../../components";
import { usePokemonList } from "../../hooks";
import { Pokemon } from "../../types";

export const Home = () => {
  const { pokemonList, nextPage, loading } = usePokemonList();
  const [searchResult, setSearchResult] = useState<Pokemon[] | null>(null);
  const [filterIndex, setFilterIndex] = useState(1);
  const [error, setError] = useState("");

  const onSearch = (result: Pokemon | null, error: boolean = false) => {
    if (!error) {
      setError("");
      return result ? setSearchResult([result]) : setSearchResult(null);
    }

    setError("Pokemon not found");
  };

  const onFilter = (result: Pokemon[] | null, error: boolean = false) => {
    return result ? setSearchResult(result) : setSearchResult(null);
  };

  const filterNext = () => {
    setFilterIndex(filterIndex + 1);
  };

  return (
    <BaseLayout>
      <Box sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
        <SearchFilter
          onFilter={onFilter}
          filterIndex={filterIndex}
          setFilterIndex={setFilterIndex}
        />
        <SearchInput onSearch={onSearch} />
      </Box>
      <Divider sx={{ mb: 3 }} />
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

        {searchResult && searchResult.length >= 15 && (
          <Fade in={Boolean(pokemonList.length)}>
            <Button
              size="large"
              onClick={() => filterNext()}
              variant="outlined"
              color="primary"
            >
              Get more results
            </Button>
          </Fade>
        )}
      </Box>
    </BaseLayout>
  );
};
