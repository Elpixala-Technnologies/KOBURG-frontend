import React, { useCallback, useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import useProducts from "@/src/Hooks/useProducts";
import { AiFillAmazonSquare } from 'react-icons/ai';
import { SiFlipkart } from 'react-icons/si'


const LatestProduct = () => {
    const { productData } = useProducts();

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
        <section className="container">
            <div className=" my-6 flex flex-col justify-center items-center">
                <div className='title my-2'>
                    <h1>Latest Drops  <span>Sneaker</span></h1>
                </div>
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
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => { }}
                    onSwiper={(swiper) => { }}
                >
                    <div className="grid grid-cols-1 mb-4 justify-center items-center mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {productData &&
                            productData?.map((product) => {
                                const { brand, name, colors, _id, amazonlink, flipkartlink, myntralink, price, discount } = product;
                                return (
                                    <SwiperSlide className="cursor-grab rounded " key={product._id}>
                                        <div key={product?._id} href={`/shop/${product?._id}`} className="group transition duration-200 ease-out transform hover:scale-105">
                                            <div
                                                key={_id}
                                                className="flex flex-col  w-full  border border-gray-100 bg-white shadow-md rounded-[1.4rem] transition duration-200 ease-out transform hover:scale-105"
                                            >
                                                <Link
                                                    className="relative mx-3 mt-3 bg-[#b7dbff] flex h-65 overflow-hidden rounded-[1rem]"
                                                    href={`/shop/${_id}`}
                                                >
                                                    <img
                                                        className="opacity-75  object-cover w-full object-center"
                                                        src={colors[0]?.images[0]}
                                                        alt={name}
                                                    />
                                                </Link>
                                                <div className="mx-3 py-2">
                                                    <p className='text-gray-300 text-left'>{brand}</p>
                                                    <Link href={`/shop/${_id}`} className="text-[1.22rem] tracking-tight   text-slate-900 "
                                                        style={{
                                                            textAlign: "left"
                                                        }}
                                                    >
                                                        {name}
                                                    </Link>
                                                    <div class="flex items-center space-x-1">
                                                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                        </svg>
                                                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                        </svg>
                                                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                        </svg>
                                                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                        </svg>
                                                        <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="mt-2 mb-2 flex justify-between items-center">
                                                        <p className="text-[1.2rem] font-bold  text-[#088178]">
                                                            Rs. {price}
                                                        </p>
                                                        <div className="flex items-center justify-end gap-4 ">
                                                            <Link href={myntralink || "/"}
                                                                className='border  bg-[#b3fffa2e] rounded-full p-2 text-[#2A9563] transition duration-300 ease-in-out hover:bg-[#088179bf] hover:text-white'
                                                            >
                                                                <img
                                                                    className="opacity-75 w-[1.2rem] h-[1.2rem] myntraLink"
                                                                    src={"https://res.cloudinary.com/elpixala/image/upload/v1699120849/koburg/Icons/market-icon/wvzagtbsxyxam6nbgv41.svg"}
                                                                    alt={name}
                                                                />

                                                            </Link>
                                                            <Link href={flipkartlink || "/"}
                                                                className='border  bg-[#b3fffa2e] rounded-full p-2 text-[#2A9563] transition duration-300 ease-in-out hover:bg-[#088179bf] hover:text-white'
                                                            >
                                                                <SiFlipkart className='text-[1.4rem]' />
                                                            </Link>
                                                            <Link
                                                                href={amazonlink || "/"}
                                                                className='border  bg-[#b3fffa2e] rounded-full p-2 text-[#2A9563] transition duration-300 ease-in-out hover:bg-[#088179bf] hover:text-white'
                                                            >
                                                                <AiFillAmazonSquare className='text-[1.4rem]' />
                                                            </Link>
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
            <>
                {/* component */}
                {/* This is an example component */}
                <div className="flex flex-row mx-auto justify-center md:justify-end">
                    <button
                        type="button"
                        onClick={handlePrev}
                        className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-[#4f46e5] hover:text-white px-3"
                    >
                        <div className="flex flex-row align-middle">
                            <svg
                                className="w-5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <p className="ml-2">Prev</p>
                        </div>
                    </button>
                    <button
                        type="button"
                        onClick={handleNext}
                        className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-[#4f46e5] hover:text-white px-3"
                    >
                        <div className="flex flex-row align-middle">
                            <span className="mr-2">Next</span>
                            <svg
                                className="w-5 ml-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </button>
                </div>

            </>

        </section>
    );
};

export default LatestProduct;