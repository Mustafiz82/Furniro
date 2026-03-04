import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import uploadImage from "../../../assets/upload-image.png"
import Editor from '../../../Components/Admin/Editor';
import { IoMdClose } from 'react-icons/io';
const AddProduct = () => {

    const [files, setFiles] = useState([])
    const [newFiles, setNewFiles] = useState([])
    const [resetFile, setResetFile] = useState(false)

    const handleChangeFile = (e) => {
        setFiles(prev => [...prev, ...e.target.files])
    }

    console.log(files)
    const handleRemoveImg = (idx) => {

        let newFiles = files
        newFiles.splice(idx, 1)
        console.log(newFiles)
        setNewFiles(newFiles)
        setResetFile(!resetFile)

    }

    console.log(newFiles)


    useEffect(() => {
        setFiles(newFiles)
    }, [resetFile])

    return (
        <div className='p-5'>
            <div className="flex items-center justify-between">
                <h2 className='text-2xl font-semibold'> Add New product</h2>
                <button className='btn bg-antique-gold text-white '>
                    Add Product
                </button>
            </div>


            <div className='grid gap-10 mt-10 grid-cols-4'>
                <div className='col-span-3'>
                    <div className=' w-full'>
                        <label htmlFor='first_name' className='font-semibold' > Product Name</label> <br />
                        <input
                            id={"first_name"}
                            className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                            type="text"
                        />
                    </div>


                    <div className='mt-8 mb-8'>
                        <Editor />
                    </div>

                    <div className='w-full mt-'>
                        <label htmlFor='last_name' className='font-semibold' > Category</label> <br />
                        <select defaultValue="Pick a color" className="select w-full border-gray-500 h-14 mt-2 rounded-lg">
                            <option>Bangladesh</option>
                            <option>India</option>
                            <option>Pakistan</option>
                        </select>
                    </div>




                    <div className='mt-5 flex gap-5'>
                        <div className=' w-full'>
                            <label htmlFor='price' className='font-semibold' > Price</label> <br />
                            <input
                                id={"price"}
                                className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                                type="text"
                            />
                        </div>


                        <div className='w-full'>
                            <label htmlFor='last_name' className='font-semibold' > Country / Region</label> <br />
                            <select defaultValue="Pick a color" className="select w-full border-gray-500 h-14 mt-2 rounded-lg">
                                <option>Bangladesh</option>
                                <option>India</option>
                                <option>Pakistan</option>
                            </select>
                        </div>


                    </div>

                    <div className='mt-5 flex gap-5'>
                        <div className=' w-full'>
                            <label htmlFor='sales-package' className='font-semibold' > Sales Package</label> <br />
                            <input
                                id={"sales-package"}
                                className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                                type="text"
                            />
                        </div>
                        <div className=' w-full'>
                            <label htmlFor='secondary-matirial' className='font-semibold' > secondary matirial</label> <br />
                            <input
                                id={"secondary-matirial"}
                                className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                                type="text"
                            />
                        </div>






                    </div>
                    <div className='mt-5 flex gap-5'>
                        <div className=' w-full'>
                            <label htmlFor='Configuration' className='font-semibold' > Configuration</label> <br />
                            <input
                                id={"Configuration"}
                                className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                                type="text"
                            />
                        </div>
                        <div className=' w-full'>
                            <label htmlFor='upholstery-material' className='font-semibold' > Upholstery Material</label> <br />
                            <input
                                id={"upholstery-material"}
                                className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                                type="text"
                            />
                        </div>






                    </div>


                    <div className='mt-5 flex gap-5'>
                        <div className=' w-full'>
                            <label htmlFor='upholstery' className='font-semibold' > Upholstery Color</label> <br />
                            <input
                                id={"upholstery"}
                                className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                                type="text"
                            />
                        </div>
                        <div className=' w-full'>
                            <label htmlFor='filling-material' className='font-semibold' > Filling Material</label> <br />
                            <input
                                id={"filling-material"}
                                className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                                type="text"
                            />
                        </div>






                    </div>



                </div>





                <div className='col-span-1'>
                    <label htmlFor='upload-img' className='bg-base-200 w-full h-[300px]'>
                        <img src={uploadImage} alt="" />

                    </label>

                    <input multiple className='hidden' onChange={handleChangeFile} id='upload-img' type="file" />

                    <div className='flex  gap-2 flex-wrap'>

                        {
                            files.map((item, idx) => <div className="relative">
                                <img className='w-16 h-16' src={URL.createObjectURL(item)} alt="" />
                                <span onClick={() => handleRemoveImg(idx)} className='absolute top-0 right-0 bg-red-500 text-white rounded-full p-[2px]'><IoMdClose /></span>
                            </div>)
                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AddProduct;