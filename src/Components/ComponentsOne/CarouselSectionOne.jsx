import { Box, Button, Grid, Typography } from "@mui/material";
import ShopIcon from "@mui/icons-material/Shop";
import CarouselOne from "../Carousel";

export default function CarouselSectionOne() {
  return (
    <Grid container spacing={15}>
      <Grid item xs={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            ml: 3,
            gap: 2,
            height: "470px",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            India's #1 Real Estate CRM <br />
            to sell more properties, <br />
            faster
          </Typography>
          <Typography variant="h5" gutterBottom>
            Convert every inquiry into a booking
          </Typography>
          <Button
            sx={{
              height: "70px",
              width: "185px",
              mt: 2.5,
              color: "#DF21B6",
              border: "2px #DF21B6 solid",
              borderRadius: "15px",
              textTransform: "none",
              ":hover": {
                backgroundColor: "#DF21B6", // theme.palette.primary.main
                color: "white",
                border: "2px #DF21B6 solid",
                transition: "all 0.5s",
              },
            }}
            variant="outlined"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0.5,
                padding: 0.6,
                // fontFamily: "Raleway"
              }}
            >
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <ShopIcon sx={{ height: "17px" }} />
                <Typography variant="subtitle1">Google Play</Typography>
              </Box>
              <Typography variant="body1">(Download Now)</Typography>
            </Box>
          </Button>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box>
          <CarouselOne />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            DESIGNED & BUILT TO SUPPORT REAL ESTATE BUILDERS, <br /> BROKERS AND
            FAST GROWING MARKETPLACES
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
