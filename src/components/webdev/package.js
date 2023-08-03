import React from 'react';
import Link from 'next/link';

const Package = () => {
  return(
    <div className='w-full h-full p-4 sm:p-8 flex flex-col items-center justify-center bg-black text-white py-16'>
      <div className='flex flex-col items-center justify-center rounded-lg p-6 sm:p-10 w-full h-full shadow-2xl'
           style={{background: 'linear-gradient(to right, rgba(220, 38, 38, 0.6), rgba(236, 64, 122, 0.6))',}}>
        <h1 className='text-3xl sm:text-5xl mb-6 sm:mb-10 font-sacramento'
            style={{color: 'rgba(255, 255, 255, 0.9)'}}>
          Package for Website Production
        </h1>
        <div className='flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8'>
          <div className='h-56 md:h-96 relative items-center justify-center p-3 m-2 rounded-md bg-black border-2 border-white text-white md:w-[30%]'>
            <h2 className='mt-5 text-lg sm:text-xl text-center'>
              1 Page
            </h2>
            <p className='text-md m-4'>
              Being an colorful landing page or a brochure site for your services, an attractive 
              1 page website can be made, catching the eye of users right after seeing the page for the first time.
            </p>
            <p className='absolute bottom-0 text-md'>
              Price: Contact Me
            </p>
          </div>

          <div className='h-56 md:h-96 relative items-center justify-center p-3 m-2 rounded-md bg-black border-2 border-white text-white md:w-[30%]'>
            <h2 className='mt-5 text-lg sm:text-xl text-center'>
              3 Pages
            </h2>
            <p className='text-md m-4'>
              With the desire of displaying what you have to offer, you may want a page dedidcated to explaning your services, for your bio,
              and for people to contact you.
            </p>
            <p className='absolute bottom-0 text-md'>
              Price: Contact Me
            </p>
          </div>

          <div className='h-56 md:h-96 relative items-center justify-center p-3 m-2 rounded-md bg-black border-2 border-white text-white md:w-[30%]'>
            <h2 className='mt-5 text-lg sm:text-xl text-center'>
              Multi-Page 
            </h2>
            <p className='text-md m-4'>
              You may need a number of pages for the website that you need created as you may have
              many talents and/or services to grab your audiences attention.
            </p>
            <p className='absolute bottom-0 text-md'>
              Price: Varies
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
