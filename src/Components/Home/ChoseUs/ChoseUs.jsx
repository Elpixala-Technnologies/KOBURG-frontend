import React from 'react';
import { FaDolly } from 'react-icons/fa';
import { TbMapPinHeart, TbTrees } from 'react-icons/tb';
import { CiDeliveryTruck } from 'react-icons/ci'
import Image from "next/image";
import Link from "next/link";
import { ComfortableImage, EasyToStyleImage, EverydayWearImage, Sustainable } from '@/src/Assets';


const ChoseUs = () => {
    return (
        <section className='my-6'>
            <div className='flex flex-col gap-4 items-center justify-center container'>
                <div className='title '>
                    <h1>Why  <span>choose us?</span></h1>
                </div>
                <p className='text-center md:w-[70%]'>
                    Koburg's is bringing to life, fashion that is both stylish and responsible. With innovative planet-friendly materials and always-in-style trendy designs, we deliver access to a never-before-experienced comfort with our products while striking the right balance with your lifestyle quotient.
                </p>
            </div>

            <div
                className="flex flex-col mt-6 md:flex-row gap-5 justify-center justify-items-center items-center"
            >
                <div
                    className="bg-transparent text-center rounded-md duration-300 transform  hover:-translate-y-1.5"
                    style={{ width: "300px"}}
                >
                    <div>
                        <Image
                            alt={"name"}
                            src={ComfortableImage}
                            className="inline-flex items-center justify-center hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
                            width={80}
                            height={80}
                        />

                        <div className="text-[1.2rem] font-semibold tracking-wide cursor-pointer dark:text-black ">
                            COMFORTABLE
                        </div>
                    </div>
                </div>
                <div
                    className="bg-transparent text-center rounded-md duration-300 transform  hover:-translate-y-1.5"
                    style={{ width: "300px",  }}
                >
                    <div>
                        <Image
                            alt={"name"}
                            src={EasyToStyleImage}
                            className="inline-flex items-center justify-center hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
                            width={80}
                            height={80}
                        />

                        <div className="text-[1.2rem] font-semibold tracking-wide cursor-pointer dark:text-black ">
                            EASY-TO-STYLE
                        </div>
                    </div>
                </div>
                <div
                    className="bg-transparent text-center rounded-md duration-300 transform  hover:-translate-y-1.5"
                    style={{ width: "300px",   }}
                >
                    <div>
                        <Image
                            alt={"name"}
                            src={Sustainable}
                            className="inline-flex items-center justify-center hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
                            width={80}
                            height={80}
                        />

                        <div className="text-[1.2rem] font-semibold tracking-wide cursor-pointer dark:text-black ">
                            SUSTAINABLE
                        </div>
                    </div>
                </div>
                <div
                    className="bg-transparent text-center rounded-md duration-300 transform  hover:-translate-y-1.5"
                    style={{ width: "300px"  }}
                >
                    <div>
                        <Image
                            alt={"name"}
                            src={EverydayWearImage}
                            className="inline-flex items-center justify-center hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
                            width={80}
                            height={80}
                        />

                        <div className="text-[1.2rem] font-semibold tracking-wide cursor-pointer dark:text-black ">
                            EVERYDAY WEAR
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
    );
};

export default ChoseUs;