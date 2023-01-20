import React from 'react';
import Link from 'next/link';

const Package = () =>{

    return(
        <div className='flex flex-col items-center justify-center h-auto bg-black z-[2] object-cover'>
            <div className='center p-5 text-white z-[2]'>
                <h1 className='text-7xl  font-sacramento after:bg-white after:rounded-lg'>
                    Package for Website Production
                </h1>
            </div>

        <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='h-56 md:h-96 relative items-center justify-center p-3 m-2 rounded-md bg-transparent border-4 border-gray-200 text-white md:w-[30%]'>
                <h2 className='text-3xl font-sacramento'>
                    1 Page
                </h2>
                <p className='text-md m-4'>
                    Being an colorful landing page or a brohsure site for your services, I can 
                    make your website attractive right when an user click on the link.
                </p>
                <p className='absolute bottom-0 text-md'>
                    Price: Contact Me
                </p>
            </div>
            <div className='h-56 md:h-96 relative items-center justify-center p-3 m-2 rounded-md bg-transparent border-4 border-gray-200 text-white md:w-[30%]'>
                <h2 className='text-3xl font-sacramento'>
                    3 Pages
                </h2>
                <p className='text-md m-4'>
                    With the need of displaying your services, you may want a page dedidcated to explaning your services, for your bio,
                    and for people to contact you.
                </p>
                <p className='absolute bottom-0 text-md'>
                    Price: Contact Me
                </p>
            </div>
            <div className='h-56 md:h-96 relative items-center justify-center p-3 m-2 rounded-md bg-transparent border-4 border-gray-200 text-white md:w-[30%]'>
                <h2 className='text-3xl font-sacramento'>
                    Multi-Page 
                </h2>
                <p className='text-md m-4'>
                    You may need a number of pages for the website that you need created as you may have
                    many talents and/or services to grab your audiences' attention.
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