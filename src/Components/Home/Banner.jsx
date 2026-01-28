import React from 'react';
import bannerImage from "../../assets/Home/banner.png"
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='relative'>
            <img className=' h-[500px] lg:h-[calc(100vh-64px)] w-full object-cover object-bottom' src={bannerImage} alt="" />

            <div className='p-7 font-poppins space-y-3 -bottom-20 left-1/2 lg:left-auto lg:bottom-auto -translate-x-1/2 lg:translate-x-0 bg-[#FFF3E3] w-100 absolute lg:right-[5%] lg:top-[20%]'>
                <h3 className='text-sm tracking-widest'>New Arrival</h3>
                <h2 className='text-antique-gold text-4xl font-bold'>Discover Our <br /> New Collection</h2>
                <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <Link to={"/"}><button className='btn text-xs px-10 my-2 bg-antique-gold rounded-full text-white'>Buy Now</button></Link>
            </div>
        </div>
    );
};

export default Banner;