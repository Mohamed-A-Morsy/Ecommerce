import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useQuery } from "react-query";
import { FallingLines } from "react-loader-spinner";

export default function CategorySlider() {

 function getCategoryPicture(){
  return axios.get("https://ecommerce.routemisr.com/api/v1/categories")
 }



const{data ,isLoading}=useQuery("categories",getCategoryPicture)
if(isLoading){
    return<>
    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary bg-opacity-50">
          <FallingLines
            color="#fff"
            width="100"
            visible={true}
            ariaLabel="falling-circles-loading"
          />
        </div>
    </>
  }


  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

  
  };



  return (
    <>
      <Slider {...settings}>
        {data.data.data.map((category, idx) => (
          <div key={idx} className="hide-mobile">
            <img style={{height:"180px"}} className="w-100" src={category.image} alt= {category.name}/>
            <h4>{category.name}</h4>
          </div>
        ))}
      </Slider>
    </>
  );}