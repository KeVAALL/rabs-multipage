import { Box, Button, Grid, Typography } from "@mui/material";
import PaddingBox, { PaddingBoxMedium } from "../PaddingBox";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to bottom, #d81dbf, #d519c4, #d115c9, #cd12cf, #c811d4, #c40dd9, #c00bdd, #bc09e2, #b704e8, #b202ed, #ad01f3, #a602f9)",
        }}
      >
        <PaddingBoxMedium>
          <Grid container>
            <Grid item xs={8}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 1,
                  width: "100%",
                  color: "#fff",
                }}
              >
                <Typography variant="h4">Real Estate CRM Software</Typography>
                <Typography variant="h5">
                  Made for Builders, Layout Developers, and Real Estate
                  Marketers.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Button
                  sx={{
                    height: "50px",
                    width: "220px",
                    color: "black",
                    border: "none",
                    borderRadius: "25px",
                    textTransform: "none",
                    backgroundColor: "#fff",
                    ":hover": {
                      // backgroundColor: "#DF21B6",
                      backgroundImage:
                        "linear-gradient(to bottom, #d81dbf, #d519c4, #d115c9, #cd12cf, #c811d4, #c40dd9, #c00bdd, #bc09e2, #b704e8, #b202ed, #ad01f3, #a602f9)",
                      color: "white",
                      border: "2px white solid",
                      transition: "all 0.5s",
                    },
                  }}
                  variant="outlined"
                >
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Typography variant="h5">Get Started</Typography>
                  </Box>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </PaddingBoxMedium>
      </Box>
    </>
  );
}
