import React, { useContext } from "react";
import { cartContext } from "../../Context/CartContext";
import { FallingLines } from "react-loader-spinner";

export default function Cart() {
  const { numberOfCartItems, allProducts, totalCartPrice } =
    useContext(cartContext);
    if (!allProducts) {
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


    
      <div className="container bg-body-secondary my-3 py-3">
        <h2>Shop Cart:</h2>
        <h5 className="text-main">Total Cart Price: {totalCartPrice}</h5>

        {allProducts.map((product,idx)=> <div key={idx} className="row align-items-center   py-2 border-1 border-bottom">
         <div className="col-md-1">
           <figure>
             <img className="w-100" src={product.product.imageCover} alt={product.product.title} />
           </figure>
         </div>
         <div className="col-md-9">

         <article>
           <h3>{product.product.title}</h3>
           <h5 className="text-main">Price : {product.price}</h5>
           <button className="btn 
           "><i className="fa-regular fa-trash-can text-main"></i> Remove</button>
         </article>
         
         </div>
         <div className="col-md-2">
           <div className="d-flex align-items-center justify-content-between ">
             <button className="btn btn-outline-success">+</button>
             <p>{product.count}</p>
             <button className="btn btn-outline-danger">-</button>
           </div>
         </div>
       </div>
        )}

       
      </div>

    </>
  );
}
