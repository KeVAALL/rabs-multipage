import { Box, Grid } from "@mui/material";
import aboutLogo from "../../images/about.png";

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
        <Grid item xs={6}></Grid>
      </Grid>
    </>
  );
}
