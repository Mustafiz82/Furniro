import React from 'react';

const Form = () => {
    return (
        <div>
            <div className='flex  gap-5'>

                <div className='mt-5 w-full'>
                    <label htmlFor='first_name' className='font-semibold' > First Name</label> <br />
                    <input
                        id={"first_name"}
                        className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                        type="text"
                    />
                </div>
                <div className='mt-5  w-full'>
                    <label htmlFor='last_name' className='font-semibold' > Last Name</label> <br />
                    <input
                        id={"last_name"}
                        className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                        type="text"
                    />
                </div>

            </div>

            <div className='mt-5'>
                <label htmlFor='last_name' className='font-semibold' > Company Name (Optional)</label> <br />
                <input
                    id={"last_name"}
                    className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                    type="text"
                />
            </div>


            <div className='mt-5'>
                <label htmlFor='last_name' className='font-semibold' > Country / Region</label> <br />
                <select defaultValue="Pick a color" className="select w-full border-gray-500 h-14 mt-2 rounded-lg">
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>Pakistan</option>
                </select>
            </div>

            <div className='mt-5'>
                <label htmlFor='last_name' className='font-semibold' > Street Address</label> <br />
                <input
                    id={"last_name"}
                    className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                    type="text"
                />
            </div>

            <div className='mt-5'>
                <label htmlFor='last_name' className='font-semibold' > Zip Code</label> <br />
                <input
                    id={"last_name"}
                    className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                    type="text"
                />
            </div>

            <div className='mt-5'>
                <label htmlFor='last_name' className='font-semibold' >Phone</label> <br />
                <input
                    id={"last_name"}
                    className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                    type="text"
                />
            </div>

            <div className='mt-5'>
                <label htmlFor='last_name' className='font-semibold' >Email Address</label> <br />
                <input
                    id={"last_name"}
                    className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                    type="text"
                />
            </div>


            <div className='mt-5'>
                <label htmlFor='last_name' className='font-semibold' >Additional Information</label> <br />
                <input
                    id={"last_name"}
                    className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                    type="text"
                />
            </div>




        </div>
    );
};

export default Form;