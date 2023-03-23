import { Box, Grid } from "@mui/material";

import MarginBox, { MarginBoxLarge, MarginTop } from "../utility/MarginBox";
import MainContainer from "../utility/MainContainer";

import CarouselSectionOne from "../Components/ComponentsOne/CarouselSectionOne";
import BounceImage from "../Components/ComponentsOne/BounceImage";
import Footer from "../Components/ComponentsOne/Footer";
import Features from "../Components/ComponentsOne/Features";
import MarginBoxMedium from "../utility/MarginBox";
import { mediumDown } from "../styles";

export default function SectionOne() {
  const mdDown = mediumDown();

  return (
    <Box
      sx={{
        overflowX: "hidden",
      }}
    >
      <MainContainer>
        <CarouselSectionOne />

        <Features />

        <BounceImage />
      </MainContainer>
      <MarginTop>
        <Footer />
      </MarginTop>
    </Box>
  );
}
