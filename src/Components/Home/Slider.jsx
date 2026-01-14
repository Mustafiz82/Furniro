import React from 'react';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from "../../assets/products/slider1.png"
import slide2 from "../../assets/products/slider2.png"
import slide3 from "../../assets/products/product1.png"
import slide4 from "../../assets/products/product2.png"
import slide5 from "../../assets/products/product3.png"
import slide6 from "../../assets/products/product4.png"
import slide7 from "../../assets/products/product5.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';

const slides = [
    {
        image: slide1,
        title: "Inner Peace",
        subTitle: "01 -- BedRoom"
    },
    {
        image: slide2,
        title: "Inner Peace",
        subTitle: "02 -- BedRoom"
    },
    {
        image: slide3,
        title: "Inner Peace",
        subTitle: "02 -- BedRoom"
    },
    {
        image: slide4,
        title: "Inner Peace",
        subTitle: "02 -- BedRoom"
    },
    {
        image: slide5,
        title: "Inner Peace",
        subTitle: "02 -- BedRoom"
    },
    {
        image: slide6,
        title: "Inner Peace",
        subTitle: "02 -- BedRoom"
    },
    {
        image: slide7,
        title: "Inner Peace",
        subTitle: "02 -- BedRoom"
    },
]


const Slider = () => {
    return (
        <div className='bg-[#FCF8F3] py-10 my-10 '>
            <div className='container  flex items-center overflow-hidden mx-auto'>
                <div className='min-w-[400px] space-y-2'>
                    <h2 className='text-4xl font-semibold'>50+ Beautiful rooms
                        inspiration</h2>
                    <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                    <Link to={"/"}><button className='btn text-xs px-10 my-2 bg-antique-gold rounded-full text-white'>Buy Now</button></Link>
                </div>


                <div className='min-w-full h-[500px]'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 1000
                        }}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation, Pagination, Autoplay]}
                        className="mySwiper"
                    >

                        {
                            slides.map((item, index) => <SwiperSlide>
                                <div className="relative">
                                    <img className={'h-[400px] w-[300px]'} src={item.image} alt="" />
                                    <div className="absolute  left-5 bottom-5 bg-white p-5">

                                        <h2 className='text-black/70'>{item.subTitle}</h2>
                                        <h1 className='text-xl font-semibold' >{item.title}</h1>

                                    </div>
                                </div>
                            </SwiperSlide>)
                        }


                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Slider;