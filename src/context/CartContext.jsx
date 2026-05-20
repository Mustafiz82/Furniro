import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hook/useFetch";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const { data: cartData, refetch } = useFetch(`/cart/${user?.email}`);

  const [updatedCartData, setUpdateCartData] = useState(cartData || []);

  const totalPrice = updatedCartData?.reduce(
    (acc, cv) => acc + parseInt(cv.price) * (cv?.quantity || 1),
    0,
  );

  console.log(totalPrice);

  useEffect(() => {
    refetch();
  }, [user?.email]);

  useEffect(() => {
    if (cartData) {
      setUpdateCartData(cartData);
    }
  }, [cartData]);

  const data = {
    updatedCartData,
    setUpdateCartData,
    refetch,
    totalPrice
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
