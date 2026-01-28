import React from 'react';
import image from "../../assets/ProductDetails/Mask group (3).png"
import { TbCurrencyTaka } from 'react-icons/tb';

const MyOrder = () => {
    return (
        <div className='p-5'>
            <h2 className='text-2xl font-semibold '>My Order</h2>

            <div className='border  w-full p-5 mt-10'>
                <div className='flex border-b pb-5 justify-between items-center'>
                    <div>
                        <h2>Order  ID : 635464164651</h2>
                        <p>Order Date : 24 January 2024</p>
                        <h2 className='flex items-center'>Total : <TbCurrencyTaka/>  42515 </h2>
                    </div>

                    <p className='px-5 py-1 bg-gold-light  w-fit rounded-full'>Pending</p>
                </div>

                <div className='flex justify-between'>
                    <div className='mt-5 flex gap-2'>
                        <img src={image} className='bg-gold-light w-16 h-16' alt="" />
                        <div>
                            <h2 className='text-lg font-semibold'>Asgard Sofa</h2>
                            <p>Quantity : 2</p>
                        </div>
                    </div>

                    <div className='text-xl flex items-center'>
                        <TbCurrencyTaka/>  42515
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='mt-5 flex gap-2'>
                        <img src={image} className='bg-gold-light w-16 h-16' alt="" />
                        <div>
                            <h2 className='text-lg font-semibold'>Asgard Sofa</h2>
                            <p>Quantity : 2</p>
                        </div>
                    </div>

                    <div className='text-xl flex items-center'>
                        <TbCurrencyTaka/>  42515
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;