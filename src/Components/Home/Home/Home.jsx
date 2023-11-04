import React from 'react';
import Hero from '../Hero/Hero';
import PopularCategory from '../PopularCategory/PopularCategory';
import LatestProduct from '../LatestProduct/LatestProduct';
import NewOfferBanner from '../NewOfferBanner/NewOfferBanner';


const Home = () => {
    return (
        <section>
            <Hero />

            <div className='container'>
                <PopularCategory />
            </div>
                <NewOfferBanner/>
                <div>
                    <LatestProduct />
                </div>
                <div>
    
                </div>
        </section>
    );
};

export default Home;