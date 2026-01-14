import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const Login = () => {
        const [showPassword, setShowPassword] = useState(false)
    return (
        <div className='flex justify-center h-screen items-center'>
            <div className='shadow-lg gap-5 flex items-center flex-col p-5 px-10 border-t-4 border-antique-gold rounded-lg  w-md '>
                <h2 className='text-xl font-semibold text-center'>Please Login To Continue</h2>


                <input type="text" className="input mt-5 w-full rounded-full focus:outline-0" placeholder="Enter Your Email" />
                <div className='w-full relative'>
                    <input type={showPassword ? "text" : "password"} className="input w-full rounded-full focus:outline-0" placeholder="Enter Your Password" />

                    {
                        showPassword ? <IoMdEyeOff
                            onClick={() => setShowPassword(false)}
                            className='absolute cursor-pointer z-[999] top-1/2 right-5 -translate-y-1/2'
                        /> : <IoMdEye
                            onClick={() => setShowPassword(true)}
                            className='absolute cursor-pointer z-[999] top-1/2 right-5 -translate-y-1/2'
                        />

                    }


                </div>

                <button className='btn  w-full rounded-full bg-antique-gold text-white'>Log In</button>
                <div className="divider text-sm">OR</div>

                <button className='btn rounded-full w-full'> <FcGoogle /> SignIn With Google</button>

                <p className='text-center text-sm'>Don't have an account ? <Link to={"/sign-up"}>
                    <span className='underline text-antique-gold'>Sign Up</span></Link></p>

            </div>

        </div>
    );
};

export default Login;