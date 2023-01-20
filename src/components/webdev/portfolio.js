import React from 'react';

const Portfolio = () =>{

    return(
        <div className='flex items-center justify-center h-auto bg-black z-[2] object-cover bg-fixed bg-center bg-cover'>
        <div className='center p-5 text-white z-[2]'>
            <h1 className='text-7xl font-sacramento after:bg-white after:rounded-lg'>
                Case Studies
            </h1>
            <p className='p-4 text-3xl'>tba</p>

            <h1 className='p-6 text-7xl font-sacramento'>
                Extraneous Projects
            </h1>

            <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='h-56 md:h-96 relative items-center justify-center p-3 m-2 rounded-md bg-transparent border-4 border-gray-200 text-white md:w-[30%]'>
                <h2 className='text-3xl font-sacramento'>
                    3D Tetromino
                </h2>
                <p className='text-md m-4'>
                    A 3D game remodeled after the origin game of Tetris. Made with C# using the 
                    Unity framework.
                </p>
            </div>
            
            <div className='h-56 md:h-96 relative items-center justify-center p-3 m-2 rounded-md bg-transparent border-4 border-gray-200 text-white md:w-[30%]'>
                <h2 className='text-3xl font-sacramento'>
                    Music Player
                </h2>
                <p className='text-md m-4'>
                    A custom, modern music player developed in React.js.
                </p>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Portfolio;