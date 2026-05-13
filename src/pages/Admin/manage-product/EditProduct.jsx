import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import uploadImage from "../../../assets/upload-image.png"
import Editor from '../../../Components/Admin/Editor';
import { IoMdClose } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import axiosPUblic from '../../../axios/axiosPublic';
import useFetch from '../../../hook/useFetch';
import { useParams } from 'react-router';
const EditProduct = () => {

    const [files, setFiles] = useState([])
    const { id } = useParams()
    const { data: product } = useFetch(`/product/${id}`)

    const { register, handleSubmit, reset } = useForm({
        defaultValues: async () => {
            const response = await axiosPUblic.get(`/product/${id}`)
            const product = await response.data
            return  {
                category: product?.category,
                configaration: product?.configaration,
                country: product?.country,
                fillingMaterial: product?.fillingMaterial,
                price: product?.price,
                productName: product?.productName,
                salesPackage: product?.salesPackage,
                secondaryMatrial: product?.secondaryMatrial,
                upholsteryColor: product?.upholsteryColor,
                upholsteryMaterial: product?.upholsteryMaterial,
            }

        }
    })
    const [loading, setLoading] = useState("update Product")
    const [content, setContent] = useState('');


    const { data } = useFetch("/category")

    const handleChangeFile = (e) => {
        setFiles(prev => [...prev, ...e.target.files])
    }

    console.log(files)
    const handleRemoveImg = (idx) => {

        setFiles(prev => prev.filter((item, index) => idx !== index))

    }




    useEffect(() => {
        setContent(product?.description)
        if (product?.images) {
            setFiles(product?.images)
        }
    }, [product])

    const onSubmit = async (data) => {

        console.log(data);

        setLoading("Uploading Images...")


        const oldImages = files.filter(item => typeof item === "string")
        const newImages = files.filter(item => typeof item !== "string")

        console.log(oldImages);
        console.log(newImages);

        let imageUrl = []

        for (let image of newImages) {

            const formdata = new FormData()

            formdata.append("file", image)
            formdata.append("upload_preset", "furniro")


            // console.log(formdata);

            const res = await axios.post("https://api.cloudinary.com/v1_1/dcpjqjkht/image/upload", formdata, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })


            imageUrl.push(res.data.url);
        }
        setLoading("Saving...")

        const productRes = await axiosPUblic.patch(`/product/${id}`, {
            ...data,
            images: [...oldImages ,...imageUrl],
            description: content,

        })


        console.log(productRes);

        setLoading("Update Product")
        
        console.log(productRes.data);



    }






    return (
        <div className='p-5'>
            <div className="flex items-center justify-between">
                <h2 className='text-2xl font-semibold'> Edit New product</h2>
                <label htmlFor='add-Product' className='btn bg-antique-gold text-white '>
                    {loading}
                </label>
            </div>


            <div className='grid gap-10 mt-10 grid-cols-4'>
                <form onSubmit={handleSubmit(onSubmit)} className='col-span-3'>
                    <div className=' w-full'>
                        <label htmlFor='product_name' className='font-semibold' > Product Name</label> <br />
                        <input
                            id={"product_name"}
                            defaultValue={product?.productName}
                            {...register("productName")}
                            className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                            type="text"
                            required
                        />
                    </div>


                    <div className='mt-8 mb-8'>
                        <Editor content={content} setContent={setContent} />
                    </div>

                    <div className='w-full mt-'>
                        <label htmlFor='last_name' className='font-semibold' > Category</label> <br />
                        <select {...register("category")} defaultValue={product?.category} className="select w-full border-gray-500 h-14 mt-2 rounded-lg">
                            {
                                data?.map(item => <option value={item?.name}>{item?.name}</option>)
                            }

                        </select>
                    </div>




                    <div className='mt-5 flex gap-5'>
                        <div className=' w-full'>
                            <label htmlFor='price' className='font-semibold' > Price</label> <br />
                            <input
                                id={"price"}
                                defaultValue={product?.price}
                                className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                                type="text"
                                {...register("price")}
                            />
                        </div>


                        <div className='w-full'>
                            <label htmlFor='last_name' className='font-semibold' > Country / Region</label> <br />
                            <select {...register("country")} defaultValue={product?.country} className="select w-full border-gray-500 h-14 mt-2 rounded-lg">
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
                                defaultValue={product?.salesPackage}
                                {...register("salesPackage")}
                                className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                                type="text"
                            />
                        </div>
                        <div className=' w-full'>
                            <label htmlFor='secondary-matirial' className='font-semibold' > secondary matirial</label> <br />
                            <input
                                {...register("secondaryMatrial")}
                                id={"secondary-matirial"}
                                defaultValue={product?.secondaryMatrial}
                                className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                                type="text"
                            />
                        </div>






                    </div>
                    <div className='mt-5 flex gap-5'>
                        <div className=' w-full'>
                            <label htmlFor='Configuration' className='font-semibold' > Configuration</label> <br />
                            <input
                                {...register("configaration")}
                                id={"Configuration"}
                                defaultValue={product?.configaration}
                                className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                                type="text"
                            />
                        </div>
                        <div className=' w-full'>
                            <label htmlFor='upholstery-material' className='font-semibold' > Upholstery Material</label> <br />
                            <input
                                {...register("upholsteryMaterial")}
                                id={"upholstery-material"}
                                defaultValue={product?.upholsteryMaterial}
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
                                {...register("upholsteryColor")}
                                defaultValue={product?.upholsteryColor}
                                className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                                type="text"
                            />
                        </div>
                        <div className=' w-full'>
                            <label htmlFor='filling-material' className='font-semibold' > Filling Material</label> <br />
                            <input
                                id={"filling-material"}
                                defaultValue={product?.fillingMaterial}
                                {...register("fillingMaterial")}
                                className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                                type="text"
                            />
                        </div>






                    </div>



                    <input className='hidden' type="submit" id='add-Product' />



                </form>





                <div className='col-span-1'>
                    <label htmlFor='upload-img' className='bg-base-200 w-full h-[300px]'>
                        <img src={uploadImage} alt="" />

                    </label>

                    <input multiple className='hidden' onChange={handleChangeFile} id='upload-img' type="file" />

                    <div className='flex  gap-2 flex-wrap'>

                        {
                            files.map((item, idx) => <div className="relative">
                                <img className='w-16 h-16' src={typeof item == "string" ? item : URL.createObjectURL(item)} alt="" />
                                <span onClick={() => handleRemoveImg(idx)} className='absolute top-0 right-0 bg-red-500 text-white rounded-full p-[2px]'><IoMdClose /></span>
                            </div>)
                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default EditProduct;