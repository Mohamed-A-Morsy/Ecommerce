import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Products from "./components/Products/products";
import Notfound from "./components/Notfound/Notfound";
import Home from './components/Home/Home';
import WishList from './components/Wishlist/WishList';
import Cart from "./components/Cart/Cart";
import Category from "./components/Catergory/Category";
import Brands from "./components/Brands/Brands";
import AuthContextProvider from "./Context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CartContextProvider from './Context/CartContext';
import { Toaster } from "react-hot-toast";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "register", element: <Registration /> },
      {index: true, path: "/", element: <Login /> },
      { path: "login", element: <Login /> },

      { path: "products", element: <ProtectedRoute>
      <Products />
      </ProtectedRoute> },
       { path: "productDetails/:id", element: <ProtectedRoute>
       <ProductDetails />
       </ProtectedRoute> },


      { path: "home", element:<ProtectedRoute>
        <Home />
        </ProtectedRoute>  },

      { path: "wishlist", element: <ProtectedRoute>
      <WishList />
      </ProtectedRoute> },

      { path: "cart", element:<ProtectedRoute>
      <Cart />
      </ProtectedRoute> },

      { path: "category", element: <ProtectedRoute>
        <Category />
        </ProtectedRoute> },


      { path: "brands", element: <ProtectedRoute>
        <Brands />
        </ProtectedRoute> },



      { path: "*", element: <Notfound /> },
    ],
  },
]);
const client = new QueryClient();
export default function App() {
  return <>

  <QueryClientProvider client={client}>

  <AuthContextProvider>
    <CartContextProvider>
    <RouterProvider router={router} />
    </CartContextProvider>
    </AuthContextProvider>

  
  </QueryClientProvider>



  <Toaster/>
    </>
  ;
}
