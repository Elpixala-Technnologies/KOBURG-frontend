import React, { useCallback, useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import useProducts from "@/src/Hooks/useProducts";
import { AiFillAmazonSquare } from 'react-icons/ai';
import { SiFlipkart } from 'react-icons/si'
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";

const BestSeller = () => {
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
        <section className='container'>
            <div className='text-center  title md:mb-[-4rem] '>
                <h1>Discover <span>Koburg</span> Top-Selling Product!</h1>
                <p className=''>Unmatched Quality and Value for Your Everyday Needs</p>
            </div>
            <div className=" flex justify-end items-center my-4">
                <div className="flex items-center gap-10 top-0">
                    <button className="prev-arrow cursor-pointer p-3 rounded-full border bg-slate-50" onClick={handlePrev}>
                        <TbArrowBigLeft className="h-6 w-6 text-black" />
                    </button>
                    <button className="next-arrow cursor-pointer p-3 rounded-full border bg-slate-50" onClick={handleNext}>
                        <TbArrowBigRight className="h-6 w-6 text-black" />
                    </button>
                </div>
            </div>
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
                                        <div key={product?._id} href={`/shop/${product?._id}`} className="group">
                                            <div
                                                key={_id}
                                                className="flex flex-col  w-full  border border-gray-100 bg-white shadow-md rounded-[1.4rem]"
                                            >
                                                <Link
                                                    className=" mx-3 mt-3 flex  "
                                                    href={`/shop/${_id}`}
                                                >
                                                    <div className="h-full duration-300 w-full overflow-hidden relative h-menu border rounded-[1rem]">
                                                        <img
                                                            src={colors[0]?.images[0]}
                                                            alt=""
                                                            className="hover-img h-full w-full duration-200"
                                                        />
                                                        <img
                                                            src={colors[0]?.images[1]}
                                                            alt=""
                                                            className="absolute translate-y-[-100%] top-0 left-0 right-0 bottom-0 h-hover h-full w-full duration-300"
                                                        />
                                                    </div>
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

        </section>
    );
};

export default BestSeller;
