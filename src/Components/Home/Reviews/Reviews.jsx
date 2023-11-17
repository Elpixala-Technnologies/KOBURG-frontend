
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useCallback, useRef, useState } from "react";
import { reviewsData } from "@/src/Utils/Mock/CommonData";
import Image from "next/image";
import { BsPlayCircle } from "react-icons/bs";
import YouTube from 'react-youtube';
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";

const Reviews = () => {


  const sliderRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoId, setVideoId] = useState(""); // Use video ID instead of URL

  const handleOpenModal = (videoId) => {
    setVideoId(videoId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setVideoId("");
    setIsModalOpen(false);
  };


  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const modalContainer = isModalOpen ? "block" : "hidden";



  return (
    <section className="container">
      <div className="px-4 mx-auto text-center  lg:px-6">
        <div className="mx-auto max-w-screen-sm  md:mb-[-4rem]">
          <div className='title'>
            <h1>What Say Our <span>Customer</span></h1>
          </div>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi
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

        {/* ======== slider ======== */}

        <div className="mt-[2rem]">
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
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => { }}
            onSwiper={(swiper) => { }}
            style={{
              marginTop: "2rem"
            }}
          >
            <div className="grid grid-cols-1 mb-4 justify-center items-center mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reviewsData &&
                reviewsData?.map((reviews) => {
                  const { profile, name, image, vedio, location, id, country } = reviews;
                  return (
                    <SwiperSlide className="cursor-grab rounded " key={id}>
                      <div key={id + '15d'} className="group ">
                        <div
                          className="flex flex-col  w-full  border border-gray-100 bg-white shadow-md rounded-md"
                        >
                          <div
                            className="relative  flex h-full overflow-hidden rounded-[1rem]"
                          >
                            <img
                              className="w-full p-2 rounded-md"
                              src={image}
                              alt={name}
                            />

                            <div className="absolute bottom-5 left-5">
                              <div
                                className="flex gap-2 items-center text-white p-2 rounded-full cursor-pointer bg-transparent border border-transparent hover:bg-[#B4B3B2] transition-all duration-300 ease-in-out px-4 group"
                                onClick={() => handleOpenModal(vedio)}
                              >
                                <BsPlayCircle className="text-[1.5rem] group-hover:text-green-500 animate-pulse" />
                                <p className="text-semibold">Watch Story</p>
                              </div>

                            </div>
                          </div>
                          <div className="mx-3 py-2 text-left">

                            <div className='flex items-center gap-3'>
                              <div className="mt-2 mb-2 flex gap-4 items-center">
                                <Image
                                  src={profile}
                                  alt={name}
                                  width={30}
                                  height={30}
                                  className="rounded-full object-cover object-center revew-profile"
                                />
                              </div>

                              <div>
                                <div className='flex gap-4 items-center'>
                                  <p className='text-gray-300'>{location}</p>
                                  <img
                                    src={country}
                                    alt={location}
                                    className="countryIcon"
                                  />
                                </div>
                                <h1 className="text-[1.1rem] tracking-tight text-slate-900">
                                  {name}
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </div>
          </Swiper>
        </div>
      </div>

      {/* == modal === */}
      {isModalOpen && (
        // <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
        //   <div className="w-[65%] h-[100%]  rounded-lg p-4">
        //     <div className="flex items-start justify-between border-b  ">
        //       <button
        //         type="button"
        //         className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
        //         onClick={handleCloseModal}
        //       >
        //         <svg
        //           className="w-3 h-3"
        //           aria-hidden="true"
        //           xmlns="http://www.w3.org/2000/svg"
        //           fill="none"
        //           viewBox="0 0 14 14"
        //         >
        //           <path
        //             stroke="currentColor"
        //             strokeLinecap="round"
        //             strokeLinejoin="round"
        //             strokeWidth={2}
        //             d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        //           />
        //         </svg>
        //         <span className="sr-only">Close modal</span>
        //       </button>
        //     </div>
        //     <div className=" ">
        //       <div className="youtube-player border">
        //         <YouTube
        //           videoId={videoId}
        //           opts={{
        //             width: '100%',
        //             height: '360',
        //           }}
        //         />
        //       </div>
        //     </div>
        //   </div>
        // </div>

        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className={`rounded-lg overflow-hidden ${modalContainer} w-[70%] h-[80vh]`}>
            <div className="relative bg-white">
              {/* Close button */}
              <button
                type="button"
                className="absolute top-0 left-0 p-2 text-gray-400 hover:text-gray-900 bg-white rounded-full"
                onClick={handleCloseModal}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              {/* YouTube player */}
              <div className="">
                <YouTube
                  videoId={videoId}
                  opts={{
                    width: '100%',
                    playerVars: {
                      autoplay: 1,
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Reviews;