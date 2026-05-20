import React, { useContext, useEffect, useState } from "react";
import { data } from "../../Data/products";
import { MdDelete } from "react-icons/md";
import useFetch from "../../hook/useFetch";
import { AuthContext } from "../../context/AuthContext";
import CartCard from "./CartCard";
import { Link } from "react-router";
import { CartContext } from "../../context/CartContext";
const CartData = () => {

  const { updatedCartData, setUpdateCartData, refetch , totalPrice} =
    useContext(CartContext);

    console.log(updatedCartData);

  return (
    <div className="w-full px-5 pb-20 container mx-auto mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-0 lg:gap-10">
        <div className="w-full col-span-2 overflow-y-auto">
          <div className=" min-w-[550px]">
            <div className="grid font-semibold  w-full bg-gold-light p-3 grid-cols-[2fr_1fr_1fr_1fr_40px]  ">
              <h3>Product</h3>
              <h3>Price</h3>
              <h3>Quantity</h3>
              <h3>Subtotal</h3>
            </div>

            {updatedCartData?.map((item) => (
              <CartCard
                setUpdateCartData={setUpdateCartData}
                updatedCartData={updatedCartData}
                refetch={refetch}
                item={item}
              />
            ))}
          </div>
        </div>

        <div className="bg-gold-light p-10 px-10 w-full ">
          <h2 className="text-2xl font-semibold text-center">Cart Total</h2>

          <div className="mt-8 flex justify-between">
            <p>Subtotal </p>
            <p>BDT {totalPrice}</p>
          </div>
          <div className="mt-2 border-b pb-5 flex justify-between">
            <p>Delivery Charge </p>
            <p>BDT 100</p>
          </div>
          <div className="mt-2 pb-5 flex justify-between">
            <p>Total </p>
            <p>BDT {totalPrice + 100}</p>
          </div>

          <div className="flex justify-center">
            <Link
              to={"/checkout"}
              className="btn  btn-outline rounded-xl  px-10 py-6"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartData;
