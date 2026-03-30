import React, { useState } from 'react';
import logo from "../../../assets/logo.png"
import { FaRemoveFormat } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import axios from 'axios';
import axiosPUblic from '../../../axios/axiosPublic';
import useFetch from '../../../hook/useFetch';
import Swal from 'sweetalert2';
const ManageCategory = () => {

    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false)
    const { data, error, loading: dataloading, refetch } = useFetch("/category")
    console.log(data);

    const handleSubmit = async (e) => {

        e.preventDefault()
        setLoading(true)
        const name = e.target.name.value

        if (!image) {
            return
        }


        const formdata = new FormData()

        formdata.append("file", image[0])
        formdata.append("upload_preset", "furniro")


        const res = await axios.post("https://api.cloudinary.com/v1_1/dcpjqjkht/image/upload", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })


        const dbResponse = await axiosPUblic.post("/category", {
            name,
            url: res.data.url
        })
        setLoading(false)
        e.target.reset()
        setImage(null)
        refetch()
        console.log(dbResponse);

        // console.log({name , image});

    }


    const handleDelete = (id) => {
        console.log(id);
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

                axiosPUblic.delete(`/category/${id}`)
                    .then(() => {
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Category has been deleted.",
                            icon: "success"
                        });
                    })
            }
        });

    }


    console.log(image?.[0]);

    return (
        <div>
            <div className="grid  grid-cols-[1fr_300px]">
                <div className='p-5'>


                    {
                        dataloading ? <div className='w-full  text-center py-20'>
                            Loading....
                        </div> : <div className='grid gap-5 grid-cols-6 text-center'>
                            {
                                data.map(item => <div className='border relative p-5'>
                                    <img className='w-20 h-auto mb-5' src={item.url} alt="" />
                                    <h2 className='text-xl font-semibold'>{item.name}</h2>
                                    <button onClick={() => handleDelete(item._id)} className='absolute top-2 bg-red-500 text-white rounded-full p-1 right-2'><IoMdClose /></button>
                                </div>)
                            }

                        </div>
                    }



                </div>

                <form onSubmit={handleSubmit} className='border-l p-5 h-screen'>
                    <label htmlFor="category_name" className='mb-2'> Category Name</label>
                    <input className='input mt-2 input-bordered' name='name' type="text" placeholder='Category Name' />

                    <label htmlFor="category_image" className='inline-block mb-2 mt-5'> Category Image</label>
                    <input onChange={e => setImage(e.target.files)} id='category_image' name='image' className='file-input' type="file" />

                    <button className='btn bg-antique-gold w-full text-white mt-5'>
                        {
                            loading ? "Adding ..." : "Add Category"
                        }
                    </button>
                </form>



            </div>
        </div>
    );
};

export default ManageCategory;