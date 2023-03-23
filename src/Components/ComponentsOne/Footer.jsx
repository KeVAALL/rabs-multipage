import { Box, Button, Grid, Typography } from "@mui/material";
import { Fade } from "react-reveal";
import {
  HorizontalFlexCenter,
  VerticalFlexCenter,
} from "../../utility/FlexBox";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { PaddingBoxMedium } from "../../utility/PaddingBox";
import { mediumDown } from "../../styles";
import { FadeClear } from "../../utility/Fade";

export default function Footer() {
  const mdDown = mediumDown();

  return (
    <>
      <FadeClear duration={2500}>
        <Box
          sx={{
            backgroundImage:
              "linear-gradient(to bottom, #d81dbf, #d519c4, #d115c9, #cd12cf, #c811d4, #c40dd9, #c00bdd, #bc09e2, #b704e8, #b202ed, #ad01f3, #a602f9)",
          }}
        >
          <PaddingBoxMedium>
            <Grid container>
              <Grid item md={8} xs={12}>
                <VerticalFlexCenter gap={1} width="100%" color="#fff">
                  <Typography variant="h4">Real Estate CRM Software</Typography>
                  <Typography variant="h5">
                    Made for Builders, Layout Developers, and Real Estate
                    Marketers.
                  </Typography>
                </VerticalFlexCenter>
              </Grid>
              <Grid item md={4} xs={12}>
                <HorizontalFlexCenter>
                  <Button
                    sx={{
                      height: "50px",
                      width: "220px",
                      color: "black",
                      border: "none",
                      borderRadius: "25px",
                      textTransform: "none",
                      backgroundColor: "#fff",
                      mt: mdDown && 3,
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
                </HorizontalFlexCenter>
              </Grid>
            </Grid>
          </PaddingBoxMedium>
        </Box>
      </FadeClear>
    </>
  );
}
