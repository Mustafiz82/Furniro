import React from 'react';
import banner from "../assets/shop/banner.jpg"
import { Link } from 'react-router';

const Banner = ({ title, route }) => {
    return (
        <div className='relative'>
            <img className='h-[400px] w-full object-cover ' src={banner} alt="" />
            <div className='absolute top-0 flex flex-col justify-center items-center left-0 bottom-0 right-0 bg-white/50'>
                <h2 className='text-5xl uppercase font-semibold'>{title}</h2>

                <div className="breadcrumbs text-base">
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><a>{route}</a></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Banner;