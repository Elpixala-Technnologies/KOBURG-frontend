// import React, { useCallback, useRef, useState } from "react";
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";
// import { testimonialData } from "@/src/Utils/Mock/CommonData";
// // import { BsPauseCircle } from "react-icons/bs";
// // import { AiOutlinePlayCircle } from "react-icons/ai";
// import { BsPauseCircle, BsPlayCircle } from 'react-icons/bs';
// import { Transition } from '@headlessui/react';



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

//     // const videoRef = useRef(null);
//     // const [isPlaying, setIsPlaying] = useState(false);

//     // const handlePlayPauseClick = () => {
//     //     const video = videoRef.current;
//     //     if (isPlaying) {
//     //         video.pause();
//     //     } else {
//     //         video.play();
//     //     }
//     //     setIsPlaying(!isPlaying);
//     // };
//     const videoRef = useRef(null);
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [showButton, setShowButton] = useState(true);

//     const handlePlayPauseClick = () => {
//         if (videoRef.current) {
//             if (isPlaying) {
//                 videoRef.current.pause();
//             } else {
//                 videoRef.current.play();
//             }
//             setIsPlaying(!isPlaying);
//             setShowButton(false);
//         }
//     };

//     const handleVideoEnd = () => {
//         if (videoRef.current) {
//             videoRef.current.currentTime = 0; // Reset video to start
//             videoRef.current.pause();
//             setIsPlaying(false);
//             setShowButton(true);
//         }
//     };

//     const handleMouseEnter = () => setShowButton(true);
//     const handleMouseLeave = () => { if (isPlaying) setShowButton(false); };


//     return (
//         <section className="my-6">

//             <div className="mx-auto max-w-screen-sm  md:mb-[-4rem]">
//                 <div className='title'>
//                     <h1>
//                         Trending<span> Now</span>
//                     </h1>
//                 </div>
//                 <p className="font-light text-center text-gray-500 sm:text-xl dark:text-gray-400">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
//                     molestiae quas vel sint commodi
//                 </p>
//             </div>
//             <div className="my-6 flex justify-end items-center">
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
//                             spaceBetween: 10,
//                         },
//                         360: {
//                             slidesPerView: 1,
//                             spaceBetween: 10,
//                         },
//                         480: {
//                             slidesPerView: 1,
//                             spaceBetween: 10,
//                         },
//                         640: {
//                             slidesPerView: 1,
//                             spaceBetween: 10,
//                         },
//                         768: {
//                             slidesPerView: 1,
//                             spaceBetween: 10, // Adjust the space between active and other cards
//                         },
//                         1024: {
//                             slidesPerView: 4,
//                             spaceBetween: 10, // Adjust the space between active and other cards
//                         },
//                     }}
//                     spaceBetween={10}
//                     slidesPerView={2}
//                     onSlideChange={handleSlideChange}
//                     initialSlide={activeIndex}
//                 >
//                     <div className="grid grid-cols-1 justify-center items-center mx-auto md:grid-cols-2 lg:grid-cols-3">
//                         {testimonialData &&
//                             testimonialData?.map((testimonial, index) => {
//                                 const isActive = activeIndex === index || activeIndex === index + 1;

//                                 return (
//                                     <SwiperSlide
//                                         className={`cursor-grab flex justify-center itmes-center rounded bg-transparent ${isActive ? "active-card" : ""
//                                             }`}
//                                         key={testimonial.id}
//                                     >
//                                         <div className="flex gap-4 justify-center">
//                                             <div className='otherVedioSlider md:block hidden'>
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
//                                             <div className="activeCardMain flex justify-center itemes-center">
//                                                 {isActive && (
// <div className="additional-card w-full">
//     <div className="relative mx-auto bg-transparent border-gray-800 dark:border-gray-800 bg-gray-800 vedioSliderCard border-[14px] rounded-[2.5rem]">
//         <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" />
//         <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" />
//         <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" />
//         <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" />
//         <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" />
//         <div className=" relative overflow-hidden w-[100%] h-[100%] bg-transparent dark:bg-gray-800"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//         >
//             {/* <video
//                 ref={videoRef}
//                 width="100%"
//                 height="100%"
//                 style={{ objectFit: "cover" }}
//                 className="vedioContent "
//             >
//                 <source src={testimonial?.vedio} type="video/mp4" />
//             </video> */}


//             <video
//                 ref={videoRef}
//                 width="100%"
//                 height="100%"
//                 style={{ objectFit: 'cover' }}
//                 className="videoContent"
//                 onEnded={handleVideoEnd}
//             >
//                 <source src={testimonial?.video} type="video/mp4" />
//             </video>

