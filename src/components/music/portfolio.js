import React, { useState, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link';
import ReactPlayer from 'react-player/youtube';

const Portfolio = () => {
    const videos = [
        { url: "https://www.youtube.com/watch?v=ukYNf113pMg", title: 'Video 1' },
        { url: "https://www.youtube.com/watch?v=VXkUa66s_WA", title: 'Video 2' },
        { url: "https://www.youtube.com/watch?v=eBrZ_bs8Qik", title: 'Video 3' }
    ];

    const [currentVideo, setCurrentVideo] = useState(0);
    const playerRefs = videos.map(() => useRef(null));

    const videoPlayers = videos.map((video, index) => (
        <div key={index} className='p-4 sm:p-8 rounded-md border-2 border-white bg-black overflow-hidden'>
            <ReactPlayer
                ref={playerRefs[index]}
                url={video.url}
                width="100%"
                height="100%"
                playing={false} // this prop controls whether the video is playing
                controls={true}
            />
            <h2 className='mt-5 text-lg sm:text-xl text-center text-white'>{video.title}</h2>
        </div>
    ));

    const handleVideoChange = (index) => {
        setCurrentVideo(index);
    };

    return (
        <div className='w-full h-screen p-4 sm:p-8 flex flex-col items-center justify-center bg-black text-white py-16'>
            <div
                className='flex flex-col items-center justify-center rounded-lg p-6 sm:p-10 max-w-xl w-full h-full shadow-2xl'
                style={{
                    background: 'linear-gradient(to right, rgba(220, 38, 38, 0.6), rgba(236, 64, 122, 0.6))',
                }}
            >
                <h1
                    className='text-3xl sm:text-5xl mb-6 sm:mb-10 font-sacramento'
                    style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                >
                    Music Demo
                </h1>
                <Carousel
                    className='w-full mb-6 sm:mb-10'
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop
                    emulateTouch
                    autoPlay={false} // this prop controls whether the Carousel auto-plays
                    stopOnHover
                    swipeable
                    onChange={handleVideoChange}
                >
                    {videoPlayers}
                </Carousel>
            </div>
            <div className='flex flex-col items-center justify-center mt-8'>
                <h3 className='text-3xl text-white mb-4'>
                    Interested? Contact me!
                </h3>

                <button
                    className="text-white font-bold py-2 px-4 rounded"
                    style={{ background: 'linear-gradient(to right, rgba(220, 38, 38, 1), rgba(236, 64, 122, 1))' }}
                >
                    <Link href='/contact'>
                        Contact
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Portfolio;
