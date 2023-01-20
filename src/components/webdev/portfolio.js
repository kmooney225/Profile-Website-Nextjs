import React from 'react';
import Link from 'next/link';
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
                <div className='h-56 md:h-96 relative p-3 m-2 rounded-md bg-transparent border-4 border-gray-200 text-white md:w-[30%]'>
                    <h2 className='text-3xl font-sacramento'>
                        3D Tetromino
                    </h2>
                    <p className='text-md m-4'>
                        A 3D game remodeled after the origin game of Tetris. Made with C# using the 
                        Unity framework.
                    </p>
                
                    <div className='absolute bottom-2 left-2 h-10 md:h-10 rounded-md border-2 border-gray-200 text-white w-10'>
                        <Link href='/contact'>
                            <FontAwesomeIcon className='flex items-center justify-content' icon={faComputer} />
                        </Link>
                    </div>
                    <div className='absolute bottom-2 right-2 h-10 md:h-10 rounded-md border-2 border-gray-200 text-white w-10'>
                        <Link href='/contact'>
                            <FontAwesomeIcon className='text-white' icon={faCode} />
                        </Link>
                    </div>
                </div>
            
                <div className='h-56 md:h-96 relative items-center justify-center p-3 m-2 rounded-md bg-transparent border-4 border-gray-200 text-white md:w-[30%]'>
                    <h2 className='text-3xl font-sacramento'>
                        Music Player
                    </h2>
                    <p className='text-md m-4'>
                        A custom, modern music player developed in React.js.
                    </p>
                    <div className='absolute bottom-2 left-2 h-10 md:h-10 rounded-md border-2 border-gray-200 text-white w-10'>
                        <Link href='/contact'>
                            <FontAwesomeIcon className='flex items-center justify-content' icon={faComputer} />
                        </Link>
                    </div>
                    <div className='absolute bottom-2 right-2 h-10 md:h-10 rounded-md border-2 border-gray-200 text-white w-10'>
                        <Link href='/contact'>
                            <FontAwesomeIcon className='text-white' icon={faCode} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Portfolio;