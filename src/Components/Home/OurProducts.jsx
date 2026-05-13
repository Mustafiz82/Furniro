import React from 'react';
import ProductCard from './ProductCard';
import useFetch from '../../hook/useFetch';

const OurProducts = () => {


    const {data} = useFetch("/product")
    return (
        <div className='container px-5 mx-auto '>
            <h2 className='text-3xl font-semibold text-center'>Our Products</h2>
            <div className='grid content-center gap-5 mt-10 grid-cols-2 lg:grid-cols-4'>

                {
                    data?.map(item => <ProductCard item={item} />)
                }
            </div>
        </div>
    );
};

export default OurProducts;