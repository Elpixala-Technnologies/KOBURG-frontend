import Link from 'next/link';
import React, { useState } from 'react';

const Hero = () => {
    const [activeVideo, setActiveVideo] = useState('https://res.cloudinary.com/elpixala/video/upload/v1699079112/koburg/Vedio/lgnnw8s6ctjch2d7awyt.mp4');

    const videoBtns = [
        { src: 'https://res.cloudinary.com/elpixala/video/upload/v1699079112/koburg/Vedio/lgnnw8s6ctjch2d7awyt.mp4' },
        { src: 'https://res.cloudinary.com/elpixala/video/upload/v1698962974/koburg/Vedio/iuk1v0ln8vjyadjrprlb.mp4' },
        { src: 'https://res.cloudinary.com/elpixala/video/upload/v1698962953/koburg/Vedio/ulapswddllwj8r3nktbv.mp4' },
    ];

    const handleVideoChange = (src) => {
        setActiveVideo(src);
    };

    return (
        <section className="home" id="home">
            {/* <div className="content">
                <h3 className="text-[1.2rem] md:text-3xl text-white uppercase text-shadow my-4">
                    Explore More
                </h3>
                <p className="text-2xl text-white my-4">discover new collection with us</p>
                <Link href="/shop" className="commonBtn mt-6">Shop Now</Link>
            </div> */}

            <div className="controls">
                {videoBtns.map((btn, index) => (
                    <span
                        key={index}
                        className={`vid-btn ${activeVideo === btn.src ? 'active' : ''}`}
                        onClick={() => handleVideoChange(btn.src)}
                    ></span>
                ))}
            </div>

            <div className="video-container">
                <video src={activeVideo} id="video-slider" loop autoPlay ></video>
            </div>
        </section>
    );
};

export default Hero;