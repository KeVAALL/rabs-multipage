import { Box, Grid } from "@mui/material";
import BoxCollapse, { imageInfo } from "./BoxCollapse";

export default function Features() {
  return (
    <>
      <Grid container spacing={1}>
        {imageInfo.map((image, i) => {
          return (
            <Grid key={i} item xs={3}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <BoxCollapse url={image.url} title={image.title} />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
