import { Box, Grid } from "@mui/material";

import { FadeBottom } from "../../utility/Fade";
import MarginBoxMedium from "../../utility/MarginBox";
import BoxCollapse, { imageInfo } from "./BoxCollapse";

export default function Features() {
  return (
    <MarginBoxMedium>
      <Grid container spacing={1}>
        {imageInfo.map((image, i) => {
          return (
            <Grid key={i} item lg={3} sm={6} xs={12}>
              <FadeBottom>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <BoxCollapse url={image.url} title={image.title} />
                </Box>
              </FadeBottom>
            </Grid>
          );
        })}
      </Grid>
    </MarginBoxMedium>
  );
}
