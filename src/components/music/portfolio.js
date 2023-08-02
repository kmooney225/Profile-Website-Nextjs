import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link';

const Portfolio = () => {
    const videos = [
      {url: "https://www.youtube.com/embed/ukYNf113pMg?start=140", title: 'Video 1'},
      {url: "https://www.youtube.com/embed/VXkUa66s_WA", title: 'Video 2'},
      {url: "https://www.youtube.com/embed/eBrZ_bs8Qik", title: 'Video 3'}
    ];

    const [currentVideo, setCurrentVideo] = useState(0);

    const videoIframes = videos.map((video, index) => (
        <div key={index} className='p-4 sm:p-8'>
          <iframe
            className='w-full h-64 sm:h-auto aspect-w-16 aspect-h-9'
            src={video.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share"
            allowFullScreen
          />
          <h2 className='mt-5 text-lg sm:text-xl text-center'>{video.title}</h2>
        </div>
      ));
      

    return (
      <div className='w-full h-full p-4 sm:p-8 flex flex-col items-center justify-center bg-black text-white py-16'>
        <div className='flex flex-col items-center justify-center bg-gray-900 rounded-lg p-6 sm:p-10 max-w-xl w-full h-full border-4 border-red-700'>
          <h1 className='text-3xl sm:text-5xl mb-6 sm:mb-10 font-sacramento text-red-700'>Music Demo</h1>
          <Carousel 
            className='w-full mb-6 sm:mb-10' 
            showStatus={false} 
            showThumbs={false} 
            infiniteLoop 
            emulateTouch 
            autoPlay 
            stopOnHover
            swipeable
            onChange={(index) => setCurrentVideo(index)}
          >
            {videoIframes}
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
