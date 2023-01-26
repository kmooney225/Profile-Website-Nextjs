import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode,
        faComputer
} from '@fortawesome/free-solid-svg-icons'
import { faGithub
        } from '@fortawesome/free-brands-svg-icons';


const Portfolio = () =>{

    return(
        <div className='flex items-center justify-center h-auto bg-black z-[2] object-cover bg-fixed bg-center bg-cover'>
        <div className='p-5 mt-32 text-white z-[2]'>
            <h1 className='flex items-center justify-center text-7xl font-sacramento'>
                Case Studies
            </h1>
            <p className='flex items-center justify-center text-3xl'>tba</p>

            <h1 className='flex items-center justify-center mt-32 p-6 text-7xl font-sacramento'>
                Extraneous Projects
            </h1>

            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='h-[32em]  relative p-3 m-2 rounded-md bg-transparent border-4 border-gray-200 text-white md:w-[33%]'>
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
                            <FontAwesomeIcon className='text-white' icon={faCode} />
                        </a>
                    </div>
                </div>

                    <div className='h-[32em]  relative p-3 m-2 rounded-md bg-transparent border-4 border-gray-200 text-white md:w-[33%]'>
                        <h2 className='flex items-center justify-center mb-6 text-3xl font-sacramento'>
                            3D Tetromino
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
                                <FontAwesomeIcon className='text-white' icon={faCode} />
                            </a>
                        </div>
                    </div>
            
                <div className='h-[32em] relative items-center justify-center p-3 m-2 rounded-md bg-transparent border-4 border-gray-200 text-white md:w-[33%]'>
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
                            <FontAwesomeIcon className='text-white' icon={faCode} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Portfolio;