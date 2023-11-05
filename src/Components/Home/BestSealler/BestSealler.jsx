import useProducts from '@/src/Hooks/useProducts';
import Link from 'next/link';
import React from 'react';

const BestSealler = () => {
    const { productData, } = useProducts()

    return (
        <section className='my-6'>
            <div className='title my-2'>
                <h1>Discover <span>Koburg</span> Top-Selling Product!</h1>
                <p className='my-2'>Unmatched Quality and Value for Your Everyday Needs</p>
            </div>
            <div className="grid  gap-5  md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 md:pt-5">
                {
                    productData && productData.slice(0, 4).map((product) => {
                        const { name, colors, _id, amazonlink, flipkartlink, myntralink, price, discount } = product;
                        return (
                            <div className="relative  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                                <Link
                                    className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                                    href={`/shop/${_id}`}
                                >
                                    <img
                                        className="object-cover"
                                        src={colors[0]?.images[0]}
                                        alt={name}
                                    />

                                </Link>
                                <div className="mt-4 px-5 pb-5">
                                    <Link href={`/shop/${_id}`}>
                                        <h5 className="text-xl tracking-tight text-slate-900">
                                            {name}
                                        </h5>
                                    </Link>
                                    <div className="mt-2 mb-5 flex items-center justify-between">
                                        <p>
                                            <span className="text-2xl font-bold text-slate-900 ">Rs. {price}</span>
                                            <span className="text-sm text-slate-900 line-through mx-2">Rs. {discount}</span>
                                        </p>
                                        {/* <div className="flex items-center">
                                            <svg
                                                aria-hidden="true"
                                                className="h-5 w-5 text-yellow-300"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg
                                                aria-hidden="true"
                                                className="h-5 w-5 text-yellow-300"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg
                                                aria-hidden="true"
                                                className="h-5 w-5 text-yellow-300"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg
                                                aria-hidden="true"
                                                className="h-5 w-5 text-yellow-300"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <svg
                                                aria-hidden="true"
                                                className="h-5 w-5 text-yellow-300"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                                                5.0
                                            </span>
                                        </div> */}
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

                        )
                    })
                }
            </div>
        </section>
    );
};

export default BestSealler;