import React from 'react';
import Appoinment from './Appoinment';
import Banner from './Banner';
import InfoCart from './InfoCart';
import ServiceCard from './ServiceSection/ServiceCard';
import TestimonialCard from './TestimonialSection/TestimonialCard';

const Home = () => {
    return (
        <div>
            {/* <h1>banner</h1> */}
            <Banner></Banner>
            <InfoCart></InfoCart>
            <ServiceCard></ServiceCard>
            <Appoinment></Appoinment>
            <TestimonialCard></TestimonialCard>
        </div>
    );
};

export default Home;