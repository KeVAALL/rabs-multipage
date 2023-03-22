import { useState } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import MainContainer from "../../utility/MainContainer";
import ImageUtilLarge, { ImageUtilSmall } from "../../utility/ImageUtil";
import TypographyUtil from "../../utility/TypographyUtil";
import { mediumUp } from "../../styles";
import { HorizontalFlex, VerticalFlexCenter } from "../../utility/FlexBox";
import MarginBoxMedium from "../../utility/MarginBox";
import { PaddingBoxMedium, PaddingBoxSmall } from "../../utility/PaddingBox";

const images = [
  {
    url: "http://rabsconnect.in/assets/img/fa/facebook.png",
    title: "Facebook",
  },
  {
    url: "http://rabsconnect.in/assets/img/fa/g.png",
    title: "Google",
  },
  {
    url: "http://rabsconnect.in/assets/img/fa/h.png",
    title: "Housing",
  },
  {
    url: "http://rabsconnect.in/assets/img/fa/mg.png",
    title: "Magic Bricks",
  },
];

export default function AbsoluteImages() {
  const mdUp = mediumUp();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      {mdUp ? (
        <Box
          sx={{
            height: "600px",
            width: "100%",
            backgroundColor: "#F7FBFE",
            mt: 5,
            p: 4,
            position: "relative",
          }}
        >
          <MainContainer>
            <ImageUtilLarge
              url="http://rabsconnect.in/assets/img/fa/Untitled-1.png"
              top="270px"
              left="510px"
            />

            <ImageUtilSmall
              url="http://rabsconnect.in/assets/img/fa/facebook.png"
              top="275px"
              left="305px"
            />

            <ImageUtilSmall
              url="http://rabsconnect.in/assets/img/fa/g.png"
              top="80px"
              left="520px"
            />

            <ImageUtilSmall
              url="http://rabsconnect.in/assets/img/fa/h.png"
              top="80px"
              left="820px"
            />

            <ImageUtilSmall
              url="http://rabsconnect.in/assets/img/fa/mg.png"
              top="275px"
              right="20%"
            />

            <TypographyUtil
              variant="h2"
              textAlign="center"
              position="absolute"
              top="375px"
              left="665px"
            >
              Lead
              <br /> Source
            </TypographyUtil>
          </MainContainer>
        </Box>
      ) : (
        <MarginBoxMedium>
          <VerticalFlexCenter>
            <Grid container>
              <Grid item xs={12}>
                <TypographyUtil variant="h5">LEAD SOURCE</TypographyUtil>
                <TypographyUtil variant="body1">
                  Automatically capture leads from multiple sources
                </TypographyUtil>
              </Grid>
              <Grid item xs={12}>
                {images.map((image) => (
                  <Box sx={{ mx: 4 }}>
                    <MarginBoxMedium>
                      <Paper
                        style={{
                          backgroundColor: "#F6F6F6",
                          borderRadius: 5,
                          "&:hover": {
                            transform: "scale(0.8)",
                            transition: "all 0.8s",
                          },
                        }}
                        elevation={8}
                      >
                        <PaddingBoxSmall>
                          <HorizontalFlex gap={3}>
                            <img
                              src={image.url}
                              style={{ height: "70px", width: "70px" }}
                            />
                            <TypographyUtil variant="h5">
                              {image.title}
                            </TypographyUtil>
                          </HorizontalFlex>
                        </PaddingBoxSmall>
                      </Paper>
                    </MarginBoxMedium>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </VerticalFlexCenter>
        </MarginBoxMedium>
      )}
    </>
  );
}
