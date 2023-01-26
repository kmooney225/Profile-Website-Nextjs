import React, { useState, useEffect } from 'react';

const Bio = () =>{

    const [opacity, setOpacity] = useState(0.65)
    const [blur, setBlur] = useState('blur(0px)')
    useEffect(()=>{
        const changeBlur = () => {
            if(window.scrollY >= 1600){
                setBlur('blur(' + 0 + 'px)')
                setOpacity(1)
            } else {
                setBlur('blur(' + window.scrollY/20 + 'px)')
                setOpacity( 0.60 + window.scrollY/3000)
            }
        }
        window.addEventListener('scroll', changeBlur);
    }, []);

    return(
        <div className='relative flex flex-col object-cover items-center justify-center h-screen bg-fixed bg-center bg-transparent z-[2]'>
            <div 
                style={{
                    opacity: opacity,
                }}
                className='absolute top-0 left-0 right-0 bottom-0 bg-black z-[2]'>
            </div>
            <div 
                style={{
                    backdropFilter: `${blur}`,
                }}
                className='absolute flex flex-col justify-center top-0 left-0 right-0 bottom-0 bg-transparent z-[1]'>
            </div>
            <div className='z-[2] w-2/3 h-full p-8 rounded-md bg-red-600 text-white'>
                    <h2 className='flex text-5xl font-sacramento font-bold justify-center'>My Bio</h2>
                    <div className='flex justify-center p-8'>
                        <img 
                        src={"./KevinFuji.jpg"} 
                        alt="ProfilePic" 
                        className='flex justify-center items-center w-full md:w-1/2 rounded-lg'/>
                    </div>
                    <p className='flex justify-center text-lg'>I am a guy with a sense for art. After 15 years of playing music as an multi-instrumentalist for
                    different occasions and a strong career in tech, I have a dream to create beautiful services, tech and music alike. Welcome to 
                    my website, and if you need to contact me, remember to go to contact page to send a message or book a time to talk!
                    </p>
                </div>
        </div>
    )
}

export default Bio;