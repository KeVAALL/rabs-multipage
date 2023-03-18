import { Box, Button, Grid, Typography } from "@mui/material";
import ShopIcon from "@mui/icons-material/Shop";

import CarouselOne from "../Carousel";
import TypographyUtil from "../../utility/TypographyUtil";
import {
  HorizontalFlex,
  TextAlignCenter,
  VerticalFlex,
} from "../../utility/FlexBox";

export default function CarouselSectionOne() {
  return (
    <Grid container spacing={15}>
      <Grid item xs={6}>
        <VerticalFlex ml={3} gap={2} height="470px">
          <TypographyUtil variant="h3" fontWeight="bold">
            India's #1 Real Estate CRM <br />
            to sell more properties, <br />
            faster
          </TypographyUtil>
          <TypographyUtil variant="h5" gutterBottom>
            Convert every inquiry into a booking
          </TypographyUtil>
          <Button
            sx={{
              height: "70px",
              width: "185px",
              mt: 2.5,
              color: "#DF21B6",
              border: "2px #DF21B6 solid",
              borderRadius: "15px",
              textTransform: "none",
              ":hover": {
                backgroundColor: "#DF21B6", // theme.palette.primary.main
                color: "white",
                border: "2px #DF21B6 solid",
                transition: "all 0.5s",
              },
            }}
            variant="outlined"
          >
            <VerticalFlex gap={0.5} padding={0.6}>
              <HorizontalFlex gap={1}>
                <ShopIcon sx={{ height: "17px" }} />
                <Typography variant="subtitle1">Google Play</Typography>
              </HorizontalFlex>
              <Typography variant="body1">(Download Now)</Typography>
            </VerticalFlex>
          </Button>
        </VerticalFlex>
      </Grid>
      <Grid item xs={6}>
        <Box>
          <CarouselOne />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <TextAlignCenter>
          <TypographyUtil variant="h4" fontWeight="bold">
            Designed & Built to support Real Estate Builders, <br /> Brokers and
            Fast Growing Marketplaces
          </TypographyUtil>
        </TextAlignCenter>
      </Grid>
    </Grid>
  );
}
