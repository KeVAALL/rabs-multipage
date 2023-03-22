import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { mediumDown } from "../../styles";

export default function RequestDemo({ handleClickOpen }) {
  const mdDown = mediumDown();

  return (
    <Button
      sx={{
        py: 1.3,
        width: "260px",
        color: "#fff",
        backgroundColor: "#DF21B6",
        border: "2px #DF21B6 solid",
        borderRadius: "10px",
        textTransform: "none",
        alignSelf: mdDown && "center",
        ":hover": {
          backgroundColor: "white", // theme.palette.primary.main
          color: "#DF21B6",
          border: "2px #DF21B6 solid",
          transition: "all 0.5s",
        },
      }}
      variant="outlined"
      onClick={handleClickOpen}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body1">Request Demo and Trial</Typography>
      </Box>
    </Button>
  );
}
