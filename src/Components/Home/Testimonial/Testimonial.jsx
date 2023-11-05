import React, { useCallback, useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";

import useProducts from "@/src/Hooks/useProducts";
import { testimonialData } from "@/src/Utils/Mock/CommonData";
import Image from 'next/image';
import { BsCart } from 'react-icons/bs'

const Testimonial = () => {
    const { productData } = useProducts()
    const sliderRef = useRef(null);
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <section className='my-6'>
            <div className='title my-2'>
                <h1>Trusted <span>Voices</span></h1>
            </div>
            <div>
                <Swiper
                    ref={sliderRef}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        360: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => { }}
                    onSwiper={(swiper) => { }}
                >
                    <div className="grid grid-cols-1 justify-center items-center mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {testimonialData &&
                            testimonialData?.map((testimonial) => {

                                return (
                                    <SwiperSlide className="cursor-grab rounded bg-transparent" key={testimonial._id}>
                                        <div className='bg-transparent'>
                                            <div className="relative mx-auto bg-transparent border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[450px] w-[270px]">
                                                <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" />
                                                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" />
                                                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" />
                                                <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" />
                                                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-transparent dark:bg-gray-800">
                                                    <video
                                                        controls // Add controls for play, pause, etc.
                                                        width="100%" // Set the width of the video to 100%
                                                        height="100%" // Set the height of the video to 100%
                                                        style={{ objectFit: "cover" }} // Ensure the video covers the container while maintaining its aspect ratio
                                                    >
                                                        <source
                                                            src={testimonial?.vedio}
                                                            type="video/mp4" // Specify the video type (MP4 in this case)
                                                        />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                );
                            })}
                    </div>
                </Swiper>
            </div>

            <div className=" my-6 flex justify-end items-center">

                <div className="flex  items-center gap-10 top-0">
                    <button
                        className="prev-arrow cursor-pointer p-3 rounded-full"
                        onClick={handlePrev}
                    >
                        <TbArrowBigLeft className="h-6 w-6 text-black" />
                    </button>
                    <button
                        className="next-arrow cursor-pointer  p-3 rounded-full"
                        onClick={handleNext}
                    >
                        <TbArrowBigRight className="h-6 w-6 text-black" />
                    </button>
                </div>
            </div>

        </section>
    );
};

export default Testimonial;