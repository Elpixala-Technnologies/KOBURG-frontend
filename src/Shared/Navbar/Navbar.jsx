import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import { mainLogo, NavLogo } from "@/src/Assets";
import { FaFacebook, FaInstagram } from 'react-icons/fa';


import { Fragment, useState } from 'react'
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = {
  categories: [
    {
      id: 'Sneakers',
      name: 'Sneakers',
      featured: [
        {
          name: 'SunBe',
          href: '/shop/654e55a34508d30dfb6fb943',
          imageSrc: 'https://res.cloudinary.com/elpixala/image/upload/w_500/q_auto/f_auto/v1699252407/BookShop/n5lpvdcgce2iodgj8pai.jpg',
          imageSrcHover: "https://res.cloudinary.com/elpixala/image/upload/w_500/q_auto/f_auto/v1699252406/BookShop/y0iyxlkctvrjpvnonraf.jpg",
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          price: 699
        },
        {
          name: 'Lappy',
          href: '/shop/654e55a34508d30dfb6fb944',
          imageSrc: "https://res.cloudinary.com/elpixala/image/upload/w_500/q_auto/f_auto/v1699253928/qqjpi10qaxclvpmgizw2.jpg",
          imageSrcHover: "https://res.cloudinary.com/elpixala/image/upload/w_500/q_auto/f_auto/v1699253930/qqfgpauifmz2havynain.jpg",
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          price: 699
        },
        {
          name: 'Velo',
          href: '/shop/654e55a34508d30dfb6fb945',
          imageSrc: "https://res.cloudinary.com/elpixala/image/upload/w_500/q_auto/f_auto/v1699255324/ehxzpppe3eiripz4g7kx.jpg",
          imageSrcHover: "https://res.cloudinary.com/elpixala/image/upload/w_500/q_auto/f_auto/v1699255323/xxcvuqblwn0o4ojvorxo.jpg",
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          price: 699
        },
      ],
      sections: [
        {
          id: 'Trending',
          name: 'Trending',
          items: [

            { name: 'Agilite', href: '/shop/654e55a34508d30dfb6fb946' },
            { name: 'Solenox', href: '/shop/654e55a34508d30dfb6fb947' },
            { name: 'Aerozest', href: '/shop/654e55a34508d30dfb6fb948' },
          ],
        },
        {
          id: 'New Arrival',
          name: 'New Arrival',
          items: [
            { name: 'Ray', href: '/shop/654e55a34508d30dfb6fb94c' },
            { name: 'Krete', href: '/shop/654e55a34508d30dfb6fb94d' },
          ],
        },
        {
          id: 'Popular Products',
          name: 'Popular',
          items: [

            { name: 'Luna', href: '/shop/654e55a34508d30dfb6fb949' },
            { name: 'Daper', href: '/shop/654e55a34508d30dfb6fb94a' },
          ],
        },
      ],
    },

  ],
  pages: [
    { name: 'Flip Flops', href: '/category/Flip Flops' },
    { name: 'Sports Shoes', href: '/category/Sports Shoes' },
    { name: 'All Products', href: '/shop' }
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Navbar = () => {
  const [open, setOpen] = useState(false)
  // State to track hover status of each category
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Handle mouse entering a category
  const handleMouseEnter = (categoryName) => {
    setHoveredCategory(categoryName);
  };

  // Handle mouse leaving a category
  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };


  return (

    <div className='bg-white sticky top-0 z-50 mx-auto h-full'
    >
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
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
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                        <div className="grid grid-cols-2 gap-x-4"
                        >
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative text-sm">
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                              </div>
                              <Link href={item.href} className="mt-6 block font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {item.name}
                              </Link>

                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <Link href={item?.href} className="-m-2 block p-2 text-gray-500">
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://res.cloudinary.com/elpixala/image/upload/v1698970076/koburg/Icons/uamqwt9m45v7lkkqsusj.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">IND</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white"
        style={{
          zIndex: "9999999"
        }}
      >
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between mainNav">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Image
                    width={100}
                    height={100}
                    src={NavLogo}
                    alt=""
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-[18rem] lg:block ">
                <div className="flex h-full space-x-8"
                  style={{
                    zIndex: "9999999"
                  }}
                >
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex" onMouseLeave={handleMouseLeave}>
                      {({ open }) => (
                        <>
                          <div className="relative flex"
                            style={{
                              zIndex: "9999999"
                            }}
                          >
                            <Popover.Button
                              onMouseEnter={() => handleMouseEnter(category.name)}
                              className={classNames(
                                hoveredCategory === category.name
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-6">
                                    <div className="col-start-2 grid grid-cols-3 gap-x-8">
                                      {category.featured.map((item) => (
                                        <Link href={item?.href} key={item.name} className="group relative text-base border rounded p-4">
                                          {/* <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 border">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center w-full"
                                            />
                                          </div> */}
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 border">
                                            <div className='h-full duration-300 w-full overflow-hidden relative h-menu border'>
                                              <img
                                                src={item.imageSrc}
                                                alt=""
                                                className="hover-img h-full w-full duration-200"
                                              />
                                              <img
                                                src={item.imageSrcHover}
                                                alt=""
                                                className="absolute translate-y-[-100%] top-0 left-0 right-0 bottom-0 h-hover h-full w-full duration-300"
                                              />
                                            </div>
                                          </div>



                                          <Link href="/shop" className="my-2 block font-medium text-gray-900">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            {item.name}
                                          </Link>
                                          <p className=" block text-gray-900">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            Rs. {item.price}
                                          </p>

                                        </Link>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="font-bold text-[1.4rem] text-gray-900">
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <Link href={item.href} className="hover:text-gray-800">
                                                  <p className="font-bold  relative w-max one">
                                                    <span>
                                                      {item.name}
                                                    </span>
                                                    <span className="absolute -bottom-1 left-0 w-0 transition-all h-[2px] bg-black"></span>
                                                  </p>
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link href="https://m.facebook.com/marketing.virajent/" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    <FaFacebook className="text-[1.4rem]" />
                  </Link>
                  <Link href="https://www.instagram.com/thekoburg/" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    <FaInstagram className="text-[1.4rem]" />
                  </Link>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      src="https://res.cloudinary.com/elpixala/image/upload/v1698970076/koburg/Icons/uamqwt9m45v7lkkqsusj.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">IND</span>
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;