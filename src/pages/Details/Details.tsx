import { useEffect, useState, useMemo } from "react";
import { Button, Box, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { BaseLayout } from "../../layouts";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemon } from "../../services/api";
import { Pokemon } from "../../types";
import { pokemonColor } from "../../utils";
import { PokemonCard, PokemonStats } from "../../components";
import { useFavorites } from "../../hooks";

export const Details = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon>();
  const navigate = useNavigate();
  const color = useMemo(
    () => (pokemon ? pokemonColor(pokemon)[0].color : ""),
    [pokemon]
  );
  const { toggleFavorite, favorites } = useFavorites();

  useEffect(() => {
    if (!name) return;

    getPokemon(name).then((res) => {
      if (res.data) {
        setPokemon(res.data);
      }
    });
    // Go to top when navigate to details view
    document.body.scrollIntoView();
  }, [name]);

  return !pokemon ? null : (
    <BaseLayout>
      <Button onClick={() => navigate(-1)}>
        <ArrowBackIcon />
        <Box sx={{ ml: 1 }}>Back</Box>
      </Button>
      <Typography variant="h3" sx={{ my: 2 }} fontWeight={700}>
        Stats for{" "}
        <span style={{ textTransform: "capitalize", color }}>
          {pokemon.name}
        </span>
      </Typography>
      <Grid sx={{ paddingTop: 4 }} container spacing={8}>
        <Grid item lg={4}>
          <Box>
            <PokemonCard
              pokemon={pokemon}
              isFavorite={pokemon.name in favorites}
              onClickFavorite={toggleFavorite}
            />
          </Box>
        </Grid>
        <Grid item lg={8}>
          <Box sx={{ paddingBottom: 2 }}>
            <PokemonStats stats={pokemon.stats} color={color} />
          </Box>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};
