import React from 'react';
import { GrTrophy } from 'react-icons/gr';
import { HiOutlineBadgeCheck, HiOutlineSupport, HiOutlineTruck } from 'react-icons/hi';

const Featured = () => {

    const data = [
        {
            id: 1,
            icon: <GrTrophy  className='text-4xl'/>,
            title: "High Quality",
            subTitle: "crafted from top materials",
        },
        {
            id: 2,
            icon: <HiOutlineBadgeCheck className='text-4xl'/>,
            title: "Warranty Protection",
            subTitle: "Over 2 years",
        },
        {
            id: 3,
            icon: <HiOutlineTruck  className='text-4xl'/>,
            title: "Free Shipping",
            subTitle: "Order over 150 $",
        },
        {
            id: 4,
            icon: <HiOutlineSupport className='text-4xl'/>,
            title: "24 / 7 Support",
            subTitle: "Dedicated support",
        },
    ];


    return (
        <div className='bg-gold-light py-10 flex '>
            <div className="container px-5 grid grid-cols-2 gap-4 lg:flex   justify-between  mx-auto">
                {
                    data.map(item => <div className='flex items-center gap-2'>
                        {/* <GrTrophy className='text-4xl' /> */}
                        {item.icon}
                        <div>
                            <h2 className='text-md font-semibold'>{item.title}</h2>
                            <p className='text-black/50'> {item.subTitle} </p>
                        </div>

                    </div>)
                }

            </div>
        </div>
    );
};

export default Featured;