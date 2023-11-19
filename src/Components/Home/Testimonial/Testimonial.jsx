import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";
import React, { useCallback, useRef, useState } from "react";
import { BsPauseCircle, BsPlayCircle } from 'react-icons/bs';

const Testimonial = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showButton, setShowButton] = useState(true);

    const [playingVideoIndex, setPlayingVideoIndex] = useState(null);
    const videoRefs = useRef({});

    const handlePlayPauseClick = (index) => {
        if (playingVideoIndex === index) {
            videoRefs.current[index].pause();
            setPlayingVideoIndex(null);
        } else {
            setPlayingVideoIndex(index);
            setTimeout(() => {
                videoRefs.current[index].play();
            }, 0);
        }
    };



    const videoInfo = [
        {
            id: 0,
            name: ' Aerozest Sneakers',
            video: "https://res.cloudinary.com/elpixala/video/upload/v1700284018/koburg/Vedio/ta6cwcahr9mdbwu0ubnu.mp4",
            thumbnail: "https://res.cloudinary.com/elpixala/image/upload/v1700288534/koburg/KOBURG%20BANNERS/tvmyzq1lz5ibgaxfvyex.png"
        },
        {
            id: 1,
            name: 'Trendy Collection',
            video: 'https://res.cloudinary.com/elpixala/video/upload/v1700284301/koburg/Vedio/s2viyhg9n9er0brxhig3.mp4',
            thumbnail: "https://res.cloudinary.com/elpixala/image/upload/v1700288497/koburg/KOBURG%20BANNERS/u0ktgcsqbdntqbriiw8d.png"
        },
        {
            id: 2,
            name: 'Velo Sneakers',
            video: 'https://res.cloudinary.com/elpixala/video/upload/v1700284479/koburg/Vedio/gbgzjgvh7bkxyqod8rop.mp4',
            thumbnail: "https://res.cloudinary.com/elpixala/image/upload/v1700288495/koburg/KOBURG%20BANNERS/dx5uppzv81kzeozapcqh.png"
        },
        {
            id: 3,
            name: 'Sunbe Sneakers',
            video: 'https://res.cloudinary.com/elpixala/video/upload/v1700284675/koburg/Vedio/akvr19rlb9epy0ixedel.mp4',
            thumbnail: "https://res.cloudinary.com/elpixala/image/upload/v1700288493/koburg/KOBURG%20BANNERS/bkws6uteppf7hashnehf.png"
        }
    ];


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
                ref={sliderRef}
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
                <div>
                    {videoInfo.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div className="rounded-3xl h-[450px] w-full relative overflow-hidden">
                                <video
                                    ref={el => videoRefs.current[index] = el}
                                    width="100%"
                                    height="100%"
                                    className={`videoContent ${playingVideoIndex === index ? 'block' : 'hidden'}`}
                                    controls
                                >
                                    <source src={item.video} type="video/mp4" />
                                </video>

                                <img
                                    src={item.thumbnail}
                                    alt={item.name}
                                    className={`w-full h-full object-cover cursor-pointer ${playingVideoIndex === index ? 'hidden' : 'block'}`}
                                    onClick={() => handlePlayPauseClick(index)}
                                />

                                <button
                                    className={`absolute bg-[#ffffff79] p-2 rounded-full hover:bg-[#ffffff] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${playingVideoIndex === index ? 'hidden' : ''}`}
                                    onClick={() => handlePlayPauseClick(index)}
                                >
                                    <BsPlayCircle className="text-4xl" />
                                </button>
                            </div>
                            <h3 className="text-2xl text-center text-black mt-4">{item.name}</h3>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
};

export default Testimonial;
