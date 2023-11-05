import React from 'react';
import Hero from '../Hero/Hero';
import PopularCategory from '../PopularCategory/PopularCategory';
import NewOfferBanner from '../NewOfferBanner/NewOfferBanner';
import BestSealler from '../BestSealler/BestSealler';
import ChoseUs from '../ChoseUs/ChoseUs';
import LatestProduct from "../LatestProduct/LatestProduct"
import Testimonial from '../Testimonial/Testimonial';
import Highlight from '../Highlight/Highlight';

const Home = () => {
    return (
        <section>
            <Hero />
            <div className='container'>
                <PopularCategory />
                <BestSealler />
            </div>
            <NewOfferBanner />
            <div className='container'>
                <ChoseUs />
                <LatestProduct />
                {/* <Testimonial /> */}
                <Highlight/>
            </div>
        </section>
    );
};

export default Home;