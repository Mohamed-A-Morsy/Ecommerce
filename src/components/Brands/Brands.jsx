import axios from "axios";
import React from "react";
import { FallingLines } from "react-loader-spinner";
import { useQuery } from "react-query";
export default function Brands() {
  function getAllBrands() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands");
  }
  const { data, isLoading } = useQuery("brands", getAllBrands);



  if(isLoading){
    return <>
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

  return (
    <>
      <div className="container ">
        <div className="row mt-5">
          <div className="header text-center ">
            <h2 className="text-main">All Brands</h2>
          </div>
          <div className="row mt-3">
            {data.data.data.map((brand, idx) => (
              <div className="col-md-3 my-2 ">
                <div className="card product">
                  <img
                    src={brand.image}
                    alt={brand.name}
                  />
                  <div className="py-3 footer text-center ">
                    <h6 >{brand.name}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*  */}
    </>
  );
}
