import React from 'react';

const Portfolio = () =>{

    return(
        <div className='p-8 flex items-center justify-center h-auto bg-black z-[2] object-cover bg-fixed bg-center bg-cover'>
        <div className='center mt-32 p-5 border-2 text-white z-[2]'>
            <h1 className='flex text-7xl m-12 items-center justify-center font-sacramento after:bg-white after:rounded-lg'>
                Music Demo
            </h1>
            <div className='flex flex-col md:flex-row p-4'>
                <iframe className='m-10 md:m-2 w-[80%] md:w-[50%]'
                    src="https://www.youtube.com/embed/ukYNf113pMg?start=140" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share" 
                    allowFullScreen />

                <iframe className='m-10 md:m-2 w-[80%] md:w-[50%]'
                    src="https://www.youtube.com/embed/VXkUa66s_WA" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share" 
                    allowFullScreen />
            </div>
        </div>
    </div>
    )
}

export default Portfolio;