import { Box, Button, Grid, Typography } from "@mui/material";
import { PaddingBoxMedium, PaddingBoxSmall } from "../../utility/PaddingBox";

export default function FooterTwo() {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to bottom, #d81dbf, #d519c4, #d115c9, #cd12cf, #c811d4, #c40dd9, #c00bdd, #bc09e2, #b704e8, #b202ed, #ad01f3, #a602f9)",
        }}
      >
        <PaddingBoxSmall>
          <Grid container>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    gap: 1,
                    width: "100%",
                    color: "#fff",
                  }}
                >
                  <Typography variant="h4">
                    A TAILOR-MADE CRM FOR REAL ESTATE SOFTWARE
                  </Typography>
                  <Box>
                    <Button
                      sx={{
                        width: "300px",
                        color: "#000",
                        backgroundColor: "#FFDA06",
                        border: "2px #FFDA06 solid",
                        borderRadius: "15px",
                        textTransform: "none",
                        ":hover": {
                          backgroundImage:
                            "linear-gradient(to bottom, #d81dbf, #d519c4, #d115c9, #cd12cf, #c811d4, #c40dd9, #c00bdd, #bc09e2, #b704e8, #b202ed, #ad01f3, #a602f9)",
                          color: "white",
                          border: "2px #FFDA06 solid",
                          transition: "all 0.5s",
                        },
                      }}
                      variant="outlined"
                    >
                      <Typography variant="body1" p={1}>
                        Request Demo and Trial
                      </Typography>
                    </Button>
                  </Box>
                  <Typography variant="body1">Privacy Policy</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </PaddingBoxSmall>
      </Box>
    </>
  );
}
