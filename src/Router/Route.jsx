import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import ProductsDetails from "../pages/ProductDetals/ProductsDetails";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Cart from "../pages/Cart/Cart";
import Comparison from "../pages/Comparison/Comparison";
import Checkout from "../pages/Checkout/page";
import UserLayout from "../Layout/UserLayout";
import UserDashboard from "../pages/Dashboard/UserDashboard";
import MyOrder from "../pages/Dashboard/MyOrder";
import MyProfile from "../pages/Dashboard/MyProfile";

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
      {
        path : "/compare" , 
        element : <Comparison/>
      },
      {
        path : "/checkout" , 
        element : <Checkout/>
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

  , 

  {
    path : "/dashboard",
    element : <UserLayout/>,
    children : [
      {
        path : "/dashboard",
        element : <UserDashboard/>
      },
      {
        path : "/dashboard/my-orders",
        element : <MyOrder/>
      },
      {
         path : "/dashboard/my-profile",
        element : <MyProfile/>
      }
    ]

  }
]);