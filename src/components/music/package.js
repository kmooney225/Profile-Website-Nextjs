import React from 'react';
import Link from 'next/link';

const Package = () => {
  return(
    <div className='flex flex-col items-center justify-center h-auto bg-black z-[2] object-cover space-y-8 py-16'>
            <div className='center p-5 text-white z-[2]'>
                <h1 className='text-7xl font-sacramento'>
                    Package for Music
                </h1>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8'>
                <div className='h-56 md:h-96 relative items-center justify-center p-3 m-2 rounded-md bg-gray-900 border-4 border-red-700 text-white md:w-[30%]'>
                    <h2 className='text-3xl font-sacramento'>
                        Weddings and Ceremonies
                    </h2>
          <p className='text-md m-4'>
            I will bring a default playlist of wedding appropriate songs. If you have any special requests, I can learn and add them to my set.
          </p>
          <p className='absolute bottom-0 text-md'>
            Price: Starts from $500
          </p>
        </div>

        <div className='h-56 md:h-96 relative items-center justify-center p-3 m-2 rounded-md bg-gray-900 border-4 border-red-700 text-white md:w-[30%]'>
          <h2 className='text-3xl font-sacramento'>
            Public Events
          </h2>
          <p className='text-md m-4'>
            I have a set of songs suitable for different venues, from cozy coffee shops to bustling restaurants.
          </p>
          <p className='absolute bottom-0 text-md'>
            Price: Starts from $250/hr
          </p>
        </div>

        <div className='h-56 md:h-96 relative items-center justify-center p-3 m-2 rounded-md bg-gray-900 border-4 border-red-700 text-white md:w-[30%]'>
          <h2 className='text-3xl font-sacramento'>
            Private, Customized, or Large Events
          </h2>
          <p className='text-md m-4'>
            For larger venues, I offer customized setups and arrangements according to the requirements of the events.
          </p>
          <p className='absolute bottom-0 text-md'>
            Price: Varies based on requirements
          </p>
        </div>
      </div>
    </div>
  )
}

export default Package;
