import { Box } from "@mui/material";

import ParallaxSwiper from "../Components/ComponentsTwo/ParallaxSwiper";
import AbsoluteImages from "../Components/ComponentsTwo/AbsoluteImages";
import Services from "../Components/ComponentsTwo/Services";
import FooterTwo from "../Components/ComponentsTwo/FooterTwo";
import AdvancedSearch from "../Components/ComponentsTwo/AdvancedSearch";
import Clients from "../Components/ComponentsTwo/Clients";

export default function SectionTwo() {
  return (
    <>
      <ParallaxSwiper />

      <AbsoluteImages />

      <Services />

      <AdvancedSearch />

      <Clients />

      <FooterTwo />
    </>
  );
}
