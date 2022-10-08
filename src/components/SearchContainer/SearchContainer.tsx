import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const SearchContainer = styled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: column-reverse;
  margin: 20px 0;
  justify-content: space-around;

  > div {
    margin: 10px 0;
  }
  ${theme.breakpoints.up("md")} {
    flex-direction: row;
    justify-content: space-between;

    > div {
      margin: 0;
    }
  }

`
);
