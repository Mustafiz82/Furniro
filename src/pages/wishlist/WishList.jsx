import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import useFetch from '../../hook/useFetch';
import { MdDelete } from 'react-icons/md';
import axiosPUblic from '../../axios/axiosPublic';
import Swal from 'sweetalert2';

const WishList = () => {

    const { user } = useContext(AuthContext)

    const { data, refetch } = useFetch(`/wishlist/${user?.email}`)

    useEffect(() => {
        refetch()
    }, [user])

    console.log(data);


    const handleDeleteOne = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPUblic.delete(`/wishlist/${id}`)
                    .then(res => {
                        if (res?.data?.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }



        });

    }

    const handleDeleteAll = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPUblic.delete(`/wishlist/deleteall/${user?.email}`)
                    .then(res => {
                        if (res?.data?.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }



        });

    }


    const handleMoveAll = () => {
        axiosPUblic.get(`/wishlist/move/${user?.email}`)
    }

    
    return (
        <div className='py-20 w-full px-5 pb-20 container mx-auto '>
            <h2 className='text-2xl font-semibold '>Wishlist</h2>

            <div className=' min-w-[550px]'>
                <div className='grid font-semibold  w-full bg-gold-light p-3 grid-cols-[2fr_1fr_1fr_1fr_40px]  '>

                    <h3>Product</h3>
                    <h3>Price</h3>
                    <h3>category</h3>


                </div>

                {

                    data?.map(item => <div className='mt-5 grid grid-cols-[2fr_1fr_1fr_1fr_40px]  items-center text-black/50'>
                        <div className='flex items-center gap-2 text-black/50'>
                            <img className='w-20 rounded-lg h-20' src={item?.images?.[0]} alt="" />
                            <h2>{item?.productName}</h2>
                        </div>

                        <h2>{item?.price}</h2>

                        <div className='p-2 flex  rounded-lg text-black'>
                            {item?.category}
                        </div>

                        <MdDelete onClick={() => handleDeleteOne(item?.wishlistId)} className='text-antique-gold text-lg cursor-pointer' />

                    </div>)
                }



          {
            data?.length >  0 ? <div className="flex gap-5 my-10 justify-center items-center">
                    <button onClick={handleDeleteAll} className='btn bg-red-500 text-white'>Delete All Product</button>
                    <button onClick={handleMoveAll} className='btn  btn-outline'>Move All Product to cart</button>
                </div> : ""
          }      
            </div>
        </div>
    );
};

export default WishList;