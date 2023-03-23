import { Grid, Paper, Typography } from "@mui/material";
import MarginBox from "../../utility/MarginBox";
import MainContainer from "../../utility/MainContainer";
// import WhatsAppIcon from "../../images/icons8-whatsapp-48.png";
// import RingIcon from "../../images/icons8-ringer-volume-50.png";
// import MailIcon from "../../images/icons8-mail-48.png";
import PhonePNG from "../../images/phone.png";
import MailPNG from "../../images/gmail.png";
import WhatsAppPNG from "../../images/whatsapp.png";
import { Box } from "@mui/system";
import PaddingBoxLarge, { PaddingBoxMedium } from "../../utility/PaddingBox";

import { motion } from "framer-motion";
import { VerticalFlexCenter } from "../../utility/FlexBox";
import "../../App.css";
import { mediumDown, smallDown } from "../../styles";
import { FadeBottom } from "../../utility/Fade";

const images = [
  {
    src: WhatsAppPNG,
    title: "Whatsapp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus impedit quam eos excepturi molestias dolorem eum error. Id asperiores cupiditate repellendus at rerum dolor eligendi laborum optio suscipit? Assumenda dicta!",
  },
  {
    src: PhonePNG,
    title: "Pre-Sales & Call Center",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus impedit quam eos excepturi molestias dolorem eum error. Id asperiores cupiditate repellendus at rerum dolor eligendi laborum optio suscipit? Assumenda dicta!",
  },
  {
    src: MailPNG,
    title: "Email",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus impedit quam eos excepturi molestias dolorem eum error. Id asperiores cupiditate repellendus at rerum dolor eligendi laborum optio suscipit? Assumenda dicta!",
  },
];

export default function Services() {
  const mdDown = mediumDown();
  const smDown = smallDown();

  return (
    <MarginBox>
      <MainContainer>
        <PaddingBoxLarge>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <VerticalFlexCenter>
                <FadeBottom>
                  <Typography variant="h4" gutterBottom>
                    HOW TO CONTACT LEAD WITH CRM SOFTWARE
                  </Typography>
                  <Typography variant="body1">
                    Empower your sales teams to sell better and faster
                  </Typography>
                </FadeBottom>
              </VerticalFlexCenter>
            </Grid>

            {images.map((image) => (
              <Grid item lg={4} md={12} xs={12}>
                <FadeBottom>
                  <MarginBox>
                    <motion.div
                      /**
                       * Setting the initial keyframe to "null" will use
                       * the current value to allow for interruptable keyframes.
                       */
                      // className="left-to-right"
                      style={{
                        borderRadius: "30px",
                        background: `linear-gradient(90deg, rgba(240,123,178,1) 0%, rgba(241,58,144,0.9473039215686274) 35%, rgba(238,5,114,1) 100%) no-repeat`,
                        backgroundSize: "0%",
                        backgroundPosition: "100%",
                        boxShadow: "0 0 11px rgba(10,10,10,.3)",
                      }}
                      initial={{ scale: 1 }}
                      whileHover={{
                        // scale: [null, 1.1, 1],
                        backgroundColor: "rgb(218,30,189)",
                        backgroundSize: "100%",
                        color: "white",
                      }}
                      transition={{ duration: 0.7 }}
                    >
                      <PaddingBoxMedium>
                        <Box>
                          <img
                            src={image.src}
                            style={{ height: "48px", width: "48px" }}
                          />
                          <Typography variant="h6" gutterBottom>
                            {image.title}
                          </Typography>
                          <Typography variant="body1">
                            {image.description}
                          </Typography>
                        </Box>
                      </PaddingBoxMedium>
                    </motion.div>
                  </MarginBox>
                </FadeBottom>
              </Grid>
            ))}
          </Grid>
        </PaddingBoxLarge>
      </MainContainer>
    </MarginBox>
  );
}
