import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react';
import { authContext } from './AuthContext';

export const cartContext = createContext()


export default function CartContextProvider({ children}) {

const {token}= useContext(authContext)
const [allProducts, setAllProducts] = useState(null)
const [numberOfCartItems, setNumberOfCartItems] = useState(0)
const [totalCartPrice, setTotalCartPrice] = useState(0)

async function addProductToCart(id){

const res= await  axios.post("https://ecommerce.routemisr.com/api/v1/cart", {
  "productId": id,
},
{headers: {token:localStorage.getItem('tkn')}})
.then((res)=>{
  console.log(res.data);
  // setAllProducts(res.data.data.products);
  // setTotalCartPrice(res.data.data.totalCartPrice);
  // setNumberOfCartItems(res.data.numOfCartItems);
  getUserCart()
  return true;

})
.catch(err=>{
console.log(err);
})

}
function getUserCart(){
  axios.get("https://ecommerce.routemisr.com/api/v1/cart",{
    headers: {
      token:localStorage.getItem('tkn')}
  }).then((res)=>{
      setAllProducts(res.data.data.products);
      setTotalCartPrice(res.data.data.totalCartPrice);
      setNumberOfCartItems(res.data.numOfCartItems);
  })
  .catch((err)=>{
    console.log(err);


  })
}


useEffect(()=>{
getUserCart()
},[token])

  return <cartContext.Provider value={{addProductToCart,numberOfCartItems,allProducts,totalCartPrice}}>
  {children}
  </cartContext.Provider>
}
