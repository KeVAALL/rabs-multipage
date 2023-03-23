// import { makeStyles } from "@material-ui/core/styles";

import { Box, Button, Grid, Typography } from "@mui/material";
import { FadeClear } from "../../utility/Fade";
import {
  HorizontalFlexCenter,
  VerticalFlexCenter,
} from "../../utility/FlexBox";
import { MarginTop } from "../../utility/MarginBox";
import { PaddingBoxMedium, PaddingBoxSmall } from "../../utility/PaddingBox";

// const useStyles = makeStyles((theme) => ({
//   body1: {
//     fontWeight: 400,
//   },
// }));
export default function FooterTwo() {
  //   const classes = useStyles();

  return (
    <FadeClear duration={2500}>
      <MarginTop>
        <Box
          sx={{
            backgroundImage:
              "linear-gradient(to bottom, #d81dbf, #d519c4, #d115c9, #cd12cf, #c811d4, #c40dd9, #c00bdd, #bc09e2, #b704e8, #b202ed, #ad01f3, #a602f9)",
          }}
        >
          <PaddingBoxSmall>
            <Grid container>
              <Grid item xs={12}>
                <HorizontalFlexCenter>
                  <VerticalFlexCenter gap={1} width="100%" color="#fff">
                    <Typography variant="h4">
                      A TAILOR-MADE CRM FOR REAL ESTATE SOFTWARE
                    </Typography>
                    <Box>
                      <Button
                        sx={{
                          width: "300px",
                          color: "#000",
                          backgroundColor: "#FFDA06",
                          border: "2px #FFDA06 solid",
                          borderRadius: "15px",
                          textTransform: "none",
                          ":hover": {
                            backgroundImage:
                              "linear-gradient(to bottom, #d81dbf, #d519c4, #d115c9, #cd12cf, #c811d4, #c40dd9, #c00bdd, #bc09e2, #b704e8, #b202ed, #ad01f3, #a602f9)",
                            color: "white",
                            border: "2px #FFDA06 solid",
                            transition: "all 0.5s",
                          },
                        }}
                        variant="outlined"
                      >
                        <Typography
                          variant="body1"
                          // className={classes.body1}
                          p={1}
                        >
                          Request Demo and Trial
                        </Typography>
                      </Button>
                    </Box>
                    <Typography variant="body1">Privacy Policy</Typography>
                  </VerticalFlexCenter>
                </HorizontalFlexCenter>
              </Grid>
            </Grid>
          </PaddingBoxSmall>
        </Box>
      </MarginTop>
    </FadeClear>
  );
}
