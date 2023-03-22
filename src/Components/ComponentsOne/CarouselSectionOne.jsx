import { Box, Button, Grid, Typography } from "@mui/material";
import ShopIcon from "@mui/icons-material/Shop";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CarouselOne from "../Carousel";
import TypographyUtil from "../../utility/TypographyUtil";
import {
  HorizontalFlex,
  TextAlignCenter,
  VerticalFlex,
} from "../../utility/FlexBox";
import MarginBoxMedium from "../../utility/MarginBox";
import { mediumDown } from "../../styles";

export default function CarouselSectionOne() {
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down("md"));

  const mdDown = mediumDown();

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={6}>
        <VerticalFlex ml={3} gap={2} height="470px">
          <TypographyUtil
            variant="h3"
            fontWeight="bold"
            textAlign={mdDown && "center"}
          >
            India's #1 Real Estate CRM <br />
            to sell more properties, <br />
            faster
          </TypographyUtil>
          <TypographyUtil
            variant="h5"
            gutterBottom
            textAlign={mdDown && "center"}
          >
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
              alignSelf: mdDown && "center",
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
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            height: { xs: 450, md: 550, lg: 650 },
            width: { xs: 400, md: 500, lg: 600 },
            display: "flex",
            justifyContent: mdDown && "center",
            margin: "auto",
          }}
        >
          <CarouselOne />
        </Box>
      </Grid>

      <Grid item xs={12}>
        {mdDown ? (
          <TextAlignCenter>
            <MarginBoxMedium>
              <TypographyUtil
                variant="h4"
                fontWeight="bold"
                textAlign={mdDown && "center"}
              >
                Designed & Built to support Real Estate Builders, <br /> Brokers
                and Fast Growing Marketplaces
              </TypographyUtil>
            </MarginBoxMedium>
          </TextAlignCenter>
        ) : (
          <TextAlignCenter>
            <TypographyUtil
              variant="h4"
              fontWeight="bold"
              textAlign={mdDown && "center"}
            >
              Designed & Built to support Real Estate Builders, <br /> Brokers
              and Fast Growing Marketplaces
            </TypographyUtil>
          </TextAlignCenter>
        )}
      </Grid>
    </Grid>
  );
}
