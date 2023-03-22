import React from "react";
import Carousel from "react-material-ui-carousel";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Paper, Button, Box } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function CarouselOne() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  var items = [
    {
      url: "http://rabsconnect.in/assets/img/slider/banner-1.webp",
    },
    {
      url: "http://rabsconnect.in/assets/img/slider/banner-2.webp",
    },
    {
      url: "http://rabsconnect.in/assets/img/slider/banner-3.webp",
    },
    {
      url: "http://rabsconnect.in/assets/img/slider/banner-4.webp",
    },
    {
      url: "http://rabsconnect.in/assets/img/slider/banner-5.webp",
    },
    {
      url: "http://rabsconnect.in/assets/img/slider/banner-6.webp",
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
