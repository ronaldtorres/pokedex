import { FC, PropsWithChildren } from "react";
import { Container } from "@mui/material";

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Container sx={{ marginTop: "100px" }}>{children}</Container>
    </>
  );
};
