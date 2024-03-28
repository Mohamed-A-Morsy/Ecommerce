import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../images/freshcart-logo.svg"
import { authContext } from './../../Context/AuthContext';

export default function Navbar() {




 const {token,setToken} =useContext(authContext)
const navegate =useNavigate()
  function logout(){
    localStorage.removeItem('tkn')
    setToken(null)
    navegate("/login")
  }

return <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand" to="/home">
      <img  src={logo} alt="fresh card" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
    
    {token ?<ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
    
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/cart">Cart</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/wishlist">Wish List</Link>
    </li> 
     <li className="nav-item">
      <Link className="nav-link" to="/products">Product</Link>
    </li> 
    <li className="nav-item">
      <Link className="nav-link" to="/category">Categories</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/brands">brands</Link>
    </li>
  </ul> :"" }
      
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center ">
        

       {token ? <li className="nav-item">
          <span onClick={logout} className='cursor-pointer'>Log out</span>
        </li>:<>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li></>}
      </ul>
    </div>
  </div>
</nav> 
  </>
}
