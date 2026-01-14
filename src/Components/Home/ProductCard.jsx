import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { BiSort } from 'react-icons/bi';
import { FaEye, FaRegHeart, FaShare } from 'react-icons/fa';
import { IoShareSocialSharp } from 'react-icons/io5';
import { Link } from 'react-router';

const ProductCard = ({ item }) => {
    return (

        <div className='relative group'>
            <div>
                <div className='relative'>
                    <img className='w-full h-[300px]' src={item.image} alt="" />
                    {
                        item?.discount && <div className='bg-red-500 px-2 py-3 text-white  rounded-full top-5 right-5 absolute '>
                            {item?.discount}
                        </div>
                    }
                    {
                        item?.isNew && <div className={`bg-teal-400 px-2 py-3 text-white  rounded-full ${!item.discount ? "top-5 right-5 " : "left-5 top-5"} absolute `}>
                            {"New"}
                        </div>
                    }
                </div>
                <div className='p-4 space-y-1 bg-[#F4F5F7]'>
                    <h2 className='text-xl font-semibold'>{item.name}</h2>
                    <p className='text-black/70 font-medium'>{item.description}</p>
                    <div className='flex gap-2'>
                        <p className='text-lg font-semibold'>BDT {item.price}</p>
                        <del>{item.originalPrice}</del>
                    </div>
                </div>


            </div>

            <div className='absolute hidden group-hover:flex flex-col justify-center items-center bg-[rgba(58,58,58,0.7)] top-0 left-0 right-0 bottom-0'>
                <button className='btn rounded-none w-[80%] mx-auto text-antique-gold'>Add to cart</button>
                <div className="flex gap-3 text-white mt-2">
                    <div className='flex gap-1 items-center'>
                        <IoShareSocialSharp /> Share

                    </div>
                    <div className='flex gap-1 items-center'>
                        <BiSort className='rotate-90' /> Compare

                    </div>

                    <div className='flex gap-1 items-center'>
                        <FaRegHeart /> Wishlist

                    </div>

                </div>
                <Link to={"/shop/1"}>
                    <div className='flex text-white mt-2 gap-1 items-center'>
                        <FaEye /> View

                    </div></Link>
            </div>
        </div>
    );
};

export default ProductCard;