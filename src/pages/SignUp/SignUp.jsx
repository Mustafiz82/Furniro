import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../../firebase.config';

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")
    const { handleGoogleSignIn, handleEmailPassSignUp, setUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        const passRegax = /^(?=.*[a-z])(?=.*[A-Z])(?=.*(\d|\W))(?!.*\n).{8,}$/

        const passResult = passRegax.test(password)

        if (!passResult) {
            return setError("password should conatain atleast 1 uppercase , 1 lowercase , 1 digit and alteast 8 characters long ")
        }

        setError("")

        handleEmailPassSignUp(email, password)
            .then(data => {
                setUser(data.user)
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(res => {
                        navigate("/")
                    })
            })
            .catch(err => console.log(error))


        console.log({ name, email, password })
    }


    return (
        <div className='flex justify-center h-screen items-center'>
            <div className='shadow-lg gap-5 flex items-center flex-col p-5 px-10 border-t-4 border-antique-gold rounded-lg  w-md '>
                <h2 className='text-xl font-semibold text-center'>Please Create Your Account</h2>


                <form className='space-y-3' onSubmit={handleSubmit}>
                    <input required name='name' type="text" className="input mt-5 w-full rounded-full focus:outline-0" placeholder="Enter Your Name" />
                    <input required name="email" type="email" className="input  w-full rounded-full focus:outline-0" placeholder="Enter Your Email" />
                    <div className='w-full relative'>
                        <input required name='password' type={showPassword ? "text" : "password"} className="input w-full rounded-full focus:outline-0" placeholder="Enter Your Password" />

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

                    <p className='text-sm my-3 text-red-400'>{error}</p>

                    <button className='btn  w-full rounded-full bg-antique-gold text-white'>Create Account</button>
                </form>
                <div className="divider text-sm">OR</div>

                <button onClick={handleGoogleSignIn} className='btn rounded-full w-full'> <FcGoogle /> SignIn With Google</button>

                <p className='text-center text-sm'>Already have an account ? <Link to={"/login"}>
                    <span className='underline text-antique-gold'>Login</span></Link></p>

            </div>

        </div>
    );
};

export default SignUp;