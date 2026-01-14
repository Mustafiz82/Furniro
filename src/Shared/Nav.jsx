import React from 'react';
import logo from "../assets/logo.png"
import { Link, NavLink } from 'react-router';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { IoSearch } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Nav = () => {


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
    return (
        <nav>
            <div className="navbar px-10 bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">

                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                        </ul>
                    </div>
                    <Link to={"/"}>
                        <img className='h-8' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-9 font-semibold menu-horizontal  px-1">
                        {ul}
                    </ul>
                </div>
                <div className="navbar-end flex gap-8 ">
                    <MdOutlinePersonOutline className='text-xl hover:text-antique-gold duration-300' />
                    <IoSearch className='text-xl hover:text-antique-gold duration-300' />
                    <FaRegHeart className='text-xl hover:text-antique-gold duration-300' />
                    <AiOutlineShoppingCart className='text-xl hover:text-antique-gold duration-300' />
                </div>
            </div>
        </nav>
    );
};

export default Nav;