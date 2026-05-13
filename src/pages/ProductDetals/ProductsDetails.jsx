import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import image1 from "../../assets/ProductDetails/Asgaard sofa 3.png"
import image2 from "../../assets/ProductDetails/Group 98.png"
import image3 from "../../assets/ProductDetails/Mask group (3).png"
import image4 from "../../assets/ProductDetails/Maya sofa three seater (1) 1.png"
import image5 from "../../assets/ProductDetails/Outdoor sofa set 2 (1).png"
import Rating from 'react-rating';
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaX, FaXTwitter } from 'react-icons/fa6';
import { data } from '../../Data/products';
import ProductCard from '../../Components/Home/ProductCard';
import useFetch from '../../hook/useFetch';
import { useParams } from 'react-router';


const ProductsDetails = () => {

    const {id} = useParams()
    const { data: product } = useFetch(`/product/${id}`)
    const [selectedImage, setSelectedImage] = useState(product?.images?.[0])
    const [selectedSize, setSelectedSize] = useState("L")
    const [quantity, setQuantity] = useState(10)
    const { data } = useFetch("/product")

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }


    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1)
    }


    useEffect(() => {
        setSelectedImage(product?.images?.[0])
    } , [product])

    return (
        <div>
            <div className='bg-gold-light  py-4'>
                <div className='flex container mx-auto gap-4 items-center'>
                    <p className='text-black/50'>Home</p>
                    <p><MdOutlineKeyboardArrowRight className='text-lg' /></p>
                    <p className='text-black/50'>Shop</p>
                    <p><MdOutlineKeyboardArrowRight className='text-lg' /></p>
                    <p className='text-black/50'>|</p>
                    <p className='text-black'>Asgard Sofa</p>
                </div>
            </div>


            <div className='flex max-w-5xl mx-auto gap-10 my-10'>
                <div className='flex-1 flex gap-5'>
                    <div className='space-y-4 m'>
                      

                        {
                            product?.images?.map(item =>   <img onClick={() => setSelectedImage(item)} src={item} className='w-15 h-15 bg-gold-light rounded-lg' alt="" />)
                        }



                    </div>
                    <div>
                        <img src={selectedImage} className='w-92 h-92  bg-gold-light rounded-lg' alt="" />

                    </div>
                </div>


                <div className='flex-1'>
                    <h2 className='text-4xl'>{product?.productName}</h2>
                    <p className='text-2xl text-black/70 mt-2'>BDT {product?.price}</p>
                    <div className='my-2 flex gap-2 items-center'>
                        <Rating
                            fullSymbol={<IoStarSharp className='text-antique-gold' />}
                            emptySymbol={<IoStarOutline className='text-antique-gold' />}
                            readonly
                            initialRating={4.5}
                            fractions={2}
                        />

                        |

                        <span className='text-black/70'>5 customer review</span>
                    </div>

                    <p dangerouslySetInnerHTML={{__html : product?.description}}></p>


                 


                    <div className='mt-5 flex gap-4'>
                        <div className='p-2 w-fit flex gap-1 justify-between items-center border rounded-lg '>
                            <span className='cursor-pointer p-1' onClick={handleDecreaseQuantity} ><FiMinus /> </span>
                            <span>{quantity}</span>
                            <span className='cursor-pointer p-1 ' onClick={handleIncreaseQuantity}><FiPlus /></span>
                        </div>

                        <div className="p-2 w-fit flex gap-1 justify-between items-center border rounded-lg ">
                            Add To Cart
                        </div>
                        <div className="p-2 w-fit flex gap-1 justify-between items-center border rounded-lg ">
                            Compare
                        </div>
                    </div>

                    <hr className='mt-5 text-black/30' />


                    <div className='grid text-black/70 mt-10 gap-y-1  grid-cols-[200px_1fr]'>
                        <p>SKU</p>
                        <p>: {product?._id}</p>
                        <p className='capitalize'>Category</p>
                        <p>: {product?.category}</p>
                        <p className='capitalize'>sales Package</p>
                        <p>: {product?.salesPackage}</p>
                        <p className='capitalize'>secondary Matrial</p>
                        <p>: {product?.secondaryMatrial}</p>
                        <p className='capitalize'>filling Material</p>
                        <p>: {product?.fillingMaterial}</p>
                        <p className='capitalize'>upholstery Material</p>
                        <p>: {product?.upholsteryMaterial}</p>
                      

                        <p>Share</p>
                        <div className='flex items-center gap-4'>
                            : <FaFacebook /> <FaLinkedinIn /> <FaXTwitter />
                        </div>
                    </div>

                </div>
            </div>


            <h2 className='text-2xl font-semibold text-center my-10 mt-20'>Related Product</h2>


            <div className='max-w-5xl grid grid-cols-4 gap-5 mx-auto'>


                {
                    data?.slice(0, 4).map(item => <ProductCard item={item} />)
                }

            </div>
        </div>
    );
};

export default ProductsDetails;