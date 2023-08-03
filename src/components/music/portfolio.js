import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(
    () => import('react-player/youtube'),
    { ssr: false }
);

const Portfolio = () => {
    const videos = [
        {url: "https://www.youtube.com/watch?v=ukYNf113pMg", title: 'Video 1'},
        {url: "https://www.youtube.com/watch?v=VXkUa66s_WA", title: 'Video 2'},
        {url: "https://www.youtube.com/watch?v=eBrZ_bs8Qik", title: 'Video 3'}
    ];

    const [currentVideo, setCurrentVideo] = useState(0);
    const [play, setPlay] = useState(Array(videos.length).fill(false));

    const videoPlayers = videos.map((video, index) => (
        <div key={index} className='p-4 sm:p-8 flex flex-col items-center justify-center bg-black border-2 border-white rounded-lg'>
            <div className='video-container'>
                <ReactPlayer 
                    url={video.url} 
                    playing={play[index]}
                    controls={true}
                    light={true}
                    width='100%'
                    height='100%'
                    className='rounded-lg'
                    onStart={() => {
                        const updatedPlayState = [...play];
                        updatedPlayState.fill(false);
                        updatedPlayState[index] = true;
                        setPlay(updatedPlayState);
                    }}
                />
            </div>
            <h2 className='mt-5 text-lg sm:text-xl text-center text-white'>{video.title}</h2>
        </div>
    ));

    return (
        <div className='w-full min-h-screen p-4 sm:p-8 flex flex-col items-center justify-center bg-black text-white py-16'>
            <div className='flex flex-col items-center justify-center bg-red-700 bg-opacity-60 rounded-lg p-6 sm:p-10 max-w-xl w-full h-full text-center'>
                <h1 className='text-3xl sm:text-5xl mb-6 sm:mb-10 font-sacramento text-white'>Music Demo</h1>
                <Carousel 
                    className='w-full mb-6 sm:mb-10' 
                    showStatus={false} 
                    showThumbs={false} 
                    infiniteLoop 
                    emulateTouch 
                    autoPlay 
                    stopOnHover
                    swipeable
                    onChange={(index) => {
                        setCurrentVideo(index);
                        const updatedPlayState = [...play];
                        updatedPlayState.fill(false);
                        setPlay(updatedPlayState);
                    }}
                >
                    {videoPlayers}
                </Carousel>
            </div>
            <div className='flex flex-col items-center justify-center mt-8'>
                <h3 className='text-3xl text-white mb-4'>
                    Interested? Contact me!
                </h3>
                <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
                    <Link href='/contact'>
                        Contact
                    </Link>
                </button>
            </div>  
        </div>
    );
};

export default Portfolio;
