import Link from 'next/link';
import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const NewOfferBanner = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Only trigger the animation once
        });
    }, []);

    return (
        <Link href='/shop'>
        <section className="w-[100%] md:block hidden  bottom-banner-section mt-8" data-aos="fade-up"> {/* Add data-aos attribute */}
            <div className="container">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="flex text-left flex-col items-center  gap-4 offer-banner-content">
                    <Link href="/shop" className="text-white py-2 px-4 rounded-md relative z-10 inline-block">
                                <button class="btn2 mt-12 px-10 py-5 relative border border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-teal-600 transition duration-300" type="button">
                                    <span class="absolute inset-0 bg-white transition-transform -translate-x-full"></span>
                                    <span class="absolute inset-0 flex justify-center items-center font-bold transform transition-transform">
                                        Shop Now
                                    </span>
                                    Shop Now
                                </button>
                            </Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-[100%] block md:hidden mobile-bottom-banner-section mt-8" data-aos="fade-up"> {/* Add data-aos attribute */}
            <div className="container relative">
                <div >
                    <div className="flex text-left flex-col items-center  gap-4 offer-banner-content">
                    <Link href="/shop" className="text-white py-2 px-4 rounded-md relative z-10 inline-block">
                                <button class="btn2 mt-12 px-10 py-5 relative border border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-teal-600 transition duration-300" type="button">
                                    <span class="absolute inset-0 bg-white transition-transform -translate-x-full"></span>
                                    <span class="absolute inset-0 flex justify-center items-center font-bold transform transition-transform">
                                        Shop Now
                                    </span>
                                    Shop Now
                                </button>
                            </Link>
                    </div>
                </div>
            </div>
        </section>
        </Link>
    );
};

export default NewOfferBanner;