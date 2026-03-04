import React from 'react';
import { Link, Outlet } from 'react-router';

const AdminLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet />
                <label htmlFor="my-drawer-1" className="btn lg:hidden drawer-button">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu px-0 bg-base-200 min-h-full w-80 py-4">
                    {/* Sidebar content here */}
                <Link to={"/admin"}>    <p className='hover:bg-gold-light py-3 cursor-pointer px-4 '>Dashboard</p></Link>
                  <Link to={"/admin/manage-products"}>  <p className='hover:bg-gold-light py-3 cursor-pointer px-4 '>Manage Products</p></Link>
                    <Link to={"/admin/manage-category"}>    <p className='hover:bg-gold-light py-3 cursor-pointer px-4 '>Manage Category</p></Link>
                  <Link to={"/admin/manage-orders"} href="">  <p className='hover:bg-gold-light py-3 cursor-pointer px-4 '>Manage Orders</p></Link>
                    <p className='hover:bg-gold-light py-3 cursor-pointer px-4 '><Link to={"/admin/my-profile"} href="">Manage Users</Link></p>

                </ul>
            </div>
        </div>
    );
};

export default AdminLayout;