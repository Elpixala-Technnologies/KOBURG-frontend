import Image from 'next/image';
import React from 'react';
import Link from "next/link";
import {
    BanneSectionOne,
    BanneSectionTwo,
    BanneSectionThree,
    BanneSectionFour,
    BanneSectionFive,
    BanneSectionSix
} from "@/src/Assets"

const BannerSection = () => {
    return (
        <section className='container'>
            <div className='mt-[20px] grid text-white grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 gap-4'>

                <div className='banner-content w-full relative group'>
                    <Image
                        src={BanneSectionSix}
                        alt={"HomeOfferBannerOne"}
                        width={500}
                        height={530}
                        className="rounded w-full h-full object-cover transition duration-200 ease-out transform hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition duration-200 ease-in-out">
                        <div className="text-center">
                            <Link href="/shop" className="text-white py-2 px-4 rounded-md relative z-10 inline-block">
                                <button class="btn2 mt-12 px-10 py-5 relative border border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-teal-600 transition duration-300" type="button">
                                    <span class="absolute inset-0 bg-white transition-transform -translate-x-full"></span>
                                    <span class="absolute inset-0 flex justify-center items-center font-bold transform transition-transform">
                                        Shop Now
                                    </span>
                                    Shop Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>




                <div className='banner-content  text-[#000] flex flex-col gap-[2rem]'>
                    <div className='banner-content w-full relative group'>
                        <Image
                            src={BanneSectionFour}
                            alt={"HomeOfferBannerOne"}
                            width={300}
                            height={300}
                            className="rounded w-full h-full object-cover transition duration-200 ease-out transform hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition duration-200 ease-in-out">
                            <div className="text-center">
                                <Link href="/shop" className="text-white py-2 px-4 rounded-md relative z-10 inline-block">
                                    <button class="btn2 mt-12 px-10 py-5 relative border border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-teal-600 transition duration-300" type="button">
                                        <span class="absolute inset-0 bg-white transition-transform -translate-x-full"></span>
                                        <span class="absolute inset-0 flex justify-center items-center font-bold transform transition-transform">
                                            Shop Now
                                        </span>
                                        Shop Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='banner-content relative'>
                        <h1 className='font-bold text-[1.5rem] mt-2 text-center'>
                            Designed to complement your everyday life
                        </h1>
                        <p className='text-center'>
                            At Neeman's, we craft products that seamlessly fit your everyday life and fashion choices. Our products are created responsibly to elevate your lifestyle, empowering you to conquer each day with comfort and ease
                        </p>
                    </div>
                    <div className='banner-content w-full relative group'>
                        <Image
                            src={BanneSectionFive}
                            alt={"HomeOfferBannerOne"}
                            width={300}
                            height={300}
                            className="rounded w-full h-full object-cover transition duration-200 ease-out transform hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition duration-200 ease-in-out">
                            <div className="text-center">
                                <Link href="/shop" className="text-white py-2 px-4 rounded-md relative z-10 inline-block">
                                    <button class="btn2 mt-12 px-10 py-5 relative border border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-teal-600 transition duration-300" type="button">
                                        <span class="absolute inset-0 bg-white transition-transform -translate-x-full"></span>
                                        <span class="absolute inset-0 flex justify-center items-center font-bold transform transition-transform">
                                            Shop Now
                                        </span>
                                        Shop Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='banner-content w-full relative group'>
                    <Image
                        src={BanneSectionOne}
                        alt={"HomeOfferBannerOne"}
                        width={530}
                        height={510}
                        className="rounded w-full h-full object-cover transition duration-200 ease-out transform hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition duration-200 ease-in-out">
                        <div className="text-center">
                            <Link href="/shop" className="text-white py-2 px-4 rounded-md relative z-10 inline-block">
                                <button class="btn2 mt-12 px-10 py-5 relative border border-white uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-teal-600 transition duration-300" type="button">
                                    <span class="absolute inset-0 bg-white transition-transform -translate-x-full"></span>
                                    <span class="absolute inset-0 flex justify-center items-center font-bold transform transition-transform">
                                        Shop Now
                                    </span>
                                    Shop Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BannerSection;