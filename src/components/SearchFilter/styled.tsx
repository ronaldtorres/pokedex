import { Paper } from "@mui/material";
import { styled } from "@mui/system";

export const FilterContainer = styled(Paper)`
  display: flex;
  flex-wrap: no-wrap;
  max-width: 340px;
  overflow-x: scroll;
  padding: 8px;
  margin: 0;
  background-color: transparent;

  &::-webkit-scrollbar {
    height: 5px;
    cursor: e-resize;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
