import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const PaymentDetails = () => {
  const { updatedCartData, totalPrice } = useContext(CartContext);
  const [paymentMethod , setPaymentMethod] = useState("COD")

//   console.log(paymentMethod);



  const handlePlaceOrder = () => {
    if(paymentMethod == "Stripe"){
        return console.log("stripe");
    }
    if(paymentMethod == "SSL"){
        return console.log("SSL");
    }
    if(paymentMethod == "COD"){
        return console.log("stripe");
    }
  }


  return (
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
          <input id="Stripe" onChange={() => setPaymentMethod("Stripe")} type="radio" name="radio-1" className="radio" />
          <label htmlFor="Stripe">Pay with Stripe</label>
        </div>
        <div className="flex gap-2 mt-3 items-center">
          <input id="SSL" onChange={() => setPaymentMethod("SSL")} type="radio" name="radio-1" className="radio" />
          <label htmlFor="SSL">Pay with SSLCOMMERSZ</label>
        </div>
        <div className="flex gap-2 mt-3 items-center">
          <input id="COD" onChange={() => setPaymentMethod("COD")} type="radio" name="radio-1" className="radio" />
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
  );
};

export default PaymentDetails;
