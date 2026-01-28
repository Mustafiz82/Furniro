import React, { useState } from 'react';
import uploadImage from "../../assets/add-image.jpg"
import { CgClose } from 'react-icons/cg';
const MyProfile = () => {

    const [file , setFile] = useState()

    if(file){
        let imageUrl = URL.createObjectURL(file)
        console.log(imageUrl)
    }
  
    return (
        <div className='p-5'>
            <div className="flex justify-between">
                <h2 className='text-2xl font-semibold '>My Profile</h2>
                <div onClick={() => document.getElementById('my_modal_2').showModal()} className="avatar ">
                    <div className="ring-antique-gold ring-offset-base-100 w-16 rounded-full ring-2 ring-offset-2">
                        <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                    </div>
                </div>
            </div>




            <div>
                <div>
                    <div className='flex  gap-5'>

                        <div className='mt-5 w-full'>
                            <label htmlFor='first_name' className='font-semibold' > First Name</label> <br />
                            <input
                                id={"first_name"}
                                className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                                type="text"
                            />
                        </div>
                        <div className='mt-5  w-full'>
                            <label htmlFor='last_name' className='font-semibold' > Last Name</label> <br />
                            <input
                                id={"last_name"}
                                className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                                type="text"
                            />
                        </div>

                    </div>

                    <div className="flex w-full gap-5">
                        <div className='mt-5  flex-1'>
                            <label htmlFor='last_name' className='font-semibold' > Company Name (Optional)</label> <br />
                            <input
                                id={"last_name"}
                                className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                                type="text"
                            />
                        </div>


                        <div className='mt-5 flex-1'>
                            <label htmlFor='last_name' className='font-semibold' > Country / Region</label> <br />
                            <select defaultValue="Pick a color" className="select w-full border-gray-500 h-14 mt-2 rounded-lg">
                                <option>Bangladesh</option>
                                <option>India</option>
                                <option>Pakistan</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div className='mt-5 flex-1'>
                            <label htmlFor='last_name' className='font-semibold' > Street Address</label> <br />
                            <input
                                id={"last_name"}
                                className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                                type="text"
                            />
                        </div>

                        <div className='mt-5 flex-1'>
                            <label htmlFor='last_name' className='font-semibold' > Zip Code</label> <br />
                            <input
                                id={"last_name"}
                                className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                                type="text"
                            />
                        </div>

                    </div>

                    <div className="flex gap-5">
                        <div className='mt-5 flex-1'>
                            <label htmlFor='last_name' className='font-semibold' >Phone</label> <br />
                            <input
                                id={"last_name"}
                                className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                                type="text"
                            />
                        </div>

                        <div className='mt-5 flex-1'>
                            <label htmlFor='last_name' className='font-semibold' >Email Address</label> <br />
                            <input
                                id={"last_name"}
                                className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                                type="text"
                            />
                        </div>
                    </div>


                    <div className='mt-5'>
                        <label htmlFor='last_name' className='font-semibold' >Additional Information</label> <br />
                        <input
                            id={"last_name"}
                            className='w-full mt-2 border-1 border-gray-500 h-14 text-lg px-4 rounded-lg'
                            type="text"
                        />
                    </div>




                </div>
            </div>



            {/* Open the modal using document.getElementById('ID').showModal() method */}
         
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box relative w-fit p-5">

                    <label htmlFor="upload=image">
                         <img className='w-[250px]' src={file ?  URL.createObjectURL(file) : uploadImage} alt="" />
                    </label>

                  {
                    file &&   <span onClick={() => setFile(null)} className='bg-red-500 absolute right-2 top-2 p-1 rounded-full'><CgClose className='text-white'/>    </span>
                  }
                  
                   <button className='btn bg-antique-gold  w-full text-white'>Upload</button>
                   <input  onChange={(e) => setFile(e.target.files[0])} className='hidden' id='upload=image' type="file" />
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default MyProfile;