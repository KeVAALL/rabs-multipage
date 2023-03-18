import { Grid, Typography } from "@mui/material";
import MainContainer from "../../utility/MainContainer";
import MarginBox, { MarginBoxLarge } from "../../utility/MarginBox";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { PaddingBoxSmall } from "../../utility/PaddingBox";

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
    src: "http://rabsconnect.in/assets/img/advance-search/project-name.webp",
    top: "300px",
    right: "380px",
    left: "0px",
    bottom: "0px",
    position: "left",
  },
  {
    src: "http://rabsconnect.in/assets/img/advance-search/project-name.webp",
    top: "-60px",
    right: "0px",
    left: "170px",
    bottom: "0px",
    position: "between",
  },
  {
    src: "http://rabsconnect.in/assets/img/advance-search/project-name.webp",
    top: "400px",
    right: "0px",
    left: "180px",
    bottom: "0px",
    position: "between",
  },
  {
    src: "http://rabsconnect.in/assets/img/advance-search/project-name.webp",
    top: "100px",
    right: "0px",
    left: "400px",
    bottom: "0px",
    position: "right",
  },
  {
    src: "http://rabsconnect.in/assets/img/advance-search/project-name.webp",
    top: "300px",
    right: "0px",
    left: "380px",
    bottom: "0px",
    position: "right",
  },
];

export default function AdvancedSearch() {
  return (
    <MainContainer>
      <MarginBoxLarge>
        <Grid container>
          <Grid item xs={6}>
            <Box
              sx={{
                width: "30rem",
                height: "30rem",
                margin: "10px auto",
                border: " 7px solid #ccc",
                position: "relative",
                borderRadius: "50%",
                zIndex: 0,
              }}
            >
              <Box
                sx={{
                  border: "7px solid #ccc",
                  width: "15rem",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "110px",
                  left: "110px",
                  height: "15rem",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    position: "absolute",
                    top: "80px",
                    left: "55px",
                    textAlign: "center",
                  }}
                >
                  Advanced <br />
                  Search
                </Typography>
              </Box>
              {/* UNIVERSAL */}
              {images.map((image) => (
                <motion.div
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
                    duration: 0.8,
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
                      duration: 0.9,
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
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "80%",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <PaddingBoxSmall>
                <Typography variant="h4">Advanced Leads</Typography>
                <Typography variant="h6">
                  All your lead information in one place
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Itaque quos sit quidem? Ab dolorum deleniti incidunt. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Error hic
                  beatae dolores expedita accusantium, modi dolorum obcaecati
                  tempora. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Excepturi animi qui enim delectus corporis quidem
                  reprehenderit facilis quas itaque voluptate?
                </Typography>
              </PaddingBoxSmall>
            </Box>
          </Grid>
        </Grid>
      </MarginBoxLarge>
    </MainContainer>
  );
}
