// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import useProducts from '@/src/Hooks/useProducts';
// import Link from 'next/link';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Swal from "sweetalert2";



// const OurProducts = () => {
//   const { productData } = useProducts();

//   const sliderRef = useRef(null);

//   const [activeCategory, setActiveCategory] = useState('FEATURED');

//   // Filter products based on the active category
//   const filteredProducts = productData?.filter(product => {
//     if (activeCategory === 'FEATURED') {
//       return product.status === 'Tranding';
//     } else if (activeCategory === 'LATEST') {
//       // You can define your own logic here based on the 'productData' structure
//       return product.status === 'New Arrivals'; // Modify this as needed
//     } else if (activeCategory === 'BESTSELLER') {
//       // You can define your own logic here based on the 'productData' structure
//       return product.status === 'Bestseller'; // Modify this as needed
//     }
//     return true; // Default to showing all products
//   });


//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration in milliseconds
//       once: true, // Only trigger the animation once
//     });
//   }, []);

//   return (
//     <section className='bg-[#F6F6F6] py-10 mt-[20px]'>
//       <div className='container'>
//         <div className='title text-center'>
//           <h1>OUR PRODUCTS</h1>
//         </div>

//         <div className='gelaryComponent'>
//           <div className="overflow-x-auto">
//             <div className="flex justify-center border-b border-gray-400 whitespace-nowrap ">
//               <button
//                 onClick={() => setActiveCategory('FEATURED')}
//                 className={`inline-flex font-extrabold items-center h-10 px-4 -mb-px text-sm text-center ${activeCategory === 'FEATURED' ? 'text-blue-600 border-b-2 border-blue-500' : ' border-transparent'
//                   } sm:text-base dark:border-blue-400 dark:text-gradient-to-r from-cyan-500 to-blue-500 whitespace-nowrap focus:outline-none`}
//               >
//                 FEATURED
//               </button>

//               <button
//                 onClick={() => setActiveCategory('LATEST')}
//                 className={`inline-flex font-extrabold items-center h-10 px-4 -mb-px text-sm text-center ${activeCategory === 'LATEST' ? 'text-blue-600 border-b-2 border-blue-500' : ' border-transparent'
//                   } sm:text-base dark:border-blue-400 dark:text-gradient-to-r from-cyan-500 to-blue-500 whitespace-nowrap focus:outline-none hover:border-gray-400`}
//               >
//                 TRENDING
//               </button>

//               <button
//                 onClick={() => setActiveCategory('BESTSELLER')}
//                 className={`inline-flex font-bold items-center h-10 px-4 -mb-px text-sm text-center ${activeCategory === 'BESTSELLER' ? 'text-blue-600 border-b-2 border-blue-500' : ' border-transparent'
//                   } sm:text-base dark:border-blue-400 dark:text-gradient-to-r from-cyan-500 to-blue-500 whitespace-nowrap focus:outline-none hover:border-gray-400`}
//               >
//                 BESTSELLER
//               </button>
//             </div>
//           </div>


//           {/* ======= Gallery Data ====== */}
//           <div className='photogalleryComponent py-4'>

//             <Swiper
//               ref={sliderRef}
//               modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//               breakpoints={{
//                 320: {
//                   slidesPerView: 1,
//                   spaceBetween: 20,
//                 },
//                 360: {
//                   slidesPerView: 1,
//                   spaceBetween: 20,
//                 },
//                 480: {
//                   slidesPerView: 1,
//                   spaceBetween: 20,
//                 },
//                 640: {
//                   slidesPerView: 1,
//                   spaceBetween: 20,
//                 },
//                 768: {
//                   slidesPerView: 2,
//                   spaceBetween: 30,
//                 },
//                 1024: {
//                   slidesPerView: 4,
//                   spaceBetween: 20,
//                 },
//               }}
//               spaceBetween={20}
//               slidesPerView={3}
//               onSlideChange={() => { }}
//               onSwiper={(swiper) => { }}
//               data-aos="fade-up"
//               data-aos-anchor-placement="center-bottom"
//             >
//               <div className="grid grid-cols-1 justify-center items-center  md:grid-cols-2  gap-4">
//                 {filteredProducts &&
//                   filteredProducts?.map((product) => {
//                     return (
//                       <SwiperSlide className="cursor-grab" key={product?._id}
//                       >
//                         <div className="group relative overflow-hidden">
//                           <div className="aspect-h-1 border aspect-w-1 w-full overflow-hidden rounded-t-md bg-transparent lg:aspect-none group-hover:opacity-75 h-80">
//                             <img
//                               src={product?.colors[0]?.images[0]}
//                               alt={product?.name}
//                               className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//                             />
//                           </div>
//                           <div className="aspect-h-1 border aspect-w-1 w-full overflow-hidden rounded-t-md bg-transparent lg:aspect-none group-hover:opacity-75 h-80 absolute top-0 left-0 opacity-0 transition duration-300"
//                           >
//                             <img
//                               src={product?.colors[0].images[1] || product?.images[0]}
//                               alt={product?.name}
//                               className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//                             />
//                           </div>

//                           <div className="flex p-2 flex-col border rounded-b-md">
//                             <div>
//                               <h3 className="text-[14px] mt-2 font-semibold text-gray-700 text-left">
//                                 <Link href={`/shop/${product?._id}`}>
//                                   <span aria-hidden="true" className="absolute inset-0" />
//                                   {product?.name}
//                                 </Link>
//                               </h3>
//                             </div>
//                             <div >
//                               <p className="text-[16px] text-gray-900 mt-1 text-left">
//                                 <span className='font-semibold'>
//                                   {product?.discount
//                                     ? `₹ ${Math.floor(product?.price - (product?.price * product?.discount) / 100)}`
//                                     : `₹ ${Math.floor(product?.price)}`
//                                   }
//                                 </span>
//                                 <span className="text-sm text-gray-300 line-through mx-2">
//                                   ₹ {Math.floor(product?.price)}
//                                 </span>
//                                 <span className='text-[#18568C] text-sm'>
//                                   {Math.floor(product?.discount)} % off
//                                 </span>
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </SwiperSlide>
//                     );
//                   })}
//               </div>
//             </Swiper>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default OurProducts;

const OurProducts = () => {
  return (
    <div>
      jhellop
    </div>
  )
}

export default OurProducts;