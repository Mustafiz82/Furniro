import React from 'react';
import Banner from '../../Shared/Banner';
import Compare from '../../Components/Comparison/Compare';

const Comparison = () => {
    return (
        <div>
            <Banner
              title={"Product Comparison"}
              route={"Comparison"}
            />

            <Compare/>
        </div>
    );
};

export default Comparison;