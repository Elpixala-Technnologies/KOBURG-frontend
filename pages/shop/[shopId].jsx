import RootLayout from '@/src/Layouts/RootLayout';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react';
import { BsCart } from 'react-icons/bs'
import {
    DelivaryIcons,
    MapIcons,
    PolicyIcons,
} from "@/src/Assets";
import { getSingelProductUrl } from '@/src/Utils/Urls/ProductUrl';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const ProductDetails = () => {
    const router = useRouter();
    const { shopId } = router?.query;
    const [singelProductData, setSingelProductData] = useState(null);
    useEffect(() => {
        const getSingelProduct = async () => {
            const response = await fetch(getSingelProductUrl(shopId));
            const data = await response.json();
            setSingelProductData(data?.data);
        }
        getSingelProduct();
    }, [])

    
    const { name, colors, features, description, additionalInfo, discount, price, myntralink, flipkartlink, amazonlink } = singelProductData || {};

    const [selectedSize, setSelectedSize] = useState(null);

    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    const [selectedColorData, setSelectedColorData] = useState(null);


    const [selectedColorImages, setSelectedColorImages] = useState([]);

    const [selectedImage, setSelectedImage] = useState(colors?.length > 0 && colors[0]?.images.length > 0 ? colors[0]?.images[0] : null);

    const handleColorClick = (index) => {
        const clickedColor = colors[index];
        setSelectedColorIndex(index);
        setSelectedColorData(clickedColor);

        if (clickedColor?.images) {
            setSelectedColorImages(clickedColor.images);
        }
    };


    useEffect(() => {
        if (colors && colors?.length > 0) {
            setSelectedColorIndex(colors[0] || 0);
            setSelectedColorData(colors[0] || {});
            setSelectedColorImages(colors[0]?.images || []);
        }
    }, [colors]);


    const sliderRef = useRef(null);

    if (!singelProductData) {
        return null; // or loading indicator
    }

    return (
        <RootLayout>
            <section className='container mt-10'>
                <section className="py-8">
                    <div className="mx-auto px-4">
                        <div className="lg:col-gap-12 xl:col-gap-16  grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">



                            <div className="lg:col-span-3 lg:row-end-1">
                                <div className="lg:flex gap-4 lg:items-start">
                                    <div className="lg:order-2 lg:ml-5">
                                        <div className="max-w-xl overflow-hidden rounded-lg">
                                            <Carousel
                                                // selectedItem={selectedColorImages.indexOf(selectedImage)}
                                                axis="vertical"
                                                selectedItem={0}
                                                verticalThumbs={true}
                                                showStatus={false}
                                            // remove dots
                                            >
                                                {selectedColorImages &&
                                                    selectedColorImages?.map((image, index) => (
                                                        <div key={index}>
                                                            <img
                                                                src={image}
                                                                alt={colors[selectedColorData]?.color}
                                                                width={100}
                                                                height={100}
                                                                className="cursor-pointer border p-4 rounded hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-130"
                                                                onClick={() => setSelectedImage(image)}
                                                            />
                                                        </div>
                                                    ))}
                                            </Carousel>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-4 lg:row-span-2 lg:row-end-2">
                                <h1 className="text-2xl font-semibold">
                                    {name}
                                </h1>
                                <div className='my-2'>
                                    <p className="text-[1.5rem] text-gray-900 font-semibold">
                                        <span className=''>
                                            {discount
                                                ? `₹ ${Math.floor(price - (price * discount) / 100)}`
                                                : `₹ ${Math.floor(price)}`
                                            }
                                        </span>
                                        <span className=" text-gray-300 line-through mx-4">
                                            ₹ {Math.floor(price)}
                                        </span>
                                        <span className='text-[#18568C] '>
                                            {Math.floor(discount)} % off
                                        </span>
                                    </p>
                                </div>


                                <div className='border p-2 rounded bg-[#E7F3EC]'>
                                    <h1 className='font-bold text-[1.2rem]'>Get this for as low as  <span className='text-[#29679e]'>Rs. {Math.round(price)}</span> </h1>
                                    <p>
                                        with these offers.
                                    </p>
                                </div>

                                <div className="mt-4 flex flex-col items-center  space-y-4 border-t border-b py-4  w-full">
                                    <Link href={flipkartlink || ''}
                                        className='w-full'
                                    >
                                        <button className="font-semibold hover:before:bg-blackborder-black relative h-[50px] w-full rounded overflow-hidden border border-black bg-white px-3 text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:shadow-white hover:before:left-0 hover:before:w-full">
                                            <span className="relative z-10 flex items-center gap-2 justify-center">
                                                <BsCart className='text-[1.2rem]' />  Buy From Flipkart
                                            </span>
                                        </button>
                                    </Link>
                                    <Link href={myntralink || ''} className='w-full'>
                                        <button className="font-semibold hover:before:bg-blackborder-black relative h-[50px] w-full rounded overflow-hidden border border-black bg-black px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-black hover:shadow-white hover:before:left-0 hover:before:w-full">
                                            <span className="relative z-10 flex items-center gap-2 justify-center">
                                                <BsCart className='text-[1.2rem]' /> Buy From Myntra
                                            </span>
                                        </button>

                                    </Link>
                                    <Link
                                        href={amazonlink || ''} className='w-full'>
                                        <button className="font-semibold hover:before:bg-blackborder-black relative h-[50px] w-full rounded overflow-hidden border border-black bg-white px-3 text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:shadow-white hover:before:left-0 hover:before:w-full">
                                            <span className="relative z-10 flex items-center gap-2 justify-center">
                                                <BsCart className='text-[1.2rem]' /> Buy From Amazon
                                            </span>
                                        </button>
                                    </Link>
                                </div>


                                <div className="mt-5">
                                    <h4 className="text-lg font-semibold capitalize">Available Colors</h4>
                                    <p className='my-2'>
                                        {selectedColorData?.color}
                                    </p>
                                    <div className="flex items-center gap-2 my-4">
                                        {colors && colors?.map((color, index) => {
                                            const isSelected = selectedColorIndex === index;
                                            return (
                                                <div key={index} className="flex flex-col justify-center gap-2">
                                                    <div
                                                        className={` p-1 rounded-full w-full h-full cursor-pointer hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 ${isSelected ? 'bg-opacity-100 ' : 'bg-opacity-50'}`}
                                                        title={color.color}
                                                        onClick={() => handleColorClick(index)}
                                                    >
                                                        <img
                                                            src={color?.images[0]}
                                                            alt={color.color}
                                                            width={100}
                                                            height={100}
                                                            className="cursor-pointer border p-4 rounded hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-130"
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>


                                <div>
                                    <h4 className="text-lg font-semibold capitalize">Available Sizes</h4>
                                    <div className="flex items-center gap-2 my-4">
                                        {
                                            selectedColorData ? (
                                                <div className='flex flex-wrap gap-4'>
                                                    {
                                                        selectedColorData?.sizes?.map((size, index) => {
                                                            return (
                                                                <div
                                                                    key={index + `size`}
                                                                    className={`cursor-pointer hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${selectedSize === size.size ? 'bg-[#ff5733] text-white' : 'bg-[#f1e8e8] text-black'} `}
                                                                >
                                                                    <p className='text-[1rem] text-center text-[#000] border-2 px-3 py-1 rounded'>
                                                                        {size?.size}
                                                                    </p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            ) : (
                                                <>
                                                    <p className='text-[0.9rem] text-center'>
                                                        Not applicable
                                                    </p>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>


                                <div className='border text-center p-2 mt-4 hidden md:flex flex-col md:flex-row items-center justify-center gap-4 rounded bg-[#E7F3EC]'>
                                    <div className='flex flex-col items-center justify-center gap-2'>
                                        <Image
                                            src={PolicyIcons}
                                            alt="policy"
                                            width={50}
                                            height={50}
                                            className='w-12 h-12 object-cover'
                                        />
                                        <h1 className='text-center font-semibold'>
                                            7 Days free exchange policy
                                        </h1>
                                    </div>
                                    <div className='flex flex-col items-center justify-center gap-2'>
                                        <Image
                                            src={MapIcons}
                                            alt="policy"
                                            width={50}
                                            height={50}
                                            className='w-12 h-12 object-cover'
                                        />
                                        <h1 className='text-center font-semibold'>
                                            Made in India with love
                                        </h1>
                                    </div>
                                    <div className='flex flex-col items-center justify-center gap-2'>
                                        <Image
                                            src={DelivaryIcons}
                                            alt="DelivaryIcons"
                                            width={50}
                                            height={50}
                                            className='w-12 h-12 object-cover'
                                        />
                                        <h1 className='text-center font-semibold'>
                                            Free delivery* within 4-5 days
                                        </h1>
                                    </div>
                                </div>

                                <div className='block md:hidden'>
                                    <Swiper
                                        ref={sliderRef}
                                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                        breakpoints={{
                                            320: {
                                                slidesPerView: 1,
                                                spaceBetween: 20,
                                            },
                                            640: {
                                                slidesPerView: 1,
                                                spaceBetween: 30,
                                            },
                                            768: {
                                                slidesPerView: 1,
                                                spaceBetween: 30,
                                            },
                                            1024: {
                                                slidesPerView: 4,
                                                spaceBetween: 30,
                                            },
                                        }}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        onSlideChange={() => { }}
                                        onSwiper={(swiper) => { }}
                                    >
                                        <div className="grid grid-cols-1 mb-4 justify-center items-center mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            <SwiperSlide className="cursor-grab rounded " >
                                                <div className='flex flex-col items-center justify-center gap-2'>
                                                    <Image
                                                        src={PolicyIcons}
                                                        alt="policy"
                                                        width={50}
                                                        height={50}
                                                        className='w-12 h-12 object-cover'
                                                    />
                                                    <h1 className='text-center font-semibold'>
                                                        7 Days free exchange policy
                                                    </h1>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="cursor-grab rounded " >
                                                <div className='flex flex-col items-center justify-center gap-2'>
                                                    <Image
                                                        src={MapIcons}
                                                        alt="policy"
                                                        width={50}
                                                        height={50}
                                                        className='w-12 h-12 object-cover'
                                                    />
                                                    <h1 className='text-center font-semibold'>
                                                        Made in India with love
                                                    </h1>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="cursor-grab rounded " >
                                                <div className='flex flex-col items-center justify-center gap-2'>
                                                    <Image
                                                        src={DelivaryIcons}
                                                        alt="DelivaryIcons"
                                                        width={50}
                                                        height={50}
                                                        className='w-12 h-12 object-cover'
                                                    />
                                                    <h1 className='text-center font-semibold'>
                                                        Free delivery* within 4-5 days
                                                    </h1>
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                    </Swiper>
                                </div>



                                <div>
                                    <h1 className="mt-8 text-3xl font-bold">
                                        Features
                                    </h1>
                                    <div className='flex flex-col my-2 gap-4'>

                                        {
                                            features?.map((fct, index) => {

                                                console.log(fct, 'features')
                                                return (
                                                    <div className='flex gap-2 flex-col'>
                                                        <h1 className='font-bold'> {index + 1}. {fct?.heading} :</h1>
                                                        <hr />
                                                        <h2>✅ {fct?.details}</h2>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>

                                <hr className='my-4' />
                                <ul className="mt-8 space-y-2">
                                    <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                        <svg
                                            className="mr-2 block h-5 w-5 align-middle text-gray-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                className=""
                                            />
                                        </svg>
                                        Free shipping worldwide
                                    </li>
                                    <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                        <svg
                                            className="mr-2 block h-5 w-5 align-middle text-gray-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                                className=""
                                            />
                                        </svg>
                                        Cancel Anytime
                                    </li>
                                </ul>

                            </div>
                            <div className="lg:col-span-3">
                                <div className="border-b border-gray-300">
                                    <nav className="flex gap-4">
                                        <a
                                            href="#"
                                            title=""
                                            className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
                                        >
                                            {" "}
                                            Description{" "}
                                        </a>

                                    </nav>
                                </div>
                                <div className="mt-8 flow-root sm:mt-12">
                                    <h1 className="text-3xl font-bold">Details</h1>
                                    <div className='flex flex-col my-2  gap-4'>

                                        {
                                            description && description?.map((dt) => {
                                                return (
                                                    <div className='flex  gap-2'>
                                                        <h1 className='font-bold'> ✅ {dt?.heading} :</h1>
                                                        <h2>{dt?.details}</h2>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                    <h1 className="mt-8 text-3xl font-bold">
                                        Additional Infomation
                                    </h1>
                                    <div className='flex flex-col my-2  gap-4'>

                                        {
                                            additionalInfo && additionalInfo?.map((adt) => {
                                                return (
                                                    <div className='flex  gap-2'>
                                                        <h1 className='font-bold'> ✅ {adt?.heading} :</h1>
                                                        <h2>{adt?.details}</h2>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>


        </RootLayout>
    )
};

export default ProductDetails;