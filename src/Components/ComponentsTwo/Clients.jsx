import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MainContainer from "../../utility/MainContainer";
import { MarginBoxLarge } from "../../utility/MarginBox";
import SanjarIcon from "../../images/sanjar.png";
import PaddingBoxLarge from "../../utility/PaddingBox";
import TypographyUtil from "../../utility/TypographyUtil";
import { TextAlignCenter, VerticalFlexCenter } from "../../utility/FlexBox";
import { smallDown } from "../../styles";
import { FadeBottom, FadeClear } from "../../utility/Fade";

import AskRealtor from "../../images/clients/askrealtors.png";
import FloorAssist from "../../images/clients/floorassist.png";
import MumbaiAxis from "../../images/clients/mumbaiaxis.png";
import PerSqFoot from "../../images/clients/persqrfoot.png";
import PropertyJunction from "../../images/clients/propertyjunction.png";
import PropertyKing from "../../images/clients/propertyking.png";
import PropertyLounge from "../../images/clients/propertylounge.png";
import Sahajanand from "../../images/clients/sahajanand.png";
import SippyHousing from "../../images/clients/sippyhousing.png";
import ValueProperty from "../../images/clients/valueproperty.png";
import WillowStone from "../../images/clients/willowstone.png";

const images = [
  {
    src: AskRealtor,
    location: "Wadala / Kharghar",
  },
  {
    src: FloorAssist,
    location: "Andheri East",
  },
  {
    src: MumbaiAxis,
    location: "Kandivali",
  },
  {
    src: PerSqFoot,
    location: "Chembur",
  },
  {
    src: PropertyJunction,
    location: " Pune / Mumbai",
  },
  {
    src: PropertyKing,
    location: "Mumbai",
  },
  {
    src: PropertyLounge,
    location: "Santacruz",
  },
  {
    src: Sahajanand,
    location: "Goregaon",
  },
  {
    src: SippyHousing,
    location: "Khar",
  },
  {
    src: ValueProperty,
    location: "Parel",
  },
  {
    src: SanjarIcon,
    location: "Malad",
  },
  {
    src: WillowStone,
    location: "Thane",
  },
];

export default function Clients() {
  const smDown = smallDown();

  return (
    <MainContainer>
      <MarginBoxLarge>
        <PaddingBoxLarge>
          <Grid container>
            <Grid item xs={12}>
              <FadeBottom>
                <TextAlignCenter>
                  <TypographyUtil variant="h4">
                    TRUSTED BY 500+ REAL ESTATE BUSINESSES WORLDWIDE
                  </TypographyUtil>
                </TextAlignCenter>
              </FadeBottom>
            </Grid>
          </Grid>
          <Grid container>
            {images.map((image, i) => (
              <Grid item lg={3} sm={6} xs={12} key={i}>
                <VerticalFlexCenter gap={smallDown ? 3 : 1}>
                  <FadeClear duration={2500}>
                    <img
                      src={image.src}
                      style={{ height: "200px", width: "200px" }}
                    />
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <LocationOnIcon />
                      <Typography variant="subtitle1">
                        {image.location}
                      </Typography>
                    </Box>
                  </FadeClear>
                </VerticalFlexCenter>
              </Grid>
            ))}
          </Grid>
        </PaddingBoxLarge>
      </MarginBoxLarge>
    </MainContainer>
  );
}
