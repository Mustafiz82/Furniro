import React, { useContext } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiSort } from "react-icons/bi";
import { FaEye, FaRegHeart, FaShare } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import axiosPUblic from "../../axios/axiosPublic";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const ProductCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToWishList = (id) => {
    console.log(id);

    axiosPUblic
      .post("/wishlist", {
        id,
        email: user.email,
      })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Product Added to WishList",
            icon: "success",
          });
        } else if (res.data.message == "Product Already In WishList") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "product Already In Your WishList",
            footer: "<a href='/wishlist' >Go To WishList</a>",
          });
        }
      });
  };

  const handleAddtoCart = (id) => {
    console.log(id);

    if (!user?.email) {
      return navigate("/login");
    }

    axiosPUblic
      .post("/cart", {
        productID: id,
        email: user?.email,
      })
      .then((res) => {
        if (res?.data?.message == "product Alredy In Cart") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Product Already In Cart",
            
          });
        } else if (res?.data?.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Product Added To cart",
            icon: "success",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="relative group">
      <div>
        <div className="relative">
          <img className="w-full h-[300px]" src={item.images[0]} alt="" />
          {item?.discount && (
            <div className="bg-red-500 px-2 py-3 text-white  rounded-full top-5 right-5 absolute ">
              {item?.discount}
            </div>
          )}
          {item?.isNew && (
            <div
              className={`bg-teal-400 px-2 py-3 text-white  rounded-full ${!item.discount ? "top-5 right-5 " : "left-5 top-5"} absolute `}
            >
              {"New"}
            </div>
          )}
        </div>
        <div className="p-4 space-y-1 bg-[#F4F5F7]">
          <h2 className="text-xl font-semibold">{item?.productName}</h2>

          <div dangerouslySetInnerHTML={{ __html: item?.description }}></div>

          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">BDT {item.price}</p>
            <del>{item.originalPrice}</del>
          </div>
        </div>
      </div>

      <div className="absolute hidden group-hover:flex flex-col justify-center items-center bg-[rgba(58,58,58,0.7)] top-0 left-0 right-0 bottom-0">
        <button
          onClick={() => handleAddtoCart(item?._id)}
          className="btn rounded-none w-[80%] mx-auto text-antique-gold"
        >
          Add to cart
        </button>
        <div className="flex gap-3 text-white mt-2">
          <div className="flex gap-1 items-center">
            <IoShareSocialSharp /> Share
          </div>
          <div className="flex gap-1 items-center">
            <BiSort className="rotate-90" /> Compare
          </div>

          <div
            onClick={() => handleAddToWishList(item?._id)}
            className="flex gap-1 items-center"
          >
            <FaRegHeart /> Wishlist
          </div>
        </div>
        <Link to={`/shop/${item?._id}`}>
          <div className="flex text-white mt-2 gap-1 items-center">
            <FaEye /> View
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
