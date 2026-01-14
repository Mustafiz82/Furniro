import React from 'react';
import banner from "../../assets/shop/banner.jpg"

const Banner = () => {
    return (
        <div className='relative'>
            <img className='h-[400px] w-full object-cover ' src={banner} alt="" />
            <div className='absolute top-0 flex flex-col justify-center items-center left-0 bottom-0 right-0 bg-white/50'>
                <h2 className='text-5xl uppercase font-semibold'>Shop</h2>

                <div className="breadcrumbs text-base">
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Shop</a></li>

                    </ul>   
                </div>
            </div>
        </div>
    );
};

export default Banner;