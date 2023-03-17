import { Box, Grid } from "@mui/material";

import MarginBox from "../utility/MarginBox";
import MainContainer from "../utility/MainContainer";

import { imageInfo } from "../Components/ComponentsOne/BoxCollapse";
import CarouselSectionOne from "../Components/ComponentsOne/CarouselSectionOne";
import BoxCollapse from "../Components/ComponentsOne/BoxCollapse";
import BounceImage from "../Components/ComponentsOne/BounceImage";
import Footer from "../Components/ComponentsOne/Footer";

export default function SectionOne() {
  return (
    <>
      <MainContainer>
        <CarouselSectionOne />

        <MarginBox>
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
        </MarginBox>

        <MarginBox>
          <BounceImage />
        </MarginBox>
      </MainContainer>
      <MarginBox>
        <Footer />
      </MarginBox>
    </>
  );
}
