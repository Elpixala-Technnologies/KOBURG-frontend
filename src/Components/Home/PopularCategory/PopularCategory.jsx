import { PopularCategoryData } from '@/src/Utils/Mock/CommonData';
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";


const PopularCategory = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing for the animation
      once: true, // Only animate elements once
    });
  }, []);


  return (
    <section className='my-6'>
      <div className='title my-2'>
        <h1>Shop By <span>Categories</span></h1>
      </div>

      <div
        className="grid grid-cols-2 gap-5 justify-center justify-items-center items-center xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-5"
      >
        {PopularCategoryData?.map((category, index) => {
          const {
            image,
            name,
          } = category;

          return (
            <div
              className="bg-transparent p-2 text-center rounded-md duration-300 transform  hover:-translate-y-1.5"
              data-aos="fade-up"
              data-aos-duration="1000"
              key={name + index}
            >
              <Link href={`/category/${name}`}>
                <Image
                  alt={name}
                  src={image}
                  className="inline-flex items-center justify-center hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
                  width={150}
                  height={150}
                />

                <div className="text-sm font-semibold tracking-wide cursor-pointer dark:text-black ">
                  {name}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PopularCategory;
