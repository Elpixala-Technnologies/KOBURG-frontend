 
// import React, { useCallback, useRef, useState } from "react";
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";
// import { testimonialData } from "@/src/Utils/Mock/CommonData";

// const Testimonial = () => {
//     const sliderRef = useRef(null);
//     const [activeIndex, setActiveIndex] = useState(0);

//     const handlePrev = useCallback(() => {
//         if (!sliderRef.current) return;
//         const newIndex = activeIndex === 0 ? testimonialData.length - 1 : activeIndex - 1;
//         setActiveIndex(newIndex);
//         sliderRef.current.swiper.slidePrev();
//     }, [activeIndex]);

//     const handleNext = useCallback(() => {
//         if (!sliderRef.current) return;
//         const newIndex = (activeIndex + 1) % testimonialData.length;
//         setActiveIndex(newIndex);
//         sliderRef.current.swiper.slideNext();
//     }, [activeIndex]);

//     const handleSlideChange = (swiper) => {
//         setActiveIndex(swiper.realIndex);
//     };

//     return (
//         <section className="my-6">

//             <div className="mx-auto max-w-screen-sm">
//                 <div className='title my-2'>
//                     <h1>
//                         Trusted <span>Voices</span>
//                     </h1>
//                 </div>
//                 <p className="mb-8 font-light text-center text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
//                     molestiae quas vel sint commodi
//                 </p>
//             </div>
//             <div className="mb-6 flex justify-end items-center">
//                 <div className="flex items-center gap-10 top-0">
//                     <button className="prev-arrow cursor-pointer p-3 rounded-full border bg-slate-50" onClick={handlePrev}>
//                         <TbArrowBigLeft className="h-6 w-6 text-black" />
//                     </button>
//                     <button className="next-arrow cursor-pointer p-3 rounded-full border bg-slate-50" onClick={handleNext}>
//                         <TbArrowBigRight className="h-6 w-6 text-black" />
//                     </button>
//                 </div>
//             </div>

//             <div>
//                 <Swiper
//                     ref={sliderRef}
//                     modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//                     breakpoints={{
//                         320: {
//                             slidesPerView: 1,
//                             spaceBetween: 20,
//                         },
//                         360: {
//                             slidesPerView: 1,
//                             spaceBetween: 20,
//                         },
//                         480: {
//                             slidesPerView: 1,
//                             spaceBetween: 20,
//                         },
//                         640: {
//                             slidesPerView: 1,
//                             spaceBetween: 20,
//                         },
//                         768: {
//                             slidesPerView: 2,
//                             spaceBetween: 10,
//                         },
//                         1024: {
//                             slidesPerView: 4,
//                             spaceBetween: 10,
//                         },
//                     }}
//                     spaceBetween={15}
//                     slidesPerView={2}
//                     onSlideChange={handleSlideChange}
//                     initialSlide={activeIndex}
//                 >
//                     <div className="grid grid-cols-1 justify-center items-center mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4">
//                         {testimonialData &&
//                             testimonialData?.map((testimonial, index) => {
//                                 const isActive = activeIndex === index || activeIndex === index + 1;

//                                 return (
//                                     <SwiperSlide
//                                         className={`cursor-grab rounded bg-transparent ${isActive ? "active-card" : ""
//                                             }`}
//                                         key={testimonial.id}
//                                     >
//                                         <div className="flex gap-4">
//                                             <div className='otherVedioSlider'>
//                                                 <video
//                                                     width="100%"
//                                                     height="100%"
//                                                     style={{ objectFit: "cover" }}
//                                                     className='vedioContent'
//                                                 >
//                                                     <source
//                                                         src={testimonial?.vedio}
//                                                         type="video/mp4"
//                                                     />
//                                                 </video>
//                                             </div>
//                                             <div className="activeCardMain">
//                                                 {isActive && (
//                                                     <div className="additional-card">
//                                                         <div className="relative mx-auto bg-transparent border-gray-800 dark:border-gray-800 bg-gray-800 vedioSliderCard border-[14px] rounded-[2.5rem] h-[500px] w-[270px]">
//                                                             <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" />
//                                                             <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" />
//                                                             <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" />
//                                                             <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" />
//                                                             <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" />
//                                                             <div className="rounded-[2rem] overflow-hidden w-[100%] h-[100%] bg-transparent dark:bg-gray-800">
//                                                                 <video
//                                                                     controls
//                                                                     width="100%"
//                                                                     height="100%"
//                                                                     style={{ objectFit: "cover" }}
//                                                                     className="vedioContent"
//                                                                 >
//                                                                     <source
//                                                                         src={testimonial?.vedio}
//                                                                         type="video/mp4"
//                                                                     />
//                                                                 </video>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 )}
//                                             </div>
//                                         </div>
//                                     </SwiperSlide>
//                                 );
//                             })}
//                     </div>
//                 </Swiper>
//             </div>
//         </section>
//     );
// };

