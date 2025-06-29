import React from 'react';

const Header = () =>{

    return(
        <div className='flex flex-col items-center justify-center h-screen bg-black z-[2] object-cover space-y-8'>
            <div className='center p-5 text-white z-[2]'>
                <h1 className='text-7xl font-sacramento'>
                    Music
                </h1>
            </div>
            <div className='center p-5 text-white z-[2]'>
                <h2 className='text-3xl'>
                    Need a saxophonist?
                </h2>
            </div>
        </div>
    )
}

export default Header;
