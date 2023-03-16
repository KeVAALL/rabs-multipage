import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export const imageInfo = [
  {
    url: "http://rabsconnect.in/assets/img/icons/icon1.webp",
    title: "Total No. of Leads",
  },
  {
    url: "http://rabsconnect.in/assets/img/icons/icon2.webp",
    title: "Assigned Leads",
  },
  {
    url: "http://rabsconnect.in/assets/img/icons/icon3.webp",
    title: "Non-Assign Leads",
  },
  {
    url: "http://rabsconnect.in/assets/img/icons/icon4.webp",
    title: "Phase-I :- Opening",
  },
  {
    url: "http://rabsconnect.in/assets/img/icons/icon5.webp",
    title: "Phase-II :- Show Time",
  },
  {
    url: "http://rabsconnect.in/assets/img/icons/icon6.webp",
    title: "Phase-III :- Closing",
  },
  {
    url: "http://rabsconnect.in/assets/img/icons/icon7.webp",
    title: "Today's Follow up",
  },
  {
    url: "http://rabsconnect.in/assets/img/icons/icon8.webp",
    title: "Missed Follow Up's",
  },
];

export default function BoxCollapse({ url, title }) {
  const [isHovered, setIsHovered] = useState(false);
  const [images, updateImages] = useState(imageInfo);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const icon = (
    <Paper
      sx={{}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered ? "scale(0.8)" : "scale(1)",
        transition: isHovered ? "all 0.8s" : "all 1s",
        borderRadius: isHovered ? 15 : 0,
      }}
      elevation={isHovered ? 18 : 0}
    >
      <Box
        sx={{
          width: 300,
          height: 160,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={url} style={{ height: "70px", width: "70px" }} />
        <Box sx={{ mt: 2 }}>
          <Typography variant="h5">{title}</Typography>
        </Box>
      </Box>
    </Paper>
  );

  return (
    <Box
    //   sx={{
    //     display: "flex",
    //     alignContent: "center",
    //     justifyContent: "center",
    //   }}
    >
      {icon}
    </Box>
  );
}
