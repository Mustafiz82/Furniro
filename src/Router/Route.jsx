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
import AdminLayout from "../Layout/AdminLayout";
import Admin from "../pages/Admin/Admin";
import ManageProducts from "../pages/Admin/manage-product/ManageProducts";
import AddProduct from "../pages/Admin/manage-product/AddProduct";
import ManageCategory from "../pages/Admin/manage-cateogory/ManageCategory";

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

  },
  {
    path : "/admin",
    element : <AdminLayout/>,
    children : [
      {
        path : "/admin",
        element : <Admin/>
      },
      {
        path : "/admin/manage-products",
        element : <ManageProducts/>
      },
      {
        path : "/admin/manage-products/add",
        element : <AddProduct/>
      },
      {
        path : "/admin/manage-category",
        element : <ManageCategory/>
      },
      // {
      //   path : "/dashboard/my-orders",
      //   element : <MyOrder/>
      // },
      // {
      //    path : "/dashboard/my-profile",
      //   element : <MyProfile/>
      // }
    ]

  }
]);