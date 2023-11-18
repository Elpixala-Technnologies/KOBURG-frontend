import { HomeOfferBannerOne } from '@/src/Assets';
import useProducts from '@/src/Hooks/useProducts';
import RootLayout from '@/src/Layouts/RootLayout';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCartPlus } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiFillAmazonSquare } from 'react-icons/ai';
import { SiFlipkart } from 'react-icons/si'

const category_product = () => {
  const { productData } = useProducts()
  const router = useRouter();
  const categoryName = router?.query?.index;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryName]);

  const filterProductData = productData?.filter((data) => {
    // Check if either 'mainCategories' or 'categories' includes the 'categoryName'
    return (
      data.categories === categoryName ||
      (data.categories && data.categories.includes(categoryName))
    );
  })

  const filterTrandingProductData = productData?.filter((data) => {
    return data?.status === "Available";
  });


  const [page, setPage] = useState(1);
  const productsPerPage = 8; // Number of products per page

  // Calculate total pages
  const totalPages = Math.ceil(filterTrandingProductData?.length / productsPerPage);

  // Calculate the index range for the current page
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // Filter products for the current page
  const productsToDisplay = filterTrandingProductData?.slice(startIndex, endIndex);

  // Function to handle previous page
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // Function to handle next page
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  // ========= pagination for category product =========

  const [categoriesPage, setCategoriesPage] = useState(1);
  const categoriesProductsPerPage = 8; // Number of products per page

  // Calculate total pages
  const categoriesTotalPages = Math.ceil(filterProductData?.length / categoriesProductsPerPage);

  // Calculate the index range for the current page
  const categoriesStartIndex = (categoriesPage - 1) * categoriesProductsPerPage;

  const categoriesEndIndex = categoriesStartIndex + categoriesProductsPerPage;

  // Filter products for the current page
  const categoriesProductsToDisplay = filterProductData?.slice(categoriesStartIndex, categoriesEndIndex);

  // Function to handle previous page

  const handlePrevCategoriesPage = () => {
    if (categoriesPage > 1) {
      setCategoriesPage(categoriesPage - 1);
    }
  }

  // Function to handle next page

  const handleNextCategoriesPage = () => {
    if (categoriesPage < categoriesTotalPages) {
      setCategoriesPage(categoriesPage + 1);
    }
  }

  // ========
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define your mobile breakpoint
    };

    handleResize(); // Check the initial screen width
    window.addEventListener("resize", handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Remove the event listener when the component unmounts
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing for the animation
      once: true, // Only trigger the animation once
    });
  }, []);

  return (
    <RootLayout>
      <div className="container">

        <Image
          src={isMobile ? HomeOfferBannerOne : HomeOfferBannerOne}
          alt="Banner Image"
          className="w-full h-full"
          width={isMobile ? 768 : 1920}
          height={isMobile ? 768 : 500}
        />
      </div>
      <section className="container px-4 " >
        <h3 className='font-semibold md:text-3xl text-lg my-[40px] text-center pt-30 '>Category {categoryName}</h3>
        <div className="grid grid-cols-1 mb-4 justify-center items-center mx-auto md:grid-cols-3 lg:grid-cols-4 gap-4">
          {
            categoriesProductsToDisplay && categoriesProductsToDisplay?.map((product) => {
              const { name, colors, _id, brand, amazonlink, flipkartlink, myntralink, price, discount } = product;
              return (
                <div
                  key={_id}
                  className="flex flex-col  md:w-full  border border-gray-100 bg-white shadow-md rounded-[1.4rem]"
                >
                  <Link
                    className=" mx-3 mt-3 flex  "
                    href={`/shop/${_id}`}
                  >
                    <div className="h-auto duration-300 w-full overflow-hidden relative h-menu border rounded-[1rem]">
                      <img
                        src={colors[0]?.images[0]}
                        alt=""
                        className="hover-img h-full w-full duration-200"
                      />
                      <img
                        src={colors[0]?.images[1]}
                        alt=""
                        className="absolute translate-y-[-100%] top-0 left-0 right-0 bottom-0 h-hover h-full w-full duration-300"
                      />
                    </div>
                  </Link>
                  <div className="mx-3 py-2">
                    <p className='text-gray-300'>{brand}</p>
                    <Link href={`/shop/${_id}`} className="text-[1.22rem] tracking-tight text-slate-900">
                      {name}
                    </Link>
                    <div class="flex items-center space-x-1">
                      <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <div className="mt-2 mb-2 flex justify-between items-center">
                      <p className="text-[1.2rem] font-bold  text-[#088178]">
                        Rs. {price}
                      </p>
                      <div className="flex items-center justify-end gap-4 ">
                        <Link href={myntralink || "/"}
                          className='border  bg-[#b3fffa2e] rounded-full p-2 text-[#2A9563] transition duration-300 ease-in-out hover:bg-[#088179bf] hover:text-white'
                        >
                          <img
                            className="opacity-75 w-[1.2rem] h-[1.2rem] myntraLink"
                            src={"https://res.cloudinary.com/elpixala/image/upload/v1699120849/koburg/Icons/market-icon/wvzagtbsxyxam6nbgv41.svg"}
                            alt={name}
                          />

                        </Link>
                        <Link href={flipkartlink || "/"}
                          className='border  bg-[#b3fffa2e] rounded-full p-2 text-[#2A9563] transition duration-300 ease-in-out hover:bg-[#088179bf] hover:text-white'
                        >
                          <SiFlipkart className='text-[1.4rem]' />
                        </Link>
                        <Link
                          href={amazonlink || "/"}
                          className='border  bg-[#b3fffa2e] rounded-full p-2 text-[#2A9563] transition duration-300 ease-in-out hover:bg-[#088179bf] hover:text-white'
                        >
                          <AiFillAmazonSquare className='text-[1.4rem]' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        {/* ====== pagination categories */}
        <div className={`items-center justify-center gap-4 mt-11 mb-16`} data-aos="fade-up" data-aos-delay="100">
          <div className="flex items-center justify-center text-gray-400 ">
            <button
              title="Previous"
              className={`h-14 w-14 rounded-full text-center ${categoriesPage === 1 ? "bg-gray-400 cursor-not-allowed" : "hover:bg-red-10"
                } text-white bg-black-10 border ${categoriesPage === 1 ? "bg-gray-400" : "bg-[#18568C]"
                } flex items-center justify-center`}
              onClick={handlePrevCategoriesPage}
              disabled={categoriesPage === 1}
            >
              <FaArrowLeft className="text-white" />
            </button>
            {Array.from({ length: categoriesTotalPages }).map((_, index) => (
              <button
                key={index}
                className={`h-14 w-14 hover:text-white rounded-full bg-[#18568C] ${categoriesPage === index + 1 ? "text-white bg-[#18568C]" : "bg-black-10"
                  } text-center hover:bg-red-10 text-white border`}
                onClick={() => setPage(index + 1)}
                disabled={categoriesPage === index + 1}
              >
                {index + 1}
              </button>
            ))}
            <button
              title="Next"
              className={`h-14 w-14 rounded-full text-center ${categoriesPage === categoriesTotalPages
                ? "bg-gray-400 cursor-not-allowed"
                : "hover:bg-red-10"
                } text-white bg-black-10  border ${categoriesPage === categoriesTotalPages ? "bg-gray-400" : "bg-[#18568C]"
                } flex items-center justify-center`}
              onClick={handleNextCategoriesPage}
              disabled={categoriesPage === categoriesTotalPages}
            >
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </div>

        <h3 className='font-semibold md:text-3xl text-lg my-8 text-center'>Trending Products</h3>
        <div className="grid grid-cols-1 mb-4 justify-center items-center mx-auto md:grid-cols-3 lg:grid-cols-4 gap-4">
          {
            productsToDisplay && productsToDisplay?.map(product => {
              const { name, colors, _id, brand, amazonlink, flipkartlink, myntralink, price, discount } = product;
              return (
                <div
                  key={_id}
                  className="flex flex-col  md:w-full  border border-gray-100 bg-white shadow-md rounded-[1.4rem]"
                >
                  <Link
                    className=" mx-3 mt-3 flex  "
                    href={`/shop/${_id}`}
                  >
                    <div className="h-auto duration-300 w-full overflow-hidden relative h-menu border rounded-[1rem]">
                      <img
                        src={colors[0]?.images[0]}
                        alt=""
                        className="hover-img h-full w-full duration-200"
                      />
                      <img
                        src={colors[0]?.images[1]}
                        alt=""
                        className="absolute translate-y-[-100%] top-0 left-0 right-0 bottom-0 h-hover h-full w-full duration-300"
                      />
                    </div>
                  </Link>
                  <div className="mx-3 py-2">
                    <p className='text-gray-300'>{brand}</p>
                    <Link href={`/shop/${_id}`} className="text-[1.22rem] tracking-tight text-slate-900">
                      {name}
                    </Link>
                    <div class="flex items-center space-x-1">
                      <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <div className="mt-2 mb-2 flex justify-between items-center">
                      <p className="text-[1.2rem] font-bold  text-[#088178]">
                        Rs. {price}
                      </p>
                      <div className="flex items-center justify-end gap-4 ">
                        <Link href={myntralink || "/"}
                          className='border  bg-[#b3fffa2e] rounded-full p-2 text-[#2A9563] transition duration-300 ease-in-out hover:bg-[#088179bf] hover:text-white'
                        >
                          <img
                            className="opacity-75 w-[1.2rem] h-[1.2rem] myntraLink"
                            src={"https://res.cloudinary.com/elpixala/image/upload/v1699120849/koburg/Icons/market-icon/wvzagtbsxyxam6nbgv41.svg"}
                            alt={name}
                          />

                        </Link>
                        <Link href={flipkartlink || "/"}
                          className='border  bg-[#b3fffa2e] rounded-full p-2 text-[#2A9563] transition duration-300 ease-in-out hover:bg-[#088179bf] hover:text-white'
                        >
                          <SiFlipkart className='text-[1.4rem]' />
                        </Link>
                        <Link
                          href={amazonlink || "/"}
                          className='border  bg-[#b3fffa2e] rounded-full p-2 text-[#2A9563] transition duration-300 ease-in-out hover:bg-[#088179bf] hover:text-white'
                        >
                          <AiFillAmazonSquare className='text-[1.4rem]' />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>


        {/* Pagination */}
        <div className={`items-center justify-center gap-4 mt-11 mb-16`}

        >
          <div className="flex items-center justify-center text-gray-400 ">
            <button
              title="Previous"
              className={`h-14 w-14 rounded-full text-center ${page === 1 ? "bg-gray-400 cursor-not-allowed" : "hover:bg-red-10"
                } text-white bg-black-10  border ${page === 1 ? "bg-gray-400" : "bg-[#18568C]"
                } flex items-center justify-center`}
              onClick={handlePrevPage}
              disabled={page === 1}
            >
              <FaArrowLeft className="text-white" />
            </button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`h-14 w-14 hover:text-white rounded-full bg-[#18568C] ${page === index + 1 ? "text-white bg-[#18568C]" : "bg-black-10"
                  } text-center hover:bg-red-10 text-white border`}
                onClick={() => setPage(index + 1)}
                disabled={page === index + 1}
              >
                {index + 1}
              </button>
            ))}
            <button
              title="Next"
              className={`h-14 w-14 rounded-full text-center ${page === totalPages
                ? "bg-gray-400 cursor-not-allowed"
                : "hover:bg-red-10"
                } text-white bg-black-10  border ${page === totalPages ? "bg-gray-400" : "bg-[#18568C]"
                } flex items-center justify-center`}
              onClick={handleNextPage}
              disabled={page === totalPages}
            >
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </div>
      </section>
    </RootLayout>
  );
};

export default category_product;