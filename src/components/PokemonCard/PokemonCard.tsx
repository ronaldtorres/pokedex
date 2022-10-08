import { FC } from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import StraightenIcon from "@mui/icons-material/Straighten";
import { Pokemon } from "../../types";
import { CardChip, CardContainer, CardTitle, CardContentBox } from "./styled";
import { pokemonColor, pokemonImageUrl } from "../../utils";

type PokemonCardTpe = {
  pokemon: Pokemon;
};

export const PokemonCard: FC<PokemonCardTpe> = ({ pokemon }) => {
  const imgUrl = pokemonImageUrl(pokemon.id);
  const [{ color }] = pokemonColor(pokemon);

  return (
    <CardContainer color={color}>
      <CardTitle>{pokemon.name}</CardTitle>
      <CardMedia
        component="img"
        image={imgUrl}
        alt={pokemon.name}
        sx={{ pointerEvents: "none", minHeight: "300px", minWidth: "300px" }}
      />
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Typography fontWeight="bold" variant="subtitle1">
            {pokemon.types.map(({ type }, i) => (
              <CardChip
                key={type + String(i)}
                size="medium"
                label={type.name}
                bg={pokemonColor(pokemon, i)[0].color}
              />
            ))}
          </Typography>
        </Box>
        <CardContentBox>
          <Box>
            <Typography fontWeight="bold" variant="subtitle1">
              {`${pokemon.weight / 10}`} kg
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Weight
            </Typography>
          </Box>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <StraightenIcon
                sx={{ marginRight: 0.5, transform: "rotate(90deg)" }}
              />
              <Typography fontWeight="bold" variant="subtitle1">
                <span>{`${pokemon.height / 10}`} m</span>
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary">
              Height
            </Typography>
          </Box>
        </CardContentBox>
      </CardContent>
    </CardContainer>
  );
};
