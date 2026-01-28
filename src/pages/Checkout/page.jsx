import React from 'react';
import Banner from '../../Shared/Banner';
import Form from '../../Components/Checkout/Form';
import PaymentDetails from '../../Components/Checkout/PaymentDetails';

const Checkout = () => {
    return (
        <div>
            <Banner title={"Checkout"} route={"Checkout"}/>


            <div className='container px-5 mx-auto  my-16'>
                <h2 className='text-2xl font-semibold'>Billings Details</h2>

                <div className='grid gap-26 grid-cols-1 lg:grid-cols-2'>
                        <Form/>
                        <PaymentDetails/>
                </div>
            </div>
        </div>
    );
};

export default Checkout;