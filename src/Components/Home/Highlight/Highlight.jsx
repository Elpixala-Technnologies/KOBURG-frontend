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


            <section className="py-12 sm:py-16">
  <div className="container mx-auto px-4">
    <nav className="flex">
      <ol role="list" className="flex items-center">
        <li className="text-left">
          <div className="-m-1">
            <a
              href="#"
              className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
            >
              {" "}
              Home{" "}
            </a>
          </div>
        </li>
        <li className="text-left">
          <div className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <div className="-m-1">
              <a
                href="#"
                className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
              >
                {" "}
                Products{" "}
              </a>
            </div>
          </div>
        </li>
        <li className="text-left">
          <div className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <div className="-m-1">
              <a
                href="#"
                className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                aria-current="page"
              >
                {" "}
                Coffee{" "}
              </a>
            </div>
          </div>
        </li>
      </ol>
    </nav>
    <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
      <div className="lg:col-span-3 lg:row-end-1">
        <div className="lg:flex lg:items-start">
          <div className="lg:order-2 lg:ml-5">
            <div className="max-w-xl overflow-hidden rounded-lg">
              <img
                className="h-full w-full max-w-full object-cover"
                src="/images/JHxMnVrtPMdcNU1s_7g7f.png"
                alt=""
              />
            </div>
          </div>
          <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
            <div className="flex flex-row items-start lg:flex-col">
              <button
                type="button"
                className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
              >
                <img
                  className="h-full w-full object-cover"
                  src="/images/JHxMnVrtPMdcNU1s_7g7f.png"
                  alt=""
                />
              </button>
              <button
                type="button"
                className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
              >
                <img
                  className="h-full w-full object-cover"
                  src="/images/JHxMnVrtPMdcNU1s_7g7f.png"
                  alt=""
                />
              </button>
              <button
                type="button"
                className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
              >
                <img
                  className="h-full w-full object-cover"
                  src="/images/JHxMnVrtPMdcNU1s_7g7f.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
        <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
          Afro-Brazillian Coffee
        </h1>
        <div className="mt-5 flex items-center">
          <div className="flex items-center">
            <svg
              className="block h-4 w-4 align-middle text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                className=""
              />
            </svg>
            <svg
              className="block h-4 w-4 align-middle text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                className=""
              />
            </svg>
            <svg
              className="block h-4 w-4 align-middle text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                className=""
              />
            </svg>
            <svg
              className="block h-4 w-4 align-middle text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                className=""
              />
            </svg>
            <svg
              className="block h-4 w-4 align-middle text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                className=""
              />
            </svg>
          </div>
          <p className="ml-2 text-sm font-medium text-gray-500">
            1,209 Reviews
          </p>
        </div>
        <h2 className="mt-8 text-base text-gray-900">Coffee Type</h2>
        <div className="mt-3 flex select-none flex-wrap items-center gap-1">
          <label className="">
            <input
              type="radio"
              name="type"
              defaultValue="Powder"
              className="peer sr-only"
              defaultChecked=""
            />
            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
              Powder
            </p>
          </label>
          <label className="">
            <input
              type="radio"
              name="type"
              defaultValue="Whole Bean"
              className="peer sr-only"
            />
            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
              Whole Bean
            </p>
          </label>
          <label className="">
            <input
              type="radio"
              name="type"
              defaultValue="Groud"
              className="peer sr-only"
            />
            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
              Groud
            </p>
          </label>
        </div>
        <h2 className="mt-8 text-base text-gray-900">Choose subscription</h2>
        <div className="mt-3 flex select-none flex-wrap items-center gap-1">
          <label className="">
            <input
              type="radio"
              name="subscription"
              defaultValue="4 Months"
              className="peer sr-only"
            />
            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
              4 Months
            </p>
            <span className="mt-1 block text-center text-xs">$80/mo</span>
          </label>
          <label className="">
            <input
              type="radio"
              name="subscription"
              defaultValue="8 Months"
              className="peer sr-only"
              defaultChecked=""
            />
            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
              8 Months
            </p>
            <span className="mt-1 block text-center text-xs">$60/mo</span>
          </label>
          <label className="">
            <input
              type="radio"
              name="subscription"
              defaultValue="12 Months"
              className="peer sr-only"
            />
            <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
              12 Months
            </p>
            <span className="mt-1 block text-center text-xs">$40/mo</span>
          </label>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
          <div className="flex items-end">
            <h1 className="text-3xl font-bold">$60.50</h1>
            <span className="text-base">/month</span>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 mr-3 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            Add to cart
          </button>
        </div>
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
            <a
              href="#"
              title=""
              className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
            >
              Reviews
              <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                {" "}
                1,209{" "}
              </span>
            </a>
          </nav>
        </div>
        <div className="mt-8 flow-root sm:mt-12">
          <h1 className="text-3xl font-bold">Delivered To Your Door</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            accusantium nesciunt fuga.
          </p>
          <h1 className="mt-8 text-3xl font-bold">
            From the Fine Farms of Brazil
          </h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            numquam enim facere.
          </p>
          <p className="mt-4">
            Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum
            nostrum eius facere, ad neque.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


        </section>
    );
};

export default Highlight;