import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import { sliderData } from "@/src/Utils/Mock/CommonData";
import Link from "next/link";
import { FaDolly } from 'react-icons/fa';
import { TbMapPinHeart, TbTrees } from 'react-icons/tb';
import {CiDeliveryTruck} from 'react-icons/ci'


const HeroSlider = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Define your mobile breakpoint
        };

        handleResize(); // Check the initial screen width
        window.addEventListener("resize", handleResize); // Listen for window resize events

        return () => {
            window.removeEventListener("resize", handleResize); // Remove the event listener when the component unmounts
        };
    }, []);

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper heroSlider"
            >
                {sliderData &&
                    sliderData?.map((slide) => {
                        return (
                            <SwiperSlide key={slide?.id}>
                                <Link href={'/shop'} className="slider-images">
                                    <Image
                                        src={isMobile ? slide?.mobileImage : slide?.desktopImage}
                                        alt="Banner Image"
                                        className="w-full h-full"
                                        width={isMobile ? 768 : 1920}
                                        height={isMobile ? 768 : 500}
                                    />
                                </Link>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>

            {/* <div className=' bg-[#E7F3EC] my-4'>
                <div className='flex md:flex-row flex-col container gap-2 items-center justify-between p-4 bg-[#E7F3EC]'>
                    <div className='border-[#fff] flex items-center gap-4'>
                        <div className='text-[1.6rem] border p-2 rounded-full bg-[#C4E7D2] text-[#2A9563] '>
                            <FaDolly />
                        </div>
                        <h1 className='font-semibold'>7 Days free exchange</h1>
                    </div>
                    <div className='border-[#fff] flex items-center gap-4'>
                        <div className='text-[1.6rem] border p-2 rounded-full bg-[#C4E7D2] text-[#2A9563] '>
                            <TbMapPinHeart />
                        </div>
                        <h1 className='font-semibold'>Proudly Made in India</h1>
                    </div>
                    <div className='border-[#fff] flex items-center gap-4'>
                        <div className='text-[1.6rem] border p-2 rounded-full bg-[#C4E7D2] text-[#2A9563] '>
                            <CiDeliveryTruck />
                        </div>
                        <h1 className='font-semibold'>Delivered in 4-5 days</h1>
                    </div>
                    <div className='border-[#fff] flex items-center gap-4'>
                        <div className='text-[1.6rem] border p-2 rounded-full bg-[#C4E7D2] text-[#2A9563] '>
                            <TbTrees />
                        </div>
                        <h1 className='font-semibold'>Eco friendly fashion
                        </h1>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default HeroSlider;