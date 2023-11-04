import { PopularCategoryData } from '@/src/Utils/Mock/CommonData';
import Link from 'next/link';
import React from 'react';

const PopularCategory = () => {
  return (
    <section className='my-6'>
      <div className='title my-4'>
        <h1>Popular Categories</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PopularCategoryData?.map((category, index) => {
          const {
            color,
            shadow,
            ifExists,
            image,
            name,
            slug
          } = category;

          return (
            <div
              key={index}
              className={`relative ${color} ${shadow} grid items-center ${ifExists ? "justify-items-start" : "justify-items-center"
                } rounded-xl py-6 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
            >
              <div className='flex flex-col items-center'>
              <div className=''>
                <img
                  src={image}
                  alt={`img/${index}`}
                  className={`transitions-theme hover:-rotate-12 w-[14rem] ${ifExists ? "rounded-full" : "rounded-xl"
                    }`}
                />
              </div>
              <div
                className={`grid items-center ${ifExists ? "justify-items-start" : "justify-items-center"
                  }`}
              >
                <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
                  {name}
                </h1>
                <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
                  {slug.slice(0,80)+"..."}
                </p>
                <div className="flex items-center gap-3 my-2 ">
                  <Link
                    href="/shop"
                    className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
                  >
                   Visit Shop Now
                  </Link>
                </div>
              </div>
             
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PopularCategory;
