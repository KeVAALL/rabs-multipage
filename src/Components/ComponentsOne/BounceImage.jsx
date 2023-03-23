import { Box, Grid, Typography } from "@mui/material";

import aboutLogo from "../../images/about.png";
import "../../App.css";

import PaddingBoxLarge from "../../utility/PaddingBox";
import TypographyUtil from "../../utility/TypographyUtil";
import { VerticalFlexCenter } from "../../utility/FlexBox";
import { FadeLeft, FadeRight } from "../../utility/Fade";
import { MarginBoxLarge } from "../../utility/MarginBox";
import { mediumUp, smallUp, xSUp } from "../../styles";

export default function BounceImage() {
  const mdUp = mediumUp();
  const smUp = smallUp();

  return (
    <MarginBoxLarge>
      <Grid container>
        <Grid item md={6} xs={12}>
          <FadeLeft>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {/* <Bounce top forever> */}
              <div className="box">
                <img
                  src={aboutLogo}
                  style={{
                    // height: { md: "500px", xs: "350px" },
                    // width: { md: "600px", xs: "380px" },
                    height: mdUp ? "500px" : smUp ? "410px" : "350px",
                    width: mdUp ? "600px" : smUp ? "490px" : "400px",
                  }}
                />
              </div>
              {/* </Bounce> */}
            </Box>
          </FadeLeft>
        </Grid>
        <Grid item md={6} xs={12}>
          <VerticalFlexCenter>
            <FadeRight>
              <PaddingBoxLarge>
                <TypographyUtil variant="h4" mb={2}>
                  Capture all your interactions with the potential buyers
                </TypographyUtil>

                <TypographyUtil variant="body2" lineHeight={1.5}>
                  Whether the prospect calls your agents, books a site visit,
                  sends or receives an email or SMS from your agents, or
                  communicates through any other channel, all the conversations
                  are tracked within Lead Squared.
                </TypographyUtil>
              </PaddingBoxLarge>
            </FadeRight>
          </VerticalFlexCenter>
        </Grid>
      </Grid>
    </MarginBoxLarge>
  );
}
