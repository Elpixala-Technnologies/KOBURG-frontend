
import React, { Fragment, useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { AiOutlineSearch } from 'react-icons/ai';
import useProducts from '@/src/Hooks/useProducts';
import { colorData, priceData, sizeData } from '@/src/Utils/Mock/CommonData';
import Link from 'next/link';
import RootLayout from '@/src/Layouts/RootLayout';
import { AiFillAmazonSquare } from 'react-icons/ai';
import { SiFlipkart } from 'react-icons/si'
import Image from 'next/image';
import { HomeOfferBannerTow } from '@/src/Assets';



const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const ProductPage = () => {
  const { productData, categoryData } = useProducts();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(['All']);
  const itemsPerPage = 9;
  const [page, setPage] = useState(1);

  const start = (page - 1) * itemsPerPage;
  const end = page * itemsPerPage;
  const currentPageData = productData?.slice(start, end);

  const totalPages = Math.ceil((productData?.length || 0) / itemsPerPage);

  useEffect(() => {
    if (page > totalPages) {
      setPage(1);
    }
  }, [page, totalPages]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const toggleCategory = (category) => {
    if (selectedCategories?.includes(category)) {
      setSelectedCategories(selectedCategories?.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filters = {
    category: false,
    size: false,
    color: false,
    price: false,
  };


  // const [categoryfilterToggle, setCategoryFilterToggle] = useState(false);
  // const [sizeFilterToggle, setSizeFilterToggle] = useState(false)
  // const [colorFilterToggle, setColorFilterToggle] = useState(false)
  // const [priceFilterToggle, setPriceFilterToggle] = useState(false)

  // const handelCategoryFilter = ()=>{
  //   setCategoryFilterToggle(!categoryfilterToggle)
  //   setSizeFilterToggle(false)
  //     setColorFilterToggle(false)
  //     setPriceFilterToggle(false)
  // }

  // const handelSizeFilterToggle= ()=>{
  //   setSizeFilterToggle(!sizeFilterToggle)
  //   setCategoryFilterToggle(false)
  //   setColorFilterToggle(false)
  //   setPriceFilterToggle(false)
  // }

  // const handelColorFilterToggle = ()=>{
  //   setColorFilterToggle(!colorFilterToggle)
  //   setCategoryFilterToggle(false)
  //   sizeFilterToggle(false)
  //   setPriceFilterToggle(false)
  // }

  // const handelPriceFilterToggle = () =>{
  //   setPriceFilterToggle(!priceFilterToggle)
  //   setCategoryFilterToggle(false)
  //     sizeFilterToggle(false)
  //     setColorFilterToggle(false)
  // }


  const [activeFilter, setActiveFilter] = useState(null);

  const handleToggleFilter = (filter) => {
    if (activeFilter === filter) {
      setActiveFilter(null); // Close the currently active filter
    } else {
      setActiveFilter(filter); // Open the selected filter and close any previously active filter
    }
  };


  return (
    <RootLayout>
      <div>
        <Image
          src={HomeOfferBannerTow}
          alt='Product'
          width={250}
          height={1920}
          className='w-full h-full'
        />
      </div>
      <div className="container bg-[#fff]">
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <Disclosure as="div" className="border-b border-gray-200 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">Category</span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {categoryData && categoryData.length > 0 ? (
                                categoryData.map((category) => {
                                  return (
                                    <li
                                      key={category._id} // or key={category.slug} depending on your unique identifier
                                      className={`cursor-pointer ${selectedCategories.includes(category.name) ? 'text-[#18568C]' : ''}`}
                                      onClick={() => toggleCategory(category.name)}
                                    >
                                      <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(category.name)}
                                        readOnly
                                        className="mr-2"
                                      />
                                      {category.name}
                                    </li>
                                  )
                                })
                              ) : (
                                <div>Loading categories...</div>
                              )}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between  border-gray-200 pb-6 pt-10">
            <h1 className="md:text-4xl font-bold tracking-tight text-gray-900">All Products</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
 
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-10">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <div className="hidden lg:block">

                <div className="border-b border-gray-200 py-6">
                  <button onClick={() => handleToggleFilter('category')} className=" font-semibold">Category</button>

                  {activeFilter === 'category' && <>
                    <div className="space-y-4">
                      {categoryData && categoryData.length > 0 ? (
                        categoryData.map((category) => {
                          return (
                            <li
                              key={category._id}
                              className={`cursor-pointer mt-2 ${selectedCategories.includes(category.name) ? 'text-[#18568C]' : ''}`}
                              onClick={() => toggleCategory(category.name)}
                            >
                              <input
                                type="checkbox"
                                checked={selectedCategories.includes(category.name)}
                                readOnly
                                className="mr-2"
                              />
                              {category.name}
                            </li>
                          )
                        })
                      ) : (
                        <div>Loading categories...</div>
                      )}
                    </div>
                  </>}

                </div>

                <div className="border-b border-gray-200 py-6">
                  <button onClick={() => handleToggleFilter('size')} className="  font-semibold">Size  </button>
                  {activeFilter === 'size' && <>
                    <div className="space-y-4">
                      {sizeData && sizeData.length > 0 ? (
                        sizeData.map((size) => {
                          return (
                            <li
                              key={size.id}
                              className={`cursor-pointer mt-2 ${selectedCategories.includes(size.size) ? 'text-[#18568C]' : ''}`}
                              onClick={() => toggleCategory(size.size)}
                            >
                              <input
                                type="checkbox"
                                checked={selectedCategories.includes(size.size)}
                                readOnly
                                className="mr-2"
                              />
                              {size.size}
                            </li>
                          )
                        })
                      ) : (
                        <div>Loading Size...</div>
                      )}
                    </div>
                  </>}
                </div>

                <div className="border-b border-gray-200 py-6">
                  <button onClick={() => handleToggleFilter('color')} className=" font-semibold">Color</button>
                  {activeFilter === 'color' && <>
                    <div className="space-y-4">
                      {colorData && colorData.length > 0 ? (
                        colorData.map((color) => {
                          return (
                            <li
                              key={color.id}
                              className={`cursor-pointer mt-2 ${selectedCategories.includes(color.name) ? 'text-[#18568C]' : ''}`}
                              onClick={() => toggleCategory(color.name)}
                            >
                              <input
                                type="checkbox"
                                checked={selectedCategories.includes(color.name)}
                                readOnly
                                className="mr-2 checkbox-container"
                              />
                              {color.name}
                            </li>
                          )
                        })
                      ) : (
                        <div>Loading Color...</div>
                      )}
                    </div>

                  </>}

                </div>

                <div className="border-b border-gray-200 py-6">
                  <button onClick={() => handleToggleFilter('price')} className=" font-semibold">Price  </button>

                  {activeFilter === 'price' && <>
                    <div className="space-y-4">
                      {priceData && priceData.length > 0 ? (
                        priceData.map((price) => {
                          return (
                            <li
                              key={price.id}
                              className={`cursor-pointer mt-2 ${selectedCategories.includes(price.name) ? 'text-[#18568C]' : ''}`}
                              onClick={() => toggleCategory(price.name)}
                            >
                              <input
                                type="checkbox"
                                checked={selectedCategories.includes(price.name)}
                                readOnly
                                className="mr-2"
                              />
                              {price.name}
                            </li>
                          )
                        })
                      ) : (
                        <div>Loading Price...</div>
                      )}
                    </div>

                  </>}
                </div>
              </div>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <li className="flex items-center my-4 rounded-xl border border-[#999] relative  gap-2 w-full">
                  <input type="text" className='w-full p-2 rounded-xl text-black  border border-[#999]' placeholder='Search ...' />
                  <AiOutlineSearch className='text-black absolute right-5 text-[1.5rem]' />
                </li>
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                  <div className="lg:col-span-4">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                      {currentPageData && currentPageData?.map((product) => {
                        const { name, colors, _id, brand, amazonlink, flipkartlink, myntralink, price, discount } = product;
                        return (
                          <div
                            key={_id}
                            className="flex flex-col  w-full  border border-gray-100 bg-white shadow-md rounded-[1.4rem]"
                          >
                            <Link
                              className="relative  bg-[#e4eff0] p-2 border mx-3 mt-3 flex h-64 overflow-hidden rounded-[1rem]"
                              href={`/shop/${_id}`}
                            >
                              <img class="peer opacity-75 absolute top-0 right-0 h-full w-full object-cover" src={colors[0]?.images[0]} alt="product image" />
                              <img class="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" src={colors[0]?.images[1]} alt="product image" />
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
                      })}
                    </div>
                  </div>
                </div>

                <div>
                  {/* Pagination controls */}
                  <div className="flex justify-center mt-6">
                    <nav aria-label="Pagination" className="inline-flex -space-x-px rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-100">
                      <button
                        onClick={handlePrevPage}
                        disabled={page === 1}
                        className={`inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md dark:border-gray-700 ${page === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-indigo-600 hover:bg-indigo-50'
                          }`}
                      >
                        <span className="sr-only">Previous</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => (
                        <button
                          key={i}
                          onClick={() => setPage(i + 1)}
                          className={`inline-flex items-center px-4 py-2 text-sm font-semibold border dark:bg-violet-400 dark:text-gray-900 dark:border-gray-700 ${i + 1 === page ? 'dark:bg-violet-400 dark:text-gray-900' : ''
                            }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                      <button
                        onClick={handleNextPage}
                        disabled={page === totalPages}
                        className={`inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md dark:border-gray-700 ${page === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-indigo-600 hover:bg-indigo-50'
                          }`}
                      >
                        <span className="sr-only">Next</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </nav>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </main>
      </div>
    </RootLayout>
  )
}

export default ProductPage;
