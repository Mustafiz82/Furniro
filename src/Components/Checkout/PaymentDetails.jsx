import React from 'react';

const PaymentDetails = () => {
    return (
        <div>
            <div className="border-b pb-10 border-gray-500">

                <div className="flex justify-between">
                    <h2 className='text-xl font-semibold'>Product</h2>
                    <h2 className='text-xl font-semibold'>Subtotal</h2>
                </div>

                <div className='flex justify-between items-center mt-5'>
                    <p className='text-black/50 mt-2'>Asgard Sofa <span className='text-black'>x 1</span> </p>
                    <p>BDT 250000</p>

                </div>

                <div className='flex justify-between items-center mt-3'>
                    <p className='text-black/50 mt-2'>Subtotal </p>
                    <p>BDT 250000</p>

                </div>
                <div className='flex justify-between items-center mt-3'>
                    <p className='text-black/50 mt-2'>Delivery Charge </p>
                    <p>BDT 250000</p>

                </div>
                <div className='flex justify-between items-center mt-3'>
                    <p className='text-black/50 mt-2'>Total </p>
                    <p className='text-xl font-semibold text-antique-gold'>BDT 250000</p>

                </div>
            </div>



        <div className='mt-5'>
                <h2 className='font-semibold text-xl'>Select Payment Method </h2>

                <div className="flex gap-2 mt-3 items-center">
                    <input type="radio" name="radio-1" className="radio" />
                    <p>Pay with Stripe</p>
                </div>  
                <div className="flex gap-2 mt-3 items-center">
                    <input type="radio" name="radio-1" className="radio" />
                    <p>Pay with SSLCOMMERSZ</p>
                </div>
                <div className="flex gap-2 mt-3 items-center">
                    <input type="radio" name="radio-1" className="radio" />
                    <p>Cash On Delivery</p>
                </div>
            </div>



            <button className='text-lg mt-5 text-antique-gold px-16 py-3 btn btn-outline'>Place Order</button>
        </div>
    );
};
    
export default PaymentDetails;