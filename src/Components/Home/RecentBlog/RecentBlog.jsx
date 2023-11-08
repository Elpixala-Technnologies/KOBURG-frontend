import { blogData } from '@/src/Utils/Mock/CommonData';
import React from 'react';

const RecentBlog = () => {
    return (
        <section className='my-6'>
            <div className="mx-auto max-w-screen-sm">
                <div className='title my-2'>
                <h1>New <span>Blogs</span></h1>
                </div>
                <p className="mb-8 font-light text-center text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi
                </p>
            </div>


            <div className="my-10 p-4">
                <div>
                    <div className=" grid gap-14 grid-cols-1 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
                        {blogData && blogData?.slice(0, 3)?.map((post) => {
                            return (
                                <div key={post.id}
                                >
                                    <div>
                                        <a href={post.id}>
                                            <img className="h-72 w-full object-cover rounded transition duration-200 ease-out transform hover:scale-105" src={post.images[0]} alt="" />
                                        </a>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-4">
                                        <time dateTime={post.datetime}>{post.date}</time>
                                    </p>
                                    <a href={post.href} className="mt-2 block">
                                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                        <p className="mt-3 text-base text-gray-500">{post.description}</p>
                                    </a>
                                    <div className="mt-3">
                                        <a href={post.href} className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                                            Read full story
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>

        </section>
    );
};

export default RecentBlog;