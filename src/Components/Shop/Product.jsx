import React, { useState } from 'react';
import { data } from '../../Data/products';
import ProductCard from '../Home/ProductCard';
import { IoIosArrowBack } from 'react-icons/io';
import { LiaSlidersHSolid } from 'react-icons/lia';
import { TiArrowSortedDown } from 'react-icons/ti';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { GrSync } from 'react-icons/gr';


const furnitureByStyle = [
    "Modern/Contemporary",
    "Mid-Century Modern",
    "Rustic/Farmhouse",
    "Industrial",
    "Traditional"
];


const furnitureByRoom = [
    "Living Room",
    "Bedroom",
    "Dining Room",
    "Home Office",
    "Outdoor/Patio"
];


const furnitureSizeArray = ["XS" , "S" , "M" , "L" , "XL"]

const Product = () => {

    const [selectedDropdown, setSelectedDropdown] = useState("Default")
    const [rangeMinValue, setRangeMinValue] = useState(100)
    const [rangeMaxValue, setRangeMaxValue] = useState(10000)
    const [roomLocation, setRoomLocation] = useState("")
    const [roomStyle, setRoomStyle] = useState("")
    const [furnitureSize, setFurnitureSize] = useState("")


    console.log(roomLocation)

    return (
        <div>
            <div className='bg-[#FFF3E3]  py-4'>
                <div className='flex container mx-auto justify-between'>
                    <div className='flex gap-1 items-center'>

                        <label className='flex gap-2 items-center cursor-pointer' htmlFor="my-drawer-1" >
                            <LiaSlidersHSolid />
                            <span >Filter</span>
                        </label>

                        <span>|</span>
                        <span className='text-sm ml-4'>Showing 1 - 16 Out of 32 result</span>

                    </div>
                    <div className='flex items-center  gap-2'>
                        <span>Show</span>

                        <input type="number" className='w-12 p-1 bg-white focus:outline-0' />
                        <span>Sort By</span>

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="bg-white py-1 flex items-center gap-2 px-4 text-sm m-1">{selectedDropdown}
                                <TiArrowSortedDown />  </div>
                            <ul tabIndex="-1" className="dropdown-content text-sm menu bg-base-100 rounded-box z-1 w-44 p-2 shadow-sm">
                                <li onClick={() => setSelectedDropdown("Default")} ><a> Default</a></li>
                                <li onClick={() => setSelectedDropdown("Ascending")} ><a> Ascending</a></li>
                                <li onClick={() => setSelectedDropdown("Decending")} ><a> Decending</a></li>
                            </ul>
                        </div>




                    </div>
                </div>
            </div>
            <div className=' container mx-auto my-10 '>

                <div className='grid grid-cols-4 gap-5'>
                    {
                        data.map(item => <ProductCard item={item} />)
                    }
                </div>

                <div className='flex justify-center my-10'>

                    <div className='join '>
                        <button className='btn rounded-md text-white bg-antique-gold '> <IoIosArrowBack />  </button>
                        <button className='btn rounded-md text-white bg-antique-gold '> 1 </button>
                        <button className='btn rounded-md text-white bg-antique-gold '> 2 </button>
                        <button className='btn rounded-md text-white bg-antique-gold '> 3 </button>
                        <button className='btn rounded-md text-white bg-antique-gold '> 4 </button>
                        <button className='btn rounded-md text-white bg-antique-gold '> <IoIosArrowBack className='rotate-180' />  </button>
                    </div>
                </div>

            </div>










            {/* Drawer options */}


            <div className="drawer">
                <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">

                        <h2 className='text-lg'> Filter By Price Range</h2>
                        <div className='mt-5'>

                            <div className='flex justify-between items-center mb-4'>
                                <span>BDT {rangeMinValue} </span>
                                <span>BDT {rangeMaxValue} </span>
                            </div>
                            <RangeSlider
                                min={100}
                                max={10000}
                                defaultValue={[100, 10000]}
                                onInput={(value) => {
                                    setRangeMinValue(value[0])
                                    setRangeMaxValue(value[1])
                                }}
                            />
                        </div>


                        {/* Filter by room location */}

                        <div className='mt-10'>

                            <div className="flex justify-between items-center">
                                <h2 className='text-lg'> Filter By Room Location</h2> <GrSync className='p-1 text-xl cursor-pointer' onClick={() => {
                                    setRoomLocation("")
                                }} /></div>
                            <div className='space-y-2 mt-2'>

                                {
                                    furnitureByRoom.map(item => <div onClick={() => setRoomLocation(item)} className='flex gap-2 items-center'>
                                        <input checked={roomLocation == item} id={item} value={item} type="radio" name="radio-1" className="radio" />
                                        <label htmlFor={item}>{item}</label>
                                    </div>)
                                }
                            </div>

                        </div>


                        {/* Filter by Fruniture Style */}
                        <div className='mt-10'>

                            <div className="flex justify-between items-center">
                                <h2 className='text-lg'> Filter By Furniture Style</h2> <GrSync className='p-1 text-xl cursor-pointer' onClick={() => {
                                    setRoomStyle("")
                                }} /></div>
                            <div className='space-y-2 mt-2'>

                                {
                                    furnitureByStyle.map(item => <div onClick={() => setRoomStyle(item)} className='flex gap-2 items-center'>
                                        <input checked={roomStyle == item} id={item} value={item} type="radio" name="radio-2" className="radio" />
                                        <label htmlFor={item}>{item}</label>
                                    </div>)
                                }
                            </div>

                        </div>


                        {/* Filter By Fruniture Size */}
                        <div className='mt-10'>

                            <div className="flex justify-between items-center">
                                <h2 className='text-lg'> Filter By Furniture Size</h2> <GrSync className='p-1 text-xl cursor-pointer' onClick={() => {
                                    setFurnitureSize("")
                                }} /></div>
                            <div className='space-y-2 mt-2'>

                                {
                                    furnitureSizeArray.map(item => <div onClick={() => setFurnitureSize(item)} className='flex gap-2 items-center'>
                                        <input checked={furnitureSize == item} id={item} value={item} type="radio" name="radio-3" className="radio" />
                                        <label htmlFor={item}>{item}</label>
                                    </div>)
                                }
                            </div>

                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Product;