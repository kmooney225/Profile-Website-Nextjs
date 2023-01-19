import React from 'react';

const Description = () =>{

    return(
        <div className='h-auto items-center justify-center bg-black bg-fixed z-[2] object-cover'>
            <div className='p-12 flex flex-col'>
                <div className='self-end p-4 rounded-md bg-red-600 text-white w-full md:w-[30%]'>
                    <h2 className='text-6xl font-sacramento'>
                        Represent
                    </h2>
                    <p className='text-md m-4'>
                        Whether it is your chances of landing your dream job, or getting more customers,
                        The website that represents your business should give you the best chance to put your 
                        foot forward.
                    </p>
            </div>

            <div className='p-2 self-center rounded-md bg-red-600 text-white md:w-[50%]'>
                <div className='z-[2] bg-gray-300 rounded-md p-4 items-center justify-center w-full'>
                    <img 
                        src={"./music1.jpg"} 
                        alt="Music1" 
                        className='flex justify-center items-center w-full rounded-md'
                    />
                    <h1>market explanation</h1>
                </div>
            </div>

            <div className='p-2 h-auto rounded-md bg-red-600 text-white md:w-[30%]'>
                    <h2 className='text-6xl font-sacramento'>
                        Demonstrate
                    </h2>
                    <p className='text-md m-4'>
                        Your services 
                    </p>
            </div>

            <div className='self-center p-2 rounded-md bg-red-600 text-white md:w-[40%]'>
            <div className='z-[2] bg-gray-300 rounded-md p-4 items-center justify-center md:w-full'>
                    <img 
                        src={"./music2.jpg"} 
                        alt="ProfilePic" 
                        className='flex justify-center items-center w-full rounded-md'
                    />
                    <h1>hand shake</h1>
                </div>
            </div>

            <div className='self-end p-2 rounded-md bg-red-600 text-white md:w-[30%]'>
            <h2 className='text-6xl font-sacramento'>
                        Garentee
                    </h2>
                    <p className='text-md m-4'>
                        Whether it is landing your dream job, or finalizing deals with more customers,
                        The website that represents your business should give you the best chance to put your 
                        foot forward.
                    </p>
            </div>
        </div>
    </div>
    )
}

export default Description;