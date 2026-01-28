import React from 'react';
import { Link } from 'react-router';
import product1 from "../../assets/ProductDetails/Asgaard sofa 3.png"
import Rating from 'react-rating';
import { IoStarOutline, IoStarSharp } from 'react-icons/io5';
import Select from 'react-select';
import CamparedData from './CamparedData';

const Compare = () => {

    const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'mango', label: 'mango' },
  { value: 'vanilla', label: 'Vanilla' }
]

    return (
        <>
        <div className='grid gap-10 container mx-auto grid-cols-4 mt-20'>

            <div className=''>
                <h2 className='text-2xl mb-5 font-semibold'>Go to Product <br /> page for more <br />
                    Products</h2>

                <Link><span className='border-b text-black/70 pr-4 pb-1 pt-5'> View More</span></Link>
            </div>


            <div className='space-y-2'>
                <img className='bg-gold-light rounded-lg' src={product1} alt="" />

                <h2 className='text-xl mt-5 font-semibold'> Asgard Sofa</h2>

                <p className='font-semibold'>BDT 250000</p>

                <div className='my-2 flex gap-2 items-center'>
                    <Rating
                        fullSymbol={<IoStarSharp className='text-antique-gold' />}
                        emptySymbol={<IoStarOutline className='text-antique-gold' />}
                        readonly
                        initialRating={4.5}
                        fractions={2}
                    />

                    |

                    <span className='text-black/70'>204 review</span>
                </div>

            </div>
            <div className='space-y-2'>
                <img className='bg-gold-light rounded-lg' src={product1} alt="" />

                <h2 className='text-xl mt-5 font-semibold'> Asgard Sofa</h2>

                <p className='font-semibold'>BDT 250000</p>

                <div className='my-2 flex gap-2 items-center'>
                    <Rating
                        fullSymbol={<IoStarSharp className='text-antique-gold' />}
                        emptySymbol={<IoStarOutline className='text-antique-gold' />}
                        readonly
                        initialRating={4.5}
                        fractions={2}
                    />

                    |

                    <span className='text-black/70'>204 review</span>
                </div>

            </div>

            <div>
                <h2 className='text-2xl mb-5 font-semibold'>
                    Add A product 
                </h2>

                <Select options={options} />
            </div>
         

        </div>





        <CamparedData/>
        
        
        
        </>
    );
};

export default Compare;