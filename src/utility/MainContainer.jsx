import { Container } from "@mui/material";
import React from "react";

export default function MainContainer({ children }) {
  return (
    <>
      <Container maxWidth={false} sx={{ maxWidth: 1230, height: "100%" }}>
        {children}
      </Container>
    </>
  );
}
