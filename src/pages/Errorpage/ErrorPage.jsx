import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div  className='flex  flex-col items-center justify-center w-full h-screen '>
            <h2 className='text-[80px] text-antique-gold'>404 </h2>
            <p>Page Not Fount</p>
            <Link to={"/"}><button className='btn my-2 bg-antique-gold text-white'>Go To Homepage</button></Link>
        </div>
    );
};

export default ErrorPage;