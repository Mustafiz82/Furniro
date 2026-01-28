import React from 'react';
import Banner from '../../Shared/Banner';
import CartData from '../../Components/Cart/CartData';
import Featured from '../../Shared/Featured';

const Cart = () => {
    return (
        <div>
            <Banner
                title={"Cart"}
                route={"cart"}

            />

            <CartData />
            <Featured/>

        </div>
    );
};

export default Cart;