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

const images = [
  {
    src: "http://rabsconnect.in/assets/img/client-logo/askrealtors.webp",
    location: "Wadala / Kharghar",
  },
  {
    src: "http://rabsconnect.in/assets/img/client-logo/floorassist.webp",
    location: "Andheri East",
  },
  {
    src: "http://rabsconnect.in/assets/img/client-logo/mumbaiaaxis.webp",
    location: "Kandivali",
  },
  {
    src: "http://rabsconnect.in/assets/img/client-logo/persqurefoot.webp",
    location: "Chembur",
  },
  {
    src: "http://rabsconnect.in/assets/img/client-logo/propertyjunction.webp",
    location: " Pune / Mumbai",
  },
  {
    src: "http://rabsconnect.in/assets/img/client-logo/propertyking.webp",
    location: "Mumbai",
  },
  {
    src: "http://rabsconnect.in/assets/img/client-logo/propertylounge.webp",
    location: "Santacruz",
  },
  {
    src: "http://rabsconnect.in/assets/img/client-logo/sahajanand.webp",
    location: "Goregaon",
  },
  {
    src: "http://rabsconnect.in/assets/img/client-logo/sippyhousing.webp",
    location: "Khar",
  },
  {
    src: "http://rabsconnect.in/assets/img/client-logo/valueproperty.webp",
    location: "Parel",
  },
  {
    src: SanjarIcon,
    location: "Malad",
  },
  {
    src: "http://rabsconnect.in/assets/img/client-logo/willowstone.webp",
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
              <TextAlignCenter>
                <TypographyUtil variant="h4">
                  TRUSTED BY 500+ REAL ESTATE BUSINESSES WORLDWIDE
                </TypographyUtil>
              </TextAlignCenter>
            </Grid>
          </Grid>
          <Grid container>
            {images.map((image, i) => (
              <Grid item lg={3} sm={6} xs={12} key={i}>
                <VerticalFlexCenter gap={smallDown ? 3 : 1}>
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
                </VerticalFlexCenter>
              </Grid>
            ))}
          </Grid>
        </PaddingBoxLarge>
      </MarginBoxLarge>
    </MainContainer>
  );
}
