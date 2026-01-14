import React from 'react';
import Product from '../../Components/Shop/Product';
import Banner from '../../Shared/Banner';

const Shop = () => {
    return (
        <div>
        <Banner
            title={"Shop"}
            route={"shop"}
        />
        <Product/>
        </div>
    );
};

export default Shop;