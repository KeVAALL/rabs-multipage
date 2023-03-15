import { Container } from "@mui/material";
import React from "react";

export default function MainContainer({ children }) {
  return (
    <>
      <Container maxWidth={false} sx={{ maxWidth: 1400 }}>
        {children}
      </Container>
    </>
  );
}
