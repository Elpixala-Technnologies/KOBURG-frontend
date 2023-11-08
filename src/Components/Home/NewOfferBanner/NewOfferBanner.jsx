import Link from 'next/link';
import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import Image from 'next/image';
import { HomeOfferBannerOne } from '@/src/Assets';

const NewOfferBanner = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Only trigger the animation once
        });
    }, []);

    return (
        <section className="w-[100%] mx-auto  mt-8" data-aos="fade-up"> {/* Add data-aos attribute */}
            <Link href="/shop" className=" ">
                <Image
                    src={HomeOfferBannerOne}
                    alt='Product'
                    width={250}
                    height={1920}
                    className='w-full h-full'
                />
            </Link>

        </section>
    );
};

export default NewOfferBanner;