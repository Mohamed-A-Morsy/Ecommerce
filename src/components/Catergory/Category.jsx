import axios from "axios";
import React from "react";
import { FallingLines } from "react-loader-spinner";
import { useQuery } from "react-query";

export default function Category() {
  function getAllCategouries() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/categories")
  }

const {data,isLoading}= useQuery("categories",getAllCategouries)


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


      <div className="container">
        <div className="row">
        {data.data.data.map((category,idx) =>
        <div key={idx} className="col-md-4 ">
            <div  className="card my-3 product">
              <img style={{height:"400px"}} className="w-100" src={category.image} alt={category.name} />
              <div className="card-footer text-center">
                <h4>{category.name}</h4>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </>
  );
}
