import { useContext, useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link'
import 'swiper/css/pagination';
import Image from 'next/image';
import useProducts from '@/src/Hooks/useProducts';


const Highlight = () => {
    const { productData } = useProducts();

    const singelProductData = (productData && productData[0]) || {};

    const { name, colors, features, details, discount, price, myntralink, flipkartlink, amazonlink} = singelProductData || {};


    const [selectedSize, setSelectedSize] = useState(null);

    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    const [selectedColorData, setSelectedColorData] = useState(null);


    const [selectedColorImages, setSelectedColorImages] = useState([]);

    const [selectedImage, setSelectedImage] = useState(null); // State variable to store the selected image URL


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

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    // Return early if singelProductData is still null
    if (!singelProductData) {
        return null; // or loading indicator
    }


    return (
        <section className="my-4 mx-2">
            <div className='title my-2'>
                <h1>New <span>Launch</span></h1>
            </div>

            <section className='container mx-auto mt-10'>
                {/* <section className=" rounded">
                    <div className="mx-auto md:p-4">
                        <div className=" xl:col-gap-16  grid grid-cols-1 gap-6  lg:grid-cols-5">
                            <div className="lg:col-span-3 lg:row-end-1">
                                <div className="lg:flex gap-4 lg:items-start">
                                    <div className="lg:order-2 lg:ml-5">
                                        <div className="max-w-xl overflow-hidden rounded-lg border">
                                            {selectedImage ? (
                                                <img
                                                    src={selectedImage}
                                                    alt={name}
                                                    className="md:w-[80%] md:h-[80%] cursor-pointer hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-130"
                                                />
                                            ) : (
                                                colors && colors[0] && (
                                                    <img
                                                        src={colors[0]?.images[0]}
                                                        alt={colors[0]?.color}
                                                        className='md:w-[80%] md:h-[80%]'
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                                        
                                    <div className="flex flex-row items-start gap-4 lg:flex-col">
                                            {selectedColorImages &&
                                                selectedColorImages?.map((image, index) => {
                                                    return (
                                                        <div key={index} onClick={() => setSelectedImage(image)}>
                                                            <img
                                                                src={image}
                                                                alt={colors[selectedColorData]?.color}
                                                                width={100}
                                                                height={100}
                                                                className="cursor-pointer border p-4 rounded hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-130"
                                                            />
                                                        </div>
                                                    );
                                                })}
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
                                        <span className=" text-gray-400 line-through mx-4">
                                            ₹ {Math.floor(price)}
                                        </span>
                                        <span className='text-[#18568C] '>
                                            {Math.floor(discount)} % off
                                        </span>
                                    </p>
                                </div>
                                <h2 className="my-2">{details?.slice(0, 150)}</h2>
                                <div className="mt-5">
                                    <h4 className="text-lg font-semibold capitalize">Available Colors</h4>
                                    <p className='my-2'>
                                        {selectedColorData?.color}
                                    </p>
                                    <div className="flex items-center gap-2 my-4">

                                        {colors && colors?.map((color, index) => {
                                            const availableColor = color.color.toLowerCase();
                                            const isSelected = selectedColorIndex === index;

                                            return (
                                                <div key={index} className="flex flex-col justify-center gap-2">
                                                    <div
                                                        className={`bg-[#f1e8e8] p-1 rounded-full w-[2rem] h-[2rem] cursor-pointer hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 ${isSelected ? 'bg-opacity-100 ' : 'bg-opacity-50'
                                                            }`}
                                                        style={{
                                                            backgroundColor: availableColor,
                                                            border: isSelected ? '4px solid #ff5733' : '2px solid #3aa1b8',
                                                        }}
                                                        title={color.color}
                                                        onClick={() => handleColorClick(index)}
                                                    ></div>
                                                </div>
                                            );
                                        })}

                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold capitalize">Available Sizes</h4>
                                    <div className="flex items-center gap-2 my-4">
                                        {
                                            selectedColorData?.isSizeApplicable ? (
                                                <div className='flex flex-wrap gap-4'>
                                                    {
                                                        selectedColorData?.sizes.map((size, index) => {
                                                            return (
                                                                <div
                                                                    key={index + `size`}
                                                                    onClick={() => handleSizeClick(size.size)}
                                                                    className={`cursor-pointer hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${selectedSize === size.size ? 'bg-[#ff5733] text-white' : 'bg-[#f1e8e8] text-black'} `}
                                                                >
                                                                    <p className='text-[0.9rem] text-center border-2 px-3 py-1 rounded'>
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
                                <div className="ml-auto flex items-center  gap-4">
                                        <Link href={flipkartlink || "/"}>
                                            <img
                                                src='https://res.cloudinary.com/elpixala/image/upload/v1699120849/koburg/Icons/market-icon/cvultenxrqp5xrypwqc0.svg'
                                                alt={name}
                                                className="w-[4rem]"
                                            />
                                        </Link>
                                        <Link href={amazonlink || "/"}>
                                            <img
                                                src='https://res.cloudinary.com/elpixala/image/upload/v1699120849/koburg/Icons/market-icon/ljs07vly3xuwpocwpc7y.svg'
                                                alt={name}
                                                className="w-[2rem]"
                                            />
                                        </Link>
                                        <Link href={myntralink || "/"}>
                                            <img
                                                src='https://res.cloudinary.com/elpixala/image/upload/v1699120849/koburg/Icons/market-icon/wvzagtbsxyxam6nbgv41.svg'
                                                alt={name}
                                                className="w-[2rem]"
                                            />
                                        </Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* <div className='flex flex-col md:flex-row justify-between itmes-center'>
                    <div className='slide-image'>
                    
                    </div>
                    <div className='main-image'>

                    </div>
                    <div className='content'>

                    </div>
                </div> */}
            </section>



        </section>
    );
};

export default Highlight;