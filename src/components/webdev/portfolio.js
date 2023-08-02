import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faComputer } from '@fortawesome/free-solid-svg-icons';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const Portfolio = () => {
  return (
    <div className='flex items-center justify-center h-auto bg-black z-[2] object-cover bg-fixed bg-center bg-cover w-full'>
      <div className='p-5 mt-32 text-white z-[2] w-full'>
        <h1 className='flex items-center justify-center text-7xl font-sacramento'>
          Case Studies
        </h1>
        <p className='flex items-center justify-center text-3xl'>tba</p>

        <h1 className='flex items-center justify-center mt-32 p-6 text-7xl font-sacramento'>
          Extraneous Projects
        </h1>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          containerClass="carousel-container mx-auto"
          className='w-full'
        >
          {/* Project 1 */}
          <div className='h-[32em] relative p-3 m-2 mx-auto rounded-md bg-transparent border-4 border-gray-200 text-white md:w-[70%] w-full'>
            <h2 className='flex items-center justify-center mb-6 text-3xl font-sacramento'>
                3D Tetromino
            </h2>
            <img 
                src={"./3-d-tetromino.png"} 
                alt="Tetromino" 
                className='block mt-4 mr-auto ml-auto bg-gray-300 rounded-md p-2 w-[16em]'
            />
            <p className='text-md m-4'>
                A 3D game remodeled after the origin game of Tetris. Made with C# using the 
                Unity framework.
            </p>

            <div className='absolute bottom-2 left-2 h-10 md:h-10 rounded-md border-2 border-gray-200 text-white w-10'>
                <a href='https://simmer.io/@kmoney225/3d-tetromino'>
                    <FontAwesomeIcon className='flex items-center justify-content' icon={faComputer} />
                </a>
            </div>
            <div className='absolute bottom-2 right-2 h-10 md:h-10 rounded-md border-2 border-gray-200 text-white w-10'>
                <a href='https://github.com/kmooney225/Tetromino3D'>
                    <FontAwesomeIcon icon={faCode} />
                </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className='h-[32em] relative p-3 m-2 mx-auto rounded-md bg-transparent border-4 border-gray-200 text-white md:w-[70%] w-full'>
            <h2 className='flex items-center justify-center mb-6 text-3xl font-sacramento'>
                        RPG-Portfolio
            </h2>
            <img 
                src={"./rpg-portfolio.png"} 
                alt="Tetromino" 
                className='block mt-4 mr-auto ml-auto bg-gray-300 rounded-md p-2 w-[16em]'
            />
            <p className='text-md m-4'>
            This is a showcase of my work and interest in real life in the form of an RPG-styled game. I am making this with 
            React.js and Tiled, a 2D scene editor.
            </p>

            <div className='absolute bottom-2 left-2 h-10 md:h-10 rounded-md border-2 border-gray-200 text-white w-10'>
                <a href='https://63d1adbe7dae34135eb4da1f--soft-sprite-e8b283.netlify.app/'>
                    <FontAwesomeIcon className='flex items-center justify-content' icon={faComputer} />
                </a>
            </div>
            <div className='absolute bottom-2 right-2 h-10 md:h-10 rounded-md border-2 border-gray-200 text-white w-10'>
                <a href='https://github.com/kmooney225/rpg-portfolio-site'>
                    <FontAwesomeIcon icon={faCode} />
                </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className='h-[32em] relative items-center justify-center p-3 m-2 mx-auto rounded-md bg-transparent border-4 border-gray-200 text-white md:w-[70%] w-full'>
          <h2 className='flex items-center justify-center mb-6 text-3xl font-sacramento'>
                    Music Player
          </h2>
          <img 
              src={"./music-player.png"} 
              alt="Handshake" 
              className='mr-auto ml-auto mt-4 bg-gray-300 rounded-md p-2 w-[20em]'
          />
          <p className='text-md m-4'>
              A custom, modern music player. Developed using React.js and Sass.
          </p>
          <div className='absolute bottom-2 left-2 h-10 rounded-md border-2 border-gray-200 text-white w-10'>
              <a href='https://cool-mandazi-092c82.netlify.app/'>
                  <FontAwesomeIcon className='flex items-center justify-content' icon={faComputer} />
              </a>
          </div>
          <div className='absolute bottom-2 right-2 h-10 rounded-md border-2 border-gray-200 text-white w-10'>
              <a href='https://github.com/kmooney225/Music-Player'>
                  <FontAwesomeIcon icon={faCode} />
              </a>
          </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Portfolio;

