import React from "react";
import Slider from "react-slick";
import MainItem from "../Main/MainItem";
import MenuItem from "./MenuItem";

interface IProps {
  children: string;
}

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    rows: 3,
    slidesPerRow: 5,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="flex m-auto">
          <MenuItem></MenuItem>
        </div>
        <div>
          <MenuItem></MenuItem>
        </div>
        <div>
          <MenuItem></MenuItem>
        </div>
        <div>
          <MenuItem></MenuItem>
        </div>
        <div>
          <MenuItem></MenuItem>
        </div>
        <div>
          <MenuItem></MenuItem>
        </div>
        <div>
          <MenuItem></MenuItem>
        </div>
        <div>
          <MenuItem></MenuItem>
        </div>
        <div>
          <MenuItem></MenuItem>
        </div>
        <div>
          <MenuItem></MenuItem>
        </div>
        <div>
          <MenuItem></MenuItem>
        </div>
        <div>
          <MenuItem></MenuItem>
        </div>
        <div>
          <MenuItem></MenuItem>
        </div>
        <div>
          <MenuItem></MenuItem>
        </div>
        <div>
          <MenuItem></MenuItem>
        </div>
        <div>
          <MenuItem></MenuItem>
        </div>
        <div>
          <MenuItem></MenuItem>
        </div>
        <div>
          <MenuItem></MenuItem>
        </div>
        <div>
          <MenuItem></MenuItem>
        </div>
        <div>
          <MenuItem></MenuItem>
        </div>
        <div>
          <MenuItem></MenuItem>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
