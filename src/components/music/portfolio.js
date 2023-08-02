import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from 'react-icons/fa';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background: #222;
  border-radius: 10px;
  overflow: hidden;

  & > div {
    height: 100%;
    width: 50%; // this value should be dynamically updated based on the progress
    background: #900;
  }
`;

const Portfolio = () => {
    const videos = [
      {url: "https://www.youtube.com/embed/ukYNf113pMg?start=140", title: 'Video 1'},
      {url: "https://www.youtube.com/embed/VXkUa66s_WA", title: 'Video 2'},
      {url: "https://www.youtube.com/embed/eBrZ_bs8Qik", title: 'Video 3'}
    ];

    const [currentVideo, setCurrentVideo] = useState(0);

    const videoIframes = videos.map((video, index) => (
        <div key={index} className='p-8'>
          <iframe
            className='w-full h-64'
            src={video.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share"
            allowFullScreen
          />
          <h2 className='mt-5 text-xl text-center'>{video.title}</h2>
        </div>
      ));
      

    return (
      <div className='w-full h-full p-8 flex items-center justify-center bg-black text-white'>
        <div className='flex flex-col items-center justify-center bg-gray-900 rounded-lg p-10 max-w-xl w-full h-full border-4 border-red-900'>
          <h1 className='text-5xl mb-10 font-sacramento text-red-500'>Music Demo</h1>
          <Carousel 
            className='w-full mb-10' 
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
          <ProgressBar><div></div></ProgressBar>
          <div className='flex justify-center items-center space-x-10 mt-4'>
            <button className='bg-red-700 p-3 rounded-full hover:bg-red-800 transition-all'>
              <FaStepBackward className='text-white text-2xl'/>
            </button>
            <button className='bg-red-700 p-3 rounded-full hover:bg-red-800 transition-all'>
              <FaPlay className='text-white text-2xl'/>
            </button>
            <button className='bg-red-700 p-3 rounded-full hover:bg-red-800 transition-all'>
              <FaPause className='text-white text-2xl'/>
            </button>
            <button className='bg-red-700 p-3 rounded-full hover:bg-red-800 transition-all'>
              <FaStepForward className='text-white text-2xl'/>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Portfolio;


