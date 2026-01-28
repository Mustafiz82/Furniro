import React from 'react';
import { Link, Outlet } from 'react-router';

const UserLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
               <Outlet/>
                <label htmlFor="my-drawer-1" className="btn lg:hidden drawer-button">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu px-0 bg-base-200 min-h-full w-80 py-4">
                    {/* Sidebar content here */}
                    <p className='hover:bg-gold-light py-3 cursor-pointer px-4 '><Link to={"/dashboard"}>Dashboard</Link></p>
                    <p className='hover:bg-gold-light py-3 cursor-pointer px-4 '><Link to={"/dashboard/my-orders"}>My Orders</Link></p>
                    <p className='hover:bg-gold-light py-3 cursor-pointer px-4 '><Link to={"/dashborad/my-profile"} href="">My profile</Link></p>
                </ul>
            </div>
        </div>
    );
};

export default UserLayout;