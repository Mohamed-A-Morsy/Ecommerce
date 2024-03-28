import React from "react";
import HomeSlider from './../HomeSlider/HomeSlider';
import axios from "axios";
import { useQuery } from "react-query";
import { FallingLines } from "react-loader-spinner";
import CategorySlider from "../CategorySlider/CategorySlider";
import Products from './../Products/products';

export default function Home() {

  function getAllProducts() {

    return axios.get("https://ecommerce.routemisr.com/api/v1/products")


  }
  const {isLoading}= useQuery("products",getAllProducts )

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
  






  return <>
  
  <div className="container">
    <div className="row my-4">
      <div className="col-md-9">
      <HomeSlider/>
      </div>
      <div className="col-md-3">
        <div>
          <img style={{height:"150px"}} className="w-100" src={require("../../images/grocery-banner.png")} alt="" />
        </div>
        <div>
          <img style={{height:"150px"}} className="w-100" src={require("../../images/grocery-banner-2.jpeg")} alt="" />
        </div>
      </div>
    </div>
    <CategorySlider/>

    <Products/>
  </div>
  
  
  
  
  
  
  </>
}