//             {showButton && (
//                 <button
//                     onClick={handlePlayPauseClick}
//                     className="play-pause-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white shadow-lg"
//                 >
//                     {isPlaying ? <BsPauseCircle className="text-4xl" /> : <BsPlayCircle className="text-4xl" />}
//                 </button>
//             )}


//             {/* <button
//                 onClick={handlePlayPauseClick}
//                 className="play-pause-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white shadow-lg"
//             >
//                 <Transition
//                     show={!isPlaying}
//                     enter="transition-opacity duration-300"
//                     enterFrom="opacity-0"
//                     enterTo="opacity-100"
//                     leave="transition-opacity duration-300"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                 >
//                     <BsPlayCircle className="text-4xl" />
//                 </Transition>
//                 <Transition
//                     show={isPlaying}
//                     enter="transition-opacity duration-300"
//                     enterFrom="opacity-0"
//                     enterTo="opacity-100"
//                     leave="transition-opacity duration-300"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                 >
//                     <BsPauseCircle className="text-4xl" />
//                 </Transition>
//             </button> */}
//         </div>
//     </div>

//     <div className='text-center my-2 font-bold text-[1.5rem]'>
//         <h1>{testimonial?.user[0].name}</h1>
//     </div>
// </div>
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


// import React, { useCallback, useRef, useState } from "react";
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";
// import { testimonialData } from "@/src/Utils/Mock/CommonData";
// import { BsPauseCircle, BsPlayCircle } from 'react-icons/bs';
// import { Transition } from '@headlessui/react';



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

//     const videoRef = useRef(null);
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [showButton, setShowButton] = useState(true);

//     const handlePlayPauseClick = () => {
//         if (videoRef.current) {
//             if (isPlaying) {
//                 videoRef.current.pause();
//             } else {
//                 videoRef.current.play();
//             }
//             setIsPlaying(!isPlaying);
//             setShowButton(false);
//         }
//     };

//     const handleVideoEnd = () => {
//         if (videoRef.current) {
//             videoRef.current.currentTime = 0; // Reset video to start
//             videoRef.current.pause();
//             setIsPlaying(false);
//             setShowButton(true);
//         }
//     };

//     const handleMouseEnter = () => setShowButton(true);
//     const handleMouseLeave = () => { if (isPlaying) setShowButton(false); };


//     return (
//         <section className="my-6 contaier">

// <div className="mx-auto max-w-screen-sm md:mb-[-4rem]">
//     <div className='title'>
//         <h1>
//             Trending<span> Now</span>
//         </h1>
//     </div>
//     <p className="font-light text-center text-gray-500 sm:text-xl dark:text-gray-400">
//         Explore what our customers love the most
//     </p>
// </div>
//             <div className="my-6 flex justify-end items-center">
//                 <div className="flex items-center gap-10 top-0">
//                     <button className="prev-arrow cursor-pointer p-3 rounded-full border bg-slate-50" onClick={handlePrev}>
//                         <TbArrowBigLeft className="h-6 w-6 text-black" />
//                     </button>
//                     <button className="next-arrow cursor-pointer p-3 rounded-full border bg-slate-50" onClick={handleNext}>
//                         <TbArrowBigRight className="h-6 w-6 text-black" />
//                     </button>
//                 </div>
//             </div>

//             <div className="mt-[2rem]">
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
//                             spaceBetween: 20,
//                         },
//                         1024: {
//                             slidesPerView: 4,
//                             spaceBetween: 20,
//                         },
//                     }}
//                     spaceBetween={20}
//                     slidesPerView={3}
//                     onSlideChange={() => { }}
//                     onSwiper={(swiper) => { }}
//                 >
//                     <div className="grid grid-cols-1 mb-4 justify-center items-center mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4">
//                         {testimonialData &&
//                             testimonialData?.map((testimonial, index) => {
//                                 return (
//                                     <SwiperSlide className="cursor-grab rounded " key={index}>
//                                         <div className='otherVedioSlider'>
//                                             <video
//                                                 width="100%"
//                                                 height="100%"
//                                                 style={{ objectFit: "cover" }}
//                                                 className='vedioContent'


//                                             >
//                                                 <source
//                                                     src={testimonial?.vedio}
//                                                     type="video/mp4"
//                                                 />
//                                             </video>
//                                         </div>
//                                     </SwiperSlide>

//                                 );
//                             })}
//                     </div>
//                 </Swiper>
//             </div>


