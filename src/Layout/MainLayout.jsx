import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../Shared/Nav';
import Footer from '../Shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MainLayout;