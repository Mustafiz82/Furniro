import React from 'react';
import { FaEdit, FaPlus } from 'react-icons/fa';
import { data } from '../../../Data/products';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router';
import useFetch from '../../../hook/useFetch';
import Swal from 'sweetalert2';
import axiosPUblic from '../../../axios/axiosPublic';

const ManageProducts = () => {


    const { data , refetch } = useFetch("/product")

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            axiosPUblic.delete(`/product/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch()
                        if (result.isConfirmed) Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })


        });
    }
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
                                data?.map(item => <tr className="hover:bg-base-300">
                                    <th>2</th>
                                    <td className='flex  gap-2'>
                                        <img className='w-12 h-12' src={item?.images[0]} alt="" />
                                        <div>
                                            <h2>{item?.productName}</h2>
                                            <p>{item?.configaration}</p>
                                        </div>
                                    </td>
                                    <td>{item.category}</td>
                                    <td>BDT {item.price}</td>
                                    <td className='space-x-2  '>
                                        <Link to={`/admin/manage-products/edit/${item._id}`} className='btn bg-antique-gold text-white'>

                                            <FaEdit /> Edit</Link>
                                        <button onClick={() => handleDelete(item?._id)} className='btn bg-antique-gold text-white'>

                                            <MdDelete /> Delete</button>

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