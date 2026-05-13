import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
import Swal from "sweetalert2";
import axiosPUblic from "../../axios/axiosPublic";

const cartCard = ({ item , refetch  , updatedCartData , setUpdateCartData}) => {



  


  const [quantity, setQuantity] = useState(1);
  console.log(quantity);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPUblic.delete(`/cart/${item?.cartID}`).then((res) => {
          if (res?.data?.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

//   console.log(item);

  const handleUpdateState = () => {

    const matched = updatedCartData.find(cartItem => item?.cartID === cartItem?.cartID )
    const otherCartItem = updatedCartData.filter(cartItem => item?.cartID !== cartItem?.cartID )

    console.log(updatedCartData);
    console.log(item?.cartID);

    matched.quantity = quantity

    console.log(matched);
    setUpdateCartData([...otherCartItem , matched ])


  }


  return (
    <div>
      <div>
        <div className="mt-5 grid grid-cols-[2fr_1fr_1fr_1fr_40px]  items-center text-black/50">
          <div className="flex items-center gap-2 text-black/50">
            <img
              className="w-20 rounded-lg h-20"
              src={item.images?.[0]}
              alt=""
            />
            <h2>{item?.productName}</h2>
          </div>

          <h2>{item.price}</h2>

          <div className="flex gap-1">
            <input
              type="number"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value)
                handleUpdateState()
              }}
              className="p-2 border border-black/50 w-10 flex justify-center rounded-lg text-black"
            />
            <div className="space-y-1">
              <FaPlus
                onClick={() =>{
                     setQuantity(quantity + 1)
                    handleUpdateState()
                }}
                className="bg-antique-gold text-white p-1 text-xl"
              />
              <FaMinus
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="bg-antique-gold text-white p-1 text-xl"
              />
            </div>
          </div>

          <h2 className="text-black">{item.price * quantity}</h2>

          <MdDelete onClick={handleDelete} className="text-antique-gold text-lg cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default cartCard;
