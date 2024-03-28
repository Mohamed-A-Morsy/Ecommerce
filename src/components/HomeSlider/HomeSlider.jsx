import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,    
  };
  return (
    <Slider {...settings}>
      <div>
        <img style={{height:"300px"}}  className="w-100" src={require('../../images/slider-image-1.jpeg')}  alt="slider-image" />
      </div>
      <div>
      <img style={{height:"300px"}} className="w-100" src={require('../../images/slider-image-2.jpeg')}  alt="slider-image" />
      </div>
      <div>
      <img style={{height:"300px"}}  className="w-100" src={require('../../images/slider-image-3.jpeg')}  alt="slider-image" />
      </div>
      <div>
      <img style={{height:"300px"}}  className="w-100" src={require('../../images/slider-2.jpeg')}  alt="slider-image" />
      </div>
    
    </Slider>
  );
}