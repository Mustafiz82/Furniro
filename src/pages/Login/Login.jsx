import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { handleGoogleSignIn , handleEmailPassSignin , setUser} = useContext(AuthContext)
    const [error , setError] = useState("")
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        handleEmailPassSignin(email , password)
        .then(res => {
            setUser(res.user)
            navigate("/")
        } )
        .catch(err => setError("Invalid Email Or Password"))
    }




    return (
        <div className='flex justify-center h-screen items-center'>
            <div className='shadow-lg gap-5 flex items-center flex-col p-5 px-10 border-t-4 border-antique-gold rounded-lg  w-md '>
                <h2 className='text-xl font-semibold text-center'>Please Login To Continue</h2>

                <form className='w-full space-y-5' onSubmit={handleSubmit}>

                    <input name='email' required type="email" className="input mt-5 w-full rounded-full focus:outline-0" placeholder="Enter Your Email" />
                    <div className='w-full relative'>
                        <input name='password' required type={showPassword ? "text" : "password"} className="input w-full rounded-full focus:outline-0" placeholder="Enter Your Password" />

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

                    <p className='text-red-500 font-semibold'>{error}</p>
                </form>
                <div className="divider text-sm">OR</div>

                <button onClick={handleGoogleSignIn} className='btn rounded-full w-full'> <FcGoogle /> SignIn With Google</button>

                <p className='text-center text-sm'>Don't have an account ? <Link to={"/sign-up"}>
                    <span className='underline text-antique-gold'>Sign Up</span></Link></p>

            </div>

        </div>
    );
};

export default Login;