import { Box, Grid } from "@mui/material";

import { useEffect, useState } from "react";
import CarouselOne from "../Carousel";
import TypographyUtil from "../../utility/TypographyUtil";
import {
  HorizontalFlex,
  TextAlignCenter,
  VerticalFlex,
  VerticalFlexCenter,
} from "../../utility/FlexBox";
import MarginBoxMedium from "../../utility/MarginBox";
import { mediumDown, smallDown } from "../../styles";
import DownloadBtn from "./DownloadBtn";
import RequestDemo from "./RequestDemo";
import FormDialog from "../../utility/Dialog";
import { FadeBottom, FadeClear, FadeRight } from "../../utility/Fade";
import MainContainer from "../../utility/MainContainer";

export default function CarouselSectionOne() {
  const mdDown = mediumDown();
  const smDown = smallDown();
  const [open, setOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(true);

  // useEffect(() => {}, [open]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MainContainer>
      <HorizontalFlex mt={mdDown && 5}>
        <FadeClear>
          <FormDialog
            open={open}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
          />

          {/* {open && (
            <>
              <FormDialog
                open={!open}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
              />
            </>
          )} */}
        </FadeClear>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <FadeBottom>
              <VerticalFlex gap={2} height="470px">
                <TypographyUtil
                  variant={!smallDown ? "h3" : "h4"}
                  fontWeight="bold"
                  textAlign={mdDown && "center"}
                >
                  India's #1 Real Estate CRM <br />
                  to sell more properties, <br />
                  faster
                </TypographyUtil>
                <TypographyUtil
                  variant={!smallDown ? "h5" : "h6"}
                  textAlign={mdDown && "center"}
                >
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
                  height: { xs: 450, sm: 500, md: 550, lg: 650 },
                  width: { xs: "100%", sm: 450, md: 500, lg: 600 },
                  display: "flex",
                  justifyContent: mdDown && "center",
                  margin: "auto",
                  mt: mdDown && 2,
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
    </MainContainer>
  );
}
