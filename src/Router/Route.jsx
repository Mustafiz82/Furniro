import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import ProductsDetails from "../pages/ProductDetals/ProductsDetails";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Cart from "../pages/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement : <ErrorPage/>,
    children : [
      {
        path : "/" , 
        element : <Home/>
      },
      {
        path : "/shop" , 
        element : <Shop/>
      },
      {
        path : "/shop/:id" , 
        element : <ProductsDetails/>
      },
      {
        path : "/cart" , 
        element : <Cart/>
      },
      
    ]
  },

  {
    path : "/login",
    element : <Login/>

  },
  {
    path : "/sign-up" , 
    element : <SignUp/>
  }
]);