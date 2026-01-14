import React, { useState } from 'react';
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


const ProductsDetails = () => {

    const [selectedImage, setSelectedImage] = useState(image1)
    const [selectedSize , setSelectedSize] = useState("L")
    const [quantity , setQuantity]  = useState(10)


    const handleDecreaseQuantity = () => {
       if(quantity > 1){
        setQuantity(quantity - 1)
       }
    }


    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1)
    }

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


            <div className='flex container mx-auto gap-10 my-10'>
                <div className='flex-1 flex gap-5'>
                    <div className='space-y-4 m'>
                        <img onClick={() => setSelectedImage(image1)} src={image1} className='w-15 h-15 bg-gold-light rounded-lg' alt="" />
                        <img onClick={() => setSelectedImage(image2)} src={image2} className='w-15 h-15 bg-gold-light rounded-lg' alt="" />
                        <img onClick={() => setSelectedImage(image3)} src={image3} className='w-15 h-15 bg-gold-light rounded-lg' alt="" />
                        <img onClick={() => setSelectedImage(image4)} src={image4} className='w-15 h-15 bg-gold-light rounded-lg' alt="" />
                        <img onClick={() => setSelectedImage(image5)} src={image5} className='w-15 h-15 bg-gold-light rounded-lg' alt="" />
                    </div>
                    <div>
                        <img src={selectedImage} className='w-92 h-92  bg-gold-light rounded-lg' alt="" />

                    </div>
                </div>


                <div className='flex-1'>
                    <h2 className='text-4xl'>Asgard Sofa </h2>
                    <p className='text-2xl text-black/70 mt-2'>BDT  300000</p>
                    <div className='my-2 flex gap-2 items-center'>
                        <Rating
                            fullSymbol={<IoStarSharp className='text-antique-gold'/>}
                            emptySymbol={<IoStarOutline className='text-antique-gold' />}
                            readonly
                            initialRating={4.5}
                            fractions={2}
                        />

                        |

                        <span className='text-black/70'>5 customer review</span>
                    </div>

                    <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>


                    <h2 className=' text-black/70 mt-5'>Size</h2>

                    <div className='flex gap-4 mt-2'>
                       {
                         ["L" , "XL" , "XS"].map(item =>   <span onClick={() => setSelectedSize(item)} className={`    ${selectedSize == item ? "bg-antique-gold text-white" : "bg-gold-light text-black"}  text-md w-10 flex  items-center justify-center h-10 rounded-lg cursor-pointer `}>{item}</span> )
                       }
                      
                    </div>



                    <div className='mt-5 flex gap-4'>
                        <div className='p-2 w-fit flex gap-1 justify-between items-center border rounded-lg '>
                            <span className='cursor-pointer p-1' onClick={handleDecreaseQuantity} ><FiMinus/> </span>
                            <span>{quantity}</span>
                            <span className='cursor-pointer p-1 ' onClick={handleIncreaseQuantity}><FiPlus/></span>
                        </div>

                        <div className="p-2 w-fit flex gap-1 justify-between items-center border rounded-lg ">
                            Add To Cart
                        </div>
                        <div className="p-2 w-fit flex gap-1 justify-between items-center border rounded-lg ">
                            Compare
                        </div>
                    </div>

                    <hr className='mt-5 text-black/30'/>


                    <div className='grid text-black/70 mt-10 gap-y-1  grid-cols-[100px_1fr]'>
                        <p>SKU</p>
                        <p>: SS001</p>
                        <p>Category</p>
                        <p>: Sofas</p>
                        <p>Tags</p>
                        <p>: Sofas , Chair , Home , Shop</p>
                        <p>Share</p>
                        <div className='flex items-center gap-4'>
                            : <FaFacebook/> <FaLinkedinIn/> <FaXTwitter />
                        </div>
                    </div>
                    
                </div>
            </div>


            <h2 className='text-2xl font-semibold text-center my-10 mt-20'>Related Product</h2>


            <div className='container grid grid-cols-4 gap-5 mx-auto'>
                

                {
                    data.slice(0 , 4).map(item => <ProductCard item={item}/>)
                }

            </div>
        </div>
    );
};

export default ProductsDetails;