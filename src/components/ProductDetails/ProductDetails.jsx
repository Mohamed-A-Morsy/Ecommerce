import axios from "axios";
import React, { useContext } from "react";
import { FallingLines } from "react-loader-spinner";
import { useQuery } from "react-query";
import { Navigate, useParams } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";

export default function ProductDetails() {
  const { id } = useParams();
  const{addProductToCart}= useContext(cartContext)


 
  async function addProduct(id) {
    let res = await addProductToCart(id);

if(!res){
  toast.success("Added Product Successfully",{
    duration:2500,
    position:"bottom-left"
  })

}else{
  toast.error("Failed to add product",{duration:2500,position:"bottom-left"})



}
  }

  

  function getProductDetails() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }
  const { data, isLoading, isError  } = useQuery(
    `productDetails ${id}`,
    getProductDetails
  );
        if(isError) {
            return <Navigate to ="/products" />
        }

  if (isLoading) {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center vh-100 bg-primary bg-opacity-50">
          <FallingLines
            color="#fff"
            width="100"
            visible={true}
            ariaLabel="falling-circles-loading"
          />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row align-items-center">
          <div className="col-3">
            <figure>
              <img
                className="w-100"
                src={data.data.data.imageCover}
                alt={data.data.data.title}
              />
            </figure>
          </div>
          <div className="col-9">
            <article>
              <h1 className="fw-bolder">{data.data.data.title}</h1>
              <p>{data.data.data.description}</p>

              <div className="d-flex justify-content-between">
                <p>{data.data.data.price} EGP</p>
                <p>
                  <i className="fa-solid fa-star  rating-color"></i> {data.data.data.ratingsAverage}
                </p>
              </div>
              <div className="d-flex justify-content-between" >

                  <button onClick={ ()=> addProduct(data.data.data.id)}  className="btn bg-main text-white w-75">
                
                Add to card
              </button>
              
              <i className="fa-solid fa-heart  fs-2"></i>
              </div>

            </article>
          </div>
        </div>
      </div>
    </>
  );
}
