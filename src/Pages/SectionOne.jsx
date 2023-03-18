import { Box, Grid } from "@mui/material";

import MarginBox, { MarginTop } from "../utility/MarginBox";
import MainContainer from "../utility/MainContainer";

import CarouselSectionOne from "../Components/ComponentsOne/CarouselSectionOne";
import BounceImage from "../Components/ComponentsOne/BounceImage";
import Footer from "../Components/ComponentsOne/Footer";
import Features from "../Components/ComponentsOne/Features";

export default function SectionOne() {
  return (
    <>
      <MainContainer>
        <CarouselSectionOne />

        <MarginBox>
          <Features />
        </MarginBox>

        <MarginBox>
          <BounceImage />
        </MarginBox>
      </MainContainer>
      <MarginTop>
        <Footer />
      </MarginTop>
    </>
  );
}
