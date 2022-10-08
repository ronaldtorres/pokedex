import styled from "@emotion/styled";
import { Card, Chip, Typography, Box } from "@mui/material";

export const CardContainer = styled(Card)(
  (props) => `
    border: 5px solid ${props.color};
    cursor: pointer;
    background-color: ${props.color}11;
    backdrop-filter: blur( 5px );

    * {
      text-decoration: none;
    }

    &:hover {
      box-shadow: 0px 0px 20px ${props.color}AA
    }
    `
);

export const CardTitle = styled(Typography)`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  padding-top: 1rem;
`;

export const CardChip = styled(Chip)<{ bg: string }>(
  (props) => `
  background-color: ${props.bg};
  color: #0A1929;
  text-transform: capitalize;
  margin: 0 4px;
  box-shadow: 20px 20px 33px ${props.bg}, -20px 20px 33px ${props.bg}AE;
`
);

export const CardContentBox = styled(Box)`
  display: flex;
  justify-content: space-around;
  text-align: center;
`;
