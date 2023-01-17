import React from 'react';

const Header = () =>{

    return(
        <div className='flex items-center justify-center h-screen bg-black z-[2] object-cover'>
            <div className='center p-5 text-white z-[2]'>
                <h1 className='text-7xl  font-sacramento after:bg-white after:rounded-lg'>
                    Music
                </h1>
            </div>
        </div>
    )
}

export default Header;