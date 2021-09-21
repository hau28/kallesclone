import { useState } from "react";
import Slider from "react-slick";

const settings = {
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoplay: true,
};

export default function Carousel(props) {
  return (
    <Slider
      {...settings}
      style={{ overflowX: "hidden", cursor: "grab" }}
      {...props}
    ></Slider>
  );
}
