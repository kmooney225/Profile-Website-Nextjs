import React from 'react';

const Header = () =>{

    return(
        <div 
        className='flex items-center justify-center h-screen object-cover bg-fixed bg-center bg-cover'>
            <div 
            className='absolute top-0 left-0 right-0 bottom-0 bg-black z-[2]'></div>
            <div className='center p-5 text-white z-[2]'>
                <h1 className='text-7xl font-sacramento after:bg-white after:rounded-lg'>
                    Web Development
                </h1>
            </div>
        </div>
    )
}

export default Header;