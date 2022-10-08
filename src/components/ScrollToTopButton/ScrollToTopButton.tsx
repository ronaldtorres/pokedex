import { IconButton, Fade } from "@mui/material";
import { useScroll } from "../../hooks";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export const ScrollToTopButton = () => {
  const [scroll] = useScroll();

  const goToTop = () => {
    document.body.scrollIntoView();
  };

  return (
    <Fade in={scroll.percentage >= 5}>
      <IconButton
        onClick={goToTop}
        sx={{
          position: "fixed",
          right: 10,
          bottom: 10,
          backgroundColor: "primary.dark",
        }}
      >
        <ExpandLessIcon />
      </IconButton>
    </Fade>
  );
};
