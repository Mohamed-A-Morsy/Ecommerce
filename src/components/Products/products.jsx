import axios from "axios";
import React from "react";
import { useContext } from "react";
import { FallingLines } from "react-loader-spinner";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";

export default function Products() {
  // const [allProducts, setAllProducts] = useState(null);
  function getAllProducts() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products");

    // axios
    //   .get("https://ecommerce.routemisr.com/api/v1/products")
    //   .then((res) => {
    //     setAllProducts(res.data.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
  const { data, isLoading } = useQuery("products", getAllProducts);
  // useEffect(() => {
  //   getAllProducts();

  // }, []);
  const {addProductToCart}=useContext(cartContext)
  async function addProduct(id){
   const res =await addProductToCart(id)
   if(!res){
    toast.success("Added product successfully",{duration:2500,position:"bottom-left" })

   }else{
    toast.error("Failed to add product",{duration:2500,position:"bottom-left"})
   }
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
      <div className="container ">
        <div className="row">
          <div className="col-md-12">
            <div className="search m-auto my-5 py-5 w-75">
              <input
                type="text"
                className="form form-control"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="row ">
          {data.data.data.map((product, idx) => {
            return (
              <div key={idx} className="col-md-2">
                <div className="product px-2 py-2 ">
                <Link to={`/productDetails/${product.id}`}>
                  <div>
                    <img
                      src={product.imageCover}
                      className="w-100"
                      alt="product"
                    />
                    <h2 className="font-sm text-main">
                      {product.category.name}
                    </h2>
                    <h3 className="h5">
                      {product.title.split(" ").splice(0, 2).join(" ")}
                    </h3>

                    <div className="d-flex justify-content-between font-sm">
                      {product.priceAfterDiscount ? (
                        <p>
                          <del>{product.price}</del>-
                          {product.priceAfterDiscount}EGP{" "}
                        </p>
                      ) : (
                        <p>{product.price} EGP</p>
                      )}

                      <p>
                        <span>
                          <i className="fa-solid fa-star  rating-color"></i>
                        </span>
                        {product.ratingsAverage}
                      </p>
                    </div>

                    
                  </div>
                </Link>
                <div className=" w-100 d-flex justify-content-center">
                      <button onClick={()=> addProduct(product.id )} className="btn"> + Add To Cart</button>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
