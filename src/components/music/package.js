import React from 'react';

const Package = () =>{

    return(
        <div className='flex flex-col items-center justify-center h-screen bg-black z-[2] object-cover bg-fixed bg-center bg-cover'>
        <div className='center p-5 text-white z-[2]'>
            <h1 className='text-7xl  font-sacramento after:bg-white after:rounded-lg'>
                Package for Music
            </h1>
            </div>

            <div className='p-6 flex flex-row items-center justify-center'>
                <div className='relative items-center justify-center p-3 m-2 rounded-md bg-transparent border-4 border-gray-200 text-white w-[30%]'>
                    <h2 className='text-3xl font-sacramento'>
                        Weddings and Ceremonies
                    </h2>
                    <p className='text-md m-4'>
                        I will come with a playlist of wedding approiate songs as default. If there are any special request before
                        the wedding, I can learn them and add them to my set.
                    </p>
                    <p className='text-md m-4'>
                        Price: $350/hr
                    </p>
                </div>
                <div className='relative items-center justify-center p-3 m-2 rounded-md bg-transparent border-4 border-gray-200 text-white w-[30%]'>
                    <h2 className='text-3xl font-sacramento'>
                        Public Events
                    </h2>
                    <p className='text-md m-4'>
                        I will have a set of songs for different venues, from restaurants to coffee shops
                    </p>
                    <p className='text-md m-4'>
                        Price: $175/hr
                    </p>
                </div>
                <div className='relative items-center justify-center p-3 m-2 rounded-md bg-transparent border-4 border-gray-200 text-white w-[30%]'>
                    <h2 className='text-3xl font-sacramento'>
                        Private, Customized, Or Big Events
                    </h2>
                    <p className='text-md m-4'>
                        The 
                    </p>
                    <p className='text-md m-4'>
                        Price: Varies
                    </p>
                </div>    
        </div>
    </div>
    )
}

export default Package;