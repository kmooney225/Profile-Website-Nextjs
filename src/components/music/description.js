import React from 'react';

const Description = () =>{

    return(
    <div className='h-screen bg-black z-[2] object-cover bg-fixed bg-center bg-cover'>
        <div className='text-white z-[2]'>
            <h1 className='flex items-center justify-center text-7xl font-sacramento'>
                Decription for Music
            </h1>
        </div>

        <div className='p-6 flex flex-col'>
            <div className='p-4 rounded-md bg-red-600 text-white w-[30%]'>
                    <h2 className='text-6xl font-sacramento'>
                        Enjoy
                    </h2>
                    <p className='text-md m-4'>
                        The 
                    </p>
            </div>

            <div className='p-2 self-center rounded-md bg-red-600 text-white w-[30%]'>
                    <h2 className='text-6xl font-sacramento'>
                        Image 1
                    </h2>
                    <p className='text-md m-4'>
                        The 
                    </p>
            </div>

            <div className='self-end p-2 rounded-md bg-red-600 text-white md:w-[30%]'>
                    <h2 className='text-6xl font-sacramento'>
                        Create
                    </h2>
                    <p className='text-md m-4'>
                        The perfect party that anyone can enjoy 
                    </p>
            </div>

            <div className='self-center p-2 rounded-md bg-red-600 text-white w-[30%]'>
                    <h2 className='text-6xl font-sacramento'>
                        Image 2
                    </h2>
                    <p className='text-md m-4'>
                        The 
                    </p>
            </div>

            <div className='p-2 rounded-md bg-red-600 text-white md:w-[30%]'>
                    <h2 className='text-6xl font-sacramento'>
                        Create
                    </h2>
                    <p className='text-md m-4'>
                        The perfect party that anyone can enjoy 
                    </p>
            </div>
        </div>
    </div>
    )
}

export default Description;