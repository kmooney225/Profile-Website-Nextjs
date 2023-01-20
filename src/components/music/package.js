import React from 'react';
import Link from 'next/link';

const Package = () =>{

    return(
        <div className='flex flex-col items-center justify-center h-auto bg-black z-[2] object-cover'>
            <div className='center p-5 text-white z-[2]'>
                <h1 className='text-7xl font-sacramento'>
                    Package for Music
                </h1>
            </div>

        <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='h-56 md:h-96 relative items-center justify-center p-3 m-2 rounded-md bg-transparent border-4 border-gray-200 text-white md:w-[30%]'>
                <h2 className='text-3xl font-sacramento'>
                    Weddings and Ceremonies
                </h2>
                <p className='text-md m-4'>
                    I will come with a playlist of wedding approiate songs as default. If there are any special request before
                    the wedding, I can learn them and add them to my set.
                </p>
                <p className='absolute bottom-0 text-md'>
                    Price: $350/hr
                </p>
            </div>
            <div className='h-56 md:h-96 relative items-center justify-center p-3 m-2 rounded-md bg-transparent border-4 border-gray-200 text-white md:w-[30%]'>
                <h2 className='text-3xl font-sacramento'>
                    Public Events
                </h2>
                <p className='text-md m-4'>
                    I will have a set of songs for different venues, from restaurants to coffee shops
                </p>
                <p className='absolute bottom-0 text-md'>
                    Price: $175/hr
                </p>
            </div>
            <div className='h-56 md:h-96 relative items-center justify-center p-3 m-2 rounded-md bg-transparent border-4 border-gray-200 text-white md:w-[30%]'>
                <h2 className='text-3xl font-sacramento'>
                    Private, Customized, Or Big Events
                </h2>
                <p className='text-md m-4'>
                    Since bigger venues call for a different set up and arrangement of my time, I will customize
                    what I do for the occasion.
                </p>
                <p className='absolute bottom-0 text-md'>
                    Price: Varies
                </p>
            </div> 
        </div>

        <h3 className='p-16 text-3xl text-white'>
            Interested? Contact me!
        </h3>
        
        <button className="bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white p-4 border-2 border-gray-400 hover:border-transparent rounded-lg">
                <Link href='/contact'>
                    Contact
                </Link>
        </button>  
    </div>
    )
}

export default Package;