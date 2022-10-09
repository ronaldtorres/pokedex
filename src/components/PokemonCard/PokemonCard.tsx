import { FC } from "react";
import {
  Box,
  CardContent,
  CardMedia,
  Fade,
  IconButton,
  Typography,
} from "@mui/material";
import StraightenIcon from "@mui/icons-material/Straighten";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { Pokemon } from "../../types";
import { CardChip, CardContainer, CardTitle, CardContentBox } from "./styled";
import { pokemonColor, pokemonImageUrl, formatPokemonId } from "../../utils";

type PokemonCardTpe = {
  pokemon: Pokemon;
  isFavorite?: boolean;
  onClickFavorite?: (p: Pokemon, state: boolean) => void;
};

export const PokemonCard: FC<PokemonCardTpe> = ({
  pokemon,
  onClickFavorite,
  isFavorite,
}) => {
  const imgUrl = pokemonImageUrl(pokemon.id);
  const [{ color }] = pokemonColor(pokemon);

  return (
    <Fade in={true}>
      <CardContainer color={color}>
        <CardTitle>{pokemon.name}</CardTitle>
        <CardMedia
          component="img"
          image={imgUrl}
          alt={pokemon.name}
          sx={{ pointerEvents: "none", minBlockSize: "300px" }}
        />
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
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
                {formatPokemonId(pokemon.id)}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Id
              </Typography>
            </Box>
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
            <Box>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  onClickFavorite && onClickFavorite(pokemon, !isFavorite);
                }}
              >
                {isFavorite ? (
                  <StarIcon fontSize="large" />
                ) : (
                  <StarBorderIcon fontSize="large" />
                )}
              </IconButton>
            </Box>
          </CardContentBox>
        </CardContent>
      </CardContainer>
    </Fade>
  );
};
