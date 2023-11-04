import React from 'react';
import Hero from '../Hero/Hero';
import PopularCategory from '../PopularCategory/PopularCategory';
import LatestProduct from '../LatestProduct/LatestProduct';
import NewOfferBanner from '../NewOfferBanner/NewOfferBanner';
import BestSealler from '../BestSealler/BestSealler';


const Home = () => {
    return (
        <section>
            <Hero />
            <div className='container'>
                <PopularCategory />
                <BestSealler />
            </div>
            <NewOfferBanner />
            <div>
                <LatestProduct />
            </div>
        </section>
    );
};

export default Home;