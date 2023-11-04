// import { blogData } from "@/src/Utils/Mock/CommonData"
// import Link from 'next/link'

// const Blog = () => {


//   return (
//     <div className='my-14'>
//       <div className="bg-white py-10">
//         <div className="">
//           <div className='bg-[#F8F9FA] p-6'>
//             <div className="grid gap-4 md:grid-cols-3">
//               {
//                 blogData && blogData?.slice(0, 6)?.map((post) => {
//                   return (
//                     <div
//                       key={post.id}
//                       className="overflow-hidden relative"
//                     >
//                       <div>
//                         <img
//                           className="h-[14rem] w-full object-cover rounded"
//                           src={post.images[0]}
//                           alt={post.title}
//                         />
//                       </div>
//                       <div className='absolute top-10 left-4 right-0 bottom-2 py-2 px-4'
//                         style={{
//                           background: 'rgba(0,0,0,0.5)'

//                         }}
//                       >
//                         <h1
//                           className="text-[1.2rem] mt-4 font-semibold text-white"
//                         >
//                           {post.title}
//                         </h1>
//                         <p className="mt-2 text-white text-sm">
//                           {post.description.slice(0, 100)}
//                         </p>
//                         <div className='my-4'>
//                           <Link
//                             href={post.href}
//                             className=" text-base font-semibold text-white hover:text-gray-900"
//                           >
//                             Read full story
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   )
//                 })
//               }
//             </div>
//           </div>

//           <div className="my-10 p-4">
//             <div>
//               <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Recent Posts</h2>
//             </div>
//             <div>
//               <div className="mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 grid-cols-1 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
//                 {blogData && blogData?.map((post) => {
//                   return (
//                     <div key={post.id}>
//                       <div>
//                         <a href={post.id}>
//                           <img className="h-72 w-full object-cover rounded" src={post.images[0]} alt="" />
//                         </a>
//                       </div>
//                       <p className="text-sm text-gray-500 mt-4">
//                         <time dateTime={post.datetime}>{post.date}</time>
//                       </p>
//                       <a href={post.href} className="mt-2 block">
//                         <p className="text-xl font-semibold text-gray-900">{post.title}</p>
//                         <p className="mt-3 text-base text-gray-500">{post.description}</p>
//                       </a>
//                       <div className="mt-3">
//                         <a href={post.href} className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
//                           Read full story
//                         </a>
//                       </div>
//                     </div>
//                   )
//                 })
//                 }
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Blog

const Blog = ()=> {
    return(
        <div>
            hello
        </div>
    )

}

export default Blog