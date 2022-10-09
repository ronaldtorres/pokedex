import { Box, Fade } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.png";

export const Header = () => {
  return (
    <Box sx={{ textAlign: "center", height: '100px' }}>
      <Fade in={true}>
        <Link to="/">
          <img width={250} src={Logo} alt="Logo" />
        </Link>
      </Fade>
    </Box>
  );
};
