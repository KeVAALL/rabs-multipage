import { Grid, Paper, Typography } from "@mui/material";
import MainContainer from "../../utility/MainContainer";
import MarginBox, { MarginBoxLarge } from "../../utility/MarginBox";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import PaddingBoxLarge, {
  PaddingBoxMedium,
  PaddingBoxSmall,
} from "../../utility/PaddingBox";
import TypographyUtil from "../../utility/TypographyUtil";
import { VerticalFlexCenter } from "../../utility/FlexBox";
import DocumentPNG from "../../images/document.png";
import { mediumDown } from "../../styles";
import MarginBoxMedium from "../../utility/MarginBox";
import { FadeBottom, FadeClear } from "../../utility/Fade";

const images = [
  {
    src: "http://rabsconnect.in/assets/img/advance-search/project-name.webp",
    top: "100px",
    right: "0px",
    left: "-60px",
    bottom: "0px",
    position: "left",
  },
  {
    src: "http://rabsconnect.in/assets/img/advance-search/Follow.webp",
    top: "300px",
    right: "380px",
    left: "0px",
    bottom: "0px",
    position: "left",
  },
  {
    src: "http://rabsconnect.in/assets/img/advance-search/Users.webp",
    top: "-60px",
    right: "0px",
    left: "170px",
    bottom: "0px",
    position: "between",
  },
  {
    src: "http://rabsconnect.in/assets/img/advance-search/Source.webp",
    top: "400px",
    right: "0px",
    left: "180px",
    bottom: "0px",
    position: "between",
  },
  {
    src: "http://rabsconnect.in/assets/img/advance-search/Project.webp",
    top: "100px",
    right: "0px",
    left: "400px",
    bottom: "0px",
    position: "right",
  },
  {
    src: "http://rabsconnect.in/assets/img/advance-search/lead-date.webp",
    top: "300px",
    right: "0px",
    left: "380px",
    bottom: "0px",
    position: "right",
  },
];

const info = [
  {
    title: "Follow Up",
    description: "Close more deals with single-page contact management",
  },
  {
    title: "Users",
    description:
      "Build a detailed profile for each contact that includes contact information and communication history.., etc",
  },
  {
    title: "Source",
    description:
      "The process of pulling leads found on social media into your CRM.",
  },
  {
    title: "Lead Status",
    description:
      "Pre-formatted replies to ensure fast and consistent responses to common questions.",
  },
  {
    title: "Lead Date",
    description:
      "Share your calendar online and automate scheduling, invites, and follow ups",
  },
];

