import { Box, Grid } from "@mui/material";

import MainContainer from "../Components/MainContainer";

import { imageInfo } from "../Components/ComponentsOne/BoxCollapse";
import BoxCollapse from "../Components/ComponentsOne/BoxCollapse";
import CarouselSectionOne from "../Components/ComponentsOne/CarouselSectionOne";

export default function SectionOne() {
  return (
    <MainContainer>
      <CarouselSectionOne />
      <Grid container spacing={1} sx={{ mt: 3 }}>
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
    </MainContainer>
  );
}
