import React, { useCallback, useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";
import Link from "next/link";
import useProducts from "@/src/Hooks/useProducts";

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
        <section className="my-4 mx-2">
            <div className=" my-6 flex justify-between items-center">
                <div className='title my-2'>
                    <h1>Latest Drops  <span>Sneaker</span></h1>
                </div>
                <div className="flex  items-center gap-10 top-0">
                    <button
                        className="prev-arrow cursor-pointer p-3 rounded-full"
                        onClick={handlePrev}
                    >
                        <TbArrowBigLeft className="h-6 w-6 text-black" />
                    </button>
                    <button
                        className="next-arrow cursor-pointer  p-3 rounded-full"
                        onClick={handleNext}
                    >
                        <TbArrowBigRight className="h-6 w-6 text-black" />
                    </button>
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
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => { }}
                    onSwiper={(swiper) => { }}
                >
                    <div className="grid grid-cols-1 justify-center items-center mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {productData &&
                            productData?.map((product) => {

                                return (
                                    <SwiperSlide className="cursor-grab rounded" key={product._id}>
                                        <Link key={product?._id} href={`/shop/${product?._id}`} className="group">
                                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                                <img
                                                    src={product?.colors[0]?.images[0]}
                                                    alt={product?.name}
                                                    className="h-full w-full object-cover object-center opacity-75"
                                                />
                                            </div>
                                            <div className="text-left p-2">
                                                <h3 className="mt-4 font-semibold text-gray-700">{product?.name}</h3>
                                                <p className="mt-1 text-lg font-medium text-gray-900">Rs. {product?.price}</p>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                );
                            })}
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default LatestProduct;