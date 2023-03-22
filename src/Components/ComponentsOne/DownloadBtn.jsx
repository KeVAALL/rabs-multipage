import { Button, Typography } from "@mui/material";
import ShopIcon from "@mui/icons-material/Shop";
import { mediumDown } from "../../styles";
import { HorizontalFlex, VerticalFlex } from "../../utility/FlexBox";

export default function DownloadBtn() {
  const mdDown = mediumDown();

  return (
    <Button
      sx={{
        height: "70px",
        width: "185px",
        mt: 2.5,
        color: "#DF21B6",
        border: "2px #DF21B6 solid",
        borderRadius: "15px",
        textTransform: "none",
        alignSelf: mdDown && "center",
        ":hover": {
          backgroundColor: "#DF21B6", // theme.palette.primary.main
          color: "white",
          border: "2px #DF21B6 solid",
          transition: "all 0.5s",
        },
      }}
      variant="outlined"
    >
      <VerticalFlex gap={0.5} padding={0.6}>
        <HorizontalFlex gap={1}>
          <ShopIcon sx={{ height: "17px" }} />
          <Typography variant="subtitle1">Google Play</Typography>
        </HorizontalFlex>
        <Typography variant="body1">(Download Now)</Typography>
      </VerticalFlex>
    </Button>
  );
}
