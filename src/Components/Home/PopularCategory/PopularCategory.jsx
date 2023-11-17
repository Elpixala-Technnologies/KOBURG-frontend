// import { PopularCategoryData } from '@/src/Utils/Mock/CommonData';
// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";


// const PopularCategory = () => {
//   const isMobile = () => {
//     if (typeof window !== 'undefined') {
//       return window.innerWidth <= 768;
//     }
//     return false;  
//   };


//   const sliderRef = useRef(null);
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration in milliseconds
//       easing: "ease-in-out", // Easing for the animation
//       once: true, // Only animate elements once
//     });
//   }, []);


//   return (
//     <section className='my-6'>
// <div className='title my-2'>
//   <h1>Shop By <span>Categories</span></h1>
// </div>

//       <div className='flex itmes-center justify-center'>
//         <Swiper
//           className='category-slider'
//           ref={sliderRef}
//           modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//           navigation={isMobile()}
//           breakpoints={{
//             320: {
//               slidesPerView: 1,
//               spaceBetween: 20,
//             },
//             360: {
//               slidesPerView: 1,
//               spaceBetween: 20,
//             },
//             480: {
//               slidesPerView: 1,
//               spaceBetween: 20,
//             },
//             640: {
//               slidesPerView: 1,
//               spaceBetween: 20,
//             },
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 30,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 30,
//             },
//           }}
//           spaceBetween={30}
//           slidesPerView={3}
//           onSlideChange={() => { }}
//           onSwiper={(swiper) => { }}
//         >


//           <div
//             className="flex flex-col md:flex-row gap-5 justify-between justify-items-center items-center"
//           >
//             {PopularCategoryData?.map((category, index) => {
//               const {
//                 image,
//                 name,
//               } = category;

//               return (
//                 <SwiperSlide className="cursor-grab rounded flex items-center justify-center " key={name + index}>
//                   <div
//                     className="bg-transparent text-center rounded-md duration-300 transform  hover:-translate-y-1.5"
//                     data-aos="fade-up"
//                     data-aos-duration="1000"

//                   >
//                     <Link href={`/category/${name}`}>
//                       <Image
//                         alt={name}
//                         src={image}
//                         className="popularCategoryImage inline-flex items-center justify-center hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
//                         width={300}
//                         height={300}
//                       />

//                       <h1 className="text-[1.2rem] mt-[1rem] font-semibold tracking-wide cursor-pointer dark:text-black ">
//                         {name}
//                       </h1>
//                     </Link>
//                   </div>
//                 </SwiperSlide>
//               );
//             })}
//           </div>
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default PopularCategory;
import React, { useCallback, useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";

const Category = () => {
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);


  const items = [
    {
      id: 1,
      name: "Sneakers",
      img: "https://res.cloudinary.com/elpixala/image/upload/v1700195767/koburg/Kuborg%20Banners/Category%20Banner/gnz7lvo5pgdtqwkmup4k.png",
    },
    {
      id: 2,
      name: "Sports Shoes",
      img: "https://res.cloudinary.com/elpixala/image/upload/v1700196063/koburg/Kuborg%20Banners/Category%20Banner/ezfprm3usycriq4abfec.png",
    },
    {
      id: 3,
      name: "Flip Flops",
      img: "https://res.cloudinary.com/elpixala/image/upload/v1700196065/koburg/Kuborg%20Banners/Category%20Banner/bwxmwlizmc16ctc6lx2p.png",
    }
  ];

  return (
    <div className="relative c-slider">
      <div className="flex flex-col items-center md:mb-[-4rem]  justify-center w-full">
        <div className='title'>
          <h1>Shop By <span>Categories</span></h1>
        </div>
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

      <div className="flex justify-center items-center">
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
          spaceBetween={40}
          slidesPerView={3}
          onSlideChange={() => { }}
          onSwiper={(swiper) => { }}

          className="mySwiperCategory flex justify-center items-center"
        >
          {items?.map((itm) => (
            <SwiperSlide className="flex justify-center items-center" key={itm?.id}>
              <Link href={`/category/${itm.name}`}
                className="flex justify-center items-center"
              >
                <div className="bg-white p-4">
                  <div className="">
                    <img
                      src={itm?.img}
                      alt=""
                      className="lg:h-[200px] md:h-[140px] w-full"
                    />
                  </div>
                  <h3 className="text-lg text-black text-center font-semibold mt-2">
                    {itm?.name}
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
  );
};

export default Category;