import { Box } from "@mui/material";
import MarginBox from "../Components/MarginBox";
import MainContainer from "../Components/MainContainer";
import ParallaxSwiper from "../Components/ComponentsTwo/ParallaxSwiper";

export default function SectionTwo() {
  return (
    <>
      <ParallaxSwiper />

      <Box
        sx={{
          height: "600px",
          width: "100%",
          backgroundColor: "#F7FBFE",
          mt: 5,
          p: 2,

          position: "relative",
        }}
      >
        <MainContainer>
          <img
            src="http://rabsconnect.in/assets/img/fa/Untitled-1.png"
            style={{
              height: "250px",
              width: "auto",
              position: "absolute",
              top: "150px",
              left: "500px",
            }}
          />
          <img
            src="http://rabsconnect.in/assets/img/fa/facebook.png"
            style={{
              height: "200px",
              position: "absolute",
              top: "150px",
              left: "295px",
            }}
          />
        </MainContainer>
      </Box>
    </>
  );
}
