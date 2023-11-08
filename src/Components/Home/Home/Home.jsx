import React from 'react';
import Hero from '../Hero/Hero';
import PopularCategory from '../PopularCategory/PopularCategory';
import NewOfferBanner from '../NewOfferBanner/NewOfferBanner';
import BestSealler from '../BestSealler/BestSealler';
import ChoseUs from '../ChoseUs/ChoseUs';
import LatestProduct from "../LatestProduct/LatestProduct"
import Testimonial from '../Testimonial/Testimonial';
import Highlight from '../Highlight/Highlight';
import Reviews from '../Reviews/Reviews'
import BannerSection from '../BannerSection/BannerSection';
import RecentBlog from '../RecentBlog/RecentBlog';

const Home = () => {
    return (
        <section>
            <Hero />
            <div className='container'>
                <PopularCategory />
            </div>
            <div className='bg-[#f9f9f9dc] py-8'>
                <div className='text-center title container'>
                    <h1>Discover <span>Koburg</span> Top-Selling Product!</h1>
                    <p className='mb-4'>Unmatched Quality and Value for Your Everyday Needs</p>
                </div>
                <BestSealler />
            </div>
            <NewOfferBanner />
            <ChoseUs />
            <div className='bg-[#f9f9f9dc] py-8'>
                <LatestProduct />
            </div>
            <div className='container'>
                {/* <Highlight /> */}
            </div>
            <div className='bg-[#f9f9f9dc] py-8'>
                <Reviews />
            </div>
            <div className='container'>
                <Testimonial />
            </div>
            <div className='bg-[#f9f9f9dc] py-8'>
                <BannerSection />
            </div>

            <div className='container'>
                <RecentBlog />
            </div>
        </section>
    );
};

export default Home;