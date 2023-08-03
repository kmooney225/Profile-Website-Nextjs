import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faComputer } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
    const projects = [
      {
        url: "./3-d-tetromino.png",
        title: '3D Tetromino',
        hrefLive: 'https://simmer.io/@kmoney225/3d-tetromino',
        hrefCode: 'https://github.com/kmooney225/Tetromino3D',
        description: 'A 3D game remodeled after the origin game of Tetris. Made with C# using the Unity framework.'
      },
      {
        url: "./rpg-portfolio.png",
        title: 'RPG-Portfolio',
        hrefLive: 'https://63d1adbe7dae34135eb4da1f--soft-sprite-e8b283.netlify.app/',
        hrefCode: 'https://github.com/kmooney225/rpg-portfolio-site',
        description: 'This is a showcase of my work and interest in real life in the form of an RPG-styled game. I am making this with React.js and Tiled, a 2D scene editor.'
      },
      {
        url: "./music-player.png",
        title: 'Music Player',
        hrefLive: 'https://cool-mandazi-092c82.netlify.app/',
        hrefCode: 'https://github.com/kmooney225/Music-Player',
        description: 'A custom, modern music player. Developed using React.js and Sass.'
      }
    ];

    const [currentProject, setCurrentProject] = useState(0);

    return (
      <div className='w-full h-full p-4 sm:p-8 flex flex-col items-center justify-center bg-black text-white py-16'>
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
                Web Development Projects
            </h1>
            <Carousel 
                className='w-full mb-6 sm:mb-10' 
                showStatus={false} 
                showThumbs={false} 
                infiniteLoop 
                emulateTouch 
                autoPlay 
                stopOnHover
                swipeable
                onChange={index => setCurrentProject(index)}
            >
                {projects.map((project, index) => (
                    <div key={index} className='p-4 sm:p-8 rounded-md border-2 border-white bg-black overflow-hidden'>
                        <h2 className='mb-6 text-3xl text-center text-white'>{project.title}</h2>
                        <a href={project.hrefLive} target="_blank" rel="noopener noreferrer">
                            <img src={project.url} alt={project.title} className='block mx-auto bg-gray-300 rounded-md p-2 w-[16em]'/>
                        </a>
                        <p className='mt-4 text-md text-center text-white'>{project.description}</p>
                        <div className='flex justify-between mt-4'>
                            <a href={project.hrefLive} target="_blank" rel="noopener noreferrer" className='w-10 h-10 border-2 border-gray-200 rounded-md flex items-center justify-center'>
                                <FontAwesomeIcon icon={faComputer} />
                            </a>
                            <a href={project.hrefCode} target="_blank" rel="noopener noreferrer" className='w-10 h-10 border-2 border-gray-200 rounded-md flex items-center justify-center'>
                                <FontAwesomeIcon icon={faCode} />
                            </a>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
      </div>
    );
};

export default Portfolio;

