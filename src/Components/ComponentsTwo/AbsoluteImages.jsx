import { Box, Typography } from "@mui/material";
import MainContainer from "../../utility/MainContainer";
import ImageUtilLarge, { ImageUtilSmall } from "../../utility/ImageUtil";

export default function AbsoluteImages() {
  return (
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
          right="305px"
        />

        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            position: "absolute",
            top: "375px",
            left: "665px",
          }}
        >
          Lead
          <br /> Source
        </Typography>
      </MainContainer>
    </Box>
  );
}
