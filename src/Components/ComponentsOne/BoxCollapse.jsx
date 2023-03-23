import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { VerticalFlexCenter } from "../../utility/FlexBox";
import Icon1 from "../../images/icon1.png";
import Icon2 from "../../images/icon2.png";
import Icon3 from "../../images/icon3.png";
import Icon4 from "../../images/icon4.png";
import Icon5 from "../../images/icon5.png";
import Icon6 from "../../images/icon6.png";
import Icon7 from "../../images/icon7.png";
import Icon8 from "../../images/icon8.png";

export const imageInfo = [
  {
    url: Icon1,
    title: "Total No. of Leads",
  },
  {
    url: Icon2,
    title: "Assigned Leads",
  },
  {
    url: Icon3,
    title: "Non-Assign Leads",
  },
  {
    url: Icon4,
    title: "Phase-I :- Opening",
  },
  {
    url: Icon5,
    title: "Phase-II :- Show Time",
  },
  {
    url: Icon6,
    title: "Phase-III :- Closing",
  },
  {
    url: Icon7,
    title: "Today's Follow up",
  },
  {
    url: Icon8,
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered ? "scale(0.8)" : "scale(1)",
        transition: isHovered ? "all 0.8s" : "all 1s",
        borderRadius: isHovered ? 15 : 0,
      }}
      elevation={isHovered ? 18 : 0}
    >
      <VerticalFlexCenter width={300} height={160}>
        <img src={url} style={{ height: "70px", width: "70px" }} />
        <Box sx={{ mt: 2 }}>
          <Typography variant="h5">{title}</Typography>
        </Box>
      </VerticalFlexCenter>
    </Paper>
  );

  return <Box>{icon}</Box>;
}
