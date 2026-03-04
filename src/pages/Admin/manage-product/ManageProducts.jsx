import React from 'react';
import { FaEdit, FaPlus } from 'react-icons/fa';
import { data } from '../../../Data/products';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router';

const ManageProducts = () => {
    return (
        <div className='p-5'>
            <div className="flex justify-between">
                <h2 className='text-2xl font-semibold'> Manage product</h2>
                <Link to={"/admin/manage-products/add"} className='bg-antique-gold btn text-white'> <FaPlus /> Add New Product</Link>
            </div>


            <div className="mt-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-gold-light'>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                          

                          {
                            data.map(item =>  <tr className="hover:bg-base-300">
                                <th>2</th>
                                <td className='flex  gap-2'>
                                    <img className='w-12 h-12' src={item.image} alt="" />
                                    <div>
                                        <h2>{item.name}</h2>
                                        <p>SS001</p>
                                    </div>
                                </td>
                                <td>Category</td>
                                <td>BDT {item.price}</td>
                                <td className='space-x-2  '>
                                    <button className='btn bg-antique-gold text-white'>
                                        
                                        <FaEdit/> Edit</button>
                                    <button className='btn bg-antique-gold text-white'>
                                        
                                        <MdDelete/> Delete</button>
                                      
                                </td>
                            </tr>)
                          }
                            {/* row 2 */}
                           
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;