import React from 'react';
import Link from 'next/link';

const Product = () =>{
    return(
        <section className="relative flex flex-col p-12 items-center justify-center bg-fixed bg-center bg-black z-[3]">
            <div className='flex flex-col md:flex-row'>
                <div className='z-[2] p-12 rounded-md bg-red-600 items-center justify-center text-white md:w-1/2'>
                    <h2 className='p-4 text-5xl font-sacramento'>
                        Music
                    </h2>
                    <p className='text-md md:text-lg m-4'>
                        I offer services with music for different venues type. This include Weddings, resturants,
                        and party venues.
                    </p>
                    <button className="bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white p-4 border-2 border-gray-400 hover:border-transparent rounded-lg">
                        <Link href='/music'>
                            Check It Out!
                        </Link>
                    </button>
                </div>
                <div className='z-[2] bg-gray-300 rounded-md p-4 items-center justify-center md:w-1/2'>
                    <img 
                        src={"./music.jpg"} 
                        alt="ProfilePic" 
                        className='flex justify-center items-center w-full rounded-md'
                    />
                </div>
            </div>

            <div className='flex flex-col md:flex-row'>
                <div className='z-[2] bg-gray-300 rounded-md p-4 items-center justify-center text-white md:w-1/2'>
                    <img 
                        src={"./webdev.jpg"} 
                        alt="ProfilePic" 
                        className='flex justify-center items-center w-full rounded-md'
                    />
                </div>
                <div className='z-[2] p-12 rounded-md bg-red-600 items-center justify-center text-white md:w-1/2'>
                    <h2 className='p-4 text-5xl font-sacramento'>
                        Web Dev
                    </h2>
                    <p className='text-md md:text-lg m-4'>I create websites for different things, from professionals needing a digital portfolio 
                    to small business needing a brouchure website of their product!
                    </p>
                    <button className="bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white p-4 border-2 border-gray-400 hover:border-transparent rounded-lg">
                        <Link href='/webdev'>
                            Check It Out!
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Product;