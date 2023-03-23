import { Box, Grid } from "@mui/material";

import MarginBox, { MarginBoxLarge, MarginTop } from "../utility/MarginBox";
import MainContainer from "../utility/MainContainer";

import CarouselSectionOne from "../Components/ComponentsOne/CarouselSectionOne";
import BounceImage from "../Components/ComponentsOne/BounceImage";
import Footer from "../Components/ComponentsOne/Footer";
import Features from "../Components/ComponentsOne/Features";
import MarginBoxMedium from "../utility/MarginBox";

export default function SectionOne() {
  return (
    <>
      <MainContainer>
        <CarouselSectionOne />

        <MarginBoxMedium>
          <Features />
        </MarginBoxMedium>

        <MarginBoxLarge>
          <BounceImage />
        </MarginBoxLarge>
      </MainContainer>
      <MarginTop>
        <Footer />
      </MarginTop>
    </>
  );
}
