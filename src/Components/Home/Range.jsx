import React from 'react';
import range1 from "../../assets/Home/range1.png"
import range2 from "../../assets/Home/range2.png"
import range3 from "../../assets/Home/range3.png"
const Range = () => {
    return (
        <div className='my-20'>
            <h2 className='text-3xl font-semibold text-center'>Browse The Range</h2>
            <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>


            <div className='mt-10 container grid grid-cols-3 gap-5 mx-auto'>
                <div className=''>
                    <div className='overflow-hidden h-full rounded-2xl'>
                        <img className='w-full hover:scale-105 min-h-full duration-300 ' src={range1} alt="" />
                    </div>
                    <h2 className='font-semibold mt-4 text-center'>Dinning</h2>
                </div>
                <div>
                    <div className='overflow-hidden h-full rounded-2xl'>
                        <img className='w-full hover:scale-105 min-h-full duration-300 h-full' src={range2} alt="" />
                    </div>
                    <h2 className='font-semibold mt-4 text-center'>Living</h2>
                </div>
                <div className=''>
                    <div className='overflow-hidden h-full rounded-2xl'>
                        <img className='w-full minb-h-full hover:scale-105 duration-300 h-full' src={range3} alt="" />
                    </div>
                    <h2 className='font-semibold mt-4 text-center'>
                        Bedroom
                    </h2>
                </div>
            

            </div>
        </div>
    );
};

export default Range;