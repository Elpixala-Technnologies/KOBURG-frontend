import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ComfortableImage,  EverydayWearImage, RupeIcon, Sustainable } from '@/src/Assets';
 
const ChoseUs = () => {
    const isMobile = () => {
        if (typeof window !== 'undefined') {
          return window.innerWidth <= 768;
        }
        return false;  
      };
      
      
    const sliderRef = useRef(null);

    const choseUsData = [
        {
            id: 1,
            title: "COMFORTABLE",
            icons: ComfortableImage,
        },
        {
            id: 2,
            title: "VALUE FOR MONEY",
            icons: RupeIcon,
        },
        {
            id: 3,
            title: "EVERYDAY WEAR",
            icons: EverydayWearImage,
        },
        {
            id: 4,
            title: "SUSTAINABLE",
            icons: Sustainable,
        }
    ]


    return (
        <section className='my-6'>
            <div className='flex flex-col gap-4 items-center justify-center container'>
                <div className='title max-w-screen-sm '>
                    <h1>Why  <span>choose us?</span></h1>
                </div>
                <p className='text-center md:w-[70%]'>
                    Koburg's is bringing to life, fashion that is both stylish and responsible. With innovative planet-friendly materials and always-in-style trendy designs, we deliver access to a never-before-experienced comfort with our products while striking the right balance with your lifestyle quotient.
                </p>
            </div>

            <div className='flex itmes-center justify-center mt-8'>
                <Swiper
                    className='category-slider'
                    ref={sliderRef}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    navigation={isMobile()}
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
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    spaceBetween={30}
                    slidesPerView={4}
                    onSlideChange={() => { }}
                    onSwiper={(swiper) => { }}
                >
                    <div
                        className="flex flex-col md:flex-row gap-5 justify-between  items-center"
                    >
                        {
                            choseUsData?.map((chose, index) => {
                                const { title, icons } = chose
                                return (
                                    <SwiperSlide className="cursor-grab rounded flex items-center justify-center " key={title + index}>
                                        <div
                                            className="bg-transparent choseUsContent text-center rounded-md duration-300 transform  hover:-translate-y-1.5"
                                            style={{ width: "300px" }}
                                        >
                                            <div className="flex flex-col items-center gap-2">
                                                <Image
                                                    alt={title}
                                                    src={icons}
                                                    className="inline-flex items-center justify-center hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
                                                    width={20}
                                                    height={20}
                                                />

                                                <div className="text-[1.2rem] font-semibold tracking-wide cursor-pointer dark:text-black ">
                                                 {title}
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }


                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default ChoseUs;