export default function AdvancedSearch() {
  const mdDown = mediumDown();

  return (
    <MarginBoxLarge>
      <Grid container sx={{ backgroundColor: "#F7FBFE" }}>
        {!mdDown ? (
          <Grid item xs={6}>
            <FadeClear duration={2000}>
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    border: "7px solid #ccc",
                    width: "15rem",
                    borderRadius: "50%",
                    position: "absolute",
                    top: "130px",
                    left: "255px",
                    height: "15rem",
                  }}
                >
                  <TypographyUtil
                    variant="h5"
                    position="absolute"
                    top="80px"
                    left="55px"
                    textAlign="center"
                  >
                    Advanced <br />
                    Search
                  </TypographyUtil>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "30rem",
                  height: "30rem",
                  margin: "10px auto",
                  border: " 7px solid #ccc",
                  position: "relative",
                  borderRadius: "50%",
                  zIndex: 0,
                  "@keyframes spin": {
                    from: {
                      transform: "rotate(0deg)",
                    },
                    to: {
                      transform: "rotate(360deg)",
                    },
                  },
                  animation: "spin 15s linear infinite",
                }}
              >
                {/* UNIVERSAL */}
                {images.map((image, i) => (
                  <motion.div
                    key={i}
                    style={{
                      height: "120px",
                      width: "120px",
                      position: "absolute",
                      top: `${image.top}`,
                      right: `${image.right}`,
                      left: `${image.left}`,
                      bottom: `${image.bottom}`,
                      zIndex: 10,
                      backgroundColor: "white",
                      border: "5px solid rgb(218,30,189)",
                      borderRadius: "50%",
                      "@keyframes spin": {
                        from: {
                          transform: "rotate(0deg)",
                        },
                        to: {
                          transform: "rotate(360deg)",
                        },
                      },
                      animation: "spin 15s linear infinite reverse",
                    }}
                    whileHover={{
                      scale: [1, 1.3],
                      x:
                        image.position === "left"
                          ? "-20"
                          : image.position === "between"
                          ? "0"
                          : "20",
                      y:
                        image.position === "left"
                          ? "-30"
                          : image.position === "between"
                          ? "-20"
                          : "-30",
                      // rotate: [0, -15],
                      rotate:
                        image.position === "left"
                          ? [0, -15]
                          : image.position === "between"
                          ? [0, 8]
                          : [0, 15],
                      borderRadius: ["50%", "25%"],
                      boxShadow: "0 0 11px rgba(10,10,10,.3)",
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        color: "black",
                        alignItems: "center",
                        height: "100%",
                      }}
                      whileHover={{
                        // rotate: 13,
                        rotate:
                          image.position === "left"
                            ? 13
                            : image.position === "between"
                            ? -5
                            : -13,
                      }}
                      transition={{
                        duration: 0.7,
                        ease: "easeInOut",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={image.src}
                          style={{ height: "100%", width: "40px" }}
                        />
                        <Typography variant="subtitle1"></Typography>
                      </Box>
                    </motion.div>
                  </motion.div>
                ))}
              </Box>
            </FadeClear>
          </Grid>
        ) : (
          <MarginBoxLarge mx={3} width="100%">
            <Grid container>
              <Grid item xs={12}>
                <VerticalFlexCenter margin="auto">
                  <FadeBottom>
                    <Typography variant="h4">Advanced Leads</Typography>
                    <Typography variant="h6">
                      All your lead information in one place
                    </Typography>
                  </FadeBottom>
                </VerticalFlexCenter>
              </Grid>
              {info.map((i) => (
                <Grid item xs={12}>
                  <FadeBottom>
                    <MarginBoxLarge mx={5}>
                      <Paper
                        elevation={10}
                        sx={{
                          backgroundColor: "#F7FBFE",
                          position: "relative",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: "white",
                            height: "60px",
                            width: "60px",
                            position: "absolute",
                            top: "-38px",
                            right: "46%",
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 5px",
                            borderRadius: "50%",
                          }}
                        >
                          <VerticalFlexCenter>
                            <img
                              src={DocumentPNG}
                              style={{
                                height: "30px",
                                width: "30px",
                              }}
                            />
                          </VerticalFlexCenter>
                        </Box>

                        <VerticalFlexCenter>
                          <PaddingBoxMedium>
                            <TypographyUtil variant="h5">
                              {i.title}
                            </TypographyUtil>
                            <TypographyUtil variant="body1">
                              {i.description}
                            </TypographyUtil>
                          </PaddingBoxMedium>
                        </VerticalFlexCenter>
                      </Paper>
                    </MarginBoxLarge>
                  </FadeBottom>
                </Grid>
              ))}
            </Grid>
          </MarginBoxLarge>
        )}

        {!mdDown && (
          <>
            <Grid item md={6} xs={12}>
              <VerticalFlexCenter height="80%" p={5}>
                <FadeClear duration={2000}>
                  <PaddingBoxSmall>
                    <Typography variant="h4">Advanced Leads</Typography>
                    <Typography variant="h6">
                      All your lead information in one place
                    </Typography>
                    <TypographyUtil variant="body1" mt={2}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Itaque quos sit quidem? Ab dolorum deleniti incidunt.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Error hic beatae dolores expedita accusantium, modi
                      dolorum obcaecati tempora. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Excepturi animi qui enim
                      delectus corporis quidem reprehenderit facilis quas itaque
                      voluptate?
                    </TypographyUtil>
                  </PaddingBoxSmall>
                </FadeClear>
              </VerticalFlexCenter>
            </Grid>
          </>
        )}
      </Grid>
      {/* </MainContainer> */}
    </MarginBoxLarge>
  );
}
