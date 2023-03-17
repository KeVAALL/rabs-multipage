import { Grid, Paper, Typography } from "@mui/material";
import MarginBox from "../../utility/MarginBox";
import MainContainer from "../../utility/MainContainer";
import WhatsAppIcon from "../../images/icons8-whatsapp-48.png";
import RingIcon from "../../images/icons8-ringer-volume-50.png";
import MailIcon from "../../images/icons8-mail-48.png";
import { Box } from "@mui/system";
import PaddingBoxLarge, { PaddingBoxMedium } from "../../utility/PaddingBox";

import { motion } from "framer-motion";

const images = [
  {
    src: WhatsAppIcon,
    title: "Whatsapp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus impedit quam eos excepturi molestias dolorem eum error. Id asperiores cupiditate repellendus at rerum dolor eligendi laborum optio suscipit? Assumenda dicta!",
  },
  {
    src: RingIcon,
    title: "Pre-Sales & Call Center",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus impedit quam eos excepturi molestias dolorem eum error. Id asperiores cupiditate repellendus at rerum dolor eligendi laborum optio suscipit? Assumenda dicta!",
  },
  {
    src: MailIcon,
    title: "Email",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus impedit quam eos excepturi molestias dolorem eum error. Id asperiores cupiditate repellendus at rerum dolor eligendi laborum optio suscipit? Assumenda dicta!",
  },
];

export default function Services() {
  return (
    <MarginBox>
      <MainContainer>
        <PaddingBoxLarge>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Typography variant="h4" gutterBottom>
                  HOW TO CONTACT LEAD WITH CRM SOFTWARE
                </Typography>
                <Typography variant="body1">
                  Empower your sales teams to sell better and faster
                </Typography>
              </Box>
            </Grid>

            {images.map((image) => (
              <Grid item xs={4}>
                <MarginBox>
                  <motion.div
                    /**
                     * Setting the initial keyframe to "null" will use
                     * the current value to allow for interruptable keyframes.
                     */
                    whileHover={{
                      scale: [null, 1.3, 1.2],
                      background:
                        "linear-gradient(to left bottom, #d91ebd, #d71bc1, #d419c4, #d117c8, #ce16cc, #cb12d1, #c80fd5, #c40cda, #bf06e1, #b903e8, #b202ef, #aa05f6);",
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Paper elevation={10}>
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
                    </Paper>
                  </motion.div>
                </MarginBox>
              </Grid>
            ))}
          </Grid>
        </PaddingBoxLarge>
      </MainContainer>
    </MarginBox>
  );
}
