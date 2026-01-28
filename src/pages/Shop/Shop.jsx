import React from 'react';
import Product from '../../Components/Shop/Product';
import Banner from '../../Shared/Banner';
import Featured from '../../Shared/Featured';

const Shop = () => {
    return (
        <div>
        <Banner
            title={"Shop"}
            route={"shop"}
        />
         <Product/>
       <Featured/>
        </div>
    );
};

export default Shop;