import React from 'react';
import Banner from '../../Shared/Banner';
import CartData from '../../Components/Cart/CartData';

const Cart = () => {
    return (
        <div>
            <Banner 
             title={"Cart"}
             route={"cart"}

             />

<CartData/>

        </div>
    );
};

export default Cart;