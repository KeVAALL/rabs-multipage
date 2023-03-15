import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function CarouselOne() {
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
        height: "560px",
        width: "570px",
        boxShadow: 3,
        borderRadius: 3,
      }}
      NextIcon={<ArrowForwardIosIcon />}
      PrevIcon={<ArrowBackIosNewIcon />}
      navButtonsAlwaysVisible={true}
    >
      {items.map((item, i) => (
        <Paper elevation={15}>
          <img
            src={item.url}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </Paper>
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <img src={props.url} style={{ height: "500px", objectFit: "contain" }} />
  );
}
