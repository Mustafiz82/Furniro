import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link } from 'react-router';

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false)


    return (
        <div className='flex justify-center h-screen items-center'>
            <div className='shadow-lg gap-5 flex items-center flex-col p-5 px-10 border-t-4 border-antique-gold rounded-lg  w-md '>
                <h2 className='text-xl font-semibold text-center'>Please Create Your Account</h2>


                <input type="text" className="input mt-5 w-full rounded-full focus:outline-0" placeholder="Enter Your Name" />
                <input type="text" className="input  w-full rounded-full focus:outline-0" placeholder="Enter Your Email" />
                <div className='w-full relative'>
                    <input type={showPassword ? "text" : "password"} className="input w-full rounded-full focus:outline-0" placeholder="Enter Your Password" />

                  {
                    showPassword ?   <IoMdEyeOff 
                        onClick={() => setShowPassword(false)}
                        className='absolute cursor-pointer z-[999] top-1/2 right-5 -translate-y-1/2'
                    /> : <IoMdEye
                        onClick={() => setShowPassword(true)}
                        className='absolute cursor-pointer z-[999] top-1/2 right-5 -translate-y-1/2'
                    />

                  }  
                    
                  


                </div>

                <button className='btn  w-full rounded-full bg-antique-gold text-white'>Create Account</button>
                <div className="divider text-sm">OR</div>

                <button className='btn rounded-full w-full'> <FcGoogle /> SignIn With Google</button>

                <p className='text-center text-sm'>Already have an account ? <Link to={"/login"}>
                    <span className='underline text-antique-gold'>Login</span></Link></p>

            </div>

        </div>
    );
};

export default SignUp;