import { FC, useMemo } from "react";
import { Box } from "@mui/material";
import { PokemonStatType } from "../../types/Pokemon";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const labels = [
  "HP",
  "Attack",
  "Defense",
  "Special Attack",
  "Special Defense",
  "Speed",
];

type PokemonStatsType = { stats: PokemonStatType[]; color: string };

export const PokemonStats: FC<PokemonStatsType> = ({ stats, color }) => {
  const data = useMemo(
    () => stats.map((s) => (s.base_stat > 100 ? 100 : s.base_stat)),
    [stats]
  );

  const datasets = [
    {
      label: "Abilities",
      data: data,
      fill: true,
      backgroundColor: color + "4F",
      borderColor: color,
      borderWidth: 2,
    },
  ];

  const options: ChartOptions<"radar"> = {
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          backdropColor: "#0A1929",
          color: "white",
          font: { size: 12 },
        },
        grid: {
          color: "lightgray",
          circular: true,
        },
        angleLines: {
          color: "white",
        },
        pointLabels: {
          color: "white",
        },
      },
    },
  };

  return (
    <Box sx={{ maxWidth: "600px", m: "0 auto" }}>
      <Radar data={{ labels, datasets }} options={options} />
    </Box>
  );
};
