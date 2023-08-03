import React from 'react';
import Link from 'next/link';

const Package = () => {
  return(
    <div className='w-full h-full p-4 sm:p-8 flex flex-col items-center justify-center bg-black text-white py-16'>
      <div className='flex flex-col items-center justify-center rounded-lg p-6 sm:p-10 w-full h-full shadow-2xl'
           style={{background: 'linear-gradient(to right, rgba(220, 38, 38, 0.6), rgba(236, 64, 122, 0.6))',}}>
        <h1 className='text-3xl sm:text-5xl mb-6 sm:mb-10 font-sacramento'
            style={{color: 'rgba(255, 255, 255, 0.9)'}}>
          Package for Music
        </h1>
        <div className='flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8'>
          <div className='h-56 md:h-96 relative items-center justify-center p-3 m-2 rounded-md bg-black border-2 border-white text-white md:w-[30%]'>
            <h2 className='mt-5 text-lg sm:text-xl text-center'>
              Weddings and Ceremonies
            </h2>
            <p className='text-md m-4'>
              I will bring a default playlist of wedding appropriate songs. If you have any special requests, I can learn and add them to my set.
            </p>
            <p className='absolute bottom-0 text-md'>
              Price: Starts from $500
            </p>
          </div>

          <div className='h-56 md:h-96 relative items-center justify-center p-3 m-2 rounded-md bg-black border-2 border-white text-white md:w-[30%]'>
            <h2 className='mt-5 text-lg sm:text-xl text-center'>
              Public Events
            </h2>
            <p className='text-md m-4'>
              I have a set of songs suitable for different venues, from cozy coffee shops to bustling restaurants.
            </p>
            <p className='absolute bottom-0 text-md'>
              Price: Starts from $250/hr
            </p>
          </div>

          <div className='h-56 md:h-96 relative items-center justify-center p-3 m-2 rounded-md bg-black border-2 border-white text-white md:w-[30%]'>
            <h2 className='mt-5 text-lg sm:text-xl text-center'>
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

        <div className='flex flex-col items-center justify-center mt-8'>
          <h3 className='text-3xl text-white mb-4'>
            Interested? Contact me!
          </h3>

          <button className="text-white font-bold py-2 px-4 rounded"
                  style={{background: 'linear-gradient(to right, rgba(220, 38, 38, 1), rgba(180, 38, 38, 1))'}}>
            <Link href='/contact'>
              Contact
            </Link>
          </button>
        </div>  
      </div>
    </div>
  )
}

export default Package;
