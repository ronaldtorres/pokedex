import { FC, useState } from "react";
import {
  TextField,
  InputAdornment,
  Box,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Pokemon } from "../../types";
import { getPokemon } from "../../services/api";
import { debounce } from "../../utils";

type SearchInputType = {
  onSearch: (pokemon: Pokemon | null, error?: boolean) => void;
  debounceTime?: number;
  setError?: (value: boolean) => void;
};

export const SearchInput: FC<SearchInputType> = ({
  onSearch,
  debounceTime,
}) => {
  const [loading, setLoading] = useState(false);
  const search = debounce(async (text: string) => {
    if (!text) {
      return onSearch(null);
    }

    setLoading(true);

    const requestPokemon = await getPokemon(text.toLowerCase());

    requestPokemon.data
      ? onSearch(requestPokemon?.data)
      : onSearch(null, requestPokemon.error);

    setLoading(false);
  }, debounceTime || 700);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    search(e.target.value);
  };

  return (
    <Box>
      <TextField
        onChange={handleChange}
        label="Search by id or name"
        InputProps={{
          style: { width: "340px" },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {loading && <CircularProgress size={18} />}
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