//             {/* <div className="flex gap-4">
//                 <div>
//                     <div className="additional-card">
//                         <div className="relative mx-auto bg-transparent border-gray-800 dark:border-gray-800 bg-gray-800 vedioSliderCard border-[14px] rounded-[2.5rem]">
//                             <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" />
//                             <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" />
//                             <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" />
//                             <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" />
//                             <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" />
//                             <div className=" relative overflow-hidden w-[100%] h-[100%] bg-transparent dark:bg-gray-800"
//                                 onMouseEnter={handleMouseEnter}
//                                 onMouseLeave={handleMouseLeave}
//                             >
//                                 <video
//                                     ref={videoRef}
//                                     width="100%"
//                                     height="100%"
//                                     style={{ objectFit: 'cover' }}
//                                     className="activeVedioContent"
//                                     onEnded={handleVideoEnd}
//                                 >
//                                     <source src={"https://res.cloudinary.com/elpixala/video/upload/v1700275307/koburg/Vedio/new/bifdpfvm0mqqi23amsho.mp4"} type="video/mp4" />
//                                 </video>

//                                 {showButton && (
//                                     <button
//                                         onClick={handlePlayPauseClick}
//                                         className="play-pause-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white shadow-lg"
//                                     >
//                                         {isPlaying ? <BsPauseCircle className="text-4xl" /> : <BsPlayCircle className="text-4xl" />}
//                                     </button>
//                                 )}
//                             </div>
//                         </div>

//                         <div className='text-center my-2 font-bold text-[1.5rem]'>
//                             <h1>{"New Trending"}</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex gap-4">
//                     {testimonialData &&
//                         testimonialData?.slice(3)?.map((testimonial, index) => {
//                             return (
//                                 <div className='otherVedioSlider'>
//                                     <video
//                                         width="100%"
//                                         height="100%"
//                                         style={{ objectFit: "cover" }}
//                                         className='vedioContent'
//                                     >
//                                         <source
//                                             src={testimonial?.vedio}
//                                             type="video/mp4"
//                                         />
//                                     </video>
//                                 </div>
//                             );
//                         })}
//                 </div>

//             </div> */}
//         </section>
//     );
// };

// export default Testimonial;



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";
import React, { useCallback, useRef, useState } from "react";

const Testimonial = () => {
    const videoInfo = [
        {
            id: 0,
            name: ' Aerozest Sneakers',
            video: "https://res.cloudinary.com/elpixala/video/upload/v1700284018/koburg/Vedio/ta6cwcahr9mdbwu0ubnu.mp4"
        },
        {
            id: 1,
            name: 'Trendy Collection',
            video: 'https://res.cloudinary.com/elpixala/video/upload/v1700284301/koburg/Vedio/s2viyhg9n9er0brxhig3.mp4'
        },
        {
            id: 2,
            name: 'Velo Sneakers',
            video: 'https://res.cloudinary.com/elpixala/video/upload/v1700284479/koburg/Vedio/gbgzjgvh7bkxyqod8rop.mp4'
        },
        {
            id: 3,
            name: 'Sunbe Sneakers',
            video: 'https://res.cloudinary.com/elpixala/video/upload/v1700284675/koburg/Vedio/akvr19rlb9epy0ixedel.mp4'
        }
    ];


    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    
  const sliderRef = useRef(null);

    return (
        <div className="container mt-14">
            <div className="mx-auto max-w-screen-sm md:mb-[-4rem]">
                <div className='title'>
                    <h1>
                        Trending<span> Now</span>
                    </h1>
                </div>
                <p className="font-light text-center text-gray-500 sm:text-xl dark:text-gray-400">
                    Explore what our customers love the most
                </p>
            </div>

            <div className=" flex justify-end items-center my-5">
                <div className="flex items-center gap-10 top-0">
                    <button className="prev-arrow cursor-pointer p-3 rounded-full border bg-slate-50" onClick={handlePrev}>
                        <TbArrowBigLeft className="h-6 w-6 text-black" />
                    </button>
                    <button className="next-arrow cursor-pointer p-3 rounded-full border bg-slate-50" onClick={handleNext}>
                        <TbArrowBigRight className="h-6 w-6 text-black" />
                    </button>
                </div>
            </div>


            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                modules={[]}
                className="mySwiper mt-12"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    }
                }}>
                {
                    videoInfo?.map(itm => <SwiperSlide>
                        <div>
                            <div className="rounded-3xl h-[480px] relative overflow-hidden hover-box duration-200">
                                {/* <img src={itm?.thum} className="w-full h-full " /> */}
                                <video className="" width="940" height="480"  controls autoPlay>
                                    <source src={itm?.video} type="video/mp4"
                                        autoplay loop 
                                    />
                                </video>
                            </div>
                            <h3 className="text-2xl text-center text-black mt-4">{itm?.name}</h3>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Testimonial;
