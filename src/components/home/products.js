import React from 'react';

const Product = () =>{
    return(
        <section className="relative flex flex-col object-cover items-center justify-center h-screen bg-fixed bg-center bg-black z-[3]">
            <div className='flex flex-row'>
                <div className='z-[2] w-1/2 h-full p-8 bg-red-600 items-center justify-center text-white'>
                    <h2 className='text-5xl font-bold'>Music</h2>
                    <p className='text-xl p-2'>I offer services with music for different venues type. This include Weddings, resturants,
                        and party venues</p>
                </div>
                <div className='z-[2] w-1/2 h-1/2 p-8 items-center justify-center'>
                    <h2 className='text-5xl font-bold text-white'>Music pic</h2>
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='z-[2] w-1/2 h-full p-8 items-center justify-center text-white'>
                    <h2 className='text-5xl font-bold'>Web Dev pic</h2>
                </div>
                <div className='z-[2] w-1/2 h-full p-8 bg-red-600 items-center justify-center text-white'>
                    <h2 className='text-5xl font-bold'>Web Dev</h2>
                    <p className='text-xl'>I offer services with music for different venues type. This include Weddings, resturants,
                        and party venues</p>
                </div>
            </div>
        </section>
    )
}

export default Product;