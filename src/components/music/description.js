import React from 'react';

const Description = () =>{

    return(
    <div className='h-auto items-center justify-center bg-black z-[2] object-cover'>
        <div className='p-12 flex flex-col'>
            <div className='p-4 rounded-md bg-red-600 text-white w-[30%]'>
                    <h2 className='text-6xl font-sacramento'>
                        Cherish
                    </h2>
                    <p className='text-md m-4'>
                        The big moments that life have to give with the song of your dreams.
                    </p>
            </div>

            <div className='p-2 self-center rounded-md bg-red-600 text-white w-[30%]'>
            <div className='z-[2] bg-gray-300 rounded-md p-4 items-center justify-center md:w-full'>
                    <img 
                        src={"./music1.jpg"} 
                        alt="Music1" 
                        className='flex justify-center items-center w-full rounded-md'
                    />
                </div>
            </div>

            <div className='self-end p-2 rounded-md bg-red-600 text-white md:w-[30%]'>
                    <h2 className='text-6xl font-sacramento'>
                        Build
                    </h2>
                    <p className='text-md m-4'>
                        Upon perfect party with your favorite music selections. From Pop to Jazz,
                        add any variation to curtail the perfect night.
                    </p>
            </div>

            <div className='self-center p-2 rounded-md bg-red-600 text-white w-[30%]'>
            <div className='z-[2] bg-gray-300 rounded-md p-4 items-center justify-center md:w-full'>
                    <img 
                        src={"./music2.jpg"} 
                        alt="ProfilePic" 
                        className='flex justify-center items-center w-full rounded-md'
                    />
                </div>
            </div>

            <div className='p-2 rounded-md bg-red-600 text-white md:w-[30%]'>
                    <h2 className='text-6xl font-sacramento'>
                        Imagine
                    </h2>
                    <p className='text-md m-4'>
                        With the perfect background music, any precious moment will be sweeter, whether it is a small party to celebrate
                        with your friends, or the best wedding anyone has ever planned.
                    </p>
            </div>
        </div>
    </div>
    )
}

export default Description;