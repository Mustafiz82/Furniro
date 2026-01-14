import React from 'react';
import Banner from '../../Components/Home/Banner';
import Range from '../../Components/Home/Range';
import OurProducts from '../../Components/Home/OurProducts';
import Slider from '../../Components/Home/Slider';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Range/>
           <OurProducts/>
           <Slider/>
        </div>
    );
};

export default Home;