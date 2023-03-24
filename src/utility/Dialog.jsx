import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import { Box, Grid, Typography } from "@mui/material";
import { HorizontalFlex, VerticalFlex, VerticalFlexCenter } from "./FlexBox";
import TypographyUtil from "./TypographyUtil";
import { MarginTop } from "./MarginBox";
import CloseIcon from "@mui/icons-material/Close";
import PhoneInput from "react-phone-input-2";

import { mediumDown } from "../styles";

const images = [
  {
    src: "http://rabsconnect.in/assets/img/form_icon/instant_call_back.png",
    title: "CRM Support",
  },
  {
    src: "http://rabsconnect.in/assets/img/form_icon/free_site_visit.png",
    title: "Visit",
  },
  {
    src: "http://rabsconnect.in/assets/img/form_icon/unmatched_price.png",
    title: "Worthy",
  },
];

export default function FormDialog({ open, handleClickOpen, handleClose }) {
  const mdDown = mediumDown();

  return (
    <Box sx={{ visibility: !open ? "hidden" : "visible" }}>
      <Dialog onClose={handleClose} maxWidth="xl" open={open}>
        <DialogContent>
          <Grid container spacing={8}>
            {!mdDown && (
              <Grid item xs={12}>
                <HorizontalFlex justifyContent="flex-end">
                  <Box sx={{ position: "relative" }}>
                    <CloseIcon
                      sx={{
                        height: "40px",
                        width: "40px",
                        position: "absolute",
                        right: "-19px",
                        top: "5px",
                        mr: 5,
                      }}
                      onClick={handleClose}
                    >
                      <Button onClick={handleClose}></Button>
                    </CloseIcon>
                  </Box>
                </HorizontalFlex>
              </Grid>
            )}
            {!mdDown && (
              <Grid item xs={6}>
                <VerticalFlexCenter>
                  <TypographyUtil variant="h5" color="#DF21B6">
                    We Promise
                  </TypographyUtil>

                  <VerticalFlexCenter>
                    {images.map((image) => (
                      <VerticalFlexCenter>
                        <img
                          src={image.src}
                          style={{
                            height: "45px",
                            width: "45px",
                          }}
                        />
                        <TypographyUtil variant="subtitle1">
                          {image.title}
                        </TypographyUtil>
                      </VerticalFlexCenter>
                    ))}
                  </VerticalFlexCenter>
                </VerticalFlexCenter>
              </Grid>
            )}
            <Grid item md={6} xs={12} sx={{ pr: !mdDown ? 10 : 0 }}>
              <VerticalFlexCenter>
                <VerticalFlex>
                  {mdDown && (
                    <CloseIcon
                      sx={{
                        height: "40px",
                        width: "40px",
                        position: "absolute",
                        right: "-25px",
                        top: "13px",
                        mr: 5,
                      }}
                      onClick={handleClose}
                    >
                      <Button onClick={handleClose}></Button>
                    </CloseIcon>
                  )}
                  <img
                    src="http://rabsconnect.in/assets/img/logo/rabs_connect_logo.webp"
                    style={{ height: "80px", width: "220px" }}
                  />
                  <TypographyUtil variant="body1" mt={3}>
                    Register here and Avail the{" "}
                    <span style={{ color: "#DF21B6" }}>Best Offers!!</span>
                  </TypographyUtil>
                  <MarginTop>
                    <TextField
                      id="name"
                      name="name"
                      label="Name"
                      sx={{ width: "320px" }}
                    />
                  </MarginTop>
                  <MarginTop>
                    <PhoneInput
                      specialLabel={""}
                      country={"in"}
                      inputStyle={{
                        height: "55px",
                        width: "320px",
                        borderColor: "#DCDDDE",
                        borderRadius: "5px",
                        padding: "16.5px 14px",
                        fontSize: "16px",
                      }}
                    />
                  </MarginTop>
                  <MarginTop>
                    <TextField
                      id="name"
                      name="name"
                      type="email"
                      label="Email Address"
                      sx={{ width: "320px" }}
                    />
                  </MarginTop>
                  <MarginTop>
                    <Button
                      sx={{
                        height: "50px",
                        width: "220px",

                        borderRadius: "25px",
                        textTransform: "none",
                        backgroundImage:
                          "linear-gradient(to bottom, #d81dbf, #d519c4, #d115c9, #cd12cf, #c811d4, #c40dd9, #c00bdd, #bc09e2, #b704e8, #b202ed, #ad01f3, #a602f9)",
                        color: "white",
                        ":hover": {
                          backgroundImage: "none",
                          color: "black",
                          border: "2px #DF21B6 solid",
                          transition: "all 0.5s ease-in",
                        },
                      }}
                      variant="outlined"
                      onClick={handleClose}
                    >
                      <Box
                        sx={{
                          display: "flex",
                        }}
                      >
                        <Typography variant="h5">Get Started</Typography>
                      </Box>
                    </Button>
                  </MarginTop>
                </VerticalFlex>
              </VerticalFlexCenter>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
