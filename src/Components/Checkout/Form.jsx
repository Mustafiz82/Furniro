import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { CartContext } from "../../context/CartContext";
import axiosPUblic from "../../axios/axiosPublic";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { updatedCartData, totalPrice } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const onSubmit = (data) => {
    if (paymentMethod == "Stripe") {
      return console.log("stripe");
    }
    if (paymentMethod == "SSL") {
      return console.log("SSL");
    }
    if (paymentMethod == "COD") {
      axiosPUblic
        .post("/order", {
          ...data,
          paymentMethod: paymentMethod,
          productInfo: updatedCartData?.map((item) => ({
            productID: item?._id,
            cartID: item?.cartID,
            price: item?.price,
            quantity: item?.quantity,
          })),
          orderDate: new Date(),
          orderStatus: "pending",
          paymentStatus: "Pending",
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
  };

  return (
    <form
      className="grid gap-26 grid-cols-1 lg:grid-cols-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className="flex  gap-5">
          <div className="mt-5 w-full">
            <label htmlFor="first_name" className="font-semibold">
              {" "}
              First Name
            </label>{" "}
            <br />
            <input
              id={"first_name"}
              className="w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg"
              type="text"
              {...register("first_name", { required: true })}
            />
          </div>
          <div className="mt-5  w-full">
            <label htmlFor="last_name" className="font-semibold">
              {" "}
              Last Name
            </label>{" "}
            <br />
            <input
              id={"last_name"}
              className="w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg"
              type="text"
              {...register("last_name", { required: true })}
            />
          </div>
        </div>
        <div className="mt-5">
          <label htmlFor="last_name" className="font-semibold">
            {" "}
            Company Name (Optional)
          </label>{" "}
          <br />
          <input
            id={"last_name"}
            className="w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg"
            type="text"
            {...register("company_name")}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="last_name" className="font-semibold">
            {" "}
            Country / Region
          </label>{" "}
          <br />
          <select
            defaultValue="Pick a color"
            className="select w-full border-gray-500 h-14 mt-2 rounded-lg"
            {...register("country", { required: true })}
          >
            <option value={"Bangladesh"}>Bangladesh</option>
            <option value={"India"}>India</option>
            <option value={"Pakistan"}>Pakistan</option>
          </select>
        </div>

        <div className="mt-5">
          <label htmlFor="last_name" className="font-semibold">
            {" "}
            Street Address
          </label>{" "}
          <br />
          <input
            id={"last_name"}
            className="w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg"
            type="text"
            {...register("street_address", { required: true })}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="last_name" className="font-semibold">
            {" "}
            Zip Code
          </label>{" "}
          <br />
          <input
            id={"last_name"}
            className="w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg"
            type="text"
            {...register("zip_code", { required: true })}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="last_name" className="font-semibold">
            Phone
          </label>{" "}
          <br />
          <input
            id={"last_name"}
            className="w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg"
            type="text"
            {...register("phone", { required: true })}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="last_name" className="font-semibold">
            Email Address
          </label>{" "}
          <br />
          <input
            id={"last_name"}
            className="w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg"
            type="text"
            {...register("email", { required: true })}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="last_name" className="font-semibold">
            Additional Information
          </label>{" "}
          <br />
          <input
            id={"last_name"}
            className="w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg"
            type="text"
            {...register("additional_information")}
          />
        </div>
      </div>

      <div>
        <div className="border-b pb-10 border-gray-500">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Product</h2>
            <h2 className="text-xl font-semibold">Subtotal</h2>
          </div>

          {updatedCartData?.map((item) => (
            <div className="flex justify-between items-center mt-5">
              <p className="text-black/50 mt-2">
                {item?.productName}{" "}
                <span className="text-black">x {item?.quantity || 1}</span>{" "}
              </p>
              <p>BDT {item?.price}</p>
            </div>
          ))}

          <div className="flex justify-between items-center mt-3">
            <p className="text-black/50 mt-2">Subtotal </p>
            <p>BDT {totalPrice}</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-black/50 mt-2">Delivery Charge </p>
            <p>BDT 100</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-black/50 mt-2">Total </p>
            <p className="text-xl font-semibold text-antique-gold">
              BDT {totalPrice + 100}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="font-semibold text-xl">Select Payment Method </h2>

          <div className="flex gap-2 mt-3 items-center">
            <input
              id="Stripe"
              onChange={() => setPaymentMethod("Stripe")}
              type="radio"
              name="radio-1"
              className="radio"
            />
            <label htmlFor="Stripe">Pay with Stripe</label>
          </div>
          <div className="flex gap-2 mt-3 items-center">
            <input
              id="SSL"
              onChange={() => setPaymentMethod("SSL")}
              type="radio"
              name="radio-1"
              className="radio"
            />
            <label htmlFor="SSL">Pay with SSLCOMMERSZ</label>
          </div>
          <div className="flex gap-2 mt-3 items-center">
            <input
              id="COD"
              onChange={() => setPaymentMethod("COD")}
              type="radio"
              name="radio-1"
              className="radio"
            />
            <label htmlFor="COD">Cash On Delivery</label>
          </div>
        </div>

        <label
          htmlFor="order-submit-button"
          className="text-lg mt-5 text-antique-gold px-16 py-3 btn btn-outline"
        >
          Place Order
        </label>
      </div>

      <input
        className="hidden"
        id="order-submit-button"
        type="submit"
        value={"submit"}
      />
    </form>
  );
};

export default Form;