// export default Testimonial;


import React, { useCallback, useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";
import { testimonialData } from "@/src/Utils/Mock/CommonData";

const Testimonial = () => {
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        const newIndex = activeIndex === 0 ? testimonialData.length - 1 : activeIndex - 1;
        setActiveIndex(newIndex);
        sliderRef.current.swiper.slidePrev();
    }, [activeIndex]);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        const newIndex = (activeIndex + 1) % testimonialData.length;
        setActiveIndex(newIndex);
        sliderRef.current.swiper.slideNext();
    }, [activeIndex]);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };

    return (
        <section className="my-6">

            <div className="mx-auto max-w-screen-sm">
                <div className='title my-2'>
                    <h1>
                        Trusted <span>Voices</span>
                    </h1>
                </div>
                <p className="mb-8 font-light text-center text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi
                </p>
            </div>
            <div className="mb-6 flex justify-end items-center">
                <div className="flex items-center gap-10 top-0">
                    <button className="prev-arrow cursor-pointer p-3 rounded-full border bg-slate-50" onClick={handlePrev}>
                        <TbArrowBigLeft className="h-6 w-6 text-black" />
                    </button>
                    <button className="next-arrow cursor-pointer p-3 rounded-full border bg-slate-50" onClick={handleNext}>
                        <TbArrowBigRight className="h-6 w-6 text-black" />
                    </button>
                </div>
            </div>

            <div>
                <Swiper
                    ref={sliderRef}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        360: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10, // Adjust the space between active and other cards
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 10, // Adjust the space between active and other cards
                        },
                    }}
                    spaceBetween={10}
                    slidesPerView={2}
                    onSlideChange={handleSlideChange}
                    initialSlide={activeIndex}
                >
                    <div className="grid grid-cols-1 justify-center items-center mx-auto md:grid-cols-2 lg:grid-cols-3">
                        {testimonialData &&
                            testimonialData?.map((testimonial, index) => {
                                const isActive = activeIndex === index || activeIndex === index + 1;

                                return (
                                    <SwiperSlide
                                        className={`cursor-grab rounded bg-transparent ${isActive ? "active-card" : ""
                                            }`}
                                        key={testimonial.id}
                                    >
                                        <div className="flex gap-4">
                                            <div className='otherVedioSlider'>
                                                <video
                                                    width="100%"
                                                    height="100%"
                                                    style={{ objectFit: "cover" }}
                                                    className='vedioContent'
                                                >
                                                    <source
                                                        src={testimonial?.vedio}
                                                        type="video/mp4"
                                                    />
                                                </video>
                                            </div>
                                            <div className="activeCardMain">
                                                {isActive && (
                                                    <div className="additional-card">
                                                        <div className="relative mx-auto bg-transparent border-gray-800 dark:border-gray-800 bg-gray-800 vedioSliderCard border-[14px] rounded-[2.5rem]">
                                                            <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" />
                                                            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" />
                                                            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" />
                                                            <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" />
                                                            <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" />
                                                            <div className="rounded-[2rem] overflow-hidden w-[100%] h-[100%] bg-transparent dark:bg-gray-800">
                                                                <video
                                                                    controls
                                                                    width="100%"
                                                                    height="100%"
                                                                    style={{ objectFit: "cover" }}
                                                                    className="vedioContent"
                                                                >
                                                                    <source
                                                                        src={testimonial?.vedio}
                                                                        type="video/mp4"
                                                                    />
                                                                </video>
                                                            </div>
                                                        </div>

                                                        <div className='text-center my-2 font-bold text-[1.5rem]'>
                                                            <h1>{testimonial?.user[0].name}</h1>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;
