import React from 'react';
import { data } from '../../Data/products';
import { MdDelete } from 'react-icons/md';

const CartData = () => {
    return (
        <div className='w-full pb-20 container mx-auto mt-10'>
            <div className="grid grid-cols-3 gap-10">
                <div className='col-span-2'>
                    <div className='grid font-semibold w-full bg-gold-light p-3 grid-cols-[2fr_1fr_1fr_1fr_40px]  '>

                        <h3>Product</h3>
                        <h3>Price</h3>
                        <h3>Quantity</h3>
                        <h3>Subtotal</h3>

                    </div>

                    {
                        data.slice(0 , 2).map(item => <div className='mt-5 grid grid-cols-[2fr_1fr_1fr_1fr_40px]  items-center text-black/50'>
                            <div className='flex items-center gap-2 text-black/50'>
                                <img className='w-20 rounded-lg h-20' src={item.image} alt="" />
                                <h2>{item.name}</h2>
                            </div>

                            <h2>{item.price}</h2>

                            <div className='p-2 border border-black/50 w-10 flex justify-center rounded-lg text-black'>
                                {item?.quantity || 1}
                            </div>


                            <h2 className='text-black'>{item.price}</h2>


                            <MdDelete className='text-antique-gold text-lg cursor-pointer'/>

                        </div>)
                    }
                </div>



                <div className='bg-gold-light p-10 px-10 w-full '>
                    <h2 className='text-2xl font-semibold text-center'>Cart Total</h2>


                    <div className='mt-8 flex justify-between'>
                        <p>Subtotal </p>
                        <p>BDT 25000000</p>
                    </div>
                    <div className='mt-2 border-b pb-5 flex justify-between'>
                        <p>Delivery Charge </p>
                        <p>BDT 100</p>
                    </div>
                    <div className='mt-2 pb-5 flex justify-between'>
                        <p>Total </p>
                        <p>BDT 25000100</p>
                    </div>


                 <div className="flex justify-center">
                       <button className='btn  btn-outline rounded-xl  px-10 py-6'>Checkout</button>
                 </div>
                </div>
            </div>
        </div>
    );
};

export default CartData;