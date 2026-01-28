import React, { useState } from 'react';
import logo from "../assets/logo.png"
import { Link, NavLink } from 'react-router';
import { MdMenu, MdOutlinePersonOutline } from 'react-icons/md';
import { IoSearch } from 'react-icons/io5';
import { FaRegHeart, FaSearch } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { data } from '../Data/products';
const Nav = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    console.log(isDrawerOpen)

    const ul = <>


        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-antique-gold" : "hover:text-antique-gold duration-300"
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/shop"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-antique-gold" : "hover:text-antique-gold duration-300"
            }
        >
            Shop
        </NavLink>
        <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-antique-gold" : "hover:text-antique-gold duration-300"
            }
        >
            About
        </NavLink>
        <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-antique-gold" : "hover:text-antique-gold duration-300"
            }
        >
            Contact
        </NavLink>




    </>



    const hanldleSearch = () => {
        document.getElementById('my_modal_2').showModal()
    }



    return (
        <nav className=' w-full top-0'>
            <div className="navbar fixed z-[999] px-4 lg:px-10 bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">

                        <MdMenu onClick={() => setIsDrawerOpen(!isDrawerOpen)} className='text-2xl lg:hidden' />
                    </div>


                    <Link to={"/"}>
                        <img className='h-8 ml-3' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-9 font-semibold menu-horizontal  px-1">
                        {ul}
                    </ul>
                </div>
                <div className="navbar-end flex gap-3 lg:gap-8 ">
                    <MdOutlinePersonOutline className='text-xl hover:text-antique-gold duration-300' />
                    <IoSearch onClick={hanldleSearch} className='text-xl hover:text-antique-gold duration-300' />
                    <FaRegHeart className='text-xl hover:text-antique-gold duration-300' />
                    <Link to={"/cart"} >  <AiOutlineShoppingCart className='text-xl hover:text-antique-gold duration-300' /></Link>
                </div>
            </div>



            {/* drawer */}



            <div className={`shadow-lg fixed bg-white/10 backdrop-blur-md z-[999] top-[64px]  ease-in-out duration-300 ${!isDrawerOpen ? "-left-full" : "left-0"} w-[300px] h-[calc(100vh-20px)]`}>
                <div className='flex flex-col gap-5 pt-5 items-center'>
                    {
                        ul
                    }
                </div>
            </div>


            
            {/* <div  onClick={() => {
                setIsDrawerOpen(false)
                console.log(isDrawerOpen)
             }} className='h-screen z-[99] top-[64px] h-[calc(100vh-20px)] fixed   w-full '>

          
            </div> */}




            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <div className='relative'>
                        <FaSearch className='absolute text-antique-gold top-1/2 -translate-y-1/2 left-3  z-50' />
                        <input
                            placeholder='Search With Product Name , price , description'
                            type="text" className='input border-antique-gold pl-10 focus:outline-0 w-full' />
                    </div>

                    <div className="space-y-2 mt-4">

                        {
                            data.slice(0, 5).map(item => <div className='flex justify-between items-center'>
                                <div className='flex gap-2'>
                                    <img className='w-12 h-12' src={item.image} alt="" />
                                    <div>
                                        <h2 className='font-semibold'>{item.name}</h2>
                                        <p className='text-sm'>{item.description}</p>
                                    </div>
                                </div>

                                <h2 className='font-semibold'>BDT {item.price}</h2>
                            </div>)
                        }
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </nav>
    );
};

export default Nav;