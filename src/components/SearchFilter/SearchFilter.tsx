import { FC, useState, useEffect } from "react";
import { ListItem, Chip } from "@mui/material";
import { getPokemonByType } from "../../services/api";
import { pokemonColorByType } from "../../utils";
import { Pokemon } from "../../types";
import { FilterContainer } from "./styled";

type SearchFilterType = {
  onFilter: (pokemon: Pokemon[] | null, error?: boolean) => void;
  filterIndex?: number;
  setFilterIndex?: React.Dispatch<React.SetStateAction<number>>;
};

export const SearchFilter: FC<SearchFilterType> = ({
  onFilter,
  filterIndex,
  setFilterIndex,
}) => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (filterIndex !== 1) {
      filter(selected);
    }
  });

  const filter = async (name: string) => {
    if (!name) return onFilter(null);

    const pokemonByType = await getPokemonByType(name, 15 * (filterIndex || 1));
    pokemonByType ? onFilter(pokemonByType) : onFilter(null, true);
  };

  const handleSelect = (name: string) => {
    if (name && name !== selected) {
      setFilterIndex && setFilterIndex(1);
    }
    setSelected(selected === name ? "" : name);
    filter(selected === name ? "" : name);
  };

  return (
    <FilterContainer>
      {pokemonColorByType.map((data, index) => {
        return (
          <ListItem sx={{ py: 0, px: 1 }} key={data.name + index}>
            <Chip
              sx={{
                bgcolor: selected === data.name ? data.color : "transparent",
                border: `2px solid ${data.color}`,
                color: selected === data.name ? "background.default" : "white",
                fontWeight: 700,
                textTransform: "capitalize",
              }}
              onClick={() => handleSelect(data.name)}
              label={data.name}
            />
          </ListItem>
        );
      })}
    </FilterContainer>
  );
};
