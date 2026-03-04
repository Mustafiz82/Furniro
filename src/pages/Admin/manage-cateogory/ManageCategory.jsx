import React from 'react';
import logo from "../../../assets/logo.png"
import { FaRemoveFormat } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
const ManageCategory = () => {
    return (
        <div>
            <div className="grid  grid-cols-[1fr_300px]">
                <div className='p-5'>

                    <div className='grid grid-cols-6 text-center'>
                        <div className='border relative p-5'>
                            <img className='w-20 h-auto mb-5' src={logo} alt="" />
                            <h2 className='text-xl font-semibold'>Sofa</h2>
                        <button className='absolute top-2 bg-red-500 text-white rounded-full p-1 right-2'><IoMdClose /></button>
                        </div>

                    </div>

                </div>

                <div className='border-l p-5 h-screen'>
                    <label htmlFor="category_name" className='mb-2'> Category Name</label>
                    <input className='input mt-2 input-bordered' type="text" placeholder='Category Name' />

                    <label htmlFor="category_image" className='inline-block mb-2 mt-5'> Category Image</label>
                    <input id='category_image' className='file-input' type="file" />

                    <button className='btn bg-antique-gold w-full text-white mt-5'>Add Category</button>
                </div>



            </div>
        </div>
    );
};

export default ManageCategory;