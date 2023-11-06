import {BlackBGLogo} from "@/src/Assets";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-[#000000]">
            <div className="pt-10 pb-10 px-4 mx-auto max-w-full md:max-w-full lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl md:px-24 lg:px-20 2xl:px-8 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 text-white text-center sm:text-start ">
                    <div className="col-span-2 ">
                        <Link href="/" className="">
                            <Image 
                            className="select-none pointer-events-none no-select unselectable" 
                            width={150}
                            height={150}    
                            src={BlackBGLogo} alt="" />
                        </Link>
                        <h4 className="text-white  text-[15px] mt-[.8rem] mb-[36px]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti facilis ratione aut minima fuga fugit nisi ea quos magni iure! Doloremque facere dolore tempora cupiditate. Sed cupiditate adipisci dignissimos dolores.
                        </h4>
                        <div className="flex justify-center lg:justify-start items-center gap-4 ">
                            <a target="_blank" href="www.facebook.com" className="rounded-full border-red-600 border border-dashed p-0.5">
                                <img className="w-12" src='https://www.svgrepo.com/show/452196/facebook-1.svg' alt="" />
                            </a>
                            <a target="_blank" href="www.facebook.com" className="rounded-full border border-dashed p-0.5">
                                <img className="w-12" src={'https://www.svgrepo.com/show/452231/instagram.svg'} alt="" />
                            </a>

                            <a target="_blank" href="www.facebook.com" className="rounded-full border border-dashed p-0.5">
                                <img className="w-12" src='https://www.svgrepo.com/show/354560/whatsapp.svg' alt="" />
                            </a>
                            <a target="_blank" href="www.facebook.com" className="rounded-full border border-dashed p-0.5">
                                <img className="w-12" src='https://www.svgrepo.com/show/452138/youtube.svg' alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="space-y-[30px]">
                        <div>
                            <h2 className="text-[18px] font-bold text-[#fff] mb-3">{"Quick link"}</h2>
                            <div className="flex flex-col gap-2 text-[15px]">

                                <p>
                                    <a href="/shop" target="_blank" rel="noopener noreferrer">
                                        {'Product'}
                                    </a>
                                </p>
                                <p>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        {'Blogs And Resources'}
                                    </a>
                                </p>
                                <p>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        {" About Us"}
                                    </a>
                                </p>
                               
                            </div>
                        </div>
                        <div>
                            <h2 className="text-[18px] font-bold text-[#fff] mb-3">{'Extras'}</h2>
                            <div className="flex flex-col gap-2 text-[15px]">
                                <p>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        {'Help & Support'}
                                    </a>
                                </p>
                                <p>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        {'Terms and Conditions'}
                                    </a>
                                </p>
                                <p>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        {'Privacy policy'}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 space-y-[60px]">
                        <div>
                            <h2 className="text-[18px] font-bold text-[#fff] mb-3">Contact information</h2>
                            <div className="flex flex-col gap-2 text-[15px]">
                                <p>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        Email: support@koburg.in
                                    </a>
                                </p>
                                <p>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        Address: GD ITL Tower, 305,306, Netaji Subhash Palace Pitampura 110034
                                    </a>
                                </p>
                               
                                <p>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        Cell: + 91- 99103 65713
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-[15px] font-bold text-[#fff] mb-3">
                                Subscribe to our newsletter 
                                <br/> 
                                Enter your email Subscribe 
                            </h2>
                            <form className="flex flex-col items-center w-full mb-4 md:flex-row ">
                                <input
                                    placeholder={"Enter your email"}
                                    required=""
                                    type="text"
                                    className="flex-grow bg-white w-full h-12 px-4 mb-3 transition duration-200 border-2 border-[#4f46e5] shadow-sm rounded-l-md appearance-none md:mb-0 focus:border-[#4f46e5] focus:outline-none focus:shadow-outline"
                                />
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition rounded-r-md duration-200 shadow-md md:w-auto bg-[#4f46e5] focus:shadow-outline focus:outline-none"
                                >
                                    {" Subscribe"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <hr className="bg-muted my-4"/>
                <div>
                    <p className="mt-8 lg:text-[14px] font-bold text-white">{"All Right researved by Koburg - 2023"}</p>
                </div>

            </div>
        </div>

    );
};

export default Footer;