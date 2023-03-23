import { Box, Grid } from "@mui/material";

import { FadeBottom } from "../../utility/Fade";
import BoxCollapse, { imageInfo } from "./BoxCollapse";

export default function Features() {
  return (
    <>
      <Grid container spacing={1}>
        {imageInfo.map((image, i) => {
          return (
            <Grid key={i} item md={3} xs={6}>
              <FadeBottom>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <BoxCollapse url={image.url} title={image.title} />
                </Box>
              </FadeBottom>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
