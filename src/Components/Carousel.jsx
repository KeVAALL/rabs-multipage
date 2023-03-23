import React from "react";
import Carousel from "react-material-ui-carousel";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider1 from "../images/carousel1.png";
import Slider2 from "../images/carousel2.png";
import Slider3 from "../images/carousel3.png";
import Slider4 from "../images/carousel4.png";
import Slider5 from "../images/carousel5.png";
import Slider6 from "../images/carousel6.png";

export default function CarouselOne() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  var items = [
    {
      url: Slider1,
    },
    {
      url: Slider2,
    },
    {
      url: Slider3,
    },
    {
      url: Slider4,
    },
    {
      url: Slider5,
    },
    {
      url: Slider6,
    },
  ];

  return (
    <Carousel
      sx={{
        height: "100%",
        width: "100%",
        boxShadow: "0 0 11px rgba(10,10,10,.3)",
        borderRadius: 5,
        display: "block",
        // display: "flex",
        // justifyContent: matches && "center",
      }}
      NextIcon={<ArrowForwardIosIcon />}
      PrevIcon={<ArrowBackIosNewIcon />}
      navButtonsAlwaysVisible={true}
    >
      {items.map((item, i) => (
        <img
          key={i}
          src={item.url}
          style={{ height: "100%", width: "100%", display: "block" }}
        />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <img src={props.url} style={{ height: "500px", objectFit: "contain" }} />
  );
}
