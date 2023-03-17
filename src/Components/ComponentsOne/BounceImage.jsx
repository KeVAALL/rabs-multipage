import { Box, Grid, Typography } from "@mui/material";
import aboutLogo from "../../images/about.png";
import "../../App.css";

import PaddingBoxLarge from "../../utility/PaddingBox";

export default function BounceImage() {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {/* <Bounce top forever> */}
            <div className="box">
              <img
                src={aboutLogo}
                style={{ height: "500px", width: "600px" }}
              />
            </div>
            {/* </Bounce> */}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <PaddingBoxLarge>
              <Typography variant="h4" sx={{ mb: 2 }}>
                Capture all your interactions with the potential buyers
              </Typography>

              <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                Whether the prospect calls your agents, books a site visit,
                sends or receives an email or SMS from your agents, or
                communicates through any other channel, all the conversations
                are tracked within Lead Squared.
              </Typography>
            </PaddingBoxLarge>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
