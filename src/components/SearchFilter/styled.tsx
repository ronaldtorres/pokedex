import { Paper } from "@mui/material";
import { styled } from "@mui/system";

export const FilterContainer = styled(Paper)(
  ({ theme: {breakpoints} }) => `
  display: flex;
  flex-wrap: no-wrap;
  overflow-x: scroll;
  padding: 8px;
  margin: 0;
  background: transparent;

  ${breakpoints.up('lg')} {
    width: 52%
  }

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
`
);
