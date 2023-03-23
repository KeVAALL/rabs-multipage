import { Box, Grid } from "@mui/material";

import { useState } from "react";
import CarouselOne from "../Carousel";
import TypographyUtil from "../../utility/TypographyUtil";
import {
  HorizontalFlex,
  TextAlignCenter,
  VerticalFlex,
} from "../../utility/FlexBox";
import MarginBoxMedium from "../../utility/MarginBox";
import { mediumDown } from "../../styles";
import DownloadBtn from "./DownloadBtn";
import RequestDemo from "./RequestDemo";
import FormDialog from "../../utility/Dialog";
import { FadeBottom, FadeRight } from "../../utility/Fade";

export default function CarouselSectionOne() {
  const mdDown = mediumDown();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <HorizontalFlex mt={mdDown && 7}>
      <FormDialog
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <FadeBottom>
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
              <TypographyUtil variant="h5" textAlign={mdDown && "center"}>
                Convert every inquiry into a booking
              </TypographyUtil>
              <DownloadBtn />
              <RequestDemo handleClickOpen={handleClickOpen} />
            </VerticalFlex>
          </FadeBottom>
        </Grid>
        <Grid item xs={12} md={6}>
          <FadeRight>
            <Box
              sx={{
                height: { xs: 450, md: 550, lg: 650 },
                width: { xs: 352, md: 500, lg: 600 },
                display: "flex",
                justifyContent: mdDown && "center",
                margin: "auto",
                mt: mdDown && 4,
              }}
            >
              <CarouselOne />
            </Box>
          </FadeRight>
        </Grid>

        <Grid item xs={12}>
          <FadeBottom>
            {mdDown ? (
              <TextAlignCenter>
                <MarginBoxMedium>
                  <TypographyUtil
                    variant="h4"
                    fontWeight="bold"
                    textAlign={mdDown && "center"}
                  >
                    Designed & Built to support Real Estate Builders, <br />{" "}
                    Brokers and Fast Growing Marketplaces
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
                  Designed & Built to support Real Estate Builders, <br />{" "}
                  Brokers and Fast Growing Marketplaces
                </TypographyUtil>
              </TextAlignCenter>
            )}
          </FadeBottom>
        </Grid>
      </Grid>
    </HorizontalFlex>
  );
}